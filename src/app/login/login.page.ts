import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';
  error = '';

  constructor(private navCtrl: NavController) {}

  login() {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
  
    if (this.email === savedUser.email && this.password === savedUser.password) {
      // Login berhasil
      localStorage.setItem('loggedIn', 'true');
      this.navCtrl.navigateForward('/home');
    } else {
      // Gagal login
      alert('Email atau password salah!');
    }
  }
    

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
}

