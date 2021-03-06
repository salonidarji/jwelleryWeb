import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  matcher: MyErrorStateMatcher;
  constructor() { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      passwordControl: new FormControl('')
    });
    this.matcher = new MyErrorStateMatcher();
  }

  onSubmit(item: any) {

  }

  onReset() {  }
}
