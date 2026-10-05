import { Injectable } from '@angular/core';
import Lenis from 'lenis';
@Injectable({
  providedIn: 'root',
})
export class LenisService {
  @Injectable({
    providedIn: 'root',
  })
  private lenis = new Lenis({
    autoRaf: true,
  });
  stop() {
    this.lenis.stop();
  }

  start() {
    this.lenis.start();
  }
}
