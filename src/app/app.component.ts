import { Component } from '@angular/core';
import { commentList } from './comments/comment-list';
import { Service } from './service.injectable';

@Component(
{
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    comments = commentList;
}