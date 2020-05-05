import { Component, OnInit } from '@angular/core';
import { Course } from "../../model/course";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "./../../service/api.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  courseData: Course[];
  CourseImportance: any = ['Moins important', 'important', 'Trés important']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateCourse();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCourse(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      comment: ['', [Validators.required, ]],
      importance: ['', [Validators.required]],
      
    })
    console.log('id')
  }

  //Choose importance
  updateImportance(e) {
    this.editForm.get('importance').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.editForm.controls;
  }

  getCourse(id){
    this.apiService.getCourse(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        comment: data['comment'],
        importance: data['importance'],
        
      });
    });
  }

  updateCourse() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      importance: ['', [Validators.required]],
      
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Merci de confirmer votre action')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateCourse(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/courses-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }


}
