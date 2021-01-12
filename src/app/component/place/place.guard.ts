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
    if (long === 18.040468 && lat === 59.340379) {
      return true;
    }
    if (long === 11.959112 && lat === 57.713651) {
      return true;
    }
    if (long === 13.013801 && lat === 55.609112) {
      return true;
    }
    if (long === 20.265917 && lat === 63.833437) {
      return true;
    }
    alert('Ogiltig plats, välj en från förstasidan');
    this.router.navigate(['']);
    return false;
  }

}
