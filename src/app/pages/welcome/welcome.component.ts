import { PostService } from './../../API/post.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Post } from 'src/app/Model/Post';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isVisible = false;
  selectedDate !: Date;
  selectedValue !: number;
  posts !: Post[];

  constructor(private notif : NzNotificationService,private api : PostService) { }

  ngOnInit() {
    this.api.getPost().subscribe((data)=>{
        this.posts = data;
    });
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
    // console.log(current.toLocaleDateString() + ' ' + new Date().toLocaleDateString())
    return (moment().diff(current,'days')>0) || (moment(current).day() == 6)
    || (moment(current).day() == 0); 
  }

}
