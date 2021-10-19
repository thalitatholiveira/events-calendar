import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    newEventConfirmation: false,
    updateEventConfirmation: false,
    deleteConfirmation: false,
    deleteConfirmationMessage: false,
    logoutConfirmation: false,
    errorMessage: false,
  }

  eventList = [];

  newEvent = {
    title: '',
    description: '',
    date: '',
    start: '',
    end: '',
  }

  itemToUpdate = {
    item: undefined,
    index: undefined,
  }

  itemToDelete = {
    index: undefined,
  }

  constructor(private router: Router) {}

  ngOnInit() {
  }

  openCreatePopUp() {
    this.toggle.createPopUp = true;
  }

  closePopUp() {
    this.toggle.createPopUp = false;
    this.toggle.updatePopUp = false;
    this.toggle.newEventConfirmation = false;
    this.toggle.updateEventConfirmation = false;
    this.toggle.deleteConfirmation = false;
    this.toggle.deleteConfirmationMessage = false;
    this.toggle.logoutConfirmation = false;
  }

  formReset() {
    this.newEvent.title = '';
    this.newEvent.description = '';
    this.newEvent.date = '';
    this.newEvent.start = '';
    this.newEvent.end = '';
  }

  checkError() {
    if (
      this.newEvent.title.length > 0 && 
      this.newEvent.date.length > 0 &&
      this.newEvent.start.length > 0 &&
      this.newEvent.end.length > 0
      ) {
      return false;
    } else {
      return true;
    }
  }

  createNewEvent(event) {
    if (this.checkError()) {
      this.toggle.errorMessage = true;
    } else {
      const eventCopy = {...event}
      this.eventList.push(eventCopy);
  
      this.closePopUp();
      this.formReset();
      this.toggle.noEvents = false;
      this.toggle.newEventConfirmation = true;
    }
  }

  openUpdatePopUp(item, i) {
    this.toggle.updatePopUp = true;
    this.itemToUpdate.item = item;
    this.itemToUpdate.index = i;
  }

  updateEvent() {
    this.eventList[this.itemToUpdate.index] = this.itemToUpdate.item;

    this.closePopUp();

    this.toggle.updateEventConfirmation = true;
  }

  deleteConfirmation(index) {
    this.itemToDelete.index = index;
    this.toggle.deleteConfirmation = true;
  }

  deleteEvent(index) {
    this.eventList.splice(index, 1);
    
    this.closePopUp()
    this.toggle.deleteConfirmationMessage = true;

    if (this.eventList.length == 0) {
      this.toggle.noEvents = true;
    }
  }

  confirmLogout() {
    this.toggle.logoutConfirmation = true;
  }

  logout() {
    this.router.navigate(['/home/'])
  }
}