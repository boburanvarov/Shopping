import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping';

  shoppingIsLogin: boolean = false;

  constructor() { }

  ngOnInit() {


    let login = localStorage.getItem("SHOPPING_IS_LOGIN");
    if (login != null) {
      this.shoppingIsLogin = true;
    } else {
      this.shoppingIsLogin = false;
    }
  }
}
