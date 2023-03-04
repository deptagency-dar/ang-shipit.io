import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { Episode } from '@models/episode.model';
import { ApiService } from '@services/api.service';
import { FavService } from '@services/fav.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let apiService: ApiService;

  beforeEach(async () => {
    const apiServiceStub = jasmine.createSpyObj<ApiService>('ApiService', {
      getEpisodes: of([])
    });

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: ApiService,
          useValue: apiServiceStub,
        },
        FavService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    apiService = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should get list of episodes', () => {
      expect(apiService.getEpisodes).toHaveBeenCalled();
    });
  });
});
