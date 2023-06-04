import { Component } from "@angular/core";
import { Card } from "app/entities/card";

@Component({
    selector: "oracao-salmo",
    templateUrl: "./oracao-salmo.component.html",
    styleUrls: ["./oracao-salmo.component.scss"],
})
export class OracaoSalmoComponent {
    cards?: Card[] = [
        { title: "Oração pelos inimigos", routerLink: "/domingo", href: "domingo.pdf" },
        { title: "Oração pela proteção pessoal", routerLink: "/segunda" },
        { title: "Oração pela prosperidade", routerLink: "/terca", href: "terca.pdf" },
        { title: "Oração pelos inimigos", routerLink: "/quarta", href: "quarta.pdf" },
        { title: "Oração pela saúde", routerLink: "/quinta", href: "quinta.pdf" },
        { title: "Oração para abrir os caminhos", routerLink: "/sexta", href: "sexta.pdf" },
        { title: "Agradecimento a Deus", routerLink: "/sabado", href: "sabado.pdf" },
    ];
}
