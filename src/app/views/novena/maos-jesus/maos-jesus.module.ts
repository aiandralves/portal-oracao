import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared.module";
import { NovenaSharedModule } from "../novena-shared.module";
import { MaosJesusRoutingModule } from "./maos-jesus-routing.module";
import { MaosJesusComponent } from "./maos-jesus.component";
import { PrimeiroDiaComponent } from './components/primeiro-dia/primeiro-dia.component';
import { SegundoDiaComponent } from './components/segundo-dia/segundo-dia.component';
import { TerceiroDiaComponent } from './components/terceiro-dia/terceiro-dia.component';
import { QuartoDiaComponent } from './components/quarto-dia/quarto-dia.component';
import { QuintoDiaComponent } from './components/quinto-dia/quinto-dia.component';
import { SextoDiaComponent } from './components/sexto-dia/sexto-dia.component';
import { SetimoDiaComponent } from './components/setimo-dia/setimo-dia.component';
import { OitavoDiaComponent } from './components/oitavo-dia/oitavo-dia.component';
import { NonoDiaComponent } from './components/nono-dia/nono-dia.component';

@NgModule({
    declarations: [MaosJesusComponent, PrimeiroDiaComponent, SegundoDiaComponent, TerceiroDiaComponent, QuartoDiaComponent, QuintoDiaComponent, SextoDiaComponent, SetimoDiaComponent, OitavoDiaComponent, NonoDiaComponent],
    imports: [CommonModule, MaosJesusRoutingModule, NovenaSharedModule, SharedModule],
})
export class MaosJesusModule {}
