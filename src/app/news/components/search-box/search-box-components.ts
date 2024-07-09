import { Component, ElementRef, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'news-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Search news..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor( private newsService: NewsService ) { }

  // searchTag( newTag: string ){
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.newsService.searchTag( newTag );

    this.tagInput.nativeElement.value = '';
  }

}
