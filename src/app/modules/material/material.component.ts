import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

export interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})

export class MaterialComponent implements OnInit {

  formGroup: FormGroup;
  Location: Location[] = [
    {value: 'kukatpally', viewValue: 'kukatpally'},
    {value: 'ameerpet', viewValue: 'ameerpet'},
    {value: 'Lingampally', viewValue: 'Lingampally'}
  ];
  post: any = false;
  forminfo:any ='';
  selectedValue: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      fullname: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(emailregex)]],
      Address: this.formBuilder.array([this.createAddressFormGroup()],[Validators.required]),
      SubUsers: this.formBuilder.array([this.createSubFormGroup()],[Validators.required]),
    });
  }
 fullname() {
    return this.formGroup.get('fullname').hasError('required') ? 'please enter fullname please try again!' :'';
  }
  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'you Have enter invalid email address please try again!' :
    this.formGroup.get('email').hasError('pattern') ? 'not valid email pattern please try once!' :'';
  }

	get Address(): FormArray {
		return this.formGroup.get('Address') as FormArray;
  }
  get SubUsers(): FormArray {
		return this.formGroup.get('SubUsers') as FormArray;
  }
  
	createAddressFormGroup() {
		return this.formBuilder.group({
			PloatNo: ['', [Validators.required,]],
			Locality: ['', [Validators.required]],
			PINcode: ['', [Validators.required]],
		})
  }

  createSubFormGroup(){
		return this.formBuilder.group({
			name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
		})
  }
  
  addSubusers() {
		let fg = this.createSubFormGroup();
		this.SubUsers.push(fg);
	}
	addAddress() {
		let fg = this.createAddressFormGroup();
		this.Address.push(fg);
  }

  deleteAddress(idx: number) {
		this.Address.removeAt(idx);
  }
  deleteSubusers(idx: number) {
		this.SubUsers.removeAt(idx);
	}

  onSubmit(post) {
    this.post = post;
    this.formGroup.reset();
  }

  Reset(){
    this.formGroup.reset();
  }
}
