import React from 'react';
import { Box, Grid } from '@material-ui/core';

import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'VIDEO TESTE [PARTE #01]',
      authorId: 1,
      authorName: 'Nicolas Lima',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/teste1.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title:
        'VIDEO TESTE [PARTE #02]',
      authorId: 1,
      authorName: 'Nicolas Lima',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/teste2.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'VIDEO TESTE [PARTE #03]',
      authorId: 1,
      authorName: 'Nicolas Lima',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/teste3.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'VIDEO TESTE [PARTE #04]',
      authorId: 1,
      authorName: 'Nicolas Lima',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/teste4.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Home;