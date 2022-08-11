import { outputAst } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
  experience = [
    {
      date: 'August 2021 - March 2022',
      company: 'Accenture PH',
      title: 'System Developer Associate',
      description: [
        'Central Measurement & Reporting',
        'Deliver high performance through performance optimization',
        'Demand & Capacity Management',
        'Analyze, design, code and test multiple components of application code',
        'Perform maintenance, enhancements and/or development work',
      ]
    },
    {
      date: 'September 2019 - August 2021',
      company: 'Accenture PH',
      title: 'Platform Experience Associate',
      description: [
        'Understand Client Policies and Guidelines',
        'Review user reports regarding website content',
        'Make decisions according to the defined Policies and Procedures',
        'Interface effectively with other internal and Client teams',
        'Provide quality assurance and improve machine classifiers',
      ]
    },
    {
      date: 'May 2018 - Oct 2018',
      company: 'Civil Aviation Authority of the Philippines',
      title: 'IT staff - Intern',
      description: [
        'Developed an Airmen Medical Record system for Medical Department',
        'Troubleshoot and computer, printers maintenance',
        'Set up and configure LAN server',
        'Installation of OS, drivers, office tools and required software for workstations',
      ]
    },
  ]

  constructor() { }
  ngOnInit(): void {
  }

}
