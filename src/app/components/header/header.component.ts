import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    this.showMenu = false;
    el.scrollIntoView();
  }

}
