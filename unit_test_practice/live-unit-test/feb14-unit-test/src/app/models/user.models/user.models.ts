import { Component } from '@angular/core';

export interface User {
  id: string;
  name: string;
}


@Component({
  selector: 'app-user.models',
  imports: [],
  templateUrl: './user.models.html',
  styleUrl: './user.models.css',
})
export class UserModels {

}
