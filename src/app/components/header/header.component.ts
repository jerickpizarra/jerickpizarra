import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() about !: HTMLElement
  @Input() technology !: HTMLElement
  @Input() experience !: HTMLElement
  @Input() contact !: HTMLElement

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
