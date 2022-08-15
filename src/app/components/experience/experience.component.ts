import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Experience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = []

  constructor(private apiService:ApiService) { }
  ngOnInit(): void {
    this.loadExperience()
  }

  loadExperience(){
    this.apiService
      .getExperiences()
      .subscribe(
        (res:any) => {
          res.map((exp: {endDate:any;startDate:any; createdAt: any; updatedAt: any; __v: any; 
            }) => {
              let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
            delete exp.createdAt
            delete exp.updatedAt
            delete exp.__v

            let starttmp = new Date(exp.startDate.split('T')[0])
            exp.startDate = months[starttmp.getMonth()] + " " + starttmp.getFullYear()
            let endtmp = new Date(exp.endDate.split('T')[0])
            exp.endDate = months[endtmp.getMonth()] + " " + endtmp.getFullYear()
            return exp
          })
          this.experiences = res.reverse()
          console.log(res)
        },
        (error:any) => {
        }
      )
  }

}
