import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiAccessService } from "../api-access.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  usersGroup!: FormGroup;
  submit = false;

  constructor(
    private api : ApiAccessService,
    private fb: FormBuilder,
    private router : Router
  ) { }
  

  ngOnInit(): void {
    this.usersGroup = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender:[1,Validators.required],
      datebirth:[""],
      mobile: ["", [Validators.required, Validators.pattern("(\\+62|62|0)[1-9][0-9]{7,10}$")]]
    });
  }

  get f(): { [key: string]: any } {
    return this.usersGroup.controls;
  }

  submitData():any{       
    this.submit = true;
      if(this.usersGroup.valid){        
        this.api.AddUsers(this.usersGroup.value).subscribe(data => console.log(data), error => console.log(error));
      }
  }

  login():any{
    this.router.navigate(['/login'])
  }

}
