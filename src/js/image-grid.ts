export class ImageGrid {
  private element: HTMLScriptElement;

  constructor(element: Element) {
    this.element = element as HTMLScriptElement;
    if (!this.element) {
      return;
    }
    // console.log('Register Image Grid with ', this.element)
  }
}
