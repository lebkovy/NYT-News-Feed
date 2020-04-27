import {Component, Input, OnInit} from '@angular/core';
import {slideInLeft} from '../animations';

@Component({
  selector: 'app-article-thumb',
  templateUrl: './article-thumb.component.html',
  styleUrls: ['./article-thumb.component.scss'],
  animations: [slideInLeft]
})
export class ArticleThumbComponent implements OnInit {

  @Input('article') article;

  styles;

  constructor() {
  }

  ngOnInit(): void {
    this.setStyles();
  }

  setStyles(): void {
    const media = this.article.multimedia.filter(a => a.url != null);
    if (media.length > 0) {
      this.styles = {
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6124824929971988) 23%, rgba(255,255,255,0) 100%), url('https://nytimes.com/${media[0].url}')`
      };
    } else {
      this.styles = {
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6124824929971988) 23%, rgba(255,255,255,0) 100%), url('https://res.cloudinary.com/devex/image/asset/photo-placeholder-36421b5c26c81c331f72dd9744935f35.png')`
      };
    }
  }
}
