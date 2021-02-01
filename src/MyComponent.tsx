import React, { FC } from 'react';

const MyComponent: FC<{ type: 'primary' | 'secondary'}> = ({ type }) => {
  const label = type ==='primary' ? 'Primary' : 'Other...';

  return <div>
    My label type is ${label}
  </div>
};

export default MyComponent;