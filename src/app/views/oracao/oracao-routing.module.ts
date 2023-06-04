import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "salmos",
        pathMatch: "full",
    },
    {
        path: "salmos",
        loadChildren: () => import("./oracao-salmo/oracao-salmo.module").then((m) => m.OracaoSalmoModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OracaoRoutingModule {}
