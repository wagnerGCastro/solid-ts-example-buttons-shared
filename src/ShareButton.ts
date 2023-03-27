/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import EventHandler from './EventHandler';

export default class ShareButton {
  public eventHandler: EventHandler;

  constructor(public url: string) {
    this.eventHandler = new EventHandler();
  }

  public bind(clazz: string, socialNetwork: string) {
    let link = '';

    if (socialNetwork === 'twitter') {
      link = `https://twitter.com/share?url=${this.url}`;
      console.log('link', link);
    }

    if (socialNetwork === 'facebook') {
      link = `https://facebook.com/sharer.php?u=${this.url}`;
      console.log('link', link);
    }

    if (socialNetwork === 'linkedin') {
      link = `https://linkedin.com/shareArticle?url=${this.url}`;
      console.log('link', link);
    }

    this.eventHandler.addEventListenerToClass(clazz, 'click', () => window.open(link));
  }
}
