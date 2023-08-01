export interface Tag {
  id?: string;
  label: string;
  color: string;
  description?: string;
  totalItems?: number;

  //TODO: Add all posible types for example Server | Api
  items?: any[];
}
