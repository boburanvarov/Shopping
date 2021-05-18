import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  images = [
    {
      img: '../../../assets/angular-shopping-image/ayiriboshlash.png',
      title: 'ayriboshlash',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/hobbi.png',
      title: 'hobbi',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/key.png',
      title: 'key',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/hayvon.png',
      title: 'hayvon',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/bolalar-dunyosi.png',
      title: 'bolalar dunyosi',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/home.png',
      title: 'home',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/hizmatlar.png',
      title: 'hizmatlar',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/phone.png',
      title: 'phone',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/moda.png',
      title: 'moda',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/hobbi.png',
      title: 'hobbi',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/transport.png',
      title: 'transport',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
    {
      img: '../../../assets/angular-shopping-image/hayvon.png',
      title: 'hayvon',
      cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore?'
    },
  ];

}
