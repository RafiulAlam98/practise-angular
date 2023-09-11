import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NotificationComponent } from './notification/notification.component';
import { ProductsComponent } from './products/products.component';
import { CoursesComponent } from './courses/courses.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    SearchComponent,
    NotificationComponent,
    ProductsComponent,
    CoursesComponent,
    FilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
