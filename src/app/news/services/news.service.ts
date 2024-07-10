import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = '1ec2687832ae49f18a4a1d840eb64d40';

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizedHistory( tag: string ) {

    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !==tag )
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);

  }

  searchTag( tag: string ): void {

    if ( tag.length === 0) return;
    this.organizedHistory(tag);

  }

}
