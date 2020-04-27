import {Component, OnInit} from '@angular/core';
import {ArticlesService} from './services/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  noResults = false;
  isLoading = true;
  articles: any[] = [];
  phrase = '';
  initialArticle = 0;

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.getArticles(this.initialArticle, this.phrase);
  }

  getArticles(first: number, query: string) {
    this.phrase !== query ? this.initialArticle = 0 : null;
    this.phrase = query;
    this.isLoading = true;
    this.articles = [];
    const last = first + 3;
    this.articlesService.get(query.toLowerCase()).toPromise().then(res => {
      if (res.response.meta.hits > 0) {
        for (first; first <= last; first++) {
          if (res.response.docs[first]) {
            this.articles.push(res.response.docs[first]);
          }
        }
      } else {
        this.noResults = true;
      }
      this.isLoading = false;
    }).catch(e => console.error(e));
  }

  setArticle(article: any) {
    this.articles = [article, ...this.articles.filter(a => a !== article)];
  }

  loadMore() {
    this.initialArticle = this.initialArticle + 4;
    this.getArticles(this.initialArticle, this.phrase);
  }
}
