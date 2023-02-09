import dayjs from 'dayjs/esm';

import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 91509,
  date: dayjs('2023-02-07T21:02'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2023-02-08T08:59'),
  paymentAmount: 24487,
};

export const sampleWithPartialData: IInvoice = {
  id: 45358,
  date: dayjs('2023-02-08T07:24'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-02-08T01:03'),
  paymentAmount: 13016,
};

export const sampleWithFullData: IInvoice = {
  id: 55368,
  date: dayjs('2023-02-08T04:11'),
  details: 'Tugrik b users',
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-02-07T14:29'),
  paymentAmount: 37477,
};

export const sampleWithNewData: NewInvoice = {
  date: dayjs('2023-02-08T05:01'),
  status: InvoiceStatus['CANCELLED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-02-07T18:23'),
  paymentAmount: 30708,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
