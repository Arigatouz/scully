import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'contact-us', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)},
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
