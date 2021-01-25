import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceGuard implements CanActivate {


  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const long = +next.url[0].path;
    const lat = +next.url[1].path;
    if (long === 18.009259 && lat === 58.990745) {
      return true;
    }
    if (long === 11.982345 && lat === 57.989506) {
      return true;
    }
    if (long === 12.992263 && lat === 56.008929) {
      return true;
    }
    if (long === 20.009725 && lat === 63.992678) {
      return true;
    }
    alert('Ogiltig plats, välj en från förstasidan');
    this.router.navigate(['']);
    return false;
  }
}
