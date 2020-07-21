import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';
import {
  Card,
  SEO,
} from '../components';

const Services = () => (
  <Layout>
    <SEO
      title="Услуги"
      description="Услуги адвоката в Геленджике. Cопровождение сделок с недвижимостью любой сложности в Геленджике. Представительство в суде города Геленджика. Составление исковых заявлений"
    />

    <h1>Услуги</h1>
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
      }}
    >
      <Card>
        <h2>
          Cопровождение сделок с недвижимостью любой сложности в Геленджике
        </h2>

        <Link
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
          to="/services/soprovojdenie-sdelok-s-ndvijimostiy-in-gelendzhik"
        >
          Читать подробнее
        </Link>
      </Card>
      <Card>
        <h2>Представительство в суде города Геленджика</h2>

        <Link
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
          to="/services/predstavitelstvo-v-sude-gelendzhik"
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
            color: 'rgb(255, 102, 0)',
          }}
          to="/services/sostavlenie-iskovih-zayavlenii"
        >
          Читать подробнее
        </Link>
      </Card>

      <Card>
        <h2>Юридическая консультация в городе Геленджике</h2>
        <Link
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
          to="/services/yridicheskaya-konsultacia-gelendzhik"
        >
          Читать подробнее
        </Link>
      </Card>

      <Card>
        <h2>
          Составление договоров купли-продажи, мены, дарения в городе Геленджике
        </h2>
        <Link
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
          to="/services/sostavlenie-dogovorov-gelendzhik"
        >
          Читать подробнее
        </Link>
      </Card>
    </div>
  </Layout>
);

export default Services;
