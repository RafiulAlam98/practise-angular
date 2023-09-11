import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue: string = '';
  @Output()
  searchChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  onChnageSearchText() {
    this.searchChangeEvent.emit(this.searchValue);
    // console.log(this.searchValue);
  }
}
