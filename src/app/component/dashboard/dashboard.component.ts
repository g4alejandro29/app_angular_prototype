import {Component, OnInit} from '@angular/core';
import {PostService} from '@/src/app/service/post.service';
import {Post} from '@/src/app/models/post';
import {Comment} from '@/src/app/models/comment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts: Post[];
  public comments: Comment[];

  constructor(private postService: PostService) {
  }

  getData() {
    this.postService.getPost()
      .subscribe(data => {
          this.posts = data.body;
        },
        error => {
          console.log(error);
        },
        () => {
          this.getComment();
        }
      );
  }

  getComment() {
    if (this.posts.length > 0) {
      this.postService.getComment(this.posts[0].id)
        .subscribe(data => {
          this.comments = data.body;
        });
    } else {
      return this.comments = [];
    }
  }

  ngOnInit() {
    this.getData();
  }

}
