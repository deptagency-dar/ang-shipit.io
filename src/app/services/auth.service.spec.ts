import { TestBed } from '@angular/core/testing';

import { MOCK_TOKEN } from '@mocks/services/auth.mock';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should returns if user is authenticated', () => {
    localStorage.clear();
    expect(service.isAuth()).toBeFalse();

    localStorage.setItem('access_token', MOCK_TOKEN);
    expect(service.isAuth()).toBeTrue();
  });

  describe('login', () => {
    it('should save token', () => {
      service.login(MOCK_TOKEN);
      expect(localStorage.getItem('access_token')).toEqual(MOCK_TOKEN);
    });
  });

  it('should returns the token', () => {
    expect(service.getAccessToken()).toBeFalsy();
    localStorage.setItem('access_token', MOCK_TOKEN);
    expect(service.getAccessToken()).toEqual(MOCK_TOKEN);
  });
});
