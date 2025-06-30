import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../shared/header.component/header.component';
import { FooterComponent } from '../../shared/footer.component/footer.component';

// Interfaces para una estructura de datos clara
interface TablePermission {
  catalog: string;
  schema: string;
  table: string;
  permission: string;
}

type LogEntryType = 'Solicitud Enviada' | 'Comentario' | 'Aprobada' | 'Rechazada';

interface LogEntry {
  type: LogEntryType;
  user: string;
  date: string;
  comment: string;
}

interface RequestDetail {
  id: string;
  status: 'Pendiente' | 'Aprobada' | 'Rechazada';
  requesterEmail: string;
  targetUserOrGroup: string;
  requestDate: string;
  expirationDate: string | null;
  justification: string;
  tables: TablePermission[];
  approvalLog: LogEntry[];
}

@Component({
  selector: 'app-peticion-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './peticion-detalle.html',
  styleUrl: './peticion-detalle.css'
})
export class PeticionDetalle implements OnInit {
  requestData?: RequestDetail;
  newCommentText: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const requestId = this.route.snapshot.paramMap.get('id');
    console.log(`Cargando detalles para la petición con ID: ${requestId}`);
    // En una aplicación real, aquí harías una llamada a una API con el requestId.
    // Por ahora, usamos datos de ejemplo.
    this.loadDummyData(requestId || '101');
  }

  loadDummyData(id: string): void {
    const logEntries: LogEntry[] = [
      { type: 'Solicitud Enviada', user: 'usuario.ejemplo@empresa.com', date: '2025-06-25 09:30:00', comment: 'Petición inicial generada.' },
      { type: 'Comentario', user: 'admin_security@empresa.com', date: '2025-06-25 10:15:00', comment: 'Revisando justificación y alcance del permiso. ¿Podrías especificar qué columnas son estrictamente necesarias de "raw_sales_data"?' },
      { type: 'Comentario', user: 'usuario.ejemplo@empresa.com', date: '2025-06-25 11:00:00', comment: 'Solo necesito las columnas de ID de cliente, fecha de venta, y total de compra. No necesito información sensible o de identificación directa.' }
    ];

    // Simulación de carga de datos
    this.requestData = {
      id: id,
      status: 'Pendiente',
      requesterEmail: 'usuario.ejemplo@empresa.com',
      targetUserOrGroup: 'grupo_desarrollo_data',
      requestDate: '2025-06-25',
      expirationDate: '2025-12-31',
      justification: 'Necesario para desarrollar nuevos informes de ventas y pruebas de integración con el CRM. Se requiere acceso de lectura a la tabla de clientes para obtener datos demográficos y de comportamiento de compra.',
      tables: [
          { catalog: 'databricks_catalog', schema: 'bronze', table: 'raw_sales_data', permission: 'SELECT' },
          { catalog: 'databricks_catalog', schema: 'silver', table: 'transformed_products', permission: 'SELECT' },
          { catalog: 'databricks_catalog', schema: 'gold', table: 'sales_kpis', permission: 'SELECT' }
      ],
      approvalLog: logEntries.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    };
  }

  addComment(): void {
    if (!this.newCommentText.trim() || !this.requestData) return;

    const currentUser = "admin.actual@example.com"; // Simulación de usuario logueado
    const newCommentEntry: LogEntry = {
      type: 'Comentario',
      user: currentUser,
      date: new Date().toISOString().slice(0, 19).replace('T', ' '),
      comment: this.newCommentText.trim()
    };

    this.requestData.approvalLog.push(newCommentEntry);
    this.newCommentText = ''; // Limpiar el textarea
  }
}