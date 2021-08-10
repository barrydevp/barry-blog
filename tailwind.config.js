const typographyExtend = (theme) => {
  const colorLevels = [100, 200, 400, 500];

  const _darkMode = {
    css: [
      {
        color: theme('colors.white'),
        '[class~="lead"]': {
          color: theme('colors.white'),
        },
        a: {
          color: theme('colors.blue.300'),
        },
        strong: {
          color: theme('colors.blue.300'),
        },
        'ol > li::before': {
          color: theme('colors.blue.200'),
        },
        'ul > li::before': {
          backgroundColor: theme('colors.blue.100'),
        },
        hr: {
          borderColor: theme('colors.blue.50'),
        },
        blockquote: {
          color: theme('colors.blue.300'),
          borderLeftColor: theme('colors.blue.50'),
        },
        h1: {
          color: theme('colors.blue.300'),
        },
        h2: {
          color: theme('colors.blue.300'),
        },
        h3: {
          color: theme('colors.blue.300'),
        },
        h4: {
          color: theme('colors.blue.300'),
        },
        'figure figcaption': {
          color: theme('colors.blue.200'),
        },
        ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
          color: '#c9d1d9',
          backgroundColor: '#0d1117',
        },
        code: {
          color: '#c9d1d9',
        },
        'a code': {
          color: '#c9d1d9',
        },
        pre: {
          color: '#c9d1d9',
          backgroundColor: '#0d1117',
        },
        thead: {
          color: theme('colors.blue.300'),
          borderBottomColor: theme('colors.blue.100'),
        },
        'tbody tr': {
          borderBottomColor: theme('colors.blue.50'),
        },
      },
    ],
  };

  const _base = {
    DEFAULT: {
      css: [
        {
          maxWidth: '108ch',
          h3: {
            a: {
              fontWeight: '700'
            }
          },
          ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
            color: '#c9d1d9',
            backgroundColor: '#0d1117',
          },
          '.prose code': {
            color: '#c9d1d9',
          },
          '.prose a code': {
            color: '#c9d1d9',
          },
          '.prose pre': {
            color: '#c9d1d9',
            backgroundColor: '#0d1117',
          },
          '.token.atrule, .token.attr-value, .token.keyword': {
            color: '#ff7b72'
          },
          '.token.punctuation, .token.parameter': {
            color: '#c9d1d9',
          },
          '.token.operator': {
            color: '#79c0ff'
          },
          '.token.function': {
            color: '#d2a8ff'
          },
          '.token.class-name': {
            color: '#ffa657'
          },
        }
      ]
    },
    white: {
      css: [
        {
          color: theme('colors.white'),
          code: { color: theme('colors.white') },
        },
      ],
    },
    dark: _darkMode,
  };

  // const colors = Object.entries(theme('colors')).reduce((reduced, [color, values]) => {
  //   const _colors = colorLevels.reduce((acc, level) => {
  //     if (!values[level]) {
  //       return acc;
  //     }
  //
  //     return {
  //       ...acc,
  //       [`${color}-${level}`]: {
  //         css: [
  //           {
  //             color: values[level],
  //             code: { color: values[level] },
  //           },
  //         ],
  //       },
  //     };
  //   }, {});
  //
  //   return {
  //     ...reduced,
  //     ..._colors,
  //   };
  // }, {});

  return {
    ..._base,
    // ...colors
  };
};

/** if has custom in tailwind default variant, we need uncomment the line 11 */
const defaultVariant = {
  accessibility: ['responsive', 'focus-within', 'focus'],
  alignContent: ['responsive'],
  alignItems: ['responsive'],
  alignSelf: ['responsive'],
  animation: ['responsive'],
  appearance: ['responsive'],
  backdropBlur: ['responsive'],
  backdropBrightness: ['responsive'],
  backdropContrast: ['responsive'],
  backdropDropShadow: ['responsive'],
  backdropFilter: ['responsive'],
  backdropGrayscale: ['responsive'],
  backdropHueRotate: ['responsive'],
  backdropInvert: ['responsive'],
  backdropSaturate: ['responsive'],
  backdropSepia: ['responsive'],
  backgroundAttachment: ['responsive'],
  backgroundBlendMode: ['responsive'],
  backgroundClip: ['responsive'],
  backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  backgroundImage: ['responsive'],
  backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  backgroundPosition: ['responsive'],
  backgroundRepeat: ['responsive'],
  backgroundSize: ['responsive'],
  backgroundOrigin: ['responsive'],
  blur: ['responsive'],
  borderCollapse: ['responsive'],
  borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  borderRadius: ['responsive'],
  borderStyle: ['responsive'],
  borderWidth: ['responsive'],
  boxDecorationBreak: ['responsive'],
  boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  boxSizing: ['responsive'],
  brightness: ['responsive'],
  clear: ['responsive'],
  container: ['responsive'],
  contrast: ['responsive'],
  cursor: ['responsive'],
  display: ['responsive'],
  divideColor: ['responsive', 'dark'],
  divideOpacity: ['responsive', 'dark'],
  divideStyle: ['responsive'],
  divideWidth: ['responsive'],
  dropShadow: ['responsive'],
  fill: ['responsive'],
  filter: ['responsive'],
  flex: ['responsive'],
  flexDirection: ['responsive'],
  flexGrow: ['responsive'],
  flexShrink: ['responsive'],
  flexWrap: ['responsive'],
  float: ['responsive'],
  fontFamily: ['responsive'],
  fontSize: ['responsive'],
  fontSmoothing: ['responsive'],
  fontStyle: ['responsive'],
  fontVariantNumeric: ['responsive'],
  fontWeight: ['responsive'],
  gap: ['responsive'],
  gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
  grayscale: ['responsive'],
  gridAutoColumns: ['responsive'],
  gridAutoFlow: ['responsive'],
  gridAutoRows: ['responsive'],
  gridColumn: ['responsive'],
  gridColumnEnd: ['responsive'],
  gridColumnStart: ['responsive'],
  gridRow: ['responsive'],
  gridRowEnd: ['responsive'],
  gridRowStart: ['responsive'],
  gridTemplateColumns: ['responsive'],
  gridTemplateRows: ['responsive'],
  height: ['responsive'],
  hueRotate: ['responsive'],
  inset: ['responsive'],
  invert: ['responsive'],
  isolation: ['responsive'],
  justifyContent: ['responsive'],
  justifyItems: ['responsive'],
  justifySelf: ['responsive'],
  letterSpacing: ['responsive'],
  lineHeight: ['responsive'],
  listStylePosition: ['responsive'],
  listStyleType: ['responsive'],
  margin: ['responsive'],
  maxHeight: ['responsive'],
  maxWidth: ['responsive'],
  minHeight: ['responsive'],
  minWidth: ['responsive'],
  mixBlendMode: ['responsive'],
  objectFit: ['responsive'],
  objectPosition: ['responsive'],
  opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  order: ['responsive'],
  outline: ['responsive', 'focus-within', 'focus'],
  overflow: ['responsive'],
  overscrollBehavior: ['responsive'],
  padding: ['responsive'],
  placeContent: ['responsive'],
  placeItems: ['responsive'],
  placeSelf: ['responsive'],
  placeholderColor: ['responsive', 'dark', 'focus'],
  placeholderOpacity: ['responsive', 'dark', 'focus'],
  pointerEvents: ['responsive'],
  position: ['responsive'],
  resize: ['responsive'],
  ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
  ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
  ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
  ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
  ringWidth: ['responsive', 'focus-within', 'focus'],
  rotate: ['responsive', 'hover', 'focus'],
  saturate: ['responsive'],
  scale: ['responsive', 'hover', 'focus'],
  sepia: ['responsive'],
  skew: ['responsive', 'hover', 'focus'],
  space: ['responsive'],
  stroke: ['responsive'],
  strokeWidth: ['responsive'],
  tableLayout: ['responsive'],
  textAlign: ['responsive'],
  textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  textOverflow: ['responsive'],
  textTransform: ['responsive'],
  transform: ['responsive'],
  transformOrigin: ['responsive'],
  transitionDelay: ['responsive'],
  transitionDuration: ['responsive'],
  transitionProperty: ['responsive'],
  transitionTimingFunction: ['responsive'],
  translate: ['responsive', 'hover', 'focus'],
  userSelect: ['responsive'],
  verticalAlign: ['responsive'],
  visibility: ['responsive'],
  whitespace: ['responsive'],
  width: ['responsive'],
  wordBreak: ['responsive'],
  zIndex: ['responsive', 'focus-within', 'focus']
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: typographyExtend,
    },
  },
  variants: {
    // ...defaultVariant,
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};