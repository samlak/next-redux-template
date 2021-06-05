import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/Theme";
import styled from 'styled-components';
import { store } from "../store/index";
import Menu from "../app/shared/Menu/menu.component";
import MenuButton from "../app/shared/MenuButton/menuButton.component";
import Header from "../app/shared/Header/header.component";

const PageContent = styled.div`
  margin-top: 10vh;
  height: 200vh;
`



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Menu />
          <MenuButton />
          <Header />
          <PageContent>
            <Component {...pageProps} />
          </PageContent>
        </ThemeProvider>
      </Provider>
    </>
  );
}
