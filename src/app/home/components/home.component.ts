import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { catchError, filter, ignoreElements, map, Observable, of } from 'rxjs';

import { Episode } from '@models/episode.model';
import { ApiService } from '@services/api.service';
import { FavService } from '@app/app/services/fav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  episodes$: Observable<Episode[]>;
  episodesError$: Observable<Error>;

  constructor(private apiService: ApiService, private favServie: FavService) {}

  ngOnInit(): void {
    this.episodes$ = this.apiService.getEpisodes();
    this.episodesError$ = this.episodes$.pipe(
      ignoreElements(),
      catchError((err: Error) => of(err))
    );
  }

  showAll(): void {
    this.episodes$ = this.apiService.getEpisodes();
  }

  showFavs(): void {
    const favs = this.favServie.getFavs();
    this.episodes$ = this.apiService
      .getEpisodes()
      .pipe(
        map((episodes) =>
          episodes.filter((episode) => favs.includes(episode.id))
        )
      );
  }
}
