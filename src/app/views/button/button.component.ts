import { Component, HostBinding, Input } from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
    @Input() color: "primary" | "accent";
    @Input() icon: string;
    @Input() size: "small" | "normal";
    @Input() outlined: "material-icons-outlined" | "material-icons" = "material-icons";

    @HostBinding("class") get elementSize() {
        return [`btn-${this.size}`, `btn-${this.color}`];
    }
}
