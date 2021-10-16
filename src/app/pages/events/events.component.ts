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

  formReset() {
    this.newEvent.title = undefined;
    this.newEvent.description = undefined;
    this.newEvent.date = undefined;
    this.newEvent.start = undefined;
    this.newEvent.end = undefined;
  }

  submitNewEvent(event) {
    const eventCopy = {...event}
    this.eventList.push(eventCopy);
    this.toggle = false;

    this.formReset();
  }
}
