import { Component, OnInit } from '@angular/core';
import { FlatMaintenanceService } from '../flat-maintenance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username:string;

  constructor(private flatMntService: FlatMaintenanceService,
    private router: Router) { }

  ngOnInit() {
  }

  checkUser(){
    if(this.username == ("Pushpak" || "Garam" || "Ajinkya" || "Rohit")){
      localStorage.setItem("currUser",this.username);
      this.router.navigate(['dashboard']);
    }
    else{
      this.router.navigate(['']);
    }
  }

}
