import React from 'react';
import messages from "./messages"
import styled from "styled-components"
import {FormattedMessage} from 'react-intl';

const Crossed = styled.span`text-decoration: line-through;`
const CrossedBold = styled.span`text-decoration: line-through;font-weight: bold`

const required = value => (value ? undefined : <FormattedMessage {...messages.required} />)
const maxLength = max => value =>
  value && value.length > max ? <FormattedMessage {...messages.maxLength} values={{max}}/> : undefined
const maxLength15 = maxLength(15)
const minLength = min => value =>
  value && value.length < min ? {...messages.minLength, values: {min}} : undefined
const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? <FormattedMessage {...messages.number}/> : undefined
const minValue = min => value =>
  value && value < min ? <FormattedMessage {...messages.minValue} values={{min}}/> : undefined
const minValue13 = minValue(13)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? <FormattedMessage {...messages.email}/>
    : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? <FormattedMessage {...messages.alphaNumeric}/>
    : undefined
const phoneNumber = value =>
  value && !/^([0-9]{9})$/i.test(value)
    ? <FormattedMessage {...messages.phoneNumber}/>
    : undefined
const sameAs = (sameAsKey, sameAsText) => (value, allValues) => {
  return allValues[sameAsKey] === value ? undefined : {...messages.sameAs, values: {sameAsText}}
}


const password = value => {
  if (value) {
    const validations = {}
    let isOk = true
    if (/^.*[A-Z]+.*$/.test(value)) {
      validations.capital = <CrossedBold><FormattedMessage {...messages.password_capital}/></CrossedBold>
    } else {
      isOk = false
      validations.capital = <b><FormattedMessage {...messages.password_capital}/></b>
    }
    if (/^.*[0-9]+.*$/.test(value)) {
      validations.number = <CrossedBold><FormattedMessage {...messages.password_number}/></CrossedBold>
    } else {
      isOk = false
      validations.number = <b><FormattedMessage {...messages.password_number}/></b>
    }
    if (value.length > 6) {
      validations.length = <CrossedBold><FormattedMessage {...messages.password_length}/></CrossedBold>
    } else {
      isOk = false
      validations.length = <b><FormattedMessage {...messages.password_length}/></b>
    }
    if (isOk) {
      return undefined
    } else {
      return <FormattedMessage {...messages.password} values={validations}/>
    }
  } else {
    return undefined
  }
}


export {
  required,
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
}
