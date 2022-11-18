import { Component } from "@angular/core";
import { Store } from "@ngrx/store"; 

import { ModalService } from "src/app/services/modal.service";
import { UserService } from "src/app/services/user.service";
import { AuthService } from "src/app/services/auth.service";
import { selectAuth } from "src/app/states/auth/auth.selectors";
import { AppState } from "src/app/states/app.state";

@Component({
    selector: "app-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ['./navigation.component.css']
})
class NavigationComponent {
    public isAuthenticated$ = this.store.select(selectAuth);

    cartAmount = 2;
    displayAmount = this.cartAmount > 0 ? `after:content-['${this.cartAmount}']` : '';
    isSwitched = false;

    isLightMode = true;

    constructor(public modalService: ModalService, public userService: UserService,
                public authService: AuthService, private store: Store<AppState>) {
                }

}

export { NavigationComponent };
