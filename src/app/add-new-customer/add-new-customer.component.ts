import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};
  constructor() { }

  ngOnInit(): void {
  }

}
