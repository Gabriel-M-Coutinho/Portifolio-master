import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

  }

  closeMenu() {
    this.isMenuOpen = false;

  }



  scrollTo(anchor: string) {

    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }/*
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Verifica se o clique foi fora do menu
    if (!target.closest('.nav-desktop') && !target.closest('.nav-mobile')) {
      this.closeMenu();
    }
  }
*/
}
