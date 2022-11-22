import {Box} from 'native-base';
import React from 'react';
import {WebView} from 'react-native-webview';
import {WVHeader} from '../components/WVHeader';

export type IRepoProps = {
  route: {params: {html_url: string}};
};

const Repo: React.FC<IRepoProps> = ({route}) => {
  const {html_url} = route.params;
  console.log('URL', html_url);

  return (
    <>
      <WVHeader url={html_url} />
      <WebView source={{uri: html_url}} />
    </>
  );
};

export {Repo};
