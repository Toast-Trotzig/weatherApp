import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from '@angular/forms';

export interface Idemoperson {
  name: string;
  email: string;
  type: string;
  country: string;
  zip: string;
  comment: string;
  conditions: string;
  sublist: string;
}


@Component({
  selector: 'app-inputdemo',
  templateUrl: './inputdemo.component.html',
  styleUrls: ['./inputdemo.component.css']
})
export class InputdemoComponent implements OnInit {

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    type: ['', Validators.required],
    address: this.fb.group({
      country: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    comment: [''],
    conditions: ['', Validators.required],
    sublist: ['']
  });

  tmp: Idemoperson = {name: 'Submit a form to fill this card with data', email: null, type: null, country: null, zip: null, comment: null, conditions: null, sublist: null};

  countries: any[] = ['Sweden', 'Norway', 'Denmark', 'Finland'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.tmp.name = this.profileForm.value.name;
    this.tmp.email = this.profileForm.value.email;
    this.tmp.type = this.profileForm.value.type;
    this.tmp.country = this.profileForm.value.country;
    this.tmp.zip = this.profileForm.value.zip;
    this.tmp.comment = this.profileForm.value.comment;
    this.tmp.conditions = this.profileForm.value.conditions;
    this.tmp.sublist = this.profileForm.value.sublist;
  }

}
