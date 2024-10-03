//import React from 'react';
import styled from '@emotion/styled';

interface Props {
  value: string;
}

const Container = styled.div``;

export const GrandChild = ({ value }: Props) => {
  return <Container>GrandChild = {value}</Container>;
};
