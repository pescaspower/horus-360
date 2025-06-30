import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header.component/header.component';
import { FooterComponent } from '../../shared/footer.component/footer.component';

// Definimos los tipos de estado para mayor seguridad
type RequestStatus = 'Pendiente' | 'Aprobada' | 'Rechazada';

// Interfaces para modelar nuestros datos
interface TablePermission {
  name: string;
  permission: string;
}

interface UserRequest {
  id: number;
  requesterEmail: string;
  targetUserOrGroup: string;
  tables: TablePermission[];
  requestDate: string;
  status: RequestStatus;
}

@Component({
  selector: 'app-mis-peticiones',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent,FooterComponent],
  templateUrl: './mis-peticiones.html',
  // Asumo que crearás este fichero CSS:
  styleUrl: './mis-peticiones.css'
})
export class MisPeticiones {
  // Propiedades para los filtros, enlazadas con [(ngModel)]
  filterRequesterEmail: string = '';
  filterTableName: string = '';
  filterStatus: 'ALL' | RequestStatus = 'ALL';

  // Datos de ejemplo
  allRequests: UserRequest[] = [
    {
      id: 101,
      requesterEmail: 'usuario1@example.com',
      targetUserOrGroup: 'grupo_analistas',
      tables: [
        { name: 'catalogo_ventas.esquema_clientes.datos_demograficos', permission: 'SELECT' },
        { name: 'catalogo_ventas.esquema_clientes.compras_historicas', permission: 'SELECT' }
      ],
      requestDate: '2025-06-25',
      status: 'Pendiente'
    },
    {
      id: 102,
      requesterEmail: 'usuario2@example.com',
      targetUserOrGroup: 'usuario_bi',
      tables: [
        { name: 'catalogo_finanzas.informes.presupuesto_2025', permission: 'SELECT' }
      ],
      requestDate: '2025-06-20',
      status: 'Aprobada'
    },
    {
      id: 103,
      requesterEmail: 'usuario1@example.com',
      targetUserOrGroup: 'grupo_desarrolladores',
      tables: [
        { name: 'catalogo_productos.maestros.inventario_total', permission: 'ALL_PRIVILEGES' }
      ],
      requestDate: '2025-06-18',
      status: 'Rechazada'
    },
    {
      id: 104,
      requesterEmail: 'usuario3@example.com',
      targetUserOrGroup: 'grupo_qa',
      tables: [
        { name: 'catalogo_test.datos_prueba.usuarios', permission: 'INSERT' }
      ],
      requestDate: '2025-06-26',
      status: 'Pendiente'
    }
  ];

  // Getter que calcula las peticiones filtradas en tiempo real
  get filteredRequests(): UserRequest[] {
    return this.allRequests.filter(request => {
      const statusMatch = this.filterStatus === 'ALL' || request.status === this.filterStatus;
      const emailMatch = this.filterRequesterEmail ? request.requesterEmail.toLowerCase().includes(this.filterRequesterEmail.toLowerCase()) : true;
      const tableMatch = this.filterTableName ? request.tables.some(t => t.name.toLowerCase().includes(this.filterTableName.toLowerCase())) : true;
      return statusMatch && emailMatch && tableMatch;
    });
  }

  // Función para obtener la clase CSS correcta para cada estado
  getStatusClass(status: RequestStatus): { [key: string]: boolean } {
    return {
      'status-pending': status === 'Pendiente',
      'status-approved': status === 'Aprobada',
      'status-rejected': status === 'Rechazada'
    };
  }
}
