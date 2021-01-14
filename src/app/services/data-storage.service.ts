import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'; 
import { Product } from '../models/products.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private products: Product[] = [{id: 1, name: "product 1", price: 100, category: "category1"}, 
                        {id: 2, name: "product 2", price: 200, category: "category2"}, 
                        {id: 3, name: "product 3", price: 300, category: "category3"}, 
                        {id: 4, name: "product 4", price: 400, category: "category1"}, 
                        {id: 5, name: "product 5", price: 500, category: "category2"}, 
                        {id: 6, name: "product 6", price: 600, category: "category3"}, 
                        {id: 7, name: "product 7", price: 700, category: "category1"}, 
                        {id: 8, name: "product 8", price: 800, category: "category2"}, 
                        {id: 9, name: "product 9", price: 900, category: "category3"}, 
                        {id: 10, name: "product 10", price: 1000, category: "category1"}];

  constructor(private logger: LoggerService) { 

  }

  public getProducts(): Observable<Product[]> {
    this.logger.log("DataStorage is active!");
    console.log(this.products);
    return of(this.products).pipe(delay(1000));
  }
}
