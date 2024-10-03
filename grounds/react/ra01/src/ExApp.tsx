import { StateComponent1 } from "./examples/pages/ex01/StateComponent1";

import styled from '@emotion/styled';
import { StateComponent2 } from "./examples/pages/ex01/StateComponent2";
import { PropsAndState } from "./examples/pages/ex01/PropsAndState";
import { NonContext } from "./examples/pages/Context/NonCntxt";

const Container = styled.div`
  text-align: center;
`;

function ExApp() {
    return (
        <Container>
            <StateComponent1></StateComponent1>
            <hr />
            <StateComponent2></StateComponent2>
            <hr />
            <PropsAndState></PropsAndState>
            <hr />
            <NonContext></NonContext>
        </Container>
    );
}

export default ExApp;