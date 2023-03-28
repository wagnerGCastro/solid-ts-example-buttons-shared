/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonLinkedin extends AbstractLinkShareButton {
  constructor(public clazz: string, public url: string) {
    super(clazz, url);
  }

  public createLink() {
    return `https://linkedin.com/shareArticle?url=${this.url}`;
  }
}
