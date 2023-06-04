import { Component } from "@angular/core";
import { Salmo } from "app/entities/salmo";
import { salmo121 } from "./salmo-121";

@Component({
    selector: "panel-salmo-121",
    templateUrl: "./panel-salmo-121.component.html",
    styleUrls: ["./panel-salmo-121.component.scss"],
})
export class PanelSalmo121Component {
    salmo121: Salmo[] = salmo121;
}
