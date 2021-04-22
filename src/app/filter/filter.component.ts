import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { FiltrerService } from '../services/filtrer.service';
import { EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories: Category[];
  @Output() emitSelectedFilter = new EventEmitter<string>();
  
  constructor(private filtrerService:FiltrerService) { }

  ngOnInit(): void {
    this.categories=this.filtrerService.geCategories();
  }

  selectFilter(id:string){
    this.emitSelectedFilter.emit(id);
  }

}
