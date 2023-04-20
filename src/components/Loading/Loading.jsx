import React from 'react';
import { DataLoadingStyle } from './loading.styles';

export const Loading = ({ widthPx, heightPx, topPx, rightPx }) => {
  return (
    <DataLoadingStyle
      widthPx={widthPx}
      heightPx={heightPx}
      rightPx={rightPx}
      topPx={topPx}
    ></DataLoadingStyle>
  );
};
