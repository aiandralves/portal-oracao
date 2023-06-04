import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";

import { FlexLayoutModule } from "@angular/flex-layout";
import { ButtonComponent } from "./views/button/button.component";
import { PageHeaderComponent } from "./views/page-header/page-header.component";
import { SidenavComponent } from "./views/sidenav/sidenav.component";

const declarations = [SidenavComponent, PageHeaderComponent, ButtonComponent];

const modules = [
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, ...modules],
    exports: [...modules, ...declarations],
})
export class SharedModule {}
