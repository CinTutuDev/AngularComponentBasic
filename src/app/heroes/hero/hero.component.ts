import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  /*  public */ getHeroDescription(): string {
    return `${this.name} - ${this.age} `;
  }

  changeHero(): void {
    /* throw 'Método no implementado'; */
    this.name = 'tutu';
  }

  changeAge(): void {
    this.age = 41;
  }
}
