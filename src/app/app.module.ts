import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { BootstrapPopoverComponent } from './bootstrap-popover/bootstrap-popover.component';
import { BootstrapTabsetComponent } from './bootstrap-tabset/bootstrap-tabset.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponent,
    BootstrapModalComponent,
    BootstrapPopoverComponent,
    BootstrapTabsetComponent,
    HomeComponent,
    GithubUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgbModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
