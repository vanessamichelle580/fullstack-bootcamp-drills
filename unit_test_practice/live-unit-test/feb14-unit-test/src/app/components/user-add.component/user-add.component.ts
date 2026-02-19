import {
  Component,
  ChangeDetectionStrategy,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDbService } from '../../services/user-db.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <input
        [(ngModel)]="name"
        placeholder="Enter name"
      />

      <button (click)="addUser()">
        Add User
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAddComponent {

  private readonly userDb = inject(UserDbService);

  name = '';

  addUser(): void {
    const result = this.userDb.createUser(this.name);

    if (result !== 'Error') {
      this.name = '';
    }
  }
}

