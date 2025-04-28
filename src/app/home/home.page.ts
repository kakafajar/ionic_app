import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: 'makanan' | 'minuman';
}

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menu: MenuItem[] = [
    {
      name: 'Nasi Goreng',
      price: 'Rp25.000',
      image: 'https://via.placeholder.com/150',
      category: 'makanan'
    },
    {
      name: 'Es Teh',
      price: 'Rp8.000',
      image: 'https://via.placeholder.com/150',
      category: 'minuman'
    },
    {
      name: 'Mie Ayam',
      price: 'Rp20.000',
      image: 'https://via.placeholder.com/150',
      category: 'makanan'
    },
    {
      name: 'Kopi Hitam',
      price: 'Rp10.000',
      image: 'https://via.placeholder.com/150',
      category: 'minuman'
    }
  ];

  filteredMenu: MenuItem[] = [];
  makananList: MenuItem[] = [];
  minumanList: MenuItem[] = [];
  cart: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(['/login']);
    }
    this.filteredMenu = [...this.menu];
    this.updateMenuList();
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  searchMenu(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredMenu = this.menu.filter(item =>
      item.name.toLowerCase().includes(query)
    );
    this.updateMenuList();
  }

  updateMenuList() {
    this.makananList = this.filteredMenu.filter(item => item.category === 'makanan');
    this.minumanList = this.filteredMenu.filter(item => item.category === 'minuman');
  }

  addToCart(item: MenuItem) {
    this.cart.push(item);
  }

  get cartCount(): number {
    return this.cart.length;
  }
}
