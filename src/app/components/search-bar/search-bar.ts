import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';
import { CarCard } from '../car-card/car-card';

@Component({
  imports: [FontAwesomeModule, CarCard],
  standalone: true,
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnChanges {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos: Auto[] = [];
  @Input() favorites: Auto[] = [];
  @Output() onSelectCar = new EventEmitter<Auto>();
  @Output() onToggleFavorite = new EventEmitter<Auto>();

  selectedAutos: Auto[] = [];
  currentBrand = '';

  ngOnChanges() {
    this.selectAutos(this.currentBrand);
  }

  selectAutos(selectedBrand: string) {
    this.currentBrand = selectedBrand;
    this.selectedAutos = selectedBrand
      ? this.autos.filter(x => x.brand.toLowerCase().startsWith(selectedBrand.toLowerCase()))
      : this.autos;
  }

  selectCar(auto: Auto) {
    this.onSelectCar.emit(auto);
  }

  toggleFavorite(auto: Auto) {
    this.onToggleFavorite.emit(auto);
  }
}