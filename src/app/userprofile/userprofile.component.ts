import { Component, OnInit } from '@angular/core';
import { Address } from '../shared/models/Address';
import { AddressService } from '../services/user/address.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  addresses: Address[] = [];

  constructor(private addressService: AddressService) {
    this.addresses = addressService.getAddresses();
  }
  ngOnInit(): void {}
}
