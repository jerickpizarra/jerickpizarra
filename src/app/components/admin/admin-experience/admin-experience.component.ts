import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Experience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-admin-experience',
  templateUrl: './admin-experience.component.html',
  styleUrls: ['./admin-experience.component.scss']
})
export class AdminExperienceComponent implements OnInit {
  isCreate: boolean = true
  exp: any
  showExperience:any
  notification = ''

  experiences: Experience[] = []

  formExperience = new FormGroup({
    _id: new FormControl(),
    startDate: new FormControl(new Date()),
    endDate: new FormControl(),
    company: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
  });

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadExperience()
  }

  toggleExperience(id:any){
    this.showExperience = !this.showExperience
    this.isCreate = true
    if(id !== "Add"){
      this.isCreate = false
      this.exp = this.experiences.find(i => i._id === id)
      if (this.exp) this.formExperience.setValue(this.exp)
    }
  }

  close() {
    this.showExperience = !this.showExperience
    this.formExperience.reset()
  }

  submitForm(){
    if (this.isCreate) {
      this.apiService
        .createExperience(this.formExperience.value)
        .subscribe(
          (res:any) => {
            this.errorMessage('Experience Added')
            this.loadExperience()
          },
          (error:any) => {
            this.notification = error.message,
            setTimeout(() => this.notification = '', 2000)
          }
        )
    } else {
      this.apiService
        .updateExperience(this.formExperience.value)
        .subscribe(
          (res:any) => {
            this.errorMessage('Experience Updated')
            this.loadExperience()
          },
          (error: any) => {
            this.errorMessage('Delete Failed')
          }
        )
    }
    this.close()
  }

  deleteForm(){
    console.log(this.formExperience.value._id)
    this.apiService
      .deleteExperience(this.formExperience.value._id)
      .subscribe(
        (res:any) => {
          this.errorMessage('Experience Succesfully Deleted')
          this.loadExperience()
        },
        (error: any) => {
          this.errorMessage('Experience Delete Failed')
        }
      )
      this.close()
    
  }

  loadExperience(){
    this.apiService
      .getExperiences()
      .subscribe(
        (res:any) => {
          res.map((exp: {endDate:any;startDate:any; createdAt: any; updatedAt: any; __v: any; 
            }) => {
            delete exp.createdAt
            delete exp.updatedAt
            delete exp.__v
            exp.startDate = exp.startDate.split('T')[0]
            exp.endDate = exp.endDate.split('T')[0]
            return exp
          })
          this.experiences = res
        },
        (error:any) => {
          this.notification = 'Unable to Get Data',
          setTimeout(() => this.notification = '', 2000)
        }
      )
  }

  errorMessage(err:any){
    this.notification = err,
    setTimeout(() => this.notification = '', 2000)
  }
}
