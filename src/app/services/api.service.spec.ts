import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import {
  MOCK_EPISODE,
  MOCK_EPISODE_RESPONSE,
} from '@mocks/models/episode.mock';
import { MOCK_API_URL } from '@mocks/urls.mock';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'BASE_API_URL',
          useValue: MOCK_API_URL,
        },
      ],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getEpisodes', () => {
    afterEach(() => {
      httpTestingController.verify();
    });

    it('should get the list of episodes and cache response', () => {
      service.getEpisodes().subscribe({
        next: (episodes) => {
          expect(episodes).toEqual(MOCK_EPISODE);
        },
      });

      // simulates second call.
      service.getEpisodes().subscribe({
        next: (episodes) => {
          expect(episodes).toEqual(MOCK_EPISODE);
        },
      });

      const request = httpTestingController.expectOne(
        `${MOCK_API_URL}/shows/2P2BVhs19aqHVg7jUPuTjL/episodes`
      );
      expect(request.request.method).toEqual('GET');
      request.flush(MOCK_EPISODE_RESPONSE);
    });
  });
});
