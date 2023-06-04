import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NonoDiaComponent } from "./components/nono-dia/nono-dia.component";
import { OitavoDiaComponent } from "./components/oitavo-dia/oitavo-dia.component";
import { PrimeiroDiaComponent } from "./components/primeiro-dia/primeiro-dia.component";
import { QuartoDiaComponent } from "./components/quarto-dia/quarto-dia.component";
import { QuintoDiaComponent } from "./components/quinto-dia/quinto-dia.component";
import { SegundoDiaComponent } from "./components/segundo-dia/segundo-dia.component";
import { SetimoDiaComponent } from "./components/setimo-dia/setimo-dia.component";
import { SextoDiaComponent } from "./components/sexto-dia/sexto-dia.component";
import { TerceiroDiaComponent } from "./components/terceiro-dia/terceiro-dia.component";
import { MaosJesusComponent } from "./maos-jesus.component";

const routes: Routes = [
    {
        path: "",
        component: MaosJesusComponent,
    },
    {
        path: "primeiro",
        component: PrimeiroDiaComponent,
    },
    {
        path: "segundo",
        component: SegundoDiaComponent,
    },
    {
        path: "terceiro",
        component: TerceiroDiaComponent,
    },
    {
        path: "quarto",
        component: QuartoDiaComponent,
    },
    {
        path: "quinto",
        component: QuintoDiaComponent,
    },
    {
        path: "sexto",
        component: SextoDiaComponent,
    },
    {
        path: "setimo",
        component: SetimoDiaComponent,
    },
    {
        path: "oitavo",
        component: OitavoDiaComponent,
    },
    {
        path: "nono",
        component: NonoDiaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MaosJesusRoutingModule {}
