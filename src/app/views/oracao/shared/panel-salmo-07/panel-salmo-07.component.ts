import { Component } from "@angular/core";
import { Salmo } from "app/entities/salmo";
import { salmo07 } from "./salmo-07";

@Component({
    selector: "panel-salmo-07",
    templateUrl: "./panel-salmo-07.component.html",
    styleUrls: ["./panel-salmo-07.component.scss"],
})
export class PanelSalmo07Component {
    salmo07: Salmo[] = salmo07;
}
