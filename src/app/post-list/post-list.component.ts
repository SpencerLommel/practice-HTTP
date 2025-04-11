import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  postService = inject(DataService);
  posts: Post[] = [];

  ngOnInit() {
    // this.postService
    //   .getPosts()
    //   .pipe(
    //     map((posts: Post[]) =>
    //       posts.filter((post) => post.title.toLowerCase().includes('dol'))
    //     )
    //   )
    //   .subscribe((data) => (this.posts = data));

    // this.posts = this.postService.posts;
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  addPost() {
    this.postService.addPost().subscribe((data) => console.log(data));
  }
}
