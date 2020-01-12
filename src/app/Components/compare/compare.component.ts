import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ImagesService } from 'src/app/Services/images.service';

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
  score
  loading = false
  constructor(private imageService: ImagesService) { }

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

  comparer(c, t, s){
    this.loading = true
    let color = 0
    let texte = 0
    let shape = 0
    if (c.value == true) color =1
    if (t.value == true) texte =1
    if (s.value == true) shape =1

    let text = "color=" + color + " texture=" + texte + " shape=" + shape;
    let data = new FormData()
    data.append('file1', this.selectedImg1)
    data.append('file2', this.selectedImg2)
    data.append('commande', text)
    
    this.imageService.compare(data).then((res)=>{      
      this.score = res["body"]
      this.loading=false
    })
  }

}
