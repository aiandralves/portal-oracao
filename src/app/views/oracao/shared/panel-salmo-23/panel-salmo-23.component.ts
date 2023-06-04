import { Component } from "@angular/core";
import { Salmo } from "app/entities/salmo";
import { salmo23 } from "./salmo-23";

@Component({
    selector: "panel-salmo-23",
    templateUrl: "./panel-salmo-23.component.html",
    styleUrls: ["./panel-salmo-23.component.scss"],
})
export class PanelSalmo23Component {
    salmo23: Salmo[] = salmo23;
}
