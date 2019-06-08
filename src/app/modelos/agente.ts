interface Data {
  agente: Agente;
}

interface Agente {
  id: string;
  puntos: number;
  posicion: number;
  listaClientes: ListaCliente[];
}

interface ListaCliente {
  client: string;
  listaClientesInternos: ListaClientesInterno[];
}

interface ListaClientesInterno {
  nombre: string;
  codigoCliente: number;
  administrador: string;
  cargo: string;
  ciudad: string;
  listaPaginas: ListaPagina[];
}

interface ListaPagina {
  id: number;
  nombre: string;
  icono: string;
  listaSecciones: ListaSeccione[];
}

interface ListaSeccione {
  id: number;
  titulo: string;
  expandido: boolean;
  listaWidgets: (ListaWidget | ListaWidget)[];
}

interface ListaWidget {
  tipo: string;
  lista: Lista[];
}

interface Lista {
  Titulo: string;
  Color_titulo: string;
  Valor_Enfasis: string;
  Color_Valor_Enfasis: string;
  Descripcion_1: string;
  Color_descripcion_1: string;
  Descripcion_2: string;
  Color_descripcion_2: string;
  Descripcion_3: string;
  Color_descripcion_3: string;
}
