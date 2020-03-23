import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../shared/http/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  constructor(private loginService: LoginService, private router: Router) {

  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    console.log(this.form);
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.router.navigateByUrl('/admin');
    }
  }

}
