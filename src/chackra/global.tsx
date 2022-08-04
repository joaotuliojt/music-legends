import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'GT Eesti Pro Display';
        font-style: normal;
        font-weight: 700;
        src: url('./font/GTEestiProDisplay-Bold.ttf') format('truetype');
      }
      @font-face {
        font-family: 'GT Eesti Pro Display';
        font-style: normal;
        font-weight: 500;
        src: url('./font/GTEestiProDisplay-Medium.ttf') format('truetype');
      }
      @font-face {
        font-family: 'GT Eesti Pro Display';
        font-style: normal;
        font-weight: 400;
        src: url('../assets/font/GTEestiProDisplay-Regular.ttf') format('ttf');
      }
      `}
  />
)

export default Fonts
