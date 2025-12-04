import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { action, Toasty } from "@nativescript/core";
import { DescremadoraService } from "../../services/descremadora.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {

    busqueda = "";

    constructor(
        private router: RouterExtensions,
        private descService: DescremadoraService
    ) {}

    filtrar() {
        return this.descService.getAll().filter(x =>
            x.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        );
    }

    irDetalle(evento) {
        const listaFiltrada = this.filtrar();
        const item = listaFiltrada[evento.index];
        this.router.navigate(["/detalle", item.id]);
    }

    async cambiarCategoria(item) {
        const result = await action(
            "Selecciona categoría",
            "Cancelar",
            ["Industrial", "Doméstica", "Automática"]
        );

        if (result !== "Cancelar" && result) {
            item.categoria = result;
            new Toasty({ text: "Categoría actualizada" }).show();
        }
    }

    onRefresh(event) {
        setTimeout(() => {
            this.descService.agregarRandom();
            event.object.notifyPullToRefreshFinished();
        }, 900);
    }

    animarIcono(e) {
        e.object.animate({
            rotate: 360,
            duration: 500
        });
    }
}
