import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ProdutsService } from '../produts.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
fb:FormBuilder=new FormBuilder;
productForm:any;
  constructor(private produtsService:ProdutsService,private route:Router) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({ 
      "productname": this.fb.control("",Validators.required),
      "productprice": this.fb.control(""),
      "manufacturingdate" : this.fb.control(""),
      "configuration": this.fb.control(""),
      "type": this.fb.control("")
       })
  }
  submitForm(){
    this.produtsService.addProduct(this.productForm.value)
    this.route.navigate(["/products"])
  }

}
