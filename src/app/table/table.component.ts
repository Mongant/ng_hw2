import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private products: object[] = [{id: 1, name: "product 1", price: 100}, 
                        {id: 2, name: "product 2", price: 200}, 
                        {id: 3, name: "product 3", price: 300}, 
                        {id: 4, name: "product 4", price: 400}, 
                        {id: 5, name: "product 5", price: 500}, 
                        {id: 6, name: "product 6", price: 600}, 
                        {id: 7, name: "product 7", price: 700}, 
                        {id: 8, name: "product 8", price: 800}, 
                        {id: 9, name: "product 9", price: 900}, 
                        {id: 10, name: "product 10", price: 1000}];

  @Output()
  public deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  public inputNum: any = "10";
  public userPriducts: object[] =[];

  constructor() { 
    this.userPriducts = this.getUserPtoducts();
  }

  ngOnInit(): void {
  }

  public getUserPtoducts(): object[] {
    let num: number = Number(this.inputNum);
    console.log("getUserProducts is on");
    console.log("numItems:" + this.inputNum);
    console.log("num:" + num);
    this.userPriducts = [];
    for(let i = 0; i < num; i++) {
      this.userPriducts.push(this.products[i]);
    }
    return this.userPriducts;
  }

  public getMaxPoductsNum(): number {
    return this.products.length;
  }

  public delete(index: number): void {
    this.deleteEvent.emit(index);
    this.userPriducts.splice(index, 1);
  }
}
