import { Component } from "@angular/core";
import { Salmo } from "app/entities/salmo";
import { salmo67 } from "./salmo-67";

@Component({
    selector: "panel-salmo-67",
    templateUrl: "./panel-salmo-67.component.html",
    styleUrls: ["./panel-salmo-67.component.scss"],
})
export class PanelSalmo67Component {
    salmo67: Salmo[] = salmo67;
}
