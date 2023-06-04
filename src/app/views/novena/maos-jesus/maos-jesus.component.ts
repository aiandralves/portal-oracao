import { Component } from "@angular/core";
import { Card } from "app/entities/card";

@Component({
    selector: "maos-jesus",
    templateUrl: "./maos-jesus.component.html",
    styleUrls: ["./maos-jesus.component.scss"],
})
export class MaosJesusComponent {
    cards?: Card[] = [
        { title: "Primeiro Dia", routerLink: "/primeiro", href: "01.png" },
        { title: "Segundo Dia", routerLink: "/segundo", href: "02.png" },
        { title: "Terceiro Dia", routerLink: "/terceiro", href: "03.png" },
        { title: "Quarto Dia", routerLink: "/quarto", href: "04.png" },
        { title: "Quinto Dia", routerLink: "/quinto", href: "05.png" },
        { title: "Sexto Dia", routerLink: "/sexto", href: "06.png" },
        { title: "Sétimo Dia", routerLink: "/setimo", href: "07.png" },
        { title: "Oitavo Dia", routerLink: "/oitavo", href: "08.png" },
        { title: "Nono Dia", routerLink: "/nono", href: "09.png" },
    ];
}
