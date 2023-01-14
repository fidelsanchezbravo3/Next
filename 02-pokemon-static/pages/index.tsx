import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '../components/layouts';

const HomePage: FC = (props) => {

  console.log(props);

  return (
    <Layout title='Listado de Pokémons' >
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  console.log('Hola Mundo');

  return {
    props: {
      
    }
  }
}

export default HomePage;
