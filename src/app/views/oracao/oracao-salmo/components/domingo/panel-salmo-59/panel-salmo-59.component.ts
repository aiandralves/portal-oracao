import { Component } from "@angular/core";
import { Salmo } from "app/entities/salmo";
import { salmo59 } from "./salmo-59";

@Component({
    selector: "panel-salmo-59",
    templateUrl: "./panel-salmo-59.component.html",
    styleUrls: ["./panel-salmo-59.component.scss"],
})
export class PanelSalmo59Component {
    salmo59: Salmo[] = salmo59;
}
