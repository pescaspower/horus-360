import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header.component/header.component';
import { FooterComponent } from '../../shared/footer.component/footer.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './ayuda-faq.html',
  styleUrls: ['./ayuda-faq.css']
})
export class AyudaFaq {
  faqItems = [
    {
      question: '¿Cómo puedo solicitar un nuevo permiso sobre una tabla?',
      active: false,
      isList: false,
      answerParagraphs: [
        'Para solicitar un nuevo permiso, navega a la sección "Solicitar Permiso" desde la barra de navegación superior. Rellena los campos obligatorios como el nombre del catálogo, esquema y tabla, el tipo de permiso deseado y el usuario o grupo al que se le otorgará. Puedes añadir múltiples tablas a una misma solicitud.',
        'Asegúrate de proporcionar una justificación clara si es requerida.'
      ]
    },
    {
      question: '¿Dónde puedo ver el estado de mis peticiones?',
      active: false,
      isList: false,
      answerParagraphs: [
        'Puedes consultar el estado de todas tus peticiones en la sección "Mis Peticiones". Allí encontrarás una tabla con el ID de la solicitud, el email del solicitante, el usuario/grupo afectado, las tablas involucradas, la fecha de solicitud y su estado actual (Pendiente, Aprobada, Rechazada). También puedes usar los filtros para buscar peticiones específicas.'
      ]
    },
    {
      question: '¿Qué tipos de permisos puedo solicitar?',
      active: false,
      isList: true,
      answerList: [
        '<strong>SELECT:</strong> Permite leer datos de la tabla.',
        '<strong>INSERT:</strong> Permite añadir nuevas filas a la tabla.',
        '<strong>UPDATE:</strong> Permite modificar filas existentes en la tabla.',
        '<strong>DELETE:</strong> Permite eliminar filas de la tabla.',
        '<strong>ALL PRIVILEGES:</strong> Otorga todos los permisos disponibles sobre la tabla.'
      ]
    },
    {
      question: 'Soy administrador, ¿cómo apruebo o rechazo una petición?',
      active: false,
      isList: false,
      answerParagraphs: [
        'Como administrador, accede a la sección "Aprobar Peticiones". Verás una lista de todas las solicitudes pendientes. Puedes revisar los detalles de cada petición y usar los botones "Aprobar" o "Rechazar" para procesarlas individualmente. Para gestionar múltiples peticiones a la vez, puedes seleccionar los checkboxes correspondientes y usar el botón "Aprobar Seleccionadas".'
      ]
    },
    {
      question: '¿Mis datos están seguros en Databricks Unity Catalog?',
      active: false,
      isList: false,
      answerParagraphs: [
        'Sí, Databricks Unity Catalog proporciona un modelo de gobernanza unificado para tus datos, asegurando un control de acceso centralizado y detallado. Esta aplicación facilita la gestión de esos permisos de forma eficiente, pero la seguridad subyacente de tus datos recae en la configuración y las características de Unity Catalog.',
        'Es importante seguir las mejores prácticas de seguridad, como rotar tokens de acceso y revisar periódicamente los permisos otorgados.'
      ]
    }
  ];

  toggle(item: any) {
    // Cerrar todas las demás
    this.faqItems.forEach(i => {
      if (i !== item) {
        i.active = false;
      }
    });
    // Alternar la actual
    item.active = !item.active;
  }
}
