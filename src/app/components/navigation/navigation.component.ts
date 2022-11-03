import { Component } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ['./navigation.component.css']
})
class NavigationComponent {

    isSwitched = false;

    constructor(public modalService: ModalService, public userService: UserService) {}


}

export { NavigationComponent };
