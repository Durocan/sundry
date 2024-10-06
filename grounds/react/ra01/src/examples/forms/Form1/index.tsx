import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Footer } from '../../cpnts/Footer';
import { Header } from '../../cpnts/Header';
import { Sidebar } from '../../cpnts/Sidebar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  diaplay: flex;
  flex: 1;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

interface Props {
  children: ReactNode;
}

export const Form1 = (props: Props) => {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Main>{props?.children}</Main>
      </Content>
      <Footer />
    </Container>
  );
};