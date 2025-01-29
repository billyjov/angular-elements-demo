import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MicroFrontendLoaderService {
  private loaded = false;

  loadScript(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loaded) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = url;
      script.type = 'module';
      script.onload = () => {
        this.loaded = true;
        resolve();
      };
      script.onerror = () => {
        reject(new Error(`Failed to load script: ${url}`));
      };
      document.body.appendChild(script);
    });
  }
}
