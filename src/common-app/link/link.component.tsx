import * as React from 'react';

import { LinkLayout } from './link.styles';

interface Props {
  href: string;
  children: any;
}

export const Link: React.FC<Props> = (props: Props) => {
  return <LinkLayout href={props.href}>{props.children}</LinkLayout>;
};
