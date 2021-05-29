import { Component, Input, OnChanges, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter-contact',
  templateUrl: './filter-contact.component.html',
  styleUrls: ['./filter-contact.component.css']
})
export class FilterContactComponent implements OnInit, OnChanges {

  nestedFilterText = '';
  @Input('inputFilterText') inputFilter: string = '';
  @Output() filterTextChanged: EventEmitter<string> = new EventEmitter<string>()
  constructor() {
    console.log(this.nestedFilterText)
  }

  updateFilterText(text: string) {
    this.nestedFilterText = text;
    this.filterTextChanged.emit(this.nestedFilterText)
  }

  ngOnInit(): void {
    this.nestedFilterText = this.inputFilter;
    console.log(this.nestedFilterText)
  }

  ngOnChanges() {
    this.nestedFilterText = this.inputFilter;
  }
}
