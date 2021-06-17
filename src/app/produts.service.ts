import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdutsService {
  productData:Array<any> = []
  constructor(private http:HttpClient) { }

  addProduct(data:any){
    data.id=this.productData.length+1;
    this.productData.push(data);
    

  }

  returnProduct(){
    return this.productData;
  }

  returnProductById(id:number){
    return this.productData.find(p => p.id == id)
  }
  
  updateProductById(id:any, data:any){
    let index = this.productData.findIndex(p => p.id==id)
    data.id=id;
    this.productData[index] = data;
  }

}
