import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    CommonModule,
    CustomerDetailComponent,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  constructor(private customerservice: CustomerService) {}

  customers: Customer[] = [];
  selectedCustomer: Customer | null = null;

  ngOnInit(): void {
    // Fetch customers on init
    this.customerservice.getCustomers().subscribe((ret) => {
      this.customers = ret;
    });
  }

  // Toggle customer selection
  onSelectCustomer(customer: Customer): void {
    this.selectedCustomer = this.selectedCustomer === customer ? null : customer;  
    if (this.selectedCustomer) {
      this.selectedCustomer.birthday = new Date(this.selectedCustomer.birthday);
    }
  }
  
  
}
