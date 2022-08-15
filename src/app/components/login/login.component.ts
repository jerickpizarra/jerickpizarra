import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { tokenName } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isLoading:boolean = false
  invalid = false

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    if(!!localStorage.getItem(tokenName)){
      this.router.navigate(['/'])
    }

  }

  change(){
    this.invalid = false
  }

  submitForm() {
    
    if (this.form.invalid) {
      this.invalid = true
      return 
    }

    this.invalid = false
    this.isLoading = true
    
    this.apiService
      .login(this.form.value)
      .subscribe(
        (res: any) => {this.router.navigate(['/']), this.isLoading = false},
        (error: any) => { this.invalid = true, this.isLoading = false}
        )

        
  }
}
