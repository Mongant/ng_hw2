import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  public styles = {
    redCell: "redCell"
  }

  @Output()
  public deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  public inputNum: string = "10";
  private userProducts: Product[] = [];
  public priceFlag: boolean = false;

  constructor(private dataStorage: DataStorageService) { 
     
  }

  ngOnInit() {
    this.dataStorage.getProducts().subscribe((products: Product[]) => this.userProducts = products);
  }

  ngOnChanges() {
    console.log("TableComponent was changed");
  }

  public getPtoducts(): Product[] {
    let num: number = Number(this.inputNum);
    console.log(this.userProducts);
    this.userProducts.splice(num, 1);
    console.log("getProducts from table");
    return this.userProducts;
  }

  public getMaxPoductsNum(): number {
    return 10;
  }

  public delete(index: number): void {
    this.deleteEvent.emit(index);
    this.userProducts.splice(index, 1);
  }

  public checkPrice(price: number): string {
    let style: string = "";
    if(price > 500 && this.priceFlag) {
      style = this.styles.redCell;
    }
    return style;
  }

  public selectedCategory(element: string): void{
    let selectedCategoryList: Product[] = [];
    if(element === "all categories") {
      this.userProducts = this.userProducts;
      return;
    }
    for(let pod of this.userProducts) {
      if(pod["category"] === element) {
        selectedCategoryList.push(pod);
      }
      this.userProducts = selectedCategoryList;
    }
  }
}
