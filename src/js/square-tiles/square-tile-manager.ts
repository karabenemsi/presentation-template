import { SquareTile } from './square-tile';

export class SquareTilesManager {
  private tiles: SquareTile[];

  constructor() {
    const tileElements = document.getElementsByClassName('square-tile');

    this.tiles = [];
    for (let i = 0; i < tileElements.length; i++) {
      this.tiles.push(new SquareTile(tileElements[i]));
    }

    this.resizeHandler();

    window.addEventListener('resize', () => {this.resizeHandler(); });
  }

  private resizeHandler(): void {
    this.tiles.forEach((tile) => {
      tile.setSquare();
    });
  }
}
