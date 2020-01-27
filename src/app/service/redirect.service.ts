import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { SessionService } from './session.service'
@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  redirectToSession() {
    const data = this.session.getValueStorage('session')
    if (!data) {
      this.router.navigate(['/login'])
    }
  }
}
