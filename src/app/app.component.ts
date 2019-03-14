import { Component, OnInit } from '@angular/core';
import { FlatMaintenanceService } from './flat-maintenance.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flatmaintenance';

  constructor(private flatMntService: FlatMaintenanceService,
            private router: Router){}

  ngOnInit(){}

  saveUser(user){
    this.flatMntService.saveUserToDB(user).subscribe(response => {
      console.log(response);
      this.router.navigate(['dashboard']);
    });
  }
}
