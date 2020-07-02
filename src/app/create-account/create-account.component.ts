import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../models/item';
import { AccountService } from '../services/account.service';
import { MustMatch } from '../models/CustomValidator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb:FormBuilder, private accservice:AccountService, private userService:UserService) { }
  registerForm: FormGroup;
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname:['',Validators.required], 
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]},
      
      {
        validator: MustMatch('password', 'confirmpassword')
      }

    );
    
  }
  onSubmit(){
    let acc = new Account();
    acc.firstname = this.registerForm.controls["firstname"].value;
    acc.lastname = this.registerForm.controls["lastname"].value;
    acc.email = this.registerForm.controls["email"].value;
    acc.password = this.registerForm.controls["password"].value;
    // acc.confirmpassword = this.registerForm.controls["confirmpassword"].value;
    console.log(acc);
    this.accservice.insertAccount(acc).subscribe(data=>{console.log(data)});
  }
  createAccount(){
    let acc = new Account();
    acc.firstname = this.registerForm.controls["firstname"].value;
    acc.lastname = this.registerForm.controls["lastname"].value;
    acc.email = this.registerForm.controls["email"].value;
    acc.password = this.registerForm.controls["password"].value;
    this.userService.signup(acc.email,acc.password).then(data=>{console.log(data)});
  }
}
