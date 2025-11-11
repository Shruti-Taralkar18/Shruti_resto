import { Routes } from '@angular/router';
import { Signup } from './auth-components/signup/signup';
import { Login } from './auth-components/login/login';

export const routes: Routes = [
    {
        path:"signup",
        component:Signup
    },
    {
        path:"login",
        component:Login
    }
];
