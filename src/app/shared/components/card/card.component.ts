import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { FavService } from '@services/fav.service';
// import { EpisodeAudio } from '@models/episode-audio.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  // @Input() episodeAudio: EpisodeAudio;
  @Input() id: string;
  @Input() name: string = '';
  @Input() previewUrl: string = '';
  @Input() image: string = '';
  audio: HTMLAudioElement;
  favImg: string;

  constructor(private favService: FavService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.audio = new Audio(this.previewUrl);
    this.setFavImg();
  }

  // get favImg(): string {
  //   // return this.favService.isFav() ? 'assets/heart.png' : 'assets/heart-empty.png';
  //   console.log('favImg');
  //   return 'assets/heart-empty.png';
  // }

  get playImage(): string {
    return this.audio.paused ? 'assets/play.png' : 'assets/pause.png';
  }

  setFavImg(): void {
    this.favImg = this.favService.isFav(this.id)
      ? 'assets/heart.png'
      : 'assets/heart-empty.png';
  }
  
  fav(): void {
    this.favService.onFav(this.id);
    this.setFavImg();
    this.cd.markForCheck();
  }
  
  toggle(): void {
    if (this.audio.paused) this.audio.play();
    else this.audio.pause();
  }

}
