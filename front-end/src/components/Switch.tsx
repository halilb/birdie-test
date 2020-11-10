import React from "react";

type PropsT = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  condition: boolean;
};

const Switch: React.FC<PropsT> = (props: PropsT) => {
  const { condition, children, fallback = null } = props;
  if (condition) {
    return <>{children}</>;
  }
  return <>{fallback}</>;
};

export default Switch;
