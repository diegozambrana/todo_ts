interface errorType {
  [k: string]: string[];
}

interface fieldType {
  [k: string]: string[];
}

export const VALIDATION_MESSAGES = {
  REQUIRED: 'Campo requerido',
  EMAIL: 'Debe ser un email válido',
  SECURE_PASSWORD:
    'La contraseña debe contener Mayusculas, minusculas, numeros y caracteres especiales',
};

export const VALIDATION = {
  REQUIRED: 'required',
  EMAIL: 'email',
  SECURE_PASSWORD: 'secure_password',
};
/* eslint-disable prefer-regex-literals */
const strongRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?.!@#$%^&*])(?=.{8,})',
  'i',
);

export const isValid = (errors: errorType) => {
  let valid = true;
  Object.keys(errors).forEach((key: string) => {
    if (errors[key].length > 0) {
      valid = false;
    }
  });
  return valid;
};
/* eslint-disable no-useless-escape */
/**
 * @param {object} data
 * @param {}
 */
export const validate = (data: any, fields: fieldType): errorType => {
  const errors: { [k: string]: string[] } = {};
  Object.keys(data).forEach((key: string) => {
    errors[key] = [];
  });
  Object.keys(fields).forEach((key: string) => {
    fields[key].forEach((field) => {
      switch (field) {
        case VALIDATION.REQUIRED:
          if (!data[key]) {
            errors[key].push(VALIDATION_MESSAGES.REQUIRED);
          }
          break;
        case VALIDATION.EMAIL:
          if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data[key])
          ) {
            errors[key].push(VALIDATION_MESSAGES.EMAIL);
          }
          break;
        case VALIDATION.SECURE_PASSWORD:
          if (!strongRegex.test(data[key])) {
            errors[key].push(VALIDATION_MESSAGES.SECURE_PASSWORD);
          }
          break;
        default:
          break;
      }
    });
  });
  return errors;
};
