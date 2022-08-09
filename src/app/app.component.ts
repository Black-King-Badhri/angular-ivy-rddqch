import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:string="Badhri";
  age:number=21;
  college:string="Sri Sairam Institute of Technology";
}
