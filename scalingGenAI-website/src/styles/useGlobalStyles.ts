// src/styles/globalStyles.ts
import { createUseStyles } from 'react-jss';

const useGlobalStyles = createUseStyles({
  '@font-face': {
    fontFamily: 'SuisseBPIntl',
    src: 'url(/fonts/SuisseBPIntl.woff2)',
  },
  '@global': {
    ':root': {
      fontFamily: 'SuisseBPIntl, Arial, sans-serif',
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
});

export default useGlobalStyles;
