import React from 'react';
import { PropertyCardMinified } from './PropertyCardMinified';
import { PropertyCardStandart } from './PropertyCardStandart';

export const PropertyCard = ({ cardSize, ...props }) => {
  const Component =
    cardSize === 'standart' ? PropertyCardStandart : PropertyCardMinified;

  return <Component {...props} />;
};
