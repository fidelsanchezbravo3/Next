import { useRouter } from 'next/router';
import { Layout } from '../../components/layouts';

interface Props {
  pokemon: any;
}

const PokemonPage = () => {

  const router = useRouter();

  return (
    <Layout title='Algun pokemon'>
        <h1>Hola Mundo</h1>
    </Layout>
  );
}

export default PokemonPage
