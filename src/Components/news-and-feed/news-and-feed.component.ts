import {Component, OnInit} from '@angular/core';
import {postInputBarHandler, showAnimation} from '../../Animations/simpleAnimations';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../../services/post/post.service';
import {AuthService} from '../../services/auth/auth.service';
import {Post} from '../../Models/postModel';

@Component({
  selector: 'app-news-and-feed',
  templateUrl: './news-and-feed.component.html',
  styleUrls: ['./news-and-feed.component.css'],
  animations: [postInputBarHandler, showAnimation]
})
export class NewsAndFeedComponent implements OnInit {

  state = 'closed';
  postForm: FormGroup;
  posts: Post[] = [];

  stateHandler() {
    this.state = (this.state === 'closed') ? 'opened' : 'closed';
  }

  onPostSubmit() {
    this.postSv.addPost({
      postContent: this.postForm.get('content').value,
      postTitle: this.postForm.get('title').value,
      date: Date.now(),
      poster: this.authSv.user.displayName,
      important: (this.authSv.user.displayName === 'Hakob Beglaryan')
    });

  }

  constructor(private postSv: PostService, public authSv: AuthService) {
  }


  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    });

    this.postSv.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.posts.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;


      });

    });

  }


}
