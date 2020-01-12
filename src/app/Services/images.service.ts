import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  
  serverApi = "http://localhost:8080/images/"
  constructor(private http: HttpClient) { }

  public getImages(){
    return this.http.get(this.serverApi)
  }

  public deleteImage(id){
    return this.http.delete(this.serverApi+"delete/"+id)
  }

  public compare(comp){
    return this.http.post(this.serverApi+"compare", comp)
  }

  public recherche(comp){
    return this.http.post(this.serverApi+"recherche", comp)
  }

  public addImage(im){
    return this.http.post(this.serverApi+"save", im, {headers : {'Content-Type': 'multipart/form-data'}})
  }
}
