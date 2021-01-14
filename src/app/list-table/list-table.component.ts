import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  private userProduct: Product[] = [];

  constructor(private dataStorage: DataStorageService) {
    
  }

  ngOnInit() {
    this.dataStorage.getProducts().subscribe((products: Product[]) => this.userProduct = products);
  }

  ngAfterContentChecked() {
    console.log("ListTableComponent was changed")
  }

  public getProducts(): Product[] {
    console.log(this.userProduct);
    return this.userProduct;
  }

}
