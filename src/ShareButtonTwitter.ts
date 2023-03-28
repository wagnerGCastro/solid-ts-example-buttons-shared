/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonTwitter extends AbstractLinkShareButton {
  constructor(public clazz: string, public url: string) {
    super(clazz, url);
  }

  public createLink() {
    return `https://twitter.com/share?url=${this.url}`;
  }
}
