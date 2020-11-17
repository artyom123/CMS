import React from 'react';
import { Container, Grid, Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.scss';

const Footer = () => (
  <Grid className="footer">
    <Container className="footer-container">
      <Grid className="footer-container-left">
        <Link href="https:test">тех поддержка</Link>
      </Grid>
      <Grid className="footer-container-right">
        <Grid>Design by Artsem Virshych</Grid>
        <Grid className="footer-messenger">
          <Link href="https:test">
            <FontAwesomeIcon icon={['fab', 'vk']} />
          </Link>
          <Link href="https:test">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </Link>
          <Link href="https:test">
            <FontAwesomeIcon icon={['fab', 'telegram']} />
          </Link>
        </Grid>
      </Grid>
    </Container>
  </Grid>
);

Footer.displayName = 'Footer';

export default Footer;
