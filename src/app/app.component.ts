import {Component, OnInit} from '@angular/core';
import {  interval } from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'timerAngular';
 isStart:boolean = false;
  min:any = '0' + 0;
  sec:any = '0' + 0;
  subscribe$:any;
  ngOnInit() {}

  startTimer(time=1000){
    return interval(time);
  }
  start(){
    if(!this.isStart){
      this.isStart = true;

      this.subscribe$ = this.startTimer().subscribe(()=>{
        this.sec++
        this.sec = this.sec < 10?'0'+this.sec:this.sec;
        if(this.sec === 60){
          this.min++
          this.min = this.min < 10?'0'+this.min:this.min;
          this.sec = '0' +0
        }
      })
    }else{
      this.stop();
    }

  }

  stop(){
    this.isStart = false
    this.subscribe$ = this.subscribe$.unsubscribe();
    this.sec ='0' +0;
    this.min = '0' + 0;
  }

  pause($event: MouseEvent){
    if($event.detail == 2) {
      this.isStart = false
      this.subscribe$ = this.subscribe$.unsubscribe();
    }
  }

  reset(){
    this.min = '0'+0;
    this.sec = '0'+0;


  }





}
