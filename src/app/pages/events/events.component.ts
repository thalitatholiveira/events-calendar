import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  toggle = {
    noEvents: true,
    createPopUp: false,
    updatePopUp: false,
  }

  eventList = [];

  newEvent = {
    title: undefined,
    description: undefined,
    date: undefined,
    start: undefined,
    end: undefined,
  }

  itemToUpdate = {
    item: undefined,
    index: undefined,
  }

  itemToDelete = {
    index: undefined,
  }

  constructor() {}

  ngOnInit() {
  }

  openCreatePopUp() {
    this.toggle.createPopUp = true;
  }

  closePopUp() {
    this.toggle.createPopUp = false;
    this.toggle.updatePopUp = false;
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

    this.toggle.noEvents = false;
    this.closePopUp();
    this.formReset();
  }

  openUpdatePopUp(item, i) {
    this.toggle.updatePopUp = true;
    this.itemToUpdate.item = item;
    this.itemToUpdate.index = i;
  }

  updateEvent() {
    this.eventList[this.itemToUpdate.index] = this.itemToUpdate.item;

    alert('Updated!')

    this.closePopUp();
  }

  confirmDelete(index) {
    this.itemToDelete.index = index;
    this.deleteEvent(this.itemToDelete.index);
  }

  deleteEvent(index) {
    this.eventList.splice(index, 1);

    if (this.eventList.length == 0) {
      this.toggle.noEvents = true;
    }
  }
}