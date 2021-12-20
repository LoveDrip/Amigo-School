import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';

import swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'manager-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    public serverService: ServerService,
    public authService: AuthService,
    public router: Router
    ) {
  }

  ngOnInit() {
  }

  login() {
    console.log("adsfasdfasdf");
    this.serverService.post('manager/login', {
      username: this.username,
      password: this.password
    }).subscribe(
      (resp) => {
        if (resp['code'] === 200) {
          if(resp['msg'] == 'Success'){
            const data = resp['data'];
            this.authService.set('accountType', 'manager');
            this.authService.set('username', data.username);
            this.authService.set('token', data.token);
            this.router.navigate(['/dashboard']);
          }else{
            swal({
              title: 'Failed to login',
              text: 'Wrong username or password',
              type: 'error',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-danger',
              confirmButtonText: 'Ok'
            }).catch(swal.noop);
          }
        } else {
          swal({
            title: 'Failed to login',
            text: 'Wrong username or password',
            type: 'error',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-danger',
            confirmButtonText: 'Ok'
          }).catch(swal.noop);
        }
      },
      err => {
        swal({
          title: 'Failed to login',
          text: 'Wrong username or password',
          type: 'error',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-danger',
          confirmButtonText: 'Ok'
        }).catch(swal.noop);
      }
    );
  }
}
