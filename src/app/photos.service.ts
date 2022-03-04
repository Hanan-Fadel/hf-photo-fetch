import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/Operators';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization:'Client-ID zRK1cOrHQ6QUBxErLj9lEDiA2VBmhYZAHW92RbL60sg'
      } }
      );
  }
}
