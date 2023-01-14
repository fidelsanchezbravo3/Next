import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: theme?.colors.gray100.value,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      padding: '0px 20px',
      width: '100%',
    }}>

      <Image 
        alt="icono de la app"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        height={70}
        width={70}
      />

      <Text color="white" h2 css={{ margin: 0 }}>P</Text>
      <Text color="white" h3 css={{ margin: 0 }}>okémon</Text>

      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favoritos</Text>
    </div>
  );
};
