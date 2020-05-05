import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  submitted = false;
  courseForm: FormGroup;
  CourseImportance:any = ['Moins important', 'Important', 'Trés important']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      importance: ['', [Validators.required]],
      
    })
  }

  //choose importance
  ChooseImportance(e){
    this.courseForm.get('importance').setValue(e, {
      onlySelf: true
    })
  }

  //Getter to acces form control
  get myForm(){
    return this.courseForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.courseForm.valid) {
      return false;
    } else {
      this.apiService.createCourse(this.courseForm.value).subscribe(
        (res) => {
          console.log('Course successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/courses-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}


