import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        // Carga el componente Home solo cuando se visita la ruta raíz.
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'ayuda-faq',
        // Carga el componente de FAQ solo cuando se visita /ayuda-faq.
        loadComponent: () => import('./pages/ayuda-faq/ayuda-faq').then(m => m.AyudaFaq)
    },
    {
        path: 'solicitar-permiso',
        // Carga el nuevo formulario solo cuando se visita /solicitar-permiso.
        loadComponent: () => import('./pages/formulario-peticiones/formulario-peticiones').then(m => m.FormularioPeticiones)
    },
    {
        path: 'aprobar-peticiones',
        loadComponent: () => import('./pages/aprobar-peticiones/aprobar-peticiones').then(m => m.AprobarPeticiones)
    },
    {
        path: 'mis-peticiones',
        loadComponent: () => import('./pages/mis-peticiones/mis-peticiones').then(m => m.MisPeticiones)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'registro-auditoria',
        loadComponent: () => import('./pages/registro-auditoria/registro-auditoria').then(m => m.RegistroAuditoria)
    },
    {
        path: 'gestion-usuarios-grupos',
        loadComponent: () => import('./pages/gestion-usuarios-grupos/gestion-usuarios-grupos').then(m => m.GestionUsuariosGrupos)
    },
    {
        path: 'peticion/:id',
        loadComponent: () => import('./pages/peticion-detalle/peticion-detalle').then(m => m.PeticionDetalle)
    }
];
