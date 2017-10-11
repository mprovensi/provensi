import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <img alt="formula" title="Home" src="./img/chemical-formula.png" width="62" style="float:left">
      <h2>{{title}}</h2>
    </div>

    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Início</a>
      <a routerLink="/heroes" routerLinkActive="active">Elementos</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cálculo espectro';
}
