/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonTwitter extends AbstractShareButton {
  constructor(public clazz: string, public url: string) {
    super(clazz);
  }

  public createLink() {
    throw new Error('Unsupport method');
  }
}
