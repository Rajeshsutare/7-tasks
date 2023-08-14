import { Component, OnInit } from '@angular/core';
import { Icategory, Iprod } from '../../models/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.scss']
})
export class ProdComponent implements OnInit {

  public arrayProd:Array<Iprod>=[
  
  ]
  objects: any;
  constructor() { }
  
  ngOnInit(): void {
    let data= localStorage.getItem('objects')
    if(data != null){
      this.arrayProd=JSON.parse(data)
    }
  }

  onAddProduct(pname:HTMLInputElement,pdescr:HTMLTextAreaElement, pcateg:Icategory){
    let obj :Iprod ={
      pId:this.arrayProd.length + 1,
      pName:pname.value,
      pDescr:pdescr.value,
      pCategory:pcateg
    }
    console.log(obj);
    pname.value='',
    pdescr.value=''
    if(pcateg === 'product'){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New Product Has been Added !!!',
        showConfirmButton: true,
        timer: 1500
      })
    }
    if(pcateg === 'catlog'){
      Swal.fire({
        background:'bg-primary',
        position: 'center',
        icon: 'success',
        title: ' New Catlog Has been Added !!!',
        showConfirmButton: true,
        timer: 1500
      })
    }
    this.arrayProd.unshift(obj)
      localStorage.setItem('objects',JSON.stringify(this.arrayProd))

  }

  onDelete(id:number){
  console.log(id);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Remove it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Removed!',
        'Your Product has been Removed.',
        'success'
      )
    }
  })
  for(let i=0; i<this.arrayProd.length; i++){
    if(this.arrayProd[i].pId === id){
       let removeProd =  this.arrayProd.splice(i,1)
    }
  }
  localStorage.setItem('objects',JSON.stringify(this.arrayProd))
  }
}
