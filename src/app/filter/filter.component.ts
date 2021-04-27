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
  keyWord: string;
  @Output() emitSelectedFilterCategory = new EventEmitter<string>();
  @Output() emitSelectedFilterKeyWord = new EventEmitter<string>();

  constructor(private filtrerService: FiltrerService) { }

  ngOnInit(): void {
    this.categories = this.filtrerService.geCategories();
  }

  selectFilterCategory(id: string) {
    this.emitSelectedFilterCategory.emit(id);
  }

  searchByKeyWord() {
    console.log(this.keyWord);
    this.emitSelectedFilterKeyWord.emit(this.keyWord);
  }

}
