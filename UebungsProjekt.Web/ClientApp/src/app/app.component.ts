import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  links = [
    { text: 'Start', link: 'start' },
    { text: 'Benutzer anlegen', link: 'benutzer-anlegen' },
    { text: 'Adresse anlegen', link: 'adresse-anlegen' },
  ]

  navigate(route) {
    event.stopPropagation();
    this.router.navigateByUrl(route);
  }
}
