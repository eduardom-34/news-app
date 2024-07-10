import { Component, Input } from '@angular/core';
import { Article } from '../../interfaces/news.interfaces';

@Component({
  selector: 'news-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input()
  public news: Article[] = [];

}
