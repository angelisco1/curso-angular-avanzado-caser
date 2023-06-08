import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actualizarContador, decrementar, incrementar } from 'src/app/actions/contador.actions';
import { selectCuenta } from 'src/app/selectors/contador.selectors';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  cuenta: number = 1

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.store.select(selectCuenta)
      .subscribe((cuenta: number) => this.cuenta = cuenta)
  }

  decrementar() {
    this.store.dispatch(decrementar())
  }

  incrementar() {
    this.store.dispatch(incrementar())
  }

  cambiarCuenta(event: Event) {
    const nuevaCuenta = (event.target as HTMLInputElement).value
    this.store.dispatch(actualizarContador({ cuenta: Number(nuevaCuenta) }))
  }

}
