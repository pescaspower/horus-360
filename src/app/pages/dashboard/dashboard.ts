import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header.component/header.component'; 
import { FooterComponent } from '../../shared/footer.component/footer.component';

// Interfaces para una mejor estructura de datos
interface Metric {
  value: number;
  label: string;
  icon: string;
  type: 'pending' | 'approved' | 'rejected' | 'info';
}

interface StatItem {
  name: string;
  value: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  // Datos para las tarjetas de métricas
  metrics: Metric[] = [
    {
      value: 12,
      label: 'Peticiones Pendientes',
      icon: 'hourglass_empty',
      type: 'pending'
    },
    {
      value: 45,
      label: 'Peticiones Aprobadas (últimos 30 días)',
      icon: 'check_circle_outline',
      type: 'approved'
    },
    {
      value: 5,
      label: 'Peticiones Rechazadas (últimos 30 días)',
      icon: 'cancel_outlined',
      type: 'rejected'
    },
    {
      value: 34,
      label: 'Usuarios con Peticiones Activas',
      icon: 'group',
      type: 'info'
    }
  ];

  // Datos para las listas de estadísticas
  topTables: StatItem[] = [
    { name: 'ventas.clientes.demograficos', value: 15 },
    { name: 'finanzas.gastos.transacciones', value: 10 },
    { name: 'logistica.inventario.productos', value: 8 },
    { name: 'recursos_humanos.empleados.perfiles', value: 7 }
  ];

  topUsers: StatItem[] = [
    { name: 'maria.lopez@example.com', value: 7 },
    { name: 'juan.perez@example.com', value: 5 },
    { name: 'ana.garcia@example.com', value: 4 },
    { name: 'carlos.ruiz@example.com', value: 3 }
  ];

  // Función para obtener la clase CSS correcta para cada métrica
  getMetricClass(metric: Metric): string[] {
    return ['metric-card', metric.type];
  }

  getMetricIconClass(metric: Metric): string[] {
    return ['material-icons', 'metric-icon'];
  }
}
