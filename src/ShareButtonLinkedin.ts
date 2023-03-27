/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonLinkedin extends AbstractShareButton {
  constructor(public clazz: string, public url: string) {
    super(clazz);
  }

  public createLink() {
    return `https://linkedin.com/shareArticle?url=${this.url}`;
  }
}
