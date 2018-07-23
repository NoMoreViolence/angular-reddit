import { Component, OnInit, Input, HostBinding } from '@angular/core'
import * as model from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'
  @Input() article: model.Article

  constructor() {}

  voteUp(): boolean {
    this.article.voteUp()
    return false
  }

  voteDown(): boolean {
    this.article.voteDown()
    return false
  }

  ngOnInit() {}
}
