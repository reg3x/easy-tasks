import { Component, Input } from '@angular/core';
import { User } from '../../user/user.model';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() user!: User;
  @Input() task!: Task;

}
