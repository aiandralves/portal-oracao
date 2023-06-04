import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Module } from "../entities/module";

@Injectable({
    providedIn: "root",
})
export class ModulesService {
    private readonly _baseUrl = "./assets/modules/modules.json";

    constructor(private _http: HttpClient) {}

    find(): Observable<Module[]> {
        return this._http.get<Module[]>(this._baseUrl).pipe(map((obj) => obj));
    }
}
