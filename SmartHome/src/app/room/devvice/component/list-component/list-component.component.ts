import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  constructor() { }

  filter: string;
  @Input() components: Component[];

  ngOnInit() {
  }

}
