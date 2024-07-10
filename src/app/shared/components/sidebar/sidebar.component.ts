import { Component } from '@angular/core';
import { NewsService } from '../../../news/services/news.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private newsService: NewsService ) {}

  get tags(): string[] {
    return this.newsService.tagsHistory;
  }

  searchTag( tag: string ){
    this.newsService.searchTag(tag);
  }

}
