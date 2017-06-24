import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SecondPage} from "../second/second";
import {DatafetchProvider} from "../../providers/datafetch/datafetch";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;
  addcomment: string;
  student_name: string;
  batch: string;
  year: string;
  comment: any = ["abc", "adf", "bawa"];
  students: any;

  constructor(public navCtrl: NavController, public datafetch: DatafetchProvider) {
    this.getdata();
  }

  gotosecondpage() {
    this.navCtrl.setRoot(SecondPage);
  }

  login() {
    if (this.username == "ali" && this.password == "12345678") {
      this.navCtrl.push(SecondPage, {"user": this.username});
    }
  }

  addcomments() {
    this.comment.push(this.addcomment);
    this.addcomment = "";
  }

  addstudent() {
    this.students.push({"name": this.student_name, "batch": this.batch, "year": this.year});


    this.student_name = "";
    this.year = "";
    this.batch = "";
  }

  getdata() {
    this.datafetch.load().then((data)=>{
      console.log(data);
    })
  }
}
