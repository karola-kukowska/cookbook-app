import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pizza","Recipe for a delicious pizza", "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg"),
    new Recipe("Pizza","Recipe for a delicious pizza", "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg")]
  constructor() { }

  ngOnInit(): void {
  }

}