import { Component, OnInit } from '@angular/core';
import { FlatMaintenanceService } from '../flat-maintenance.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  purchasedItemsList;
  currentUser:string;
  constructor(private flatMntService: FlatMaintenanceService) { }

  ngOnInit() {
    if(localStorage.getItem("currUser"))
    console.log("currUser : "+localStorage.getItem("currUser"))
    this.currentUser = localStorage.getItem("currUser");
    this.flatMntService.getItems().subscribe((items) => {
      this.purchasedItemsList = items;
      console.log("ngOnInit () : this.purchasedItemsList : ",this.purchasedItemsList)
    })
  }

  saveItem(item){
    document.getElementById("closeModalBtn").click();
    if(localStorage.getItem("currUser") != null && localStorage.getItem("currUser") != undefined)
    this.flatMntService.saveItem(item).subscribe((resp) => {
      console.log(resp);
      this.ngOnInit();
    })
  }



}
