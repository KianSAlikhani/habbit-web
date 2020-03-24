import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public nameFormControl = new FormControl('', [
    Validators.required
  ]);

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
    // PATTERN
  ]);

  public tosFormControl = new FormControl('', [
    Validators.required,
    Validators.requiredTrue
  ]);

  public tosCheck: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit() {
    // console.log(form.value);
  }

}
