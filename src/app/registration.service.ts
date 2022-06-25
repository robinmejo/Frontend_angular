import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noname } from './noname';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public loginUserFromRemote(noname:Noname):Observable<any>{
      //From this we are going to call the rest web services, so we use HTTP client and module
      //Inject Http client using the constructor
      return this.http.post<any>("http://localhost:8091/login",noname)

  }
}
