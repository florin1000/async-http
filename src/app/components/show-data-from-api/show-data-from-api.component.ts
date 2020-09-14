import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-data-from-api',
  templateUrl: './show-data-from-api.component.html',
  styleUrls: ['./show-data-from-api.component.scss']
})
export class ShowDataFromApiComponent implements OnInit {
  @Input() users;
  constructor() { }

  ngOnInit(): void {

  }


}
