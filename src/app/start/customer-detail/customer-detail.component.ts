import { Component, Input } from '@angular/core';
import { Customer } from '../../model/customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css',
})
export class CustomerDetailComponent {
  // Customer data passed from parent
  @Input() customer: Customer | null = null;
  saveMessage: string = '';
  constructor() {}

  // Save customer data and display a success message
  saveCustomer() {
    console.log('Customer saved:', this.customer);
    this.saveMessage = 'Customer details have been saved successfully!';
  }
}
