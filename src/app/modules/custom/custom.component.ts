import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { TeamManagementService } from './team-management.service';
import { Team } from './team';

@Component({
	selector: 'app-custom',
	templateUrl: './custom.component.html',
	styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
	Cmr: FormGroup;
	isValidFormSubmitted = null;
	allLocations: Observable<any[]>;
	shopdetails:any;

	constructor(
		private formBuilder: FormBuilder,
		private teamMngService: TeamManagementService) {
	}

	ngOnInit() {
		this.allLocations = this.teamMngService.getSkills();
		this.Cmr = this.formBuilder.group({
			FullName: ['', Validators.required],
			Email: ['', [Validators.required, Validators.email]],
			Address: this.formBuilder.array([this.createAddressFormGroup()],[Validators.required]),
			SubUsers: this.formBuilder.array([this.createSubFormGroup()],[Validators.required]),		
		});
	}

	createAddressFormGroup() {
		return this.formBuilder.group({
			PloatNo: ['', [Validators.required]],
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

	get FullName() {
		return this.Cmr.get('FullName');
	}
	get Email() {
		return this.Cmr.get('Email');
	}
	get Address(): FormArray {
		return this.Cmr.get('Address') as FormArray;
	}
	get SubUsers(): FormArray {
		return this.Cmr.get('SubUsers') as FormArray;
	}
	
	addAddress() {
		let fg = this.createAddressFormGroup();
		this.Address.push(fg);
	}

	addSubusers() {
		let fg = this.createSubFormGroup();
		this.SubUsers.push(fg);
	}

	deleteAddress(idx: number) {
		this.Address.removeAt(idx);
	}

	deleteSubusers(idx: number) {
		this.SubUsers.removeAt(idx);
	}

	onFormSubmit() {
	this.shopdetails= JSON.stringify(this.Cmr.value);
		this.Cmr.reset();
	}

	resetTeamForm() {
		this.Cmr.reset();
	}
}
