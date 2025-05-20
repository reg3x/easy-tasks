import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from '../user/user.model';


const dummyTasks = [
  {
    id: 't0',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2024-12-31',
  },
  {
    id: 't1',
    userId: 'u2',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2023-05-31',
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2023-06-15',
  },
]

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: User;

  getSelectedUserTasks(userId: string) {
    return dummyTasks.filter((task) => task.userId === userId);
  }

  onAddTask() {
    console.log('Task added');
  }

}