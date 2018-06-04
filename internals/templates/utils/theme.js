import { css } from 'styled-components';

const sizes = {
  tablet: 992,
  phone: 426,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const color = {
  black: "#000",
  white: "#FFF",
}

const font = {
  text: css`
    color: ${color.black};
    text-align: left;
    text-decoration: none;
    font-family: 'Frutiger',Arial;
    font-size: 18.0pt;
    font-style: normal;
    font-weight: 400;
    line-height: 0px;
`,
}

export const theme = {
  color, font, media,
}
