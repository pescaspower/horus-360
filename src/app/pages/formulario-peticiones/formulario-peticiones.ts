import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/header.component/header.component';
import { FooterComponent } from '../../shared/footer.component/footer.component';

@Component({
  selector: 'app-formulario-peticiones',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule, // Necesario para formGroup, formControlName, etc.
    FormsModule,          // Necesario para [(ngModel)]
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './formulario-peticiones.html',
  styleUrls: ['./formulario-peticiones.css']
})
export class FormularioPeticiones implements OnInit {
  permisoForm!: FormGroup;

  // Propiedades para la sección "Añadir Tabla", enlazadas con [(ngModel)]
  newCatalog: string = '';
  newSchema: string = '';
  newTable: string = '';
  newPermission: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.permisoForm = this.fb.group({
      requester_email: ['', [Validators.required, Validators.email]],
      requested_for_user_or_group: ['', Validators.required],
      justification: ['', Validators.required],
      expiration_date: [''],
      tables: this.fb.array([], Validators.required) // El formulario será inválido si no hay tablas
    });
  }

  // Getter para acceder fácilmente al FormArray de tablas
  get tables(): FormArray {
    return this.permisoForm.get('tables') as FormArray;
  }

  // Crea un FormGroup para una nueva tabla
  createTableGroup(catalog: string, schema: string, table: string, permission: string): FormGroup {
    return this.fb.group({
      catalog: [catalog, Validators.required],
      schema: [schema, Validators.required],
      table: [table, Validators.required],
      permission: [permission, Validators.required]
    });
  }

  // Añade la tabla desde los campos de entrada al FormArray
  addTable(): void {
    if (!this.newCatalog || !this.newSchema || !this.newTable || !this.newPermission) {
      return;
    }
    const tableGroup = this.createTableGroup(this.newCatalog, this.newSchema, this.newTable, this.newPermission);
    this.tables.push(tableGroup);

    // Limpia los campos para la siguiente tabla
    this.newCatalog = '';
    this.newSchema = '';
    this.newTable = '';
    this.newPermission = '';
  }

  // Elimina una tabla de la lista por su índice
  removeTable(index: number): void {
    this.tables.removeAt(index);
  }

  // Gestiona el envío del formulario
  onSubmit(): void {
    if (this.permisoForm.valid) {
      console.log('Formulario enviado:', this.permisoForm.value);
      alert('Solicitud enviada con éxito (revisa la consola para ver los datos).');
      this.permisoForm.reset();
      this.tables.clear(); // Vacía el array de tablas
    }
  }
}