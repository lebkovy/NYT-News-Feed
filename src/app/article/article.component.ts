import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input('article') article: any;

  params = {liked: false, favourite: false, read: false};

  constructor() {
  }

  setImage(): string {
    const media = this.article.multimedia.filter(a => a.url != null);
    if (media.length > 0) {
      return `url(https://nytimes.com/${media[0].url})`;
    } else {
      return `url(https://res.cloudinary.com/devex/image/asset/photo-placeholder-36421b5c26c81c331f72dd9744935f35.png)`;
    }
  }

}
