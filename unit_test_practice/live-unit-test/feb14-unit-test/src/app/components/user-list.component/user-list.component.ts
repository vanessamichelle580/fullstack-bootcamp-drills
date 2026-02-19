import {
  Component,
  ChangeDetectionStrategy,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDbService } from '../../services/user-db.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>User List</h2>

      <ul>
        @for (user of users(); track user.id) {
          <li>
            {{ user.name }}
            <button (click)="remove(user.id)">
              Remove
            </button>
          </li>
        }
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class UserListComponent {

  private readonly userDb = inject(UserDbService);

  readonly users = this.userDb.users;

  remove(id: string): void {
    this.userDb.deleteUser(id);
  }
}
