import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Card from '../components/Card';

const Services = () => (
  <Layout>
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
            color: 'rgb(255, 102, 0)',
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
            color: 'rgb(255, 102, 0)',
          }}
          to="/sostavlenie-iskovih-zayavlenii"
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
          to="/yridicheskaya-konsultacia-gelendzhik"
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
          to="/sostavlenie-dogovorov-gelendzhik"
        >
          Читать подробнее
        </Link>
      </Card>
    </div>
  </Layout>
);

export default Services;
