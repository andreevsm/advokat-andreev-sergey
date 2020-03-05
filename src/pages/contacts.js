import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Contacts = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Контакты</h1>

    <h2>
      Андреев Сергей Сергеевич
      Я, всегда рад своим клиентам, приходите, я вас жду!
    </h2>

    <div className="main">
      <p>
        Адрес: 353460 Российская Федерация, Краснодарский край, г. Геленджик, ул. Полевая, № 41
      </p>
      <div>
        <p>Тел.</p>

        <a
          href="tel:+1234567890"
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
        >
          8 (928) 661-70-80,
        </a>
      </div>
      <div>
        <p>Адрес электронной почты:</p>

        <a
          href="mailto:vlad@htmlbook.ru"
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
        >
          futura-777@mail.ru
        </a>
      </div>
    </div>
  </Layout>
);

export default Contacts;
