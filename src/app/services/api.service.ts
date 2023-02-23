import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Episode } from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private episodes$: Observable<Episode[]>;

  // BASE_API_URL can also be setted using an interceptor.
  // The benefit of using an interceptor is that we don't need to inject
  // the baseUrl on every service.
  constructor(
    @Inject('BASE_API_URL') private baseUrl: string,
    private httpClient: HttpClient
  ) {}

  getEpisodes(): Observable<Episode[]> {
    return (this.episodes$ ??= this.httpClient.get<Episode[]>(
      `${this.baseUrl}/shows/2P2BVhs19aqHVg7jUPuTjL/episodes`
    ));
  }
}