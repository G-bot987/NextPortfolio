import React from "react";

interface DescriptionInterface {
  description: string;
}

export default function Description(props: DescriptionInterface) {
  console.log(props);
  const { description } = props;
  return <article>{description}</article>;
}
