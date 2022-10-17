tailwind.config = {
  theme: {
      screens: {
          'sm': '375px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1440px'
      },
      extend: {
          colors: {
              LightCyan: 'hsl(193, 38%, 86%)',
              NeonGreen: 'hsl(150, 100%, 66%)',
              GrayishBlue: 'hsl(217, 19%, 38%)',
              GrayishDarkBlue: 'hsl(217, 19%, 24%)',
              DarkBlue: 'hsl(218, 23%, 16%)',
          },
          fontFamily: {
              'Manrope': 'Manrope, sans-serif'
          },
          backgroundImage: {
              'intro-desktop': "url('./images/bg-intro-desktop.png')",
              'intro-mobile': "url('./images/bg-intro-mobile.png')"
          }
      }
  }
}