import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class Servicio {

  httpParams: HttpParams;
  private url = `${environment.host}`+`${environment.api}`;

  constructor(private http: HttpClient) { }

  // https://tpmetadataback.azurewebsites.net/api/MetaData/GetMetadataDb?assesor=123456&client=9876&appCodigo=123&ClienteFinal=SABMiller&ciudad=Medellin&campana=123

  public getData(): Observable<Data> {
    return this.http.get<Data>(`${this.url}/GetMetadata?assesor=123456&client=9876&appCodigo=123&ClienteFinal=SABMiller&ciudad=Medellin&campana=123`).pipe(catchError(err => of(err)));
    // return this.http.get<Data>(`${this.url}/GetMetadataDb?assesor=123456&client=9876&appCodigo=123&ClienteFinal=SABMiller&ciudad=Medellin&campana=123`).pipe(catchError(err => of(err)));
    // return this.http.get<Agente>("../../assets/JSONPRUEBATP.json").pipe(catchError(err => of(err)));
  }

}
