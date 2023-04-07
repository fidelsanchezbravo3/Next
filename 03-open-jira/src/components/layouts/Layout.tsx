import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element;
    title?: string;
}

export const Layout:FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>{ title }</title>
        </Head>
        <Navbar />
        <Box sx={{ padding: '10px 20px' }} >
            { children }
        </Box>
    </Box>
  )
}