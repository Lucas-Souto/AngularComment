import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component(
{
    selector: 'hello',
    template: `<h1>Hello! I'm {{username}}.</h1>`,
    styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit 
{
    username: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() : void
    {
        this.username = this.route.snapshot.paramMap.get('username');
    }
}