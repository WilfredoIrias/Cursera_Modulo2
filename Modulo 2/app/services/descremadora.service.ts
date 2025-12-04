import { Injectable } from "@angular/core";
import { Descremadora } from "../models/descremadora.model";

@Injectable({ providedIn: "root" })
export class DescremadoraService {
    private lista: Descremadora[] = [
        {
            id: 1,
            nombre: "Descremadora Alfa 3000",
            litrosProcesados: 150,
            categoria: "Industrial",
            descripcion: "Máquina robusta para grandes volúmenes.",
            imagen: "~/assets/descremadora1.jpg"
        },
        {
            id: 2,
            nombre: "EcoMilk 200",
            litrosProcesados: 80,
            categoria: "Doméstica",
            descripcion: "Ideal para pequeños tambos y uso personal.",
            imagen: "~/assets/descremadora2.jpg"
        }
    ];

    getAll() {
        return this.lista;
    }

    getById(id: number) {
        return this.lista.find(x => x.id === id);
    }

    agregarRandom() {
        const random: Descremadora = {
            id: Math.random(),
            nombre: "Descremadora Random " + (Math.floor(Math.random() * 200)),
            litrosProcesados: Math.floor(Math.random() * 300),
            categoria: "Nueva",
            descripcion: "Generada automáticamente.",
            imagen: "~/assets/descremadora1.jpg"
        };
        this.lista.push(random);
    }
}
