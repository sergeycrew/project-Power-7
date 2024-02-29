import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url('https://images.all-free-download.com/images/graphicwebp/blue_abstract_background_310971.webp') no-repeat center center fixed;
  background-size: cover;
  color: ${p => p.theme.colors.mainTextColor};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button{
  border-radius: ${p => p.theme.radii.sd};
  border: 1px solid ${p => p.theme.colors.borderColor};
  cursor: pointer;
  box-shadow: ${p => p.theme.shadows.btnShadow};
  color: inherit;
};

button:active, button:focus, button:hover {
  outline: none;
  box-shadow: ${p => p.theme.shadows.btnPushShadow};
    color: ${p => p.theme.colors.accentTextColor};
}
button::-moz-focus-inner {
  border: 0;
}

ul {
  list-style: none;
}

a {
    text-decoration: none;
    font-size: 18px;
    color: ${p => p.theme.colors.mainTextColor}; 
}

a:hover {
      color: ${p => p.theme.colors.accentTextColor}; 
      font-weight: 700;
    } 

`;