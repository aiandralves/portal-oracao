import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DomingoComponent } from "./components/domingo/domingo.component";
import { QuartaComponent } from "./components/quarta/quarta.component";
import { QuintaComponent } from "./components/quinta/quinta.component";
import { SabadoComponent } from "./components/sabado/sabado.component";
import { SegundaComponent } from "./components/segunda/segunda.component";
import { SextaComponent } from "./components/sexta/sexta.component";
import { TercaComponent } from "./components/terca/terca.component";
import { OracaoSalmoComponent } from "./oracao-salmo.component";

const routes: Routes = [
    {
        path: "",
        component: OracaoSalmoComponent,
    },
    {
        path: "domingo",
        component: DomingoComponent,
    },
    {
        path: "segunda",
        component: SegundaComponent,
    },
    {
        path: "terca",
        component: TercaComponent,
    },
    {
        path: "quarta",
        component: QuartaComponent,
    },
    {
        path: "quinta",
        component: QuintaComponent,
    },
    {
        path: "sexta",
        component: SextaComponent,
    },
    {
        path: "sabado",
        component: SabadoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OracaoSalmoRoutingModule {}
