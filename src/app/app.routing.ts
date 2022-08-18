import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyAdditionalComponent } from '@pages/docs/privacy-policy-additional/privacy-policy-additional.component';
import { PrivacyPolicyComponent } from '@pages/docs/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from '@pages/docs/terms-and-conditions/terms-and-conditions.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'terrenos/:terrainName',
    loadChildren: () =>
      import('src/app/pages/terrain-detail/terrain-detail.module').then(
        (m) => m.TerrainDetailModule
      ),
  },
  {
    path: 'terrenos',
    loadChildren: () =>
      import('src/app/pages/terrain/terrain.module').then(
        (m) => m.TerrainModule
      ),
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () =>
      import('src/app/pages/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('@pages/contact-us/contact-us.module').then(
        (m) => m.ContacUsModule
      ),
  },
  {
    path: 'gracias',
    loadChildren: () =>
      import('src/app/pages/succeeded/succeeded.module').then(
        (m) => m.SucceededModule
      ),
  },
  {
    path: 'politicas-de-privacidad',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'fines-adicionales',
    component: PrivacyPolicyAdditionalComponent,
  },
  {
    path: 'terminos-y-condiciones',
    component: TermsAndConditionsComponent,
  },
  {
    path: '404',
    loadChildren: () =>
      import('src/app/pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('src/app/pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      initialNavigation: 'enabled',
    }),
  ],
})
export class AppRouting {}
