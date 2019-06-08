interface Data {
  agente: Agente;
}

interface Agente {
  id: string;
  puntos: number;
  posicion: number;
  listaClientes: ListaCliente[];
  listaTareas: ListaTarea[];
}

interface ListaTarea {
  id: string;
  descripcion: string;
  estado?: any;
}

interface ListaCliente {
  cliente: string;
  listaClientesInternos: ListaClientesInterno[];
}

interface ListaClientesInterno {
  nombre: string;
  codigoCliente: string;
  administrador: string;
  cargo: string;
  ciudad: string;
  listaPaginas: ListaPagina[];
}

interface ListaPagina {
  id: string;
  nombre: string;
  icono: string;
  listaSecciones: ListaSeccione[];
}

interface ListaSeccione {
  id: string;
  titulo: string;
  expandido: boolean;
  listaWidgets: ListaWidget[];
}

interface ListaWidget {
  tipo: string;
  posicion?: number;
  lista: Lista2[];
}

interface Lista2 {
  Titulo?: string;
  Color_titulo?: string;
  Valor_Enfasis?: string;
  Color_Valor_Enfasis?: string;
  Descripcion_1?: string;
  Color_descripcion_1?: string;
  Descripcion_2?: string;
  Color_descripcion_2?: string;
  Descripcion_3?: string;
  Color_descripcion_3?: string;
  id?: string;
  titulo?: string;
  Valor1?: string;
  Valor2?: string;
  Valor3?: string;
  Etiqueta1?: string;
  Etiqueta2?: string;
  Etiqueta3?: string;
  Columna_Resaltada?: number;
  Color_para_resaltar?: string;
  Color_Valor1?: string;
  Color_Valor2?: string;
  Color_Titulo?: string;
  listaEtiquetas?: string[];
  listaDatosValor1?: number[];
  listaDatosValor2?: number[];
  Icogra_Agrup1?: string;
  Estado_Agrupador1?: boolean;
  Titulo_Agrupador1?: string;
  Agrupador1_Descrip1?: string;
  Agrupador1_Descrip2?: string;
  Icogra_Agrup2?: string;
  Estado_Agrupador2?: boolean;
  Titulo_Agrupador2?: string;
  Agrupador2_Descrip1?: string;
  Agrupador2_Descrip2?: string;
  Icogra_Agrup3?: string;
  Estado_Agrupador3?: boolean;
  Titulo_Agrupador3?: string;
  Agrupador3_Descrip1?: string;
  Agrupador3_Descrip2?: string;
  Icogra_Agrup4?: string;
  Estado_Agrupador4?: boolean;
  Titulo_Agrupador4?: string;
  Agrupador4_Descrip1?: string;
  Agrupador4_Descrip2?: string;
  Icogra_Agrup5?: string;
  Estado_Agrupador5?: boolean;
  Titulo_Agrupador5?: string;
  Agrupador5_Descrip1?: string;
  Agrupador5_Descrip2?: string;
  Icogra_Agrup6?: string;
  Estado_Agrupador6?: boolean;
  Titulo_Agrupador6?: string;
  Agrupador6_Descrip1?: string;
  Agrupador6_Descrip2?: string;
  Color_TituloAgrupador?: string;
  Color_Descripcion1?: string;
  Color_Descripcion2?: string;
  listaItems?: ListaItem[];
  Tipo?: string;
  Descripcion?: string;
  Imagen?: string;
  Datos?: Dato | string;
  Tema_Descripcion?: string;
  Cod_Imagen?: string;
  tipo?: string;
  posicion?: number;
  lista?: Lista[];
  indicador?: string;
  flechaUrl?: string;
  etiqueta1?: string;
  valor1?: string;
  color1?: string;
  imagenUrl?: string;
}

interface Lista {
  Titulo?: string;
  Color_titulo?: string;
  Valor_Enfasis?: string;
  Valor_Restante?: string;
  Color_Valor_Enfasis?: string;
  Descripcion1?: string;
  Color_descripcion1?: string;
  Descripcion2?: string;
  Color_descripcion2?: string;
  Descripcion3?: string;
  Color_descripcion3?: string;
  Descripcion4?: string;
  Color_descripcion4?: string;
  Color_MenorDona?: string;
  Color_MayorDona?: string;
  IconoGrafica?: string;
  Tipo_de_Dona?: string;
  ' Valor_Enfasis '?: string;
  Titulo_Linea?: string;
  Color_Titulo_Liena?: string;
  Nombre_Agrupador1?: string;
  Agrupador1_Valor1?: string;
  Nombre_Agrupador2?: string;
  Agrupador2_Valor1?: string;
  Nombre_Agrupador3?: string;
  Agrupador3_Valor1?: string;
  Nombre_Agrupador4?: string;
  Agrupador4_Valor1?: string;
  Nombre_Agrupador5?: string;
  Agrupador5_Valor1?: string;
  Nombre_Agrupador6?: string;
  Agrupador6_Valor1?: string;
  Color_Valor1?: string;
  Fecha_hasta?: string;
  Reducido?: string;
  id?: string;
  titulo?: string;
  listaEtiquetas?: string[];
  listaDatos?: ListaDato[];
  indicador?: string;
  flechaUrl?: string;
  etiqueta1?: string;
  valor1?: string;
  color1?: string;
  imagenUrl?: string;
}

interface ListaDato {
  datos: number[];
}

interface Dato {
  location: Location;
  current: Current;
  forecast: Forecast;
}

interface Forecast {
  forecastday: Forecastday[];
}

interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
}

interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}

interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  condition: Condition;
  uv: number;
}

interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface ListaItem {
  Descripcion: string;
  Valor: string;
  Color: string;
  Resaltado: boolean;
  Alineacion: string;
}
