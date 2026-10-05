import { Injectable, signal } from '@angular/core';
import gsap from 'gsap';
@Injectable({
  providedIn: 'root',
})
export class GsapService {
  private count = 0;

  animationParams = {
    filmRoll: {
      duration: 1.5,
      ease: 'power3.out',
      overwrite: true,
    },
  };
  
  init() {
    this.count = document.querySelector('.film-roll')?.children.length ?? 0;
  }

  filmRoll() {
    gsap.to('.film-roll > p', {
      ...this.animationParams.filmRoll,
      yPercent: -100 * (this.count - 1),
    });
  }

  filmRollReverse() {
    gsap.to('.film-roll > p', {
      ...this.animationParams.filmRoll,
      yPercent: 0,
    });
  }
}
