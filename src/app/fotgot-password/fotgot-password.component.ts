import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-fotgot-password',
  templateUrl: './fotgot-password.component.html',
  styleUrls: ['./fotgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
