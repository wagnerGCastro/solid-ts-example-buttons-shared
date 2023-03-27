/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
/* eslint-disable  @typescript-eslint/no-explicit-any */

export default class EventHandler {
  public addEventListenerToClass(clazz: string, event: string, fn: any) {
    const elements = document.querySelectorAll(clazz);

    elements.forEach(element => {
      console.log('element ->', element, 'event', event);

      element.addEventListener(event, fn);
    });
  }
}
