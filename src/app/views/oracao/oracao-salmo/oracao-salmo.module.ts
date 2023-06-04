import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared.module";
import { OracaoSharedModule } from "../oracao-shared.module";
import { DomingoComponent } from "./components/domingo/domingo.component";
import { PanelSalmo59Component } from "./components/domingo/panel-salmo-59/panel-salmo-59.component";
import { PanelSalmo128Component } from "./components/quarta/panel-salmo-128/panel-salmo-128.component";
import { QuartaComponent } from "./components/quarta/quarta.component";
import { PanelSalmo61Component } from "./components/quinta/panel-salmo-61/panel-salmo-61.component";
import { QuintaComponent } from "./components/quinta/quinta.component";
import { SabadoComponent } from "./components/sabado/sabado.component";
import { PanelSalmo121Component } from "./components/segunda/panel-salmo-121/panel-salmo-121.component";
import { SegundaComponent } from "./components/segunda/segunda.component";
import { PanelSalmo57Component } from "./components/sexta/panel-salmo-57/panel-salmo-57.component";
import { SextaComponent } from "./components/sexta/sexta.component";
import { PanelSalmo67Component } from "./components/terca/panel-salmo-67/panel-salmo-67.component";
import { TercaComponent } from "./components/terca/terca.component";
import { OracaoSalmoRoutingModule } from "./oracao-salmo-routing.module";
import { OracaoSalmoComponent } from "./oracao-salmo.component";

const declarations = [
    OracaoSalmoComponent,
    DomingoComponent,
    SegundaComponent,
    TercaComponent,
    QuartaComponent,
    QuintaComponent,
    SextaComponent,
    SabadoComponent,
    PanelSalmo59Component,
    PanelSalmo128Component,
    PanelSalmo61Component,
    PanelSalmo121Component,
    PanelSalmo57Component,
    PanelSalmo67Component,
];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, OracaoSalmoRoutingModule, OracaoSharedModule, SharedModule],
})
export class OracaoSalmoModule {}
