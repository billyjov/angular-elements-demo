import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, NgZone, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MicroFrontendLoaderService } from './micro-frontend-loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'main-app';

  mfLoader = inject(MicroFrontendLoaderService);

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).ngZone = inject(NgZone);
  }

  ngOnInit(): void {
    this.mfLoader
      .loadScript('assets/js/elements-1/main.js')
      .then(() => {
        console.log('MFE1 loaded:');
      })
      .catch((error) => {
        console.error('Failed to load MFE1', error);
      });
  }
}
