import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
    <h1>{{title}}</h1>
    <h2>{{Hero.name}} details</h2>
    <div>
      <label>Id: </label>
      {{Hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)] = "Hero.name" placeholder="name">
    </div>
  `,
})
export class AppComponent
{
  title = 'UOLTT Web Console';

  Hero: Hero =
  {
    id: 1,
    name: "Baws Ship"
  };
}

export class Hero
{
  id: number;
  name: string;
}
