import {Component, Inject, OnInit} from '@angular/core';
import {Service} from '../../shared/models/professional.model';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-professional',
  templateUrl: './add-update-professional.component.html',
  styleUrls: ['./add-update-professional.component.css']
})
export class AddUpdateProfessionalComponent implements OnInit {
  selected: Service = Service.MEDICAL;
  professionalForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    service: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl(),
    county: new FormControl(''),
    municipality: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AddUpdateProfessionalComponent>,
              @Inject(MAT_DIALOG_DATA) public id?: number) {
  }

  ngOnInit(): void {
  }

  save() {

  }

  close() {
    this.dialogRef.close();
  }
}
