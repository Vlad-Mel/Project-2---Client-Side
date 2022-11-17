import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  showContraptions: boolean = true;
  showDevices: boolean = true;
  showGadgets: boolean = true;
  showGizmos: boolean = true;
  showMachines: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  getVisibleCategories(): string[] {
    let result: string[] = [];
    if (this.showContraptions) result.push("contraption");
    if (this.showDevices) result.push("device");
    if (this.showGadgets) result.push("gadget");
    if (this.showGizmos) result.push("gizmo");
    if (this.showMachines) result.push("machine");
    return result;
  }

}
