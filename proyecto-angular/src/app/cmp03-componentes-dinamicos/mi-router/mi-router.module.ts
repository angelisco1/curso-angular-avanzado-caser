import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiRouterOutletComponent } from './mi-router-outlet/mi-router-outlet.component';
import { MiHostDirective } from './mi-host.directive';
import { MiRouterLinkDirective } from './mi-router-link.directive';
import { MiRouterService } from './mi-router.service';



@NgModule({
  declarations: [
    MiRouterOutletComponent,
    MiHostDirective,
    MiRouterLinkDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiRouterLinkDirective,
    MiRouterOutletComponent,
  ]
})
export class MiRouterModule {
  static forRoot(routes: any): any {
    return {
      ngModule: MiRouterModule,
      providers: [
        { provide: 'Rutas', useValue: routes }
      ]
    }
  }
}
