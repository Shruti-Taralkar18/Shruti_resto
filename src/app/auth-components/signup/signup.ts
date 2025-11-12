import { Component } from '@angular/core';
import { Auth } from '../../auth-services/auth-service/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    RouterOutlet,
    RouterLink
],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss'],
})
export class Signup {
  isSpinning = false;
  validateForm!: FormGroup;
confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
  if(!control.value){
    return{required:true}
  }else if(control.value !== this.validateForm.controls['password'].value){
  return { confirm: true, error: true };
  }
 return {};
}

  constructor(private service: Auth, private fb: FormBuilder,private notification:NzNotificationService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern]],
      checkPassword: ['', [Validators.required,this.confirmationValidator]],
      name: ['', [Validators.required]],
    });
  }

  register() {
    if (this.validateForm.valid) {
      this.isSpinning = true;
      console.log(this.validateForm.value);
      this.service.signup(this.validateForm.value).subscribe(res => {
        this.isSpinning = false;
        console.log(res);
        if (res.id != null){
      this.notification.success('Success','Registration Successful',{nzDuration:5000});
    }else{
      this.notification.error('Error','Registration Failed',{nzDuration:5000});
    }
      })
    } else {
      this.validateForm.markAllAsTouched();
    }
    
  }
}
