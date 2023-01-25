import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isVisible = false;

  constructor(private notif : NzNotificationService) { }

  ngOnInit() {
  }

  notify()
  {
    this.notif.info('Save','Your name saved succesfully')
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  disabledDate = (current: Date): boolean =>{
    // console.log(current + " " + moment().diff(current,'days'));
    return (moment().diff(current,'days')>0) || (moment(current).day() == 6)
    || (moment(current).day() == 0);
  }


}
