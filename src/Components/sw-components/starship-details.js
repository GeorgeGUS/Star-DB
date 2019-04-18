import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = props => (
  <ItemDetails {...props}>
    <Record field='model' label='Model' />
    <Record field='length' label='Length' />
    <Record field='costInCredits' label='Cost' />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImage
});

export default withSwapiService(StarshipDetails, mapMethodsToProps);