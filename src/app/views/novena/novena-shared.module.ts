import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared.module";

import { BtnVoltarComponent } from "./shared/btn-voltar/btn-voltar.component";
import { OracaoFinalComponent } from "./shared/oracao-final/oracao-final.component";
import { PanelNovenaComponent } from "./shared/panel-novena/panel-novena.component";

const declarations = [BtnVoltarComponent, OracaoFinalComponent, PanelNovenaComponent];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, SharedModule],
    exports: [...declarations],
})
export class NovenaSharedModule {}
