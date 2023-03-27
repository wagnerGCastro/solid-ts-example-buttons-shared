import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  clazz: string;

  constructor(clazz: string) {
    this.clazz = clazz;
    this.eventHandler = new EventHandler();
  }

  abstract createLink(): any;

  public bind() {
    const link = this.createLink();
    this.eventHandler.addEventListenerToClass(this.clazz, 'click', () => window.open(link));
  }
}
