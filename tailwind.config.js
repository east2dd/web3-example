module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      blue: {
        900: '#319DE2',
        800: '#00B3ED',
        700: '#5ED8FF',
        600: '#91E4FF',
        500: '#08799E',
      },
      dark: {
        900: '#0A0A0A',
        800: '#161616',
        700: '#1C2025',
        600: '#1D1D1D',
        500: '#1F2328',
        400: '#202329',
        300: '#282C34',
        200: '#3E444E',
        100: '#404A55',
      },
      gray: {
        900: '#D2D2D2',
        800: '#CBCBCB',
        700: '#BFBFBF',
        600: '#B9B9B9',
        500: '#A4A4A4',
        400: '#949494',
        300: '#777777',
        200: '#707070',
        100: '#434F5B',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      condensed: ['Roboto Condensed'],
      roboto: ['Roboto'],
    },
    fontSize: {
      '9xs': '.5625rem', // 9px
      '8xs': '.6875rem', // 11px
      '7xs': '.75rem', // 12px
      '6xs': '.8125rem', // 13px
      '5xs': '.875rem', // 14px
      '4xs': '.9375rem', // 15px
      '3xs': '1.125rem', // 18px
      '2xs': '1.25rem', // 20px
      xs: '1.3125rem', // 21px
      sm: '1.375rem', // 22px
      base: '1.5rem', // 24px
      md: '1.625rem', // 26px
      lg: '1.75rem', // 28px
      xl: '1.875rem', // 30px
      '2xl': '2.25rem', // 36px
      '3xl': '2.3125rem', // 37px
      '4xl': '2.375rem', // 38px
      '5xl': '2.8125rem', // 45px
      '6xl': '3.5rem', // 56px
      '7xl': '4rem', // 64px
      '8xl': '4.625rem', // 74px
      '9xl': '5rem', // 80px
    },
    lineHeight: {
      1: '.6875rem', // 11px
      2: '.8125rem', // 13px
      3: '.875rem', // 14px
      4: '1rem', // 16px
      5: '1.0625rem', // 17px
      6: '1.125rem', // 18px
      7: '1.3125rem', // 21px
      8: '1.375rem', // 22px
      9: '1.5rem', // 24px
      10: '1.5625rem', // 25px
      11: '1.6875rem', // 27px
      12: '1.75rem', // 28px
      13: '1.8125rem', // 29px
      14: '2rem', // 32px
      15: '2.125rem', // 34px
      16: '2.25rem', // 36px
      17: '2.6875rem', // 43px
      18: '2.75rem', // 44px
      19: '4.1875rem', // 67px
      20: '4.5rem', // 72px
      21: '6.0625rem', // 94px
      none: '1', // none
    },
    extend: {
      opacity: {
        15: '.15',
        33: '.33',
        50: '.5',
        72: '.72',
        83: '.83',
        85: '.85',
      },
      spacing: {
        1.25: '.3125rem', // 5px
        2.5: '.625rem', // 10px
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        6.5: '1.625rem', // 26px
        7.5: '1.875rem', // 30px
        12.5: '3.125rem', // 50px
        13: '3.25rem', // 52px
        17.5: '4.375rem', // 70px
        18: '4.5rem', // 72px
        25: '6.25rem', // 100px
        27: '6.75rem', // 108px
        37.5: '9.375rem', // 150px
        50: '12.5rem', // 200px
        55: '13.75rem', // 220px
        85: '21.25rem', // 340px
      },
      borderRadius: {
        3: '.1875rem', // 3px
        6: '.375rem', // 6px
        10: '.625rem', // 10px
        14: '.875rem', // 14px
        20: '1.25rem', // 20px
        28: '1.75rem', // 28px
      },
      minWidth: {
        36: '9rem', // 144px
        screen: '100vw', // 100vw
      },
      maxWidth: {
        100: '25rem', // 400px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
