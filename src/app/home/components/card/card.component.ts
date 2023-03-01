import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  @Input() previewUrl: string = '';
  @Input() image: string = '';
  audio: HTMLAudioElement;

  ngOnInit(): void {
    this.audio = new Audio(this.previewUrl);
  }
  
  toggle(): void {
    if (this.audio.paused) this.audio.play();
    else this.audio.pause();
  }
}
