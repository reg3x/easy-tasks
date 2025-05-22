import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() complete: EventEmitter<string> = new EventEmitter();

  onComplete(task: string) {
    this.complete.emit(this.task.id)
  }

}
