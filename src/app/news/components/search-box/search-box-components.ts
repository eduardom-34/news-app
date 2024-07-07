import { Component } from '@angular/core';

@Component({
  selector: 'news-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Search news..."
    >
  `
})

export class SearchBoxComponent {

  constructor() { }

}
