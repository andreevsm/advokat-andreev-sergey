import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Header,
  Footer,
} from '../components';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1 }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            maxWidth: '1024px',
            width: '100%',
            margin: '30px auto',
            padding: '0 10px',
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
