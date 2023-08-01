export const en = {
  language: {
    selectLanguage: "Language",
    es: "Spanish",
    en: "English",
  },
  theme: {
    selectTheme: "Theme",
    light: "Light",
    dark: "Dark",
  },
  routes: {
    appName: "OpenAPI Designer",
    styleguide: "Styleguide",
    404: "Page Not Found",
    code: "Code Viewer",
    validator: "Code Validator",
  },
  paths: {
    "/designer": "API Designer",
    "/designer/general": "General",
    "/designer/general/details": "API Details",
    "/designer/general/security": "API Security",
    "/designer/general/documentation": "API Documentation",
    "/designer/general/servers": "Servers",
    "/designer/general/tags": "Tags",
    "/designer/paths": "Paths",
    "/designer/components": "Components",
  },
  components: {
    button: {
      cancel: "Cancel",
      process: "Process",
      confirm: "Confirm",
      confirmDelete: "Yes, delete",
    },
    table: {
      actions: "Actions",
      edit: "Edit",
      delete: "Delete",
      search: "Search",
    },
    alertResultModal: {
      acceptButtonLabel: "Accept",
      goBackButtonLabel: "Go back",
    },
  },
  actions: {
    save: "Save",
    delete: "Delete",
    update: "Update",
    select: "Select",
    clean: "Clean",
    reset: "Reset",
  },
  form: {
    errors: {
      required: "This field is required",
      email: "Enter a valid email",
      greaterThanOrEqualTo1: "Must be greater than or equal to 1",
      moreThan1: "Must have one or more",
      passwordsDoNotMatches: "Passwords do not match",
      noMoreThanNCharacters: "Must not contain more than {{n}} characters",
      onlyNumbers: "Enter a valid number",
      greaterThanZero: "Number must be greater than 0",
      unsupportedFormat: "Invalid format",
      selectAnOption: "Select one of the available options",
    },
    input: {
      apiName: {
        label: "Name",
        placeholder: "e.g. My API",
        helper: "Required. API name",
      },
      apiVersion: {
        label: "Version",
        placeholder: "e.g. 1.0",
        helper: "Required. API version",
      },
      apiDescription: {
        label: "Description",
        placeholder: "Write a description for your API here...",
        helper: "Optional. API description",
      },
      apiTerms: {
        label: "Terms and conditions",
        placeholder: "e.g. https://apiup.com/terms-and-conditions",
        helper: "Optional. Terms of Service URL",
      },
      apiLogo: {
        label: "Logo",
        placeholder: "e.g. https://apiup.com/amazing-logo.png",
        helper: "Optional. URL with image to use as logo",
      },
      tagLabel: {
        label: "Label",
        placeholder: "Ex. Warnings",
        helper: "Required. Text to display in the Tag",
      },
      tagColor: {
        label: "Color",
        placeholder: "Ex. Info",
        helper: "Required. Tag Color",
      },
      description: {
        label: "Description",
        placeholder: "Enter a short description",
        helper: "Optional. Brief description",
      },
      name: {
        label: "Name",
        placeholder: "Enter a name",
        helper: "Friendly name",
      },
      url: {
        label: "URL",
        placeholder: "Enter a url",
        helper: "url (http://example.com)",
      },
    },
  },
  catalog: {
    pronouns: {
      singularHe: "the",
      pluralHe: "the",
      singularShe: "the",
      pluralShe: "the",
    },
    fields: {
      id: "ID",
      name: "Name",
      code: "Code",
      description: "Description",
    },
    actions: {
      create: "Create {{entityName}}",
      update: "Update {{entityName}}",
      delete: "Delete {{entityName}}",
      search: "Search {{entityName}}",
      deleteConfirmationMessage:
        'Are you sure you want to remove the <b>{{ entityName }}</b> selected <b>"{{ itemValue }}"</b>?',
    },
  },
  designer: {
    tabsSection: {
      general: {
        menu: {
          apiDetails: {
            title: "API Details",
            subtitle: "Name, Version, Logo, etc",
          },
          apiSecurity: {
            title: "API Security",
            subtitle: "Security Requirements for API access",
          },
          apiDocumentation: {
            title: "API Documentation",
            subtitle: "Contact, Licenses, External Documentation",
          },
          servers: {
            title: "Servers",
            subtitle: "Routes that can be used to access the API",
            entityName: "Server",
            pluralEntityName: "Servers",
          },
          tag: {
            title: "Tags",
            subtitle: "Used for specs with additional metadata",
            entityName: "Tag",
            pluralEntityName: "Tags",
          },
        },
      },
    },
  },
};
