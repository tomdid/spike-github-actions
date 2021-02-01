import React, { FC } from 'react';

const labelByType = {
  primary: 'Primary label',
  secondary: 'Secondary label',
  other: 'Other label',
};

const MyComponent: FC<{ type: 'primary' | 'secondary' | 'other'}> = ({ type }) => {
  const label = labelByType[type];

  return <div>
    My label type is ${label}
  </div>
};

export default MyComponent;