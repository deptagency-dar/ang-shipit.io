import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

// import { EpisodeAudio } from '@models/episode-audio.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  // @Input() episodeAudio: EpisodeAudio;
  @Input() name: string = '';
  @Input() previewUrl: string = '';
  @Input() image: string = '';
  audio: HTMLAudioElement;

  constructor() { }

  ngOnInit(): void {
    this.audio = new Audio(this.previewUrl);
  }

  get playImage(): string {
    return this.audio.paused ? 'assets/play.png' : 'assets/pause.png';
  }

  toggle(): void {
    if (this.audio.paused) this.audio.play();
    else this.audio.pause();
  }
}
