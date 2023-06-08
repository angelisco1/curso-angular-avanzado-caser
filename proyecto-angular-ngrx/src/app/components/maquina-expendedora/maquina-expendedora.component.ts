import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarProductos, sacarProducto } from 'src/app/actions/maquina-exp.actions';
import { selectProductos } from 'src/app/selectors/maquina-exp.selectors';

@Component({
  selector: 'app-maquina-expendedora',
  templateUrl: './maquina-expendedora.component.html',
  styleUrls: ['./maquina-expendedora.component.css']
})
export class MaquinaExpendedoraComponent {
  codigo: number = 0
  productos: Array<any> = []

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(cargarProductos())

    this.store.select(selectProductos)
      .subscribe((productos: any) => {
        this.productos = productos
      })
  }

  sacarProducto() {
    this.store.dispatch(sacarProducto({ codigo: this.codigo }))
  }
}
