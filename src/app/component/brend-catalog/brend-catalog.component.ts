import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brend-catalog',
  templateUrl: './brend-catalog.component.html',
  styleUrls: ['./brend-catalog.component.css'],
})
export class BrendCatalogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images = [
    {
      img: '../../../assets/angular-shopping-image/ayiriboshlash.png',
      title: 'ayriboshlash',
    },
    {
      img: '../../../assets/angular-shopping-image/hobbi.png',
      title: 'hobbi',
    },
    {
      img: '../../../assets/angular-shopping-image/key.png',
      title: 'key',
    },
    {
      img: '../../../assets/angular-shopping-image/hayvon.png',
      title: 'hayvon',
    },
    {
      img: '../../../assets/angular-shopping-image/bolalar-dunyosi.png',
      title: 'bolalar dunyosi',
    },
    {
      img: '../../../assets/angular-shopping-image/home.png',
      title: 'home',
    },
    {
      img: '../../../assets/angular-shopping-image/hizmatlar.png',
      title: 'hizmatlar',
    },
    {
      img: '../../../assets/angular-shopping-image/phone.png',
      title: 'phone',
    },
    {
      img: '../../../assets/angular-shopping-image/moda.png',
      title: 'moda',
    },
    {
      img: '../../../assets/angular-shopping-image/hobbi.png',
      title: 'hobbi',
    },
    {
      img: '../../../assets/angular-shopping-image/transport.png',
      title: 'transport',
    },
    {
      img: '../../../assets/angular-shopping-image/hayvon.png',
      title: 'hayvon',
    },
  ];
}
