export const es = {
  language: {
    selectLanguage: "Idioma",
    es: "Español",
    en: "Ingles",
  },
  theme: {
    selectTheme: "Tema",
    light: "Claro",
    dark: "Oscuro",
  },
  routes: {
    appName: "OpenAPI Designer",
    styleguide: "Styleguide",
    404: "Página no encontrada",
    code: "Visor de Código",
    validator: "Validador de Código",
  },
  paths: {
    "/designer": "API Designer",
    "/designer/general": "General",
    "/designer/general/details": "Detalles del API",
    "/designer/general/security": "Seguridad del API",
    "/designer/general/documentation": "Documentación del API",
    "/designer/general/servers": "Servidores",
    "/designer/general/tags": "Tags",
    "/designer/paths": "Paths",
    "/designer/components": "Componentes",
  },
  components: {
    button: {
      cancel: "Cancelar",
      process: "Procesar",
      confirm: "Confirmar",
      confirmDelete: "Sí, eliminar",
    },
    table: {
      actions: "Acciones",
      edit: "Editar",
      delete: "Eliminar",
      search: "Búsqueda",
    },
    alertResultModal: {
      acceptButtonLabel: "Aceptar",
      goBackButtonLabel: "Volver",
    },
  },
  actions: {
    save: "Guardar",
    delete: "Eliminar",
    update: "Actualizar",
    select: "Seleccionar",
    clean: "Limpiar",
    reset: "Resetear",
  },
  form: {
    errors: {
      required: "Este campo es requerido",
      email: "Ingresa un correo electrónico valido",
      greaterThanOrEqualTo1: "Debe ser mayor o igual a 1",
      moreThan1: "Debe tener uno o más",
      passwordsDoNotMatches: "Las contraseñas no coinciden",
      noMoreThanNCharacters: "No debe contener más de {{n}} caracteres",
      onlyNumbers: "Ingresa un número válido",
      greaterThanZero: "El número debe ser mayor a 0",
      unsupportedFormat: "Formato no valido",
      selectAnOption: "Selecciona una de las opciones disponibles",
    },
    inputs: {
      apiName: {
        label: "Nombre",
        placeholder: "Ej. Mi API",
        helper: "Requerido. Nombre del API",
      },
      apiVersion: {
        label: "Versión",
        placeholder: "Ej. 1.0",
        helper: "Requerido. Versión del API",
      },
      apiDescription: {
        label: "Descripción",
        placeholder: "Escribe una descripción para tu API aquí ...",
        helper: "Opcional. Descripción del API",
      },
      apiTerms: {
        label: "Terminos y condiciones",
        placeholder: "Ej. https://apiup.com/terms-and-conditions",
        helper: "Opcional. URL de terminos y condiciones de Servicio",
      },
      apiLogo: {
        label: "Logo",
        placeholder: "Ej. https://apiup.com/amazing-logo.png",
        helper: "Opcional. URL con imagen para usar como logo",
      },
      tagLabel: {
        label: "Etiqueta",
        placeholder: "Ej. Warnings",
        helper: "Requerido. Texto para mostrar en el Tag",
      },
      tagColor: {
        label: "Color",
        placeholder: "Ej. Info",
        helper: "Requerido. Color del Tag",
      },
      description: {
        label: "Descripción",
        placeholder: "Escribe una breve descripción",
        helper: "Opcional. Breve descripción",
      },
      name: {
        label: "Nombre",
        placeholder: "Escribe un nombre",
        helper: "Nombre descriptivo",
      },
      url: {
        label: "URL",
        placeholder: "Escribe una url",
        helper: "url (http://example.com)",
      },
    },
  },
  catalog: {
    pronouns: {
      singularHe: "el",
      pluralHe: "los",
      singularShe: "la",
      pluralShe: "las",
    },
    fields: {
      id: "ID",
      name: "Nombre",
      code: "Código",
      description: "Descripción",
    },
    actions: {
      create: "Crear {{entityName}}",
      update: "Actualizar {{entityName}}",
      delete: "Eliminar {{entityName}}",
      search: "Buscar {{entityName}}",
      deleteConfirmationMessage:
        '¿Estas seguro que quieres eliminar el <b>{{ entityName }}</b> seleccionado <b>"{{ itemValue }}"</b>?',
    },
  },
  designer: {
    tabsSection: {
      general: {
        menu: {
          apiDetails: {
            title: "Detalles del API",
            subtitle: "Nombre, Versión, Logo, etc",
          },
          apiSecurity: {
            title: "Seguridad del API",
            subtitle: "Requerimientos de Seguridad para acceso al API",
          },
          apiDocumentation: {
            title: "Documentación del API",
            subtitle: "Contacto, Licencias, Documentación externa",
          },
          servers: {
            title: "Servidores",
            subtitle: "Rutas que pueden ser utilizadas para acceder al API",
            entityName: "Servidor",
            pluralEntityName: "Servidores",
          },
          tags: {
            title: "Tags",
            subtitle: "Utilizadas para especificaciones con metadata adicional",
            entityName: "Tag",
            pluralEntityName: "Tags",
          },
        },
      },
    },
  },
};
