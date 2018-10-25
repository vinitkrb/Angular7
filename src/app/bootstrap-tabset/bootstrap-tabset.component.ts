import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-tabset',
  templateUrl: './bootstrap-tabset.component.html',
  styleUrls: ['./bootstrap-tabset.component.scss']
})
export class BootstrapTabsetComponent implements OnInit {
  currentOrientation = 'horizontal';
  constructor() { }

  ngOnInit() {
  }

}
