import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
  @Input() value: string
  @Input() isDanger: false
  @Input() isSuccess: false
  @Input() isSubmit: false
  @Input() isRequired: false
  @Input() errorMsg: string
  @Input() icon: string
  @Input() maxLength: Number = 1000
  @Input() label: string
  @Input() error: string
  @Input() isType: string = 'text'
  @Input() placeHolder: string = ''
  @Output() input: EventEmitter<any> = new EventEmitter<any>()
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  updateValue(value: any) {
    if(value) {
      this.input.emit(value)
    }
  }
}
