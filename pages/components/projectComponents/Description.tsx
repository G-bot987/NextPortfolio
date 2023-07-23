import React from "react";

interface DescriptionInterface {
  description: string;
}

export default function Description(props: DescriptionInterface) {
  const { description } = props;
  return <article>{description}</article>;
}
