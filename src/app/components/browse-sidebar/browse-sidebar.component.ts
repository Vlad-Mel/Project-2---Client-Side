import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-browse-sidebar',
  templateUrl: './browse-sidebar.component.html',
  styleUrls: ['./browse-sidebar.component.css']
})
export class BrowseSidebarComponent {

    contraptionCheck: boolean = true;
    deviceCheck: boolean = true;
    gadgetCheck: boolean = true;
    gizmoCheck: boolean = true;
    machineCheck: boolean = true;

  @Output() contraptionEvent = new EventEmitter<boolean>();
  @Output() deviceEvent = new EventEmitter<boolean>();
  @Output() gadgetEvent = new EventEmitter<boolean>();
  @Output() gizmoEvent = new EventEmitter<boolean>();
  @Output() machineEvent = new EventEmitter<boolean>();

  constructor() { }

  emitContraption(){
      this.contraptionEvent.emit(this.contraptionCheck);
  }
  emitDevice(){
      this.deviceEvent.emit(this.deviceCheck);
  }
  emitGadget(){
      this.gadgetEvent.emit(this.gadgetCheck);
  }
  emitGizmo(){
      this.gizmoEvent.emit(this.gizmoCheck);
  }
  emitMachine(){
      this.machineEvent.emit(this.machineCheck);
  }
}
