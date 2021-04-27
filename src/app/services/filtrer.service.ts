import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class FiltrerService {

  categories: Category[] = [{ name: "To do", id: "1" }, { name: "Done", id: "2" }, { name: "Doing", id: "3" }]

  constructor() { }

  geCategories() {
    return this.categories;
  }

  getCategoryById(id: String): Category {
    return this.categories.find((category) => category.id == id);
  }
}
