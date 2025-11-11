import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { NgZorroAntdModule } from './DemoNgZorroAntdModule';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HttpClientModule, ReactiveFormsModule, NgZorroAntdModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('restaurant_angular');
}
