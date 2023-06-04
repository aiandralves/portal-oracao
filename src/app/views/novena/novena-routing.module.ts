import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "maos-ensanguentadas-jesus",
        loadChildren: () => import("./maos-jesus/maos-jesus.module").then((m) => m.MaosJesusModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NovenaRoutingModule {}
