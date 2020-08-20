import * as React from 'react';

import { MenuTitleLayout } from './menu-title.styles';

interface Props {
  children: any;
}

export const MenuTitle: React.FC<Props> = (props: Props) => {
  return <MenuTitleLayout>{props.children}</MenuTitleLayout>;
};
