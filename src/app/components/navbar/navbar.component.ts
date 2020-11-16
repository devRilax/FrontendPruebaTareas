import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() usuario: string;


  constructor(private router : Router) { }

  ngOnInit() {
  }

  salir() {
    sessionStorage.clear();
    this.router.navigate(["auth"])
  }

}
