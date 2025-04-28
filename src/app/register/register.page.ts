import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    // Validasi sederhana
    if (!this.email || !this.password) {
      alert('Email dan password wajib diisi!');
      return;
    }

    const userData = {
      email: this.email.trim(),
      password: this.password.trim()
    };

    // Simpan data user ke localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    alert('Registrasi berhasil! Silakan login.');
    this.router.navigate(['/login']); // Perbaikan: pakai array
  }
}
