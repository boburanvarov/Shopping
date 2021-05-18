import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("chiqish");
    localStorage.removeItem("SHOPPING_IS_LOGIN");
    this.router.navigate(['/'])
    window.location.reload();
  }

}
