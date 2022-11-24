import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsersServiceService {
  users: { name: string; isActive: boolean }[] = [
    { name: "Max", isActive: true },
    { name: "Ana", isActive: true },
    { name: "Chris", isActive: false },
    { name: "Manu", isActive: false },
  ];

  userUpdated = new EventEmitter<string>();

  constructor() {}

  toggleStatus(userName: string) {
    const toggleIndex = this.users.findIndex((u) => u.name === userName);
    this.users[toggleIndex].isActive = !this.users[toggleIndex].isActive;
    this.userUpdated.emit(this.users[toggleIndex].name);
  }

  getUsers(isActive: boolean) {
    return this.users.filter((u) => u.isActive === isActive).map((u) => u.name);
  }
}
