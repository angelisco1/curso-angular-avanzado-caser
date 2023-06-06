import { CarritoComponent } from "./carrito/carrito.component"
import { InicioComponent } from "./inicio/inicio.component"
import { MiRouterModule } from "./mi-router/mi-router.module"

const routes: Array<{ path: string, component: any }> = [
  { path: '', component: InicioComponent },
  { path: 'carrito', component: CarritoComponent },
]

export const MiAppRoutingModule = MiRouterModule.forRoot(routes)