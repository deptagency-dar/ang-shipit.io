import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { catchError, ignoreElements, Observable, of } from 'rxjs';

import { Episode } from '@models/episode.model';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  episodes$: Observable<Episode[]>;
  episodesError$: Observable<Error>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.episodes$ = this.apiService.getEpisodes();
    this.episodesError$ = this.episodes$.pipe(
      ignoreElements(),
      catchError((err: Error) => of(err))
    );
  }
}
