import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Auto } from '../../interfaces/auto';
import { AUTO_LIST } from '../../data/auto-data';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.css',
})
export class CarDetailPage implements OnInit {
  car?: Auto;
  rangeProgress = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car = AUTO_LIST.find(auto => auto.id === id);
    if (this.car) {
      setTimeout(() => this.rangeProgress = 100, 120);
    }
  }
}
