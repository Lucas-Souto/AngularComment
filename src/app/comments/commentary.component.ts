import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component(
{
  encapsulation: ViewEncapsulation.None,
  selector: "comment",
  template: `<p class="comment-title"><a [routerLink]="['/user', author]">@{{ author }}</a> says:</p>
    <p class="comment-content">{{ content }}</p>
    <button class="like" (click)="toggleLike()">{{ liked ? "Liked" : "Like" }}</button>`,
  styleUrls: ["../app.component.css"]
})
export class CommentaryComponent
{
  @Input() author: string;
  @Input() content: string;
  @Input() liked: boolean;

  toggleLike(): void {
    this.liked = !this.liked;
  }
}