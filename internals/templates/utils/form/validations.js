import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const CrossedBold = styled.span`
  text-decoration: line-through;
  font-weight: bold;
`;

const required = value =>
  value ? undefined : <FormattedMessage {...messages.required} />;
const notEmpty = value =>
  value && typeof value === 'string' && value.trim().length > 0 ? (
    undefined
  ) : (
    <FormattedMessage {...messages.notEmpty} />
  );
const requiredArray = value =>
  Array.isArray(value) && value.length ? (
    undefined
  ) : (
    <FormattedMessage {...messages.requiredArray} />
  );
const maxLength = max => value =>
  value && value.length > max ? (
    <FormattedMessage {...messages.maxLength} values={{ max }} />
  ) : (
    undefined
  );
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min
    ? { ...messages.minLength, values: { min } }
    : undefined;
const minLength2 = minLength(2);
const number = value =>
  value && Number.isNaN(Number(value)) ? (
    <FormattedMessage {...messages.number} />
  ) : (
    undefined
  );
const minValue = min => value =>
  value && value < min ? (
    <FormattedMessage {...messages.minValue} values={{ min }} />
  ) : (
    undefined
  );
const minValue13 = minValue(13);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? (
    <FormattedMessage {...messages.email} />
  ) : (
    undefined
  );
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? (
    <FormattedMessage {...messages.alphaNumeric} />
  ) : (
    undefined
  );
const phoneNumber = value =>
  value && !/^\+([0-9]{1,3})([0-9]{9})$/i.test(value.replace(/ /g, '')) ? (
    <FormattedMessage {...messages.phoneNumber} />
  ) : (
    undefined
  );
const sameAs = (sameAsKey, sameAsText) => (value, allValues) => {
  const messageDesc = { ...messages.sameAs, values: { sameAsText } };
  return allValues[sameAsKey] === value ? (
    undefined
  ) : (
    <FormattedMessage {...messageDesc} />
  );
};

const password = value => {
  if (value) {
    const validations = {};
    let isOk = true;
    if (/^.*[A-Z]+.*$/.test(value)) {
      validations.capital = (
        <CrossedBold>
          <FormattedMessage {...messages.password_capital} />
        </CrossedBold>
      );
    } else {
      isOk = false;
      validations.capital = (
        <b>
          <FormattedMessage {...messages.password_capital} />
        </b>
      );
    }
    if (/^.*[0-9]+.*$/.test(value)) {
      validations.number = (
        <CrossedBold>
          <FormattedMessage {...messages.password_number} />
        </CrossedBold>
      );
    } else {
      isOk = false;
      validations.number = (
        <b>
          <FormattedMessage {...messages.password_number} />
        </b>
      );
    }
    if (value.length > 6) {
      validations.length = (
        <CrossedBold>
          <FormattedMessage {...messages.password_length} />
        </CrossedBold>
      );
    } else {
      isOk = false;
      validations.length = (
        <b>
          <FormattedMessage {...messages.password_length} />
        </b>
      );
    }
    if (isOk) {
      return undefined;
    }
    return <FormattedMessage {...messages.password} values={validations} />;
  }
  return undefined;
};

export {
  required,
  requiredArray,
  maxLength,
  maxLength15,
  minLength,
  minLength2,
  number,
  minValue,
  minValue13,
  email,
  alphaNumeric,
  phoneNumber,
  sameAs,
  password,
  notEmpty,
};
