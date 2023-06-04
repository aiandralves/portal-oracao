import { Component } from "@angular/core";
import { Salmo } from "app/entities/salmo";
import { salmo128 } from "./salmo-128";

@Component({
    selector: "panel-salmo-128",
    templateUrl: "./panel-salmo-128.component.html",
    styleUrls: ["./panel-salmo-128.component.scss"],
})
export class PanelSalmo128Component {
    salmo128: Salmo[] = salmo128;
}
