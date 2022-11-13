import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-browsing-page',
  templateUrl: './product-browsing-page.component.html',
  styleUrls: ['./product-browsing-page.component.css']
})
export class ProductBrowsingPageComponent implements OnInit {

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
