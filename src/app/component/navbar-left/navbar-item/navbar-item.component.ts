import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {
  @Input() title: string
  @Input() path: string
  @Input() iconLeft: string
  @Input() iconRight: string
  @Input() itemsChildren: Array<any> = []

  private show: boolean = false
  
  constructor() { }

  ngOnInit() {
    
  }

  listItem() {
    console.log(JSON.stringify(this.itemsChildren))
  }

  showItem() {
    if (this.show) {
      this.show = false
    } else {
      this.show = true
    }
  }
}
