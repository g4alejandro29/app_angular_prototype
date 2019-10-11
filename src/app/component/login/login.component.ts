import { Component, OnInit } from '@angular/core';
import {RedirectService} from '../../service/redirect.service'
import {SessionService} from '../../service/session.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private user: string = null;
  private password: string = null;
  private submitted: boolean
  private userError: string = null;
  private passwordError: string = null;

  constructor(
    private redirect: RedirectService,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.redirect.redirectToSession()
  }

  onSubmit() {
    this.submitted = true
    if(!this.validForm()) {
      return false
    }

    const data = {
      user: this.user,
      password: this.password
    }

    this.session.setValueStorage('session', data)
    this.redirect.redirectToSession()
  }

  validForm() {
    this.user = this.user || ''
    this.password = this.password || ''
    return (this.userIsValid() && this.passwordIsValid())
  }

  userIsSet() {
    return (this.user !== null)
  }

  userIsValid() {
    if (!this.user && this.userIsSet()) {
      this.userError = 'Usuario requerido.'
      return false
    }
    this.userError = null
    return true
  }

  userIsSuccess() {
    return (this.userIsSet() && this.userIsValid())
  }

  userIsDanger() {
    return (this.userIsSet() && !this.userIsValid())
  }

  updateUser(value: string) {
    this.user = value
  }

  //
  passwordIsSet() {
    return (this.password !== null)
  }

  passwordIsValid() {
    if (!this.password && this.passwordIsSet()) {
      this.passwordError = 'Contraseña requerido.'
      return false
    }
    this.passwordError = null
    return true
  }

  passwordIsSuccess() {
    return (this.passwordIsSet() && this.passwordIsValid())
  }

  passwordIsDanger() {
    return (this.passwordIsSet() && !this.passwordIsValid())
  }

  updatePassword(value: string) {
    this.password = value
  }
}
