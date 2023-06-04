import { Component, Input } from "@angular/core";
import { Module } from "src/app/entities/module";
import { ModulesService } from "src/app/services/module.service";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent {
    modules?: Module[];

    @Input() class: string = "";

    constructor(private _modules: ModulesService) {}

    ngOnInit() {
        this._modules.find().subscribe((module) => {
            this.modules = module;
        });
    }
}
