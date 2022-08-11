import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technology = [
    {
      name: 'MongoDB',
      url: 'https://www.mongodb.com/',
      img: 'https://www.instana.com/media/01_INSTANA_IconSet_MongoDB.svg'
    },
    {
      name: 'ExpressJS',
      url: 'https://expressjs.com/',
      img: 'https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png'
    },
    {
      name: 'Angular',
      url: 'https://angular.io/',
      img: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    },
    {
      name: 'NodeJS',
      url: 'https://nodejs.org/en/',
      img: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png'
    },
    {
      name: 'Tailwind',
      url: 'https://tailwindcss.com/',
      img: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg'
    },
    {
      name: 'Angular Material',
      url: 'https://material.angular.io/',
      img: 'https://angular.io/generated/images/marketing/concept-icons/material.png'
    },
    {
      name: 'Google App Script',
      url: 'https://developers.google.com/apps-script',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/1200px-Google_Apps_Script.svg.png'
    },
    {
      name: 'MySQL',
      url: 'https://www.mysql.com/',
      img: 'https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
