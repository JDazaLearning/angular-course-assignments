import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UsersServiceService } from "../users-service.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UsersServiceService) {}

  onSetToActive(name: string) {
    this.userService.toggleStatus(name);
  }
}
