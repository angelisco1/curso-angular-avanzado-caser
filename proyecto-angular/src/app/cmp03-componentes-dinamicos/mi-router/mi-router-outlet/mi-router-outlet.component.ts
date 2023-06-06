import { Component, Inject, ViewChild } from '@angular/core';
import { MiRouterService } from '../mi-router.service';
import { InicioComponent } from '../../inicio/inicio.component';
import { CarritoComponent } from '../../carrito/carrito.component';
import { MiHostDirective } from '../mi-host.directive';

@Component({
  selector: 'app-mi-router-outlet',
  templateUrl: './mi-router-outlet.component.html',
  styleUrls: ['./mi-router-outlet.component.css']
})
export class MiRouterOutletComponent {
  @ViewChild(MiHostDirective) miHost: MiHostDirective | null = null

  // routes: Array<{ path: string, component: any }> = [
  //   { path: '', component: InicioComponent },
  //   { path: 'carrito', component: CarritoComponent },
  // ]

  constructor(
    private miRouter: MiRouterService,
    @Inject('Rutas') private routes: Array<{ path: string, component: any }>
  ) { }

  ngAfterViewInit() {
    this.miRouter.urlChanged$.subscribe((url: string) => {
      console.log({ url })
      const route = this.routes.find(route => route.path === url.slice(1))
      if (route) {
        const componente = route.component
        this.miHost?.viewContainerRef.clear()
        this.miHost?.viewContainerRef.createComponent(componente)
      } else {
        // TODO: mostrar componente de error
      }

    })
  }

}
