import React from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '../components/Link';
import { styled } from '@mui/material';

const Root = styled('div')(({ theme }) => {
      return {
            textAlign: 'center',
            paddingTop: theme.spacing(4),
      };
});

function Next() {
      return (
            <React.Fragment>
                  <Head>
                        <title>POST PAGE</title>
                  </Head>
                  <Root>
                        <label htmlFor='1'>
                              title:
                              <input id='1' type='text' />
                        </label>
                        <Link href={'./home'}>
                              <button>돌아가기 </button>
                        </Link>
                  </Root>
            </React.Fragment>
      );
}

export default Next;
