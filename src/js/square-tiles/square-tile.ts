export class SquareTile {
  private element: HTMLScriptElement;
  private height: number;
  private width: number;

  constructor(element: Element) {
    this.element = element as HTMLScriptElement;
    if (!this.element) {
      return;
    }
  }

  public setSquare() {
    this.width = this.element.offsetWidth;
    this.height = this.width;
    this.element.style.height = this.height + 'px';
  }
}
