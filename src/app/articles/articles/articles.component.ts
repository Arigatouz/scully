import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  constructor(private scullyService: ScullyRoutesService) {
  }

  posts$: Observable<ScullyRoute[]> | undefined;

  ngOnInit() {
    this.posts$ = this.scullyService.available$.pipe(
      map((posts: ScullyRoute[]) => posts.filter((post: ScullyRoute) => post.title)));
  }
}
