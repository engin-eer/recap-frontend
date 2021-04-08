import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})

export class RentalService {
  apiUrl = 'https://localhost:44393/api/brands/getall';
  constructor(private httpClient:HttpClient) { }

  getRental(): Observable<RentalResponseModel>{

    return this.httpClient.get<RentalResponseModel>(this.apiUrl);

  }
}
