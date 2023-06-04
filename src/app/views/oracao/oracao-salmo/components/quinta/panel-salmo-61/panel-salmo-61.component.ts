import { Component } from "@angular/core";
import { Salmo } from "app/entities/salmo";
import { salmo61 } from "./salmo-61";

@Component({
    selector: "panel-salmo-61",
    templateUrl: "./panel-salmo-61.component.html",
    styleUrls: ["./panel-salmo-61.component.scss"],
})
export class PanelSalmo61Component {
    salmo61: Salmo[] = salmo61;
}
