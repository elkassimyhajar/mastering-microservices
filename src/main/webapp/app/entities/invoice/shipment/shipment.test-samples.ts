import dayjs from 'dayjs/esm';

import { IShipment, NewShipment } from './shipment.model';

export const sampleWithRequiredData: IShipment = {
  id: 17812,
  date: dayjs('2023-02-07T13:33'),
};

export const sampleWithPartialData: IShipment = {
  id: 50749,
  date: dayjs('2023-02-08T01:04'),
  details: 'JBOD mission-critical strategize',
};

export const sampleWithFullData: IShipment = {
  id: 94519,
  trackingCode: 'Charron b Panoramas',
  date: dayjs('2023-02-07T17:13'),
  details: 'coherent utilize regional',
};

export const sampleWithNewData: NewShipment = {
  date: dayjs('2023-02-08T04:43'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
