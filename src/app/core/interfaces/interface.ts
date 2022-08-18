export interface ITerrainsData {
  [projectName: string]: ITerrainData;
}
export interface ITerrainData {
  index: number;
  name: string;
  route: string;
  description: IDescription;
  imagenes: string[];
  video: string;
  geoJson: string;
  zoom: number;
  lat: number;
  long: number;
}
export interface IDescription {
  texto?: string;
  area?: string;
  desde?: string;
  estamosaqui?: string[];
  zonificacion?: string;
  tipouso?: string;
  tipoZona?: string;
  porcentaje?: string;
  direccion?: string;
  zonificationTarjeta?: string;
  districtName?: string;
}

export interface imagesTerrain {
  name?: string;
  url?: string;
  titulo?: string;
  subtitulo?: string;
}
