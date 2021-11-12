import React from "react";

export default function CardHeader(props) {
  const { className, children } = props;

  return <div className={className}>{children}</div>;
}