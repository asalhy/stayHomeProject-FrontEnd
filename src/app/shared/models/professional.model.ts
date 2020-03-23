export enum Service {
  FOOD = 'food service',
  MEDICAL = 'medical'
}

export class Professional {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  service: Service;
  country: string;
  state: string;
  county: string;
  municipality: string;
}
