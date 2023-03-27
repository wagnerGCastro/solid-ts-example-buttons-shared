/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
/* eslint-disable  @typescript-eslint/no-explicit-any */

export default class ShareButton {
  constructor(public url: string) {}

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

    const elements = document.querySelectorAll(clazz);

    // if (Array.isArray(elements)) {
    //   for (const element of elements) {
    //     element.addEventListener('click', () => window.open(link));
    //   }
    // }

    // for (const element of elements) {
    //   element.addEventListener('click', () => window.open(link));
    // }

    elements.forEach(element => {
      element.addEventListener('click', () => window.open(link));
    });
  }
}
