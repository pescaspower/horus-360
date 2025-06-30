import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header.component/header.component';
import { FooterComponent } from '../../shared/footer.component/footer.component';

// Interfaces para una mejor seguridad de tipos
interface TablePermission {
  catalog: string;
  schema: string;
  table: string;
  permission: string;
}

interface PendingRequest {
  id: number;
  requesterEmail: string;
  targetUserOrGroup: string;
  tables: TablePermission[];
  requestDate: string;
  status: 'Pendiente';
  selected?: boolean; // Para manejar la selección en la UI
}

@Component({
  selector: 'app-aprobar-peticiones',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent,FooterComponent],
  templateUrl: './aprobar-peticiones.html',
  styleUrl: './aprobar-peticiones.css'
})
export class AprobarPeticiones {
  // Propiedades para los filtros, enlazadas con [(ngModel)]
  filterRequesterEmail: string = '';
  filterTableName: string = '';

  // Datos de ejemplo para las peticiones
  pendingRequests: PendingRequest[] = [
    {
        id: 201,
        requesterEmail: 'admin1@example.com',
        targetUserOrGroup: 'grupo_devs',
        tables: [
            { catalog: 'databricks_catalog', schema: 'bronze', table: 'log_data', permission: 'SELECT' },
            { catalog: 'databricks_catalog', schema: 'silver', table: 'processed_logs', permission: 'SELECT' }
        ],
        requestDate: '2025-06-27',
        status: 'Pendiente'
    },
    {
        id: 202,
        requesterEmail: 'data.engineer@example.com',
        targetUserOrGroup: 'usuario_etl',
        tables: [
            { catalog: 'databricks_catalog', schema: 'gold', table: 'sales_summary', permission: 'INSERT' }
        ],
        requestDate: '2025-06-26',
        status: 'Pendiente'
    },
    {
        id: 203,
        requesterEmail: 'bi.analyst@example.com',
        targetUserOrGroup: 'grupo_bi',
        tables: [
            { catalog: 'databricks_catalog', schema: 'reporting', table: 'user_activity', permission: 'SELECT' },
            { catalog: 'databricks_catalog', schema: 'reporting', table: 'dashboard_metrics', permission: 'SELECT' }
        ],
        requestDate: '2025-06-27',
        status: 'Pendiente'
    }
  ];

  // Getter que calcula las peticiones filtradas dinámicamente
  get filteredRequests(): PendingRequest[] {
    return this.pendingRequests.filter(request => {
      const requesterEmailMatch = this.filterRequesterEmail ? request.requesterEmail.toLowerCase().includes(this.filterRequesterEmail.toLowerCase()) : true;
      const tableNameMatch = this.filterTableName ? request.tables.some(table => `${table.catalog}.${table.schema}.${table.table}`.toLowerCase().includes(this.filterTableName.toLowerCase())) : true;
      return requesterEmailMatch && tableNameMatch;
    });
  }

  // Getters para el estado de la selección
  get isAnyRequestSelected(): boolean {
    return this.filteredRequests.some(req => req.selected);
  }

  get areAllRequestsSelected(): boolean {
    const visibleRequests = this.filteredRequests;
    return visibleRequests.length > 0 && visibleRequests.every(req => req.selected);
  }

  // Métodos de acción
  toggleSelectAll(): void {
    const allSelected = this.areAllRequestsSelected;
    this.filteredRequests.forEach(req => req.selected = !allSelected);
  }

  approveRequest(id: number): void {
    alert(`Petición ${id} APROBADA (simulado).`);
    this.pendingRequests = this.pendingRequests.filter(req => req.id !== id);
  }

  rejectRequest(id: number): void {
    alert(`Petición ${id} RECHAZADA (simulado).`);
    this.pendingRequests = this.pendingRequests.filter(req => req.id !== id);
  }

  approveSelectedRequests(): void {
    const selectedIds = this.pendingRequests.filter(req => req.selected).map(req => req.id);
    alert(`Peticiones ${selectedIds.join(', ')} APROBADAS (simulado).`);
    this.pendingRequests = this.pendingRequests.filter(req => !req.selected);
  }
}
