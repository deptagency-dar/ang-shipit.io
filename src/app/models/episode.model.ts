export interface Episode {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  html_description: string;
  id: string;
  images: ImagesEntity[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages?: string[] | null;
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
}
export interface ExternalUrls {
  spotify: string;
}
export interface ImagesEntity {
  height: number;
  url: string;
  width: number;
}
