import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = props => (
  <ItemDetails {...props}>
    <Record field='population' label='Population' />
    <Record field='rotationPeriod' label='Rotation Period' />
    <Record field='diameter' label='Diameter' />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getPlanetImage
});

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
