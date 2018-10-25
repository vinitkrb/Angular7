import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { BootstrapPopoverComponent } from './bootstrap-popover/bootstrap-popover.component';
import { BootstrapTabsetComponent } from './bootstrap-tabset/bootstrap-tabset.component';
import { HomeComponent } from './home/home.component';
import { GithubUserComponent } from './github-user/github-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dragAndDrop',
    component: DragAndDropComponent
  },
  {
    path: 'model',
    component: BootstrapModalComponent
  },
  {
    path: 'popover',
    component: BootstrapPopoverComponent
  },
  {
    path: 'tabset',
    component: BootstrapTabsetComponent
  },
  {
    path: 'github',
    component: GithubUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
