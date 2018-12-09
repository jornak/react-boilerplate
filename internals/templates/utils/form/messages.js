import { defineMessages } from 'react-intl';

export default defineMessages({
  required: {
    id: 'app.util.Validations.required',
    defaultMessage: 'Field is mandatory.',
  },
  notEmpty: {
    id: 'app.util.Validations.notEmpty',
    defaultMessage: 'Field must not be empty string.',
  },
  requiredArray: {
    id: 'app.util.Validations.requiredArray',
    defaultMessage: 'Field is mandatory.',
  },
  maxLength: {
    id: 'app.util.Validations.maxLength',
    defaultMessage: 'Musí být maximálně {max} nebo méně znaků.',
  },
  minValue: {
    id: 'app.util.Validations.minValue',
    defaultMessage: 'Musí být minimálně {min}.',
  },
  minLength: {
    id: 'app.util.Validations.minLength',
    defaultMessage: 'Musí být mnimálně {min} nebo více znaků.',
  },
  number: {
    id: 'app.util.Validations.number',
    defaultMessage: 'Musí být číslo.',
  },
  email: {
    id: 'app.util.Validations.email',
    defaultMessage: 'Not a valid email.',
  },
  alphaNumeric: {
    id: 'app.util.Validations.alphaNumeric',
    defaultMessage: 'Může obsahovat pouze písmena a čísla.',
  },
  phoneNumber: {
    id: 'app.util.Validations.phoneNumber',
    defaultMessage: 'Not a valid telephone number.',
  },
  sameAs: {
    id: 'app.util.Validations.sameAs',
    defaultMessage: 'Hodnota musí být stejná jako {sameAsText}',
  },
  password: {
    id: 'app.util.Validations.password',
    defaultMessage:
      'Heslo musí obsahovat {capital}, {number} a musí být minimálně {length} dlouhé',
  },
  password_capital: {
    id: 'app.util.Validations.password_capital',
    defaultMessage: 'velké písmeno',
  },
  password_number: {
    id: 'app.util.Validations.password_number',
    defaultMessage: 'číslo',
  },
  password_length: {
    id: 'app.util.Validations.password_length',
    defaultMessage: '7 znaků',
  },
});
