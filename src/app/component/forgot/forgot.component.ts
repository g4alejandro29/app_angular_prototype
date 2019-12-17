import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  private user: string = null;
  private submitted: boolean;
  private userError: string = null;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (!this.validForm()) {
      return false;
    }
    this.router.navigate(['/login']);
  }

  validForm() {
    this.user = this.user || '';
    return (this.userIsValid());
  }

  userIsSet() {
    return (this.user !== null);
  }

  userIsValid() {
    if (!this.user && this.userIsSet()) {
      this.userError = 'Usuario requerido.';
      return false;
    }
    this.userError = null;
    return true;
  }

  userIsSuccess() {
    return (this.userIsSet() && this.userIsValid());
  }

  userIsDanger() {
    return (this.userIsSet() && !this.userIsValid());
  }

  updateUser(value: string) {
    this.user = value;
  }
}
