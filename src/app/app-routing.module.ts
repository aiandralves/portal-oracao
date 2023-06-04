import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidenavComponent } from "./views/sidenav/sidenav.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "oracao",
        pathMatch: "full",
    },
    {
        path: "oracao",
        loadChildren: () => import("./views/oracao/oracao.module").then((m) => m.OracaoModule),
        component: SidenavComponent,
    },
    {
        path: "novena",
        loadChildren: () => import("./views/novena/novena.module").then((m) => m.NovenaModule),
        component: SidenavComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
