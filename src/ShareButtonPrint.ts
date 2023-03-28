/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonPrint extends AbstractShareButton {
  constructor(public clazz: string) {
    super(clazz);
  }

  createAction() {
    return () => window.print();
  }
}
