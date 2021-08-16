import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiAccessService } from "../api-access.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private api : ApiAccessService,
    private router : Router,
    private fb: FormBuilder
  ) { }

  loginGroup! : FormGroup

  ngOnInit(): void {
    this.loginGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginAction(){
    this.api.Login(this.loginGroup.value).subscribe(data => console.log(data), error => console.log(error));
  }

}







