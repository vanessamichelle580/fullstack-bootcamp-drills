import { Injectable, signal } from '@angular/core';

export interface User {
  id: string;
  name: string;
}

function createUser(name: string): User {
  return {
    id: crypto.randomUUID(),
    name: name.trim()
  };
}

function isValidName(name: string): boolean {
  return !!name.trim();
}

@Injectable({
  providedIn: 'root'
})
export class UserDbService {

  private readonly _users = signal<User[]>([]);

  readonly users = this._users.asReadonly();

  /* -----------------------------
     CRUD METHODS
  ------------------------------ */

  getUsers(): User[] {
    return this._users();
  }

  createUser(name: string): User | 'Error' {

    if (!isValidName(name)) return 'Error';

    const newUser = createUser(name);

    this._users.update(current => [
      ...current,
      newUser
    ]);

    return newUser;
  }

  deleteUser(id: string): void {
    this._users.update(current =>
      current.filter(u => u.id !== id)
    );
  }

  updateUser(id: string, newName: string): User[] | 'Error' {

    if (!isValidName(newName)) return 'Error';

    const exists = this._users().some(u => u.id === id);
    if (!exists) return 'Error';

    this._users.update(current =>
      current.map(u =>
        u.id === id
          ? { ...u, name: newName.trim() }
          : u
      )
    );

    return this._users();
  }
}

