import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {IDragndrop} from '../Models/forecasts';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {

  done: IDragndrop[] = [{name: 'wake up', index: 0, id: 1}, {name: 'eat breakfast', index: 1, id: 2}, {name: 'brush teeth', index: 2, id: 3}];
  inprogress: IDragndrop[] = [{name: 'work', index: 0, id: 4}, {name: 'have lunch', index: 1, id: 5}, {name: 'afternoon snack', index: 2, id: 6}];
  todo: IDragndrop[] = [{name: 'eat dinner', index: 0, id: 7}, {name: 'finish drag and drop', index: 1, id: 8}, {name: 'go to bed', index: 2, id: 9}];

  constructor() { }

  ngOnInit(): void {
  }

  onDrop(event: CdkDragDrop<IDragndrop[]>) {
    const id = event.previousContainer.data.find(x => x.index === event.previousIndex).id;
    if (event.previousContainer === event.container) {
      for (const tmp of event.container.data) {
        if (tmp.index > event.previousIndex && tmp.index <= event.currentIndex) {
          tmp.index = tmp.index - 1;
        }
        if (tmp.index >= event.currentIndex && tmp.index < event.previousIndex) {
          tmp.index = tmp.index + 1;
        }
      }
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      event.container.data.find(x => x.id === id).index = event.currentIndex;
      console.log('Jag bytte index från ' + event.previousIndex + ' till ' + event.currentIndex + ' i listan ' + event.previousContainer.id);
    } else {
      for (const tmp of event.container.data) {
        if (tmp.index >= event.currentIndex) {
          tmp.index = tmp.index + 1;
        }
      }
      for (const tmp of event.previousContainer.data) {
        if (tmp.index > event.previousIndex) {
          tmp.index = tmp.index - 1;
        }
      }
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      event.container.data.find(x => x.id === id).index = event.currentIndex;
      console.log('Jag flyttades från kortet ' + event.previousContainer.id + ' till ' + event.container.id + ' och fick indexet ' + event.currentIndex);
    }
  }

}
