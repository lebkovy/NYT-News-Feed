import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  apiKey = '7GBS5mcTBgPVMCSGjGgcAUQJLU6smSkh';

  constructor(private http: HttpClient) {
  }

  get(query: string): Observable<any> {
    return this.http.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${this.apiKey}`);
  }
}


