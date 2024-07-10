import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class NewsService {

  private _tagsHistory: string[] = [];
  private apiKey:       string = '1ec2687832ae49f18a4a1d840eb64d40';
  private serviceUrl:   string = 'https://newsapi.org/v2';

  constructor( private http: HttpClient ) { }

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

  async searchTag( tag: string ): Promise<void> {

    if ( tag.length === 0) return;
    this.organizedHistory(tag);

    const params = new HttpParams()
    .set('q', tag)
      .set('apiKey', this.apiKey)
      .set('pageSize', '6')

    this.http.get(`${ this.serviceUrl }/everything`, { params })
      .subscribe( resp => {
        console.log(resp);

      });

  }

}
