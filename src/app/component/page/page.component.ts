import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  showMenu: boolean;

  constructor() {
  }

  updateValue(e: boolean) {
    this.showMenu = e;
  }

  ngOnInit() {
  }

}
