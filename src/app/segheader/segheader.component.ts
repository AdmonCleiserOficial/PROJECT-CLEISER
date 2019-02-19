import { Component, OnInit } from "@angular/core";
import { JquerisitoService } from "../jquerisito.service";

declare const jQuery: any;
declare const $: any;

@Component({
  selector: "app-segheader",
  templateUrl: "./segheader.component.html",
  styleUrls: ["./segheader.component.css"]
})
export class SegheaderComponent implements OnInit {
  constructor(private jquerisito: JquerisitoService) {}

  ngOnInit() {
    this.jquerisito.headerMenu();
  }
}
