import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <SEO title="Адвокат Андреев Сергей Сергеевич" />
    <Card>
      <h2>Cопровождение сделок с недвижимостью любой сложности в Геленджике</h2>

      <Link
        style={{
          fontWeight: 'bold',
          color: 'black',
          opacity: 0.6,
        }}
        to="/soprovojdenie-sdelok-s-ndvijimostiy-in-gelendzhik"
      >
        Читать подробнее
      </Link>
    </Card>
    <Card>
      <h2>Представительство в суде города Геленджика</h2>

      <Link
        style={{
          fontWeight: 'bold',
          color: 'black',
          opacity: 0.6,
        }}
        to="/predstavitelstvo-v-sude-gelendzhik"
      >
        Читать подробнее
      </Link>
    </Card>
    <Card>
      <h2>
        Составление исковых заявлений, жалоб, претензий в городе Геленджике
      </h2>

      <Link
        style={{
          fontWeight: 'bold',
          color: 'black',
          opacity: 0.6,
        }}
        to="/sostavlenie-iskovih-zayavlenii"
      >
        Читать подробнее
      </Link>
    </Card>
  </Layout>
);

export default IndexPage;
