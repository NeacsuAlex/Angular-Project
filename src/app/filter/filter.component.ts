import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { FiltrerService } from '../services/filtrer.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories: Category[];
  
  constructor(private filtrerService:FiltrerService) { }

  ngOnInit(): void {
    this.categories=this.filtrerService.geCategories();
  }

}
