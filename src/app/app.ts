import { HttpClientModule } from '@angular/common/http';
import { Component, signal,OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';
import { NgZorroAntdModule } from './DemoNgZorroAntdModule';
import { Storage as StorageService } from './auth-services/storage-service/storage';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HttpClientModule, ReactiveFormsModule, NgZorroAntdModule, RouterLinkWithHref, RouterLinkActive, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('restaurant_angular');
  isAdminLoggedIn:boolean=StorageService.isAdminLoggedIn();
  isCustomerLoggedIn:boolean=StorageService.isCustomerLoggedIn();
  constructor(private router:Router) {}
  ngOnInit(){
  this.router.events.subscribe(event => {
    if(event.constructor.name==="NavigationEnd"){
      this.isAdminLoggedIn=StorageService.isAdminLoggedIn();
      this.isCustomerLoggedIn=StorageService.isCustomerLoggedIn();
    }
  })
}
logout(){
  StorageService.signout();
  this.router.navigateByUrl("/login");
}
}
