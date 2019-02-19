import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

declare const jQuery: any;
declare const $: any;

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  name = new FormControl("");

  constructor() {}

  ngOnInit() {
    (function($) {
      const animationend =
        "webkitAnimationEnd mozAnimationEnd oAnimationEnd animationend";
      $(".category-menu").slideToggle();
      $(".botonregistro").on("click", () => {
        $(".col-lg-12")
          .addClass("animated pulse")
          .one(animationend, () => {
            $(this).removeClass("animated pulse");
          });
        console.log(this.name);
      });
    })(jQuery);
  }
}
