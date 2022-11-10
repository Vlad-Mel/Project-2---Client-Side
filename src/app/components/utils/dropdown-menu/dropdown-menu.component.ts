import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html'
})
export class DropdownMenuComponent {

  @Input() menuTitle!:string;

  isOpenedMenu = false;


  // Responsible for click inside and outside of dropdown menu
  isClickedInside = false;

  
  // Event that occurs when click happened inside of dropdown list
  @HostListener('click')
  clickedInside() { this.isClickedInside = true; }

  // Event that occurs every time when click happen. 
  @HostListener('document:click')
  clickedOutside() {
    if (!this.isClickedInside) {
      this.isOpenedMenu = false;
    }

    this.isClickedInside = false;
  }

  constructor() {}

}
