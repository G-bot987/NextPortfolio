import React from "react";

export default function HeaderDescription(props: any) {
  console.log(props);
  const { txt } = props;
  return <div>{txt}</div>;
}
