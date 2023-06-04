import { Component } from "@angular/core";
import { Novena, diasNovena } from "./novena";

@Component({
    selector: "panel-novena",
    templateUrl: "./panel-novena.component.html",
    styleUrls: ["./panel-novena.component.scss"],
})
export class PanelNovenaComponent {
    diasNovena: Novena[] = diasNovena;
}
