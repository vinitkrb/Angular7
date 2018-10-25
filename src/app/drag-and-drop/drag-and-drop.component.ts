import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
  import { Todo } from '../todo';
@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public todo: Todo[] = [
    { title: 'Get to work', dateAdded: new Date().toString() },
    { title: 'Pick up groceries', dateAdded: new Date().toString() },
    { title: 'Go home', dateAdded: new Date().toString() },
    { title: 'Fall asleep', dateAdded: new Date().toString() },
    { title: 'Check facebook and whatsapp', dateAdded: new Date().toString() }
  ];

  public done: Todo[] = [
    { title: 'Get up', dateAdded: new Date().toString() },
    { title: 'Brush teeth', dateAdded: new Date().toString() },
    { title: 'Take a shower', dateAdded: new Date().toString() },
    { title: 'Check e-mail', dateAdded: new Date().toString() },
    { title: 'Walk dog', dateAdded: new Date().toString() }
  ];

  public cancelled: Todo[] = [
    { title: 'Eat choclates', dateAdded: new Date().toString() },
  ];

  drop(event: CdkDragDrop<Todo[]>) {
    console.log(event);

    // first check if it was moved within the same list or moved to a different list
    if (event.previousContainer === event.container) {
      // change the items index if it was moved within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // remove item from the previous list and add it to the new array
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addItem(list: string, todo: string) {
    if (list === 'todo') {
      this.todo.push({ title: todo, dateAdded: new Date().toString() });
    } else {
      this.done.push({ title: todo, dateAdded: new Date().toString() });
    }
  }
}
