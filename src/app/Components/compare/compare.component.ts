import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  imgUrl1:any="../assets/images/3901.png";
  imgUrl2:any="../assets/images/3901.png";

  selectedImg1
  selectedImg2
  constructor() { }

  ngOnInit() {
  }

  setimg1(event){
    this.selectedImg1=event.target.files[0]
    if (event.target.files.length === 0)
      return;
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The file you chose is not an image!'
      })
      return;
    }else{
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (_event) => { 
      this.imgUrl1 = reader.result; 
    }
    }    
  }

  setimg2(event){
    this.selectedImg2=event.target.files[0]
    if (event.target.files.length === 0)
      return;
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The file you chose is not an image!'
      })
      return;
    }else{
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (_event) => { 
      this.imgUrl2 = reader.result; 
    }
    }    
  }

}
