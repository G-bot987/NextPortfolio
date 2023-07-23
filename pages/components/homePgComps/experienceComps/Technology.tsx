import React from "react";

interface PropsInterface {
  techology: string;
}

export default function Technology(props: PropsInterface) {
  const { techology } = props;
  return <li>{techology}</li>;
}
