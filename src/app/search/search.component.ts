import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue: string = '';

  changeSearchValue(eventeData: any) {
    console.log((<HTMLInputElement>eventeData.target).value);
    this.searchValue = (<HTMLInputElement>eventeData.target).value;
  }
}
