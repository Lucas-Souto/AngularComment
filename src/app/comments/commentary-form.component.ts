import { Component, Inject, ViewContainerRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Service } from '../service.injectable';

@Component(
{
    selector: 'comment-form',
    template:
        `<p id="form-title">Make a comment:</p>
        <input id="form-author" type="text" placeholder="user123" [formControl]="authorControl" />
        <textarea id="form-content" placeholder="I think..." [formControl]="contentControl"></textarea>
        <button id="form-send" (click)="sendComment()">Send</button>`,
    styleUrls: ["../app.component.css"]
})
export class CommentaryFormComponent
{
    authorControl = new FormControl('');
    contentControl = new FormControl('');
    
    private service: Service;

    constructor(@Inject(Service) service, @Inject(ViewContainerRef) viewContainerRef)
    {
        this.service = service;

        service.setRootViewContainerRef(viewContainerRef);
    }

    sendComment() : void
    {
        const author = this.authorControl.value;
        const content = this.contentControl.value;
        
        if (author.lenght === 0 || content.lenght === 0) return;

        this.service.addCommentaryComponent(author, content);

        this.authorControl.setValue('');
        this.contentControl.setValue('');
    }
}