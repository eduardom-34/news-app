import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/news.interfaces';

@Component({
  selector: 'news-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor( private newsService: NewsService ) {}

  get news(): Article[] {

    return this.newsService.articleList;

  }


}
