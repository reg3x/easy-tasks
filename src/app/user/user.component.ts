import { Component, EventEmitter, Input, Output } from '@angular/core'
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User
  @Output() select = new EventEmitter<string>()

  onSelectUser() {
    this.select.emit(this.user.id)
  }

  get ImagePath() {
    return 'assets/users/' + this.user.avatar
  }

}
