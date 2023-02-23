import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/models/episode.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  episodes$: Observable<Episode[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.episodes$ = this.apiService.getEpisodes();
  }
}
