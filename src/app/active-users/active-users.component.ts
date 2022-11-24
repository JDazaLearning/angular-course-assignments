import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UsersServiceService } from "../users-service.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UsersServiceService) {}

  onSetToInactive(name: string) {
    this.userService.toggleStatus(name);
  }
}
