export interface AdsResponse {
  code: number;
  message: string;
  data: {
    total: number;
    ads: Ad[];
  };
}

export interface Ad {
  id: string;
  link: string;
  title: string;
  description: string;
  publicationDate: string;
  coordinates: string;
  city: string;
  postalCode: string;
  department: string;
  region: string;
  sector: string;
  jobtitle: string;
  company: string;
  contractType: string[];
  salary: string;
}
