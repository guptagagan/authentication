import { Component, OnInit } from '@angular/core';
import { ProdutsService } from '../produts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList:Array<any>=[]
  constructor(private productService:ProdutsService) { }

  ngOnInit(): void {
    this.productList=this.productService.returnProduct();
  }

}
