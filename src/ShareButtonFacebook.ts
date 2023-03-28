/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonFacebook extends AbstractLinkShareButton {
  constructor(public clazz: string, public url: string) {
    super(clazz, url);
  }

  public createLink() {
    return `https://facebook.com/sharer.php?u=${this.url}`;
  }
}
