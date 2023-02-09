import dayjs from 'dayjs/esm';

import { NotificationType } from 'app/entities/enumerations/notification-type.model';

import { INotification, NewNotification } from './notification.model';

export const sampleWithRequiredData: INotification = {
  id: 30621,
  date: dayjs('2023-02-08T11:32'),
  sentDate: dayjs('2023-02-08T04:26'),
  format: NotificationType['SMS'],
  userId: 55330,
  productId: 77848,
};

export const sampleWithPartialData: INotification = {
  id: 25492,
  date: dayjs('2023-02-08T11:01'),
  details: 'Music Danemark',
  sentDate: dayjs('2023-02-07T23:39'),
  format: NotificationType['SMS'],
  userId: 900,
  productId: 32606,
};

export const sampleWithFullData: INotification = {
  id: 36914,
  date: dayjs('2023-02-07T17:47'),
  details: 'teal card',
  sentDate: dayjs('2023-02-08T04:10'),
  format: NotificationType['SMS'],
  userId: 65653,
  productId: 75473,
};

export const sampleWithNewData: NewNotification = {
  date: dayjs('2023-02-07T22:48'),
  sentDate: dayjs('2023-02-08T06:23'),
  format: NotificationType['SMS'],
  userId: 79381,
  productId: 16952,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
