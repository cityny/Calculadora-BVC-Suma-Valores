import React from 'react';
import { Hash, CircleDollarSign, Building2 } from 'lucide-react';

/**
 * ## Componente: CalculatorForm - Formulario de Entrada de Datos
 * 
 * Este componente se encarga de recolectar la información necesaria para los cálculos:
 * - Cantidad de títulos.
 * - Precio por cada valor.
 * - Si aplica recargo por banco externo.
 * 
 * @param {Object} props.data - Estado actual de los datos (desde App.jsx).
 * @param {Function} props.onChange - Función para actualizar el estado en el componente padre.
 */
const CalculatorForm = ({ data, onChange }) => {
    const [showBankTooltip, setShowBankTooltip] = React.useState(false);

    /**
     * ## Manejo de Eventos: handleChange
     * 
     * Esta función unifica la captura de cambios tanto de inputs numéricos como de checkboxes.
     * Utiliza el atributo 'name' del input para saber qué propiedad del estado actualizar.
     */
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        onChange({
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <form className="space-y-6">

            {/* 
                ## Sección: Entrada de Cantidad
                Aquí es donde se define el número de acciones o títulos.
                El color de fondo se controla con 'bg-white'.
            */}
            <div className="space-y-2">
                <label htmlFor="cantidad" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Hash size={16} className="text-slate-400" />
                    Cantidad de Títulos / Valores
                </label>
                <div className="relative">
                    <input
                        type="number"
                        id="cantidad"
                        name="cantidad"
                        value={data.cantidad}
                        onChange={handleChange}
                        // Aquí es donde ves el color de fondo: 'bg-white'
                        className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-slate-800 font-medium"
                        placeholder="Ej: 100"
                        min="1"
                    />
                    <span className="absolute right-4 top-3.5 text-slate-400 text-[10px] uppercase font-bold tracking-wider bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                        Unidades
                    </span>
                </div>
            </div>

            {/* 
                ## Sección: Entrada de Precio
                Captura el valor monetario en Bolívares.
                'step="0.01"' permite decimales para exactitud financiera.
            */}
            <div className="space-y-2">
                <label htmlFor="precio" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CircleDollarSign size={16} className="text-slate-400" />
                    Precio del Título / Valor (Bs)
                </label>
                <div className="relative">
                    <input
                        type="number"
                        id="precio"
                        name="precio"
                        value={data.precio}
                        onChange={handleChange}
                        step="0.01"
                        // Color de fondo definido por 'bg-white'
                        className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-slate-800 font-medium"
                        placeholder="Ej: 45.50"
                        min="0.01"
                    />
                    <span className="absolute right-4 top-3.5 text-slate-400 text-[10px] uppercase font-bold tracking-wider bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                        Bs
                    </span>
                </div>
            </div>

            {/* 
                ## Sección: Switch de Recargo (Otro Banco)
                Componente visual (Toggle) para activar el recargo del 1.5%.
                Utiliza clases 'peer' para animar el cambio de estado.
            */}
            <div className="flex items-center justify-between p-4 bg-slate-100 rounded-xl border border-dotted border-slate-500">
                <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-400">
                        <Building2 size={20} className="text-slate-500" />
                    </div>
                    <div className="flex flex-col relative">
                        <span className="text-sm font-bold text-slate-700">Fondos de Otros Bancos (No BNC)</span>
                        <span
                            className={`text-[10px] uppercase tracking-tight cursor-pointer underline decoration-dotted transition-all duration-200 ${showBankTooltip
                                ? 'text-slate-950 font-bold decoration-slate-900'
                                : 'text-slate-700 decoration-slate-300 hover:text-slate-900 hover:decoration-slate-400'
                                }`}
                            onMouseEnter={() => setShowBankTooltip(true)}
                            onMouseLeave={() => setShowBankTooltip(false)}
                            onClick={() => setShowBankTooltip(!showBankTooltip)}
                        >
                            Si el pago no es BNC aplica 1.5%
                        </span>

                        {/* Custom Tooltip */}
                        {showBankTooltip && (
                            <div className="absolute top-full left-0 mt-1 w-56 p-2 bg-slate-900 text-white text-[10px] rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150 normal-case tracking-normal font-normal">
                                Aplica recargo del 1.5% si el pago proviene de una entidad distinta al BNC (transferencias nacionales o internacionales).
                                <div className="absolute bottom-full left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-slate-900"></div>
                            </div>
                        )}
                    </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name="esOtroBanco"
                        checked={data.esOtroBanco}
                        onChange={handleChange}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
                </label>
            </div>

            {/* Mensaje Informativo adicional */}
            <div className="text-[10px] text-slate-400 italic transition-all duration-300 hover:text-slate-900 hover:font-bold cursor-help select-none pt-2 border-t border-slate-100">
                * Los campos se validan automáticamente. El cálculo incluye Comisión (3%) de la casa de bolsa Suma Valores e IVA (16%).
            </div>
        </form>
    );
};

export default CalculatorForm;

