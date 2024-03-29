import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { map, Observable, shareReplay } from 'rxjs';

import { Episode, EpisodeResponse } from '@models/episode.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private episodes$: Observable<Episode[]>;

  // BASE_API_URL can also be setted using an interceptor.
  // The benefit of using an interceptor is that we don't need to inject
  // the baseUrl on every service.
  // The downside is that every outgoing request will use the same base url.
  constructor(
    @Inject('BASE_API_URL') private baseUrl: string,
    private httpClient: HttpClient
  ) {}

  getEpisodes(): Observable<Episode[]> {
    return (this.episodes$ ??= this.httpClient
      .get<EpisodeResponse>(
        `${this.baseUrl}/shows/2P2BVhs19aqHVg7jUPuTjL/episodes`
      )
      .pipe(
        map((data) => data.items),
        shareReplay({ bufferSize: 1, refCount: true })
      ));
  }
}
