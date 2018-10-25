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

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponent,
    BootstrapModalComponent,
    BootstrapPopoverComponent,
    BootstrapTabsetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
