/*
 * ChangePassword Messages
 *
 * This contains all the text for the ChangePassword component.
 */
import {defineMessages} from 'react-intl';

export default defineMessages({
  required: {
    id: 'app.util.Validations.required',
    defaultMessage: 'Pole musí být vyplněno.',
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
    defaultMessage: 'Není validní email.',
  },
  alphaNumeric: {
    id: 'app.util.Validations.alphaNumeric',
    defaultMessage: 'Může obsahovat pouze písmena a čísla.',
  },
  phoneNumber: {
    id: 'app.util.Validations.phoneNumber',
    defaultMessage: 'Není valiadní telefoní číslo.',
  },
  sameAs: {
    id: 'app.util.Validations.sameAs',
    defaultMessage: 'Hodnota musí být stejná jako {sameAsText}',
  },
  password: {
    id: 'app.util.Validations.password',
    defaultMessage: 'Heslo musí obsahovat {capital}, {number} a musí být minimálně {length} dlouhé',
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
