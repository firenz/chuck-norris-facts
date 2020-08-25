import * as React from 'react';

import { CardLayout } from './card.styles';

interface Props {
  title: any;
  content: any;
  action: any;
}

export const Card: React.FC<Props> = (props: Props) => {
  const { title, content, action } = props;
  return (
    <CardLayout>
      {title}
      {content}
      {action}
    </CardLayout>
  );
};
