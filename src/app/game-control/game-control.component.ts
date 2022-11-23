import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() counterEmmitter = new EventEmitter<{ counter: number }>();
  counter: number = 0;
  interval;

  constructor() {}

  ngOnInit(): void {}

  onStartGame(nameInput: HTMLInputElement) {
    this.interval = setInterval(() => {
      this.counterEmmitter.emit({
        counter: this.counter,
      });
      this.counter++;
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }
}
