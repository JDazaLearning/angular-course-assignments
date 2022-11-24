import { Injectable, OnInit } from "@angular/core";
import { UsersServiceService } from "./users-service.service";

@Injectable({
  providedIn: "root",
})
export class CounterServiceService {
  activeUsers: number = 0;
  inactiveUsers: number = 0;
  userActions: number = 0;
  constructor(private userService: UsersServiceService) {
    this.activeUsers = this.userService.getUsers(true).length;
    this.inactiveUsers = this.userService.getUsers(false).length;
    this.userService.userUpdated.subscribe((user) => {
      this.activeUsers = this.userService.getUsers(true).length;
      this.inactiveUsers = this.userService.getUsers(false).length;
      this.userActions++;
    });
  }

  logCounters(): void {
    console.log(
      `activeUsers: ${this.activeUsers}, inactiveUsers: ${this.inactiveUsers}, userActions: ${this.userActions}`
    );
  }
}
