import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "AngularForms";
  firstname: string;
  lastname: string;
  fname: any;
  lname: any;
  defaultgender = "male";
  gender = [
    { id: "1", value: "male" },
    { id: "2", value: "female" },
    { id: "3", value: "other" },
  ];
  @ViewChild("myform") form: NgForm;

  constructor() {}
  setDefaultValues() {
    // this.form.value.personalDetails.firstname='john';
    // this.form.value.personalDetails.lastname='smith';
    //this.form.value.personalDetails.email='abc@gmail.com';

    // this.form.setValue({
    //   personalDetails:({
    //     firstname:'John',
    //     lastname:'Smith',
    //     email:'abc@gmail.com'

    //   })
    // })
    this.form.form.patchValue({
      personalDetails: {
        firstname: "John",
        lastname: "Smith",
        email: "abc@gmail.com",
      },
    });
  }

  Onsubmit(form: NgForm) {
    console.log(form);
  }
}
