import { Component, OnInit } from '@angular/core';
import { RedirectService } from '../../service/redirect.service'
import { SessionService } from '../../service/session.service'
import {menu} from '../../../config/menu'

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  private detail: boolean = false
  private option = menu
  constructor(
    private redirect: RedirectService,
    private session: SessionService
    ) { }

  ngOnInit() {
    this.redirect.redirectToSession()
  }

  list() {
    for (let item of this.option) {
      console.log(item)
    }
  }

  showDetail() {
    if (this.detail) {
      this.detail = false
    } else {
      this.detail = true
    }
  }

  signOut() {
    if(this.session.getValueStorage('session')) {
      this.session.removeValueStorage()
      this.redirect.redirectToSession()
    } else {
      this.redirect.redirectToSession()
    }
  }
}
