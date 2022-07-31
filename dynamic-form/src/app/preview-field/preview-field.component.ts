import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// import { AddUpdate } from "../models"

@Component({
  selector: 'app-preview-field',
  templateUrl: './preview-field.component.html',
  styleUrls: ['./preview-field.component.scss']
})
export class PreviewFieldComponent implements OnInit, OnChanges {

  @Input()
  previewFormArray!: any[];
  previewForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    this.previewForm = this.fb.group({})
    this.previewFormArray.sort((a, b) => { return a.Order - b.Order })
    this.createFormControl();
  }

  createFormControl() {
    this.previewFormArray.forEach(element => {
      if (element.Visible) {
        if (element.Required) {
          if (element.Type == 'Checkbox') {
            this.previewForm.addControl(element.Name, new FormControl(false, Validators.requiredTrue));
          } else
            this.previewForm.addControl(element.Name, new FormControl('', Validators.required));
        } else {
          this.previewForm.addControl(element.Name, new FormControl(''))
        }
      }
    })
  }

}
