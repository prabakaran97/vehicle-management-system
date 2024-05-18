import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = "http://localhost:8080/api/vehicle";

  constructor(private http: HttpClient) { }

  getAllVehicle(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getvehicleDetail(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>('${this.apiUrl}/${id}')
  }

  savevehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>('${this.apiUrl}/${id}');
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(this.apiUrl, vehicle);
  }

}
