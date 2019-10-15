import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {menu} from '../../../config/menu'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private option = menu
  setMenu: boolean = false

  constructor() { }

  showMenu() {
    if (this.setMenu) {
      this.setMenu = (false)
    } else {
      this.setMenu = (true)
    }
  }

  ngOnInit() {
  }

}
