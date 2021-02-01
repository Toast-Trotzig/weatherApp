import { Component, OnInit } from '@angular/core';
import {Idemoperson} from '../inputdemo/inputdemo.component';

@Component({
  selector: 'app-modelinputdemo',
  templateUrl: './modelinputdemo.component.html',
  styleUrls: ['./modelinputdemo.component.css']
})
export class ModelinputdemoComponent implements OnInit {

  tmp: Idemoperson = {name: null, email: null, type: null, country: null, zip: null, comment: null, conditions: null, sublist: null};
  submittedperson: Idemoperson = {name: null, email: null, type: null, country: null, zip: null, comment: null, conditions: null, sublist: null};

  countries: any[] = ['Sweden', 'Norway', 'Denmark', 'Finland'];

  submitted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.submittedperson.name = this.tmp.name;
    this.submittedperson.email = this.tmp.email;
    this.submittedperson.type = this.tmp.type;
    this.submittedperson.country = this.tmp.country;
    this.submittedperson.zip = this.tmp.zip;
    this.submittedperson.comment = this.tmp.comment;
    this.submittedperson.conditions = this.tmp.conditions;
    this.submittedperson.sublist = this.tmp.sublist;
  }

  onClear(): void {
    this.submitted = false;
  }

}
