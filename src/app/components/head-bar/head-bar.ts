import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-head-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './head-bar.html',
  styleUrl: './head-bar.css',
})
export class HeadBar {}
