import { Component, OnInit } from "@angular/core";
import { CounterServiceService } from "./counter-service.service";
import { UsersServiceService } from "./users-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  constructor(
    private userService: UsersServiceService,
    private counterService: CounterServiceService
  ) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.getUsers(true);
    this.inactiveUsers = this.userService.getUsers(false);
    this.userService.userUpdated.subscribe((userName) => {
      this.activeUsers = this.userService.getUsers(true);
      this.inactiveUsers = this.userService.getUsers(false);
      this.counterService.logCounters();
    });
    this.counterService.logCounters();
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
