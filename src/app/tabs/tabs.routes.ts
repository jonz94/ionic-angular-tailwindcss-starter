import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.routes'),
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.routes'),
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.routes'),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

export default routes;
