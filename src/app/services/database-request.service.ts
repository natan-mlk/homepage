import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const databaseAddr = 'https://amilko-home-default-rtdb.europe-west1.firebasedatabase.app/';

@Injectable({
  providedIn: 'root'
})
// powyższy zapis tworzy mi sigleton dla całej aplikacji
export class DatabaseRequestService {

  constructor(private http: HttpClient) { }

  getAlbum(urlPart: string): Observable<any> { // zmień z ANY
    return this.http.get(databaseAddr + urlPart);
  }

}

