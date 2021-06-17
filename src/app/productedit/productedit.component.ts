import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutsService } from '../produts.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  fb:FormBuilder =new FormBuilder;
  productForm:any;
  currentId:any;
  constructor(private activeRoute:ActivatedRoute,private produtsService:ProdutsService,private route: Router) { 
    this.currentId=activeRoute.snapshot.params.id
  }

  ngOnInit(): void {
    let currentProductData = this.produtsService.returnProductById(this.currentId)
    this.productForm = this.fb.group({ 
      "productname": this.fb.control("",Validators.required),
      "productprice": this.fb.control(""),
      "manufacturingdate" : this.fb.control(""),
      "configuration": this.fb.control(""),
      "type": this.fb.control("")
       })

       this.productForm.patchValue(currentProductData)
  }
updateForm()
{
this.produtsService.updateProductById(this.currentId,this.productForm.value)
this.route.navigate(["/products"])
}
}
