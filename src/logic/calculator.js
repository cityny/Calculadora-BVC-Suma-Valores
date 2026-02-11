/**
 * Constantes financieras según requisitos
 */
export const COMISION_BASE = 0.03; // 3%
export const IVA_TASA = 0.16; // 16% sobre la comisión
export const REGISTRO_PORC = 0.001; // 0.1%
export const REGISTRO_MIN = 5.00; // Bs
export const RECARGO_OTRO_BANCO_TASA = 0.015; // 1.5% (Fondos NO-BNC)
export const RET_IVA = 0; // Retención IVA
export const RET_ISLR = 0; // Retención ISLR

/**
 * Calcula el desglose financiero de una operación en la BVC.
 * 
 * @param {number} cantidad - Cantidad de valores
 * @param {number} precio - Precio por valor
 * @param {boolean} esOtroBanco - Si se aplica recargo por otro banco
 * @returns {object} Desglose de la operación
 */
export function calculateFinancials(cantidad, precio, esOtroBanco) {
  const subtotal = cantidad * precio;

  // Comisión Casa de Bolsa (3%)
  const comision = subtotal * COMISION_BASE;

  // IVA sobre la comisión (16%)
  const iva = comision * IVA_TASA;

  // Derecho de Registro
  // Condición: Si subtotal < 5 aplicar MIN, sino aplicar PORC?
  // User dijo: "REGISTRO_MIN = 5.00 (Bs) -> Condición: Si subtotal < 5 aplicar MIN, sino aplicar PORC."
  // Interpreto que si el subtotal es menor a 5 unidades, se aplica el mínimo.
  // Pero financieramente suele ser: Math.max(min, subtotal * tasa)
  // Seguiré la instrucción literal: Si subtotal < 5, registro = 5. Sino, registro = subtotal * 0.1%
  const registro = subtotal < 5 ? REGISTRO_MIN : subtotal * REGISTRO_PORC;

  // Total Inicial (para el cálculo del recargo)
  const totalParcial = subtotal + comision + iva + registro;

  // Recargo Otro Banco (1.5% sobre el total inicial)
  const recargo = esOtroBanco ? (totalParcial * RECARGO_OTRO_BANCO_TASA) : 0;

  // Total Final
  const totalFinal = totalParcial + recargo;

  return {
    subtotal,
    comision,
    iva,
    registro,
    recargo,
    retIva: RET_IVA,
    retIslr: RET_ISLR,
    totalFinal,
    detalles: {
      cantidad,
      precio,
      esOtroBanco
    }
  };
}
