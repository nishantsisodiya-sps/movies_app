import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { LoginComponent } from './components/login/login.component'
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TVshowAiringComponent } from './components/t-vshow-airing/t-vshow-airing.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import {MatSelectModule} from '@angular/material/select';
import { CustomPipe } from './custom.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { InTheaterComponent } from './components/in-theater/in-theater.component';
import {IvyCarouselModule} from 'carousel-angular';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { AllShowsComponent } from './components/all-shows/all-shows.component';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchlistComponent,
    UpcomingComponent,
    LoginComponent,
    DetailsComponent,
    TvShowsComponent,
    TVshowAiringComponent,
    TvDetailsComponent,
    CustomPipe,
    InTheaterComponent,
    AllMoviesComponent,
    AllShowsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatPaginatorModule,
    NgxPaginationModule,
    IvyCarouselModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
