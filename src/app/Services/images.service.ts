import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  
  serverApi = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  public async getImages(){
    let res
    const req = new HttpRequest('GET', this.serverApi);
    res=await this.http.request(req).toPromise()
    return res
  }

  public deleteImage(id){
    return this.http.delete(this.serverApi+"delete/"+id)
  }

  public async compare(comp: FormData){
    let res
    const req = new HttpRequest('POST', this.serverApi+'compare', comp);
    res=await this.http.request(req).toPromise()
    return res
  }

  public recherche(comp){
    return this.http.post(this.serverApi+"recherche", comp)
  }


   addImage(file: File, t) {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.serverApi+'save', formdata);
    return this.http.request(req)
  }
}
