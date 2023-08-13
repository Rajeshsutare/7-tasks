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
  constructor() { }

  ngOnInit(): void {
    this.prodArray = JSON.parse(localStorage.getItem('objects')!)
    // let data:any = localStorage.getItem('objects')
    // this.prodArray=JSON.parse(data)

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