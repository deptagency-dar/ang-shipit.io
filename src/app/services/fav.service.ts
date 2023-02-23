import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavService {
  getFavs(): string[] {
    return JSON.parse(localStorage.getItem('favs') || '[]');
  }

  onFav(id: string): void {
    const isFav = this.isFav(id);
    let favs = this.getFavs();
    if (isFav) {
      favs = favs.filter((favId) => favId !== id);
    } else {
      favs.push(id);
    }
    this.saveFavs(favs);
  }

  isFav(id: string): boolean {
    return this.getFavs().find((favId) => favId === id) != undefined;
  }

  private saveFavs(ids: string[]): void {
    localStorage.setItem('favs', JSON.stringify(ids));
  }
}
