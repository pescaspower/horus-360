import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header.component/header.component';
import { FooterComponent } from '../../shared/footer.component/footer.component';

// Tipos para mejorar la seguridad y claridad del código
type AuditActionType = 'Solicitud Enviada' | 'Solicitud Aprobada' | 'Solicitud Rechazada' | 'Usuario Creado' | 'Usuario Eliminado' | 'Permiso Revocado';

interface AuditLogEntry {
  id: number;
  dateTime: string;
  type: AuditActionType;
  user: string;
  detail: string;
  entityId: string;
}

@Component({
  selector: 'app-registro-auditoria',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './registro-auditoria.html',
  styleUrl: './registro-auditoria.css'
})
export class RegistroAuditoria {
  // Propiedades para los filtros, enlazadas con [(ngModel)]
  filterActionType: 'ALL' | AuditActionType = 'ALL';
  filterUser: string = '';
  filterEntityId: string = '';

  // Datos de ejemplo para el registro de auditoría
  allLogs: AuditLogEntry[] = [
    { id: 1, dateTime: '2025-06-27 10:00:00', type: 'Solicitud Enviada', user: 'usuario1@example.com', detail: 'Petición de SELECT para catalogo.esquema.tabla1', entityId: '101' },
    { id: 2, dateTime: '2025-06-27 10:05:30', type: 'Solicitud Enviada', user: 'usuario2@example.com', detail: 'Petición de INSERT para catalogo.esquema.tabla2', entityId: '102' },
    { id: 3, dateTime: '2025-06-27 11:15:45', type: 'Solicitud Aprobada', user: 'admin@example.com', detail: 'Aprobada la petición 101 de usuario1@example.com', entityId: '101' },
    { id: 4, dateTime: '2025-06-27 11:30:10', type: 'Usuario Creado', user: 'admin@example.com', detail: 'Creado nuevo usuario: new.user@example.com', entityId: 'U001' },
    { id: 5, dateTime: '2025-06-27 12:00:00', type: 'Solicitud Rechazada', user: 'superadmin@example.com', detail: 'Rechazada la petición 102 de usuario2@example.com por falta de justificación', entityId: '102' },
    { id: 6, dateTime: '2025-06-27 13:00:00', type: 'Permiso Revocado', user: 'admin@example.com', detail: 'Permiso SELECT revocado para usuario.old@example.com en tabla_antigua', entityId: 'P001' },
    { id: 7, dateTime: '2025-06-27 14:00:00', type: 'Solicitud Enviada', user: 'usuario3@example.com', detail: 'Petición de ALL_PRIVILEGES para catalogo.esquema.tabla_critica', entityId: '103' },
    { id: 8, dateTime: '2025-06-27 14:30:00', type: 'Usuario Eliminado', user: 'superadmin@example.com', detail: 'Usuario eliminado: old.inactive@example.com', entityId: 'U002' },
  ];

  // Getter que calcula los registros filtrados en tiempo real
  get filteredLogs(): AuditLogEntry[] {
    return this.allLogs.filter(entry => {
      const actionTypeMatch = this.filterActionType === 'ALL' || entry.type === this.filterActionType;
      const userMatch = this.filterUser ? entry.user.toLowerCase().includes(this.filterUser.toLowerCase()) : true;
      const entityIdMatch = this.filterEntityId ? entry.entityId.toLowerCase().includes(this.filterEntityId.toLowerCase()) : true;
      return actionTypeMatch && userMatch && entityIdMatch;
    });
  }

  // Función para obtener la clase CSS correcta para cada tipo de acción
  getActionTypeClass(type: AuditActionType): string {
    switch (type) {
      case 'Solicitud Enviada': return 'action-type-request-submit';
      case 'Solicitud Aprobada': return 'action-type-request-approve';
      case 'Solicitud Rechazada':
      case 'Permiso Revocado': return 'action-type-request-reject';
      case 'Usuario Creado':
      case 'Usuario Eliminado': return 'action-type-user-manage';
      default: return '';
    }
  }
}
