import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared.module";

import { BtnVoltarComponent } from "./shared/btn-voltar/btn-voltar.component";
import { PanelSalmo07Component } from "./shared/panel-salmo-07/panel-salmo-07.component";
import { PanelSalmo23Component } from "./shared/panel-salmo-23/panel-salmo-23.component";
import { PanelSalmo91Component } from "./shared/panel-salmo-91/panel-salmo-91.component";

const declarations = [BtnVoltarComponent, PanelSalmo91Component, PanelSalmo07Component, PanelSalmo23Component];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, SharedModule],
    exports: [...declarations],
})
export class OracaoSharedModule {}
