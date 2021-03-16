import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-assignment';
  income=150000;
  minIncome=100000;
  maxIncome=300000;


  expense=50000;
  minExpense=0;
  maxExpense=300000;

  getValue(e){
    if(e.target.id=="incomeSlider")
    this.income=e.target.value;
    if(e.target.id=="expenseSlider")
    this.expense=e.target.value
  }
}
