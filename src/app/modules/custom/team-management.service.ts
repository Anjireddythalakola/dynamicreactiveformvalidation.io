import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const All_locations = [
	{ name: 'Kukatpally', displayName: 'Kukatpally' },
	{ name: 'Ameerpet', displayName: 'Ameerpet' },
	{ name: 'Lingampally', displayName: 'Lingampally' }
];

@Injectable({
	providedIn: 'root'
})
export class TeamManagementService {
	getSkills() {
		return of(All_locations);
	}
}