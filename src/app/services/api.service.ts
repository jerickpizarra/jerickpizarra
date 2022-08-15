import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseAPI,tokenName } from 'src/environments/environment';
import { Experience } from '../interfaces/experience';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements CanActivate {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http:HttpClient, private router: Router) {
    const token = localStorage.getItem(tokenName);
    this._isLoggedIn$.next(!!token);
  }  

  canActivate(): boolean{
    if(localStorage.getItem(tokenName) === null){
      this.router.navigate(['login'])
      return false
    }
    return true
  }

  getHeader(): HttpHeaders{
    let token = localStorage.getItem(tokenName)
    return  new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  }
  
  createExperience(form:any): Observable<any> {  
    return this.http.post(baseAPI +'api/experience', form, { headers: this.getHeader() });
  }

  updateExperience(form:any): Observable<any> {  
    return this.http.put<Experience[]>(baseAPI +'api/experience/'+ form._id,  form, { headers: this.getHeader() });
  }


  getExperiences(): Observable<any>{
    return this.http.get<Experience[]>(baseAPI +'api/experience', { headers: this.getHeader() }) 
  }

  deleteExperience(id: any): Observable<any>{
    return this.http.delete(baseAPI +'api/experience/'+ id , { headers: this.getHeader() })
  }


  getIPAddress(): Observable<any>{  
    return this.http.get<any>("http://api.ipify.org/?format=json");  
  }  

  login(form: any): Observable<any> {  
    return this.http.post(baseAPI +'api/user/login',  form).pipe(tap((res:any) => localStorage.setItem(tokenName, res.token)))
  }

  logout(): void{
    localStorage.removeItem(tokenName);
    this._isLoggedIn$.next(false);
    this.router.navigate(['/'])
  }
}
