import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBar } from '../../components/search-bar/search-bar';
import { FilterPanel } from '../../components/filter-panel/filter-panel';
import { FilterCriteria } from '../../interfaces/filter-criteria';
import { Auto } from '../../interfaces/auto';
import { AUTO_LIST } from '../../data/auto-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBar, FilterPanel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  criteria: FilterCriteria = { maxPrice: null, minPower: null, sortBy: 'none' };
  filteredAutos: Auto[] = [];
  favorites: Auto[] = [];
  autoList: Auto[] = AUTO_LIST;

  constructor(private router: Router) {
    this.applyFilters();
  }

  openCar(auto: Auto) {
    this.router.navigate(['/car', auto.id]);
  }

  onFilterChange(criteria: FilterCriteria) {
    this.criteria = criteria;
    this.applyFilters();
  }

  private applyFilters() {
    const c = this.criteria;
    const result = this.autoList.filter(a =>
      (c.maxPrice === null || a.price <= c.maxPrice) &&
      (c.minPower === null || a.power >= c.minPower)
    );
    switch (c.sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'power-asc': result.sort((a, b) => a.power - b.power); break;
      case 'power-desc': result.sort((a, b) => b.power - a.power); break;
    }
    this.filteredAutos = result;
  }

  toggleFavorite(auto: Auto) {
    this.favorites = this.favorites.includes(auto)
      ? this.favorites.filter(a => a !== auto)
      : [...this.favorites, auto];
  }
}
