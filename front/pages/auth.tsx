import { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';

const Auth: NextPage = function () {
  const [isOpen, setIsOpen] = useState(false);
  return <AuthContainer />;
};

const AuthContainer = styled.div``;

export default Auth;
