import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DescremadoraService } from "../../services/descremadora.service";

@Component({
    selector: "Detalle",
    templateUrl: "./detalle.component.html",
    styleUrls: ["./detalle.component.css"]
})
export class DetalleComponent implements OnInit {

    item;

    constructor(
        private route: ActivatedRoute,
        private descService: DescremadoraService
    ) {}

    ngOnInit() {
        const id = Number(this.route.snapshot.params["id"]);
        this.item = this.descService.getById(id);
    }
}
