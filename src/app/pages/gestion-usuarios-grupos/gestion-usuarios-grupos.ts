import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header.component/header.component';
import { FooterComponent } from '../../shared/footer.component/footer.component';

// Interfaces y tipos para una mejor estructura de datos
type EntityType = 'Usuario' | 'Grupo';

interface UserOrGroup {
  id: number;
  name: string;
  email: string;
  type: EntityType;
}

@Component({
  selector: 'app-gestion-usuarios-grupos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './gestion-usuarios-grupos.html',
  styleUrl: './gestion-usuarios-grupos.css'
})
export class GestionUsuariosGrupos {
  // Propiedades para los filtros, enlazadas con [(ngModel)]
  filterName: string = '';
  filterEmail: string = '';

  // Datos de ejemplo
  allUsersAndGroups: UserOrGroup[] = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', type: 'Usuario' },
    { id: 2, name: 'Grupo Analistas', email: 'grupo_analistas@example.com', type: 'Grupo' },
    { id: 3, name: 'María López', email: 'maria.lopez@example.com', type: 'Usuario' },
    { id: 4, name: 'Grupo Desarrolladores', email: 'grupo_devs@example.com', type: 'Grupo' }
  ];

  // Getter que calcula la lista filtrada dinámicamente
  get filteredUsersAndGroups(): UserOrGroup[] {
    return this.allUsersAndGroups.filter(entity => {
      const nameMatch = this.filterName ? entity.name.toLowerCase().includes(this.filterName.toLowerCase()) : true;
      const emailMatch = this.filterEmail ? entity.email.toLowerCase().includes(this.filterEmail.toLowerCase()) : true;
      return nameMatch && emailMatch;
    });
  }

  // Métodos para las acciones (simulados)
  addNewUserGroup(): void {
    alert('Funcionalidad para añadir nuevo usuario/grupo (simulada).');
    // Aquí se abriría un formulario/modal para añadir.
  }

  viewPermissions(id: number): void {
    alert(`Viendo permisos para la entidad con ID: ${id} (simulado).`);
  }

  editEntity(id: number): void {
    alert(`Editando la entidad con ID: ${id} (simulado).`);
  }

  deleteEntity(id: number): void {
    if (confirm(`¿Estás seguro de que quieres eliminar la entidad con ID: ${id}?`)) {
      alert(`Entidad con ID: ${id} eliminada (simulado).`);
      // Lógica para eliminar del array
      this.allUsersAndGroups = this.allUsersAndGroups.filter(e => e.id !== id);
    }
  }
}
