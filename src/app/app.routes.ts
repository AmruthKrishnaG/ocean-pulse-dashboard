import { Routes } from '@angular/router';
import { FleetOverview } from './components/fleet-overview/fleet-overview';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'fleet-overview',
    pathMatch: 'full',
  },
  {
    path: 'fleet-overview',
    component: FleetOverview,
  },
  {
    path: 'lubrication-indicator',
    loadComponent: () =>
      import('./components/lubrication-indicator/lubrication-indicator').then(
        (m) => m.LubricationIndicator
      ),
  },
  {
    path: 'smart-chartering',
    loadComponent: () =>
      import('./components/smart-chartering/smart-chartering').then(
        (m) => m.SmartChartering
      ),
  },
  {
    path: 'smart-inventory',
    loadComponent: () =>
      import('./components/smart-inventory/smart-inventory').then(
        (m) => m.SmartInventory
      ),
  },
  {
    path: 'smart-maintenance',
    loadComponent: () =>
      import('./components/smart-maintenance/smart-maintenance').then(
        (m) => m.SmartMaintenance
      ),
  },
  {
    path: 'vessel-rating',
    loadComponent: () =>
      import('./components/vessel-rating/vessel-rating').then(
        (m) => m.VesselRating
      ),
  },
];
