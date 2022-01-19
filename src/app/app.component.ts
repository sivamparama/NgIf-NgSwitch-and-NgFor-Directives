import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  users=[
    {name:"parama",age:25,gender:"m"},
    {name:"shivam",age:24,gender:"m"},
    {name:"kutty",age:23,gender:"m"},
    {name:"sangee",age:23,gender:"f"},
    {name:"jellu",age:22,gender:"f"},
    {name:"pavi",age:21},
  ];
}
