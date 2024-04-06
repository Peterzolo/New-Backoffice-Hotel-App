import { createGlobalStyle } from "styled-components";
import { Inter, Roboto, Oswald, Raleway } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: ${inter};
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: ${roboto};
  }

  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    src: ${oswald};
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: ${raleway};
  }

  :root {
    --page-background: ${({ theme }) => theme.pageBackground};
    --text-color: ${({ theme }) => theme.textColor};
  }

  body {
    background-color: var(--page-background);
    color: var(--text-color);
    font-family: 'Raleway', sans-serif; /* Default font family */
  }
`;
