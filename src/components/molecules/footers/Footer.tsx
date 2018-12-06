import * as React from 'react';
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components';

import Menu from '../../atoms/menus/Menu';

export default () => (
  <Container>
    <Name><Link to='/'>Mori Atsushi</Link></Name>
    <MenuContainer><Menu /></MenuContainer>
  </Container>
);

const Container = styledComponents.footer`
  background: #222222;
  color: #EEEEEE;
  text-align: center;
  padding: 4rem 2rem 3rem;
`;

const Name = styledComponents.h2`
  margin-bottom: 4rem;
  font-size: 1.5rem;
`;

const MenuContainer = styledComponents.div`
  display: flex;
  justify-content: center;
`;
