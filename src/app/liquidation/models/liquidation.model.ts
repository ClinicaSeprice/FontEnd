export interface Factura {
  idTurno: number;
  idPlanObraSocial: number;
  idMetodoPago: number;
  numeroTransaccion: string;
  montoTotal: number;
  montoPaciente: number;
  fechaPago: string;
}

export interface FacturaDetallada {
  idFactura: number;
  ObraSocial: string;
  numeroTransaccion: string;
  montoTotal: number;
  fechaPago: string;
}

export interface FacturaDetalle {
  apellidoMedico: string;
  apellidoPaciente: string;
  cobertura: number;
  dniPaciente: number;
  especialidadMedico: string;
  estado: string;
  fechaHorario: string;          
  fechaPago: string;             
  fechaTurno: string;            
  horaFin: string;
  horaInicio: string;
  idFactura: number;
  idMedico: number;
  idMetodoPago: number;
  idObraSocial: number;
  idPaciente: number;
  idPlanObraSocial: number;
  idTurno: number;
  montoPaciente: number;
  montoTotal: number;
  motivo: string;
  nombreMedico: string;
  nombreMetodoPago: string;
  nombreObraSocial: string;
  nombrePaciente: string;
  nombrePlanObraSocial: string;
  notasTurno: string;
  numeroTransaccion: string;
  precioTurno: number;
}

export interface ObraSocial   {
  idObraSocial: number,
  nombre: string,
  cuit: number,
  baja: boolean,
  fechaAlta: Date,
  fechaModificacion: Date
}


export interface PlanObraSocial   {
  idPlan: number,
  idObraSocial: number,
  nombrePlan: string,
  cobertura: number,
  baja: boolean,
  fechaAlta: Date,
  fechaModificacion: Date
}

export interface MetodoPago   {
  idMetodoPago: 1,
  nombre: string,
  habilitado: boolean
}