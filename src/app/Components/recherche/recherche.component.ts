import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  selectedImg
  result 
  imgUrl:any="../assets/images/3901.png";
  constructor() { }

  ngOnInit() {
    
  }

  setimg(event){
    this.selectedImg=event.target.files[0]
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
      this.imgUrl = reader.result; 
    }
    }    
  }

  recherche(){
    this.result = [
      {id: 1, image: "../assets/images/IMG-4567-JPG-boku-no-hero-academia-40005018-1427-1406.jpg", titre: "Image1"},
      {id: 2, image: "../assets/images/attack_on_titan_eren_jaeger_by_marrilliams-d7dl7hp.jpg", titre: "Image2"},
      {id: 3, image: "../assets/images/monkey_d__luffy_render_by_annaeditions24-d6hci7j.png", titre: "Image3"},
      {id: 4, image: "../assets/images/220px-Robida_-_Alibaba_couverture.jpg", titre: "Image4"},
      {id: 5, image: "../assets/images/89852.jpg", titre: "Image5"},
      {id: 6, image: "../assets/images/89857.jpg", titre: "Image6"},
      {id: 7, image: "../assets/images/98537.jpg", titre: "Image7"}
    ]
  }

}
