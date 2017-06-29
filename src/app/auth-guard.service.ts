import {CanActivate,Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
CanLoad} from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';


@Injectable()
export class AuthGuardService {

  constructor() { }

}