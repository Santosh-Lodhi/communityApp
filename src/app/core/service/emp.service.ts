import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Constants } from 'src/app/config/constant';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private httpClient: HttpClient) { }

  getEmployee() {
    return this.httpClient.get(Constants.EMP_URL).pipe(map((data) => data || []));
  }
}


