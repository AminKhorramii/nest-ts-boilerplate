import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return {
      msg: 'logged in',
    };
  }

  signup() {
    return {
      msg: 'signed up!',
    };
  }
}
