import AbstractShareButton from './AbstractShareButton';

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
  url: string;

  constructor(clazz: string, url: string) {
    super(clazz);
    this.url = url;
  }

  abstract createLink(): string;

  public createAction(): any {
    const link = this.createLink();
    return () => window.open(link);
  }
}
