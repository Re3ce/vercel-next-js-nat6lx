import React from 'react';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';

const Page: React.FC<{ newsItem: string }> = ({ newsItem }) => {
  if (!newsItem) {
    return <h1>THIS SHOULD NOT APPEAR</h1>;
  }

  return <h2>{newsItem}</h2>;
};

export default Page;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      newsItem: 'This should appear',
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    return {
      paths: [
        {
          params: {
            slug: 'some-link',
          },
        },
      ],
      fallback: true,
    };
  };
