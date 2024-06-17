import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbar = ({ children }) => {
  return (
    <Scrollbars style={{ width: '100%', height: '100vh' }}>
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
