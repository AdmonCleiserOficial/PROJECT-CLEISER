import { Component, OnInit } from "@angular/core";
import { JquerisitoService } from "../jquerisito.service";

declare const $: any;
declare const jQuery: any;

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  nombrecamp: string = "CrisBuy";

  constructor(private jquerisito: JquerisitoService) {}

  ngOnInit() {
    this.jquerisito.slider();
  }
}
