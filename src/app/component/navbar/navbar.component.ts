import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DwLoginComponent } from '../dialog/dw-login/dw-login.component';

export interface DialogData {
  username: string;
  password: string;
}
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  shoppingIsLogin: boolean = false;
  
  collapse: boolean = true;

  ngOnInit() {

    }

    username: string = "";
    password: string = "";

  constructor(public dialog: MatDialog,
    private router: Router) { }

  loginDialog(): void {
    const dialogRef = this.dialog.open(DwLoginComponent, {
      width: '250px',
      data: { username: this.username, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        if (result.username === "admin" && result.password === "admin") {

          console.log("WELCOME ADMIN");

          let data = {
            username: "admin",
            fullname: "Admin Adminov"
          }

          localStorage.setItem("SHOPPING_IS_LOGIN", JSON.stringify(data));
          this.router.navigate(['/']);
          window.location.reload();
        }
      }
    });
  }

  account() {

  }

  logout() {

  }

  search() {

  }

}
