import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImagesService } from 'src/app/Services/images.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-prods',
  templateUrl: './list-prods.component.html',
  styleUrls: ['./list-prods.component.css']
})
export class ListProdsComponent implements OnInit {
  
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort; 

  displayedColumns: string[] = ['id', 'path', 'titre' , 'actions'];
  dataSource : MatTableDataSource<any>

  images
  currentImage
  selectedImg
  imgUrl:any="../assets/images/3901.png";
  constructor(private imageserv:ImagesService, private modalService: NgbModal) { }

  ngOnInit() {

    this.imageserv.getImages().then((res) => {
      this.images = res
      this.dataSource.data = res

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = 
      (data, filtersJson: string) => {
      const matchFilter = [];
      const filters = JSON.parse(filtersJson);

      filters.forEach(filter => {
        const val = data[filter.id] === null ? '' : data[filter.id];
        matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
      });
        return matchFilter.every(Boolean);
    };
    },err => {
      console.log(err)
    })        
   }

   applyFilter(filterValue: string) {
    const tableFilters = [];
    tableFilters.push({
      id: 'titre',
      value: filterValue
    });

    this.dataSource.filter = JSON.stringify(tableFilters);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }     
  }

  showInfos(content, i){
      this.currentImage = this.images[i]
      this.modalService.open(content,{size: 'lg'})
  }

  delete(i){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.imageserv.deleteImage(this.images[i].id).subscribe(res=>{
            this.dataSource.data.splice(i, 1);
            this.dataSource._updateChangeSubscription();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }, err=>{
            console.log(err)
          })          
        }
      })
  }

  addImage(im){
    this.modalService.open(im, {size:'lg'})
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

  //  onSubmitAd(t){
  //   this.modalService.dismissAll()
  //    this.imageserv.addImage(this.selectedImg, t.value).subscribe(res=>{
  //     Swal.fire(
  //       'Ajouté!',
  //       'L\'image a été ajouté avec succès',
  //       'success'
  //     ) 
  
  //     window.location.reload()
  //    })    
  // }


}
