import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { RouterLink } from '@angular/router';
import { Auth } from '../../auth-services/auth-service/auth';
import { Storage as StorageService } from '../../auth-services/storage-service/storage';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSpinModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  isSpinning = false;

  constructor(private fb: FormBuilder, private service: Auth) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,[Validators.required]
      ]
    });
  }

  submitForm(): void {
    // if (this.loginForm.invalid) {
    //   this.loginForm.markAllAsTouched();
    //   return;
    // }
    this.service.login(this.loginForm.value).subscribe(res => {
      console.log(res);
      if(res.userId != null){
        const user={
          id:res.userId,
          role:res.userRole
        }
        console.log(user);
        StorageService.saveToken(res.jwt);
        StorageService.saveUser(user);
      }else{
        console.log("Login failed(Wrong credentials)");
      }
    }
    );
  }
}
