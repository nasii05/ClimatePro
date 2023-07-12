export interface location{
  data: Data[];
  metadata: Metadata;
  city:string;
  country: string;
  countryCode: string;
  id:number;
  latitude: number;
  longitude:number;
  name:number;
  population:number;
  region:string;
  regionCode:string;
  regionWdId:string;
  type:string;
  wikiDataId:string;
}

export interface Metadata{
  currentOffset: number;
  totalCount: number;
}

export interface Data{
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionWdId: string;
  latitude: number;
  longitude: number;
  population: number;
}

export interface cityModel{
  city:string;
  country: string;
  countryCode: string;
  id:number;
  latitude: number;
  longitude:number;
  name:number;
  population:number;
  region:string;
  regionCode:string;
  regionWdId:string;
  type:string;
  wikiDataId:string;
}
