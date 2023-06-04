import { Component } from "@angular/core";
import { Salmo } from "app/entities/salmo";
import { salmo91 } from "./salmo-91";

@Component({
    selector: "panel-salmo-91",
    templateUrl: "./panel-salmo-91.component.html",
    styleUrls: ["./panel-salmo-91.component.scss"],
})
export class PanelSalmo91Component {
    salmo91: Salmo[] = salmo91;
}
