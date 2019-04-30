// Color Schemes
export const mediaColorScheme = {
  light: '(prefers-color-scheme: light)',
  dark: '(prefers-color-scheme: dark)'
};

// breakpoints - xs < 576px | sm 576px > < 768px | md 768px > < 992| lg 992 > < 1200px | xl 1200px > < 1600 | xxl > 1600px
const breakpoints = {
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200',
  xxl: '1600'
};

// Media queries
export const mediaQueries = {
  mobile: `only screen and (max-width: ${breakpoints.sm - 1}px)`,
  tablet: `only screen and (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
  desktop: `only screen and (min-width: ${breakpoints.md}px)`,
  tabletDesktop: `only screen and (min-width: ${breakpoints.sm}px)`,
  mobileTablet: `only screen and (max-width: ${breakpoints.md - 1}px)`
};
