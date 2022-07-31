import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import { AddUpdate } from '../models';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.scss']
})
export class FormDesignerComponent implements OnInit {
 
  formFieldArray:any = [];
  showPreview = false;
  rowData:any;
  showAddUpdate = false; 
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
   
  }
  addNewField(newField: { UniqueId: any; }){
    let formFieldArrayCopy = [...this.formFieldArray];
    formFieldArrayCopy.forEach((ele,i) => {
      if(ele.UniqueId == newField.UniqueId){
        formFieldArrayCopy.splice(i,1);
        return;
      }
    })
    formFieldArrayCopy.push(newField);
    formFieldArrayCopy.sort((a,b)=>{return a.Order - b.Order})
    this.formFieldArray = [...formFieldArrayCopy]
  }
  openPreview(){
    this.showPreview =false;
    this.showPreview = true;
  }

  setRowData(field:any){ 
    this.rowData = {...field}; 
  }

  add(){
    this.rowData=null;
    this.showAddUpdate = true;

  }
  update(){
    if(this.rowData){
      this.showAddUpdate = true;
    }
  }
  closeAddUpdate(doClose: boolean){
    this.showAddUpdate = doClose;
    this.rowData = null
  }

}
