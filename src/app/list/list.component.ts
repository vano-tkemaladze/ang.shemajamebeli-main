// list/car-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CarService } from 'service/service/services/car.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
  <div *ngFor="let car of cars">
      <h3>{{ car.model }} {{ car.year }}</h3>
      <p>{{ car.description }} - {{ car.price }} USD</p>
    </div>
  `
})
export class CarListComponent {
  cars: any[] = [];

//  constructor(private carService: CarService) {
//     this.carService.getCars().subscribe(data => {
//       this.cars = data;
//     });
//   }
}
