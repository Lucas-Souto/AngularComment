import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Service } from './service.injectable';
import { HelloComponent } from './hello.component';
import { CommentaryComponent } from './comments/commentary.component';
import { CommentaryFormComponent } from './comments/commentary-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule(
{
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
    declarations: [AppComponent, HelloComponent, CommentaryComponent, CommentaryFormComponent],
    providers: [Service],
    bootstrap: [AppComponent],
    entryComponents: [CommentaryComponent]
})
export class AppModule {}
