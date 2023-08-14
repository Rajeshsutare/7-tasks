import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../models/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public prodArray:Array<Iproducts>=[
    {
      pName:'Iphone',
      pDescr:'desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      pCategory:'product'
    }
  ]
 public objects !:Array<Iproducts>;
  constructor() { }

  ngOnInit(): void {
    let data= localStorage.getItem('objects')
    if(data != null){
      this.prodArray=JSON.parse(data)
    }
  }

  onAddProduct(pname:HTMLInputElement,pdescr:HTMLTextAreaElement){
    let obj :Iproducts={
      pName:pname.value,
      pDescr:pdescr.value,
      pCategory:"product"
    }
    console.log(obj);
    pname.value='',
    pdescr.value=''
    this.prodArray.unshift(obj)
    localStorage.setItem('objects',JSON.stringify(this.prodArray))
    // this.prodArray = JSON.parse(localStorage.getItem('objects') !)
  }

  onAddCatlog(pname:HTMLInputElement,pdescr:HTMLTextAreaElement){
    let obj :Iproducts={
      pName:pname.value,
      pDescr:pdescr.value,
      pCategory:"catlog"
    }
    console.log(obj);
    pname.value='',
    pdescr.value=''
    this.prodArray.unshift(obj)
    localStorage.setItem('objects',JSON.stringify(this.prodArray))

  }

}
