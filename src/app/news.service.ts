import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  private baseUrl: string = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=6891b4dda245493aab95bd3d72463601';

  constructor(private http: Http) { }

  getTopHeadline(): Observable<any> {

    return this.http.get(this.baseUrl)
      .map(result => {
        return result.json()
      })

  }

}
