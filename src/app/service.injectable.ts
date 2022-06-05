import { ApplicationRef, ComponentFactoryResolver, Injectable, Inject, ReflectiveInjector, ViewContainerRef } from '@angular/core';
import { CommentaryComponent } from './comments/commentary.component';

@Injectable()
export class Service
{
    factoryResolver : ComponentFactoryResolver;
    rootViewContainer : ViewContainerRef;

    constructor(private app: ApplicationRef, @Inject(ComponentFactoryResolver) factoryResolver)
    {
        this.factoryResolver = factoryResolver;
    }

    setRootViewContainerRef(viewContainerRef)
    {
        this.rootViewContainer = viewContainerRef;
    }

    addCommentaryComponent(author, content)
    {
        const factory = this.factoryResolver.resolveComponentFactory(CommentaryComponent);
        const container = document.createElement('div');
        const comment = document.createElement('comment');

        container.appendChild(comment);
        document.getElementById('comments').appendChild(container);
        
        const component = factory.create(this.rootViewContainer.parentInjector, [], comment);
        
        component.instance.author = author;
        component.instance.content = content;
        component.instance.liked = false;

        this.app.attachView(component.hostView);
    }
}