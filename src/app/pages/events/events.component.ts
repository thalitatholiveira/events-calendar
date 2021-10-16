import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  toggle = false;

  eventList = [];

  newEvent = {
    title: undefined,
    description: undefined,
    date: undefined,
    start: undefined,
    end: undefined,
  }

  constructor() {}

  ngOnInit() {
  }

  openPopUp() {
    this.toggle = true;
  }

  closePopUp() {
    this.toggle = false;
  }

  submitNewEvent(event) {
    const eventCopy = {...event}
    this.eventList.push(eventCopy);
    this.toggle = false;
  }
}
