import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle/Vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles!: Vehicle[];

  constructor(private vehicleService :VehicleService) { }

  ngOnInit(): void {
    this.getVehicles();
  }
  getVehicles() {
    this.vehicleService.getAllVehicle().subscribe((data:Vehicle[])=>{
      this.vehicles = data;
    })
  }

}
