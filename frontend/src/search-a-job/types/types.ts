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

export type SearchParams = {
  what: string;
  where: string;
};
