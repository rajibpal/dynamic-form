import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.scss']
})
export class AddFieldComponent implements OnInit, OnChanges {
  @Input() rowData:any;
  @Output() newField = new EventEmitter<any>()
  @Output() close = new EventEmitter();

  addUpdateField = {
    UniqueId: 0,
    Visible: false,
    Required: false,
    Order: '',
    Name: '',
    Type: '',
    Value: ''

  };
  typeOptions:string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.typeOptions = [
      "Text", "TextArea", "Dropdown", "Multiselect", "Checkbox"
    ]
  }

  ngOnChanges() {
    if (this.rowData) {
      this.addUpdateField = this.rowData;
    }
  }

  addForms() {
    if (!this.addUpdateField.UniqueId) {
      this.addUpdateField.UniqueId = Date.now();
    }
    this.newField.emit(this.addUpdateField);
    this.addUpdateField = {
      UniqueId: 0,
      Visible: false,
      Required: false,
      Order: '',
      Name: '',
      Type: '',
      Value: ''
    }
    this.close.emit(false);

  }
  cancel() {
    this.addUpdateField = {
      UniqueId: 0,
      Visible: false,
      Required: false,
      Order: '',
      Name: '',
      Type: '',
      Value: ''
    }

    this.close.emit(false);
  }

}
