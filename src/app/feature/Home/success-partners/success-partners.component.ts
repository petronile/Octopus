import { Component } from '@angular/core';

@Component({
  selector: 'app-success-partners',
  templateUrl: './success-partners.component.html',
  styleUrls: ['./success-partners.component.scss']
})
export class SuccessPartnersComponent {

  partners: any[];

  constructor() {
    this.partners = [
      {
        img:"img-shell"
      },
      {
        img:"img-valvo"
      },
      {
        img:"img-castrol"
      },
      {
        img:"img-valvo"
      },
      {
        img:"img-castrol"
      },
    ];
  }
}
