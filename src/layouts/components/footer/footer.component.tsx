import * as React from 'react';
import { Link } from 'common-app/link';

import { FooterLayout } from './footer.styles';

export const Footer: React.FC = () => {
  return (
    <FooterLayout data-testid="footer-layout">
      <span role="img" aria-label="Copyright">
        &copy;
      </span>{' '}
      2020. Developed in React with{' '}
      <span role="img" aria-label="Love">
        💛
      </span>{' '}
      by
      <Link href="mailto:alicia.guardenoalbertos@gmail.com">Alicia G.</Link>
    </FooterLayout>
  );
};
