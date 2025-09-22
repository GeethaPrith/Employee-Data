import { Component, signal, WritableSignal } from '@angular/core';
import { Driver } from '../models/driver';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DriverService } from '../services/driver.service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
@Component({
  selector: 'app-driver',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent {
  showForm: boolean = true;
  driverForm: FormGroup;
  drivers: WritableSignal<Driver[]> = signal<Driver[]>([]);

  constructor(private fb: FormBuilder, private driverService: DriverService) {
    this.driverForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      licenseNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dob: ['', Validators.required]
    });
    this.loadDrivers();
  }

  loadDrivers() {
    this.driverService.getDrivers().pipe(take(1)).subscribe((data: Driver[]) => {
      this.drivers.update(() => data);
    });
  }

  onSubmit() {
    if (this.driverForm.valid) {
      const driver = this.driverForm.value;
      if (driver.id) {
        this.driverService.updateDriver(driver).pipe(take(1)).subscribe(() => {
          this.driverForm.reset();
          this.loadDrivers();
        });
      } else {
        this.driverService.addDriver(driver).pipe(take(1)).subscribe(() => {
          this.driverForm.reset();
          this.loadDrivers();
        });
      }
    }
    console.log(this.driverForm.value);
  }

  editDriver(driver: Driver) {
    this.driverForm.reset(driver);
  }

  deleteDriver(id: number) {
    this.driverService.deleteDiver(id).pipe(take(1)).subscribe(() => this.loadDrivers());
    this.driverForm.reset();
  }
  toggleView() {
    this.showForm = !this.showForm; // Toggle between form and table
  }
}
