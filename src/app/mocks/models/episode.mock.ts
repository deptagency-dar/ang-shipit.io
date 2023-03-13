import { Episode, EpisodeResponse } from '@app/app/models/episode.model';

export const MOCK_EPISODE: Episode[] = [
  {
    audio_preview_url: 'test',
    description: 'test',
    duration_ms: 1000,
    explicit: false,
    external_urls: {
      spotify: 'test',
    },
    href: 'test',
    html_description: 'test',
    id: 'test',
    images: [],
    is_externally_hosted: false,
    is_playable: true,
    language: 'test',
    languages: [],
    name: 'test',
    release_date: 'test',
    release_date_precision: 'test',
    type: 'test',
    uri: 'test',
  },
];

export const MOCK_EPISODE_RESPONSE: EpisodeResponse = {
  items: MOCK_EPISODE,
};
