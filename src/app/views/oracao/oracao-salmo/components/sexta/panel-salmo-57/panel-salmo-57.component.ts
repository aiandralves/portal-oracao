import { Component } from "@angular/core";
import { Salmo } from "app/entities/salmo";
import { salmo57 } from "./salmo-57";

@Component({
    selector: "panel-salmo-57",
    templateUrl: "./panel-salmo-57.component.html",
    styleUrls: ["./panel-salmo-57.component.scss"],
})
export class PanelSalmo57Component {
    salmo57: Salmo[] = salmo57;
}
