import { Injectable } from '@angular/core';
import { Address } from 'src/app/shared/models/Address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor() {}
  private addresses: Address[] = [
    {
      id: 1,
      street: '123 Main St',
      city: 'Example City',
      state: 'Example State',
      postalCode: '12345',
    },
  ];

  getAddresses(): Address[] {
    return this.addresses;
  }

  getAddress(id: number): Address | undefined {
    return this.addresses.find((address) => address.id === id);
  }

  addAddress(newAddress: Address): void {
    newAddress.id = this.generateUniqueId(); // You need to implement this method
    this.addresses.push(newAddress);
  }

  updateAddress(updatedAddress: Address): void {
    const index = this.addresses.findIndex(
      (address) => address.id === updatedAddress.id
    );
    if (index !== -1) {
      this.addresses[index] = updatedAddress;
    }
  }

  deleteAddress(id: number): void {
    const index = this.addresses.findIndex((address) => address.id === id);
    if (index !== -1) {
      this.addresses.splice(index, 1);
    }
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 10000);
  }
}
