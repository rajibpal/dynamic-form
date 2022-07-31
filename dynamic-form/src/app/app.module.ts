import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddFieldComponent } from './add-field/add-field.component';
import { FormDesignerComponent } from './form-designer/form-designer.component';
import { PreviewFieldComponent } from './preview-field/preview-field.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDesignerComponent,
    AddFieldComponent,
    PreviewFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
