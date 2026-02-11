import React from 'react';
import { Info, TrendingUp, Landmark } from 'lucide-react';

const ResultsDisplay = ({ results }) => {
    const { subtotal, comision, iva, registro, recargo, totalFinal } = results;
    const [activeTooltip, setActiveTooltip] = React.useState(null);

    const formatBs = (val) =>
        new Intl.NumberFormat('es-VE', { style: 'currency', currency: 'VES' })
            .format(val)
            .replace(/Bs\.\s?S/g, 'Bs');

    const Row = ({ id, label, value, tooltip, isTotal, isHighlight }) => (
        <div className={`flex justify-between items-center py-3 ${isTotal ? 'mt-4 border-t-2 border-blue-100 pt-4' : 'border-b border-slate-50'}`}>
            <div className="flex flex-col relative">
                <span
                    className={`text-sm flex items-center gap-1.5 group cursor-pointer lg:cursor-default transition-all duration-200 ${activeTooltip === id
                            ? 'text-slate-950 font-bold'
                            : (isTotal ? 'font-bold text-slate-800' : 'text-slate-600 hover:text-slate-900')
                        }`}
                    onMouseEnter={() => setActiveTooltip(id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onClick={() => setActiveTooltip(activeTooltip === id ? null : id)}
                >
                    {label}
                    {tooltip && (
                        <span className={`inline-flex items-center transition-colors ${activeTooltip === id ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`}>
                            <Info size={14} strokeWidth={2.5} />
                        </span>
                    )}

                    {/* Custom Tooltip Overlay */}
                    {tooltip && activeTooltip === id && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded-lg shadow-xl z-50 animate-in fade-in zoom-in duration-150 origin-bottom normal-case font-normal tracking-normal">
                            {tooltip}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-900"></div>
                        </div>
                    )}
                </span>
            </div>
            <span className={`${isTotal ? 'text-xl font-black text-blue-700' : isHighlight ? 'font-bold text-slate-800' : 'text-slate-700 font-medium'}`}>
                {formatBs(value)}
            </span>
        </div>
    );

    return (
        <div className="fade-in animate-in slide-in-from-bottom-2 duration-500">
            <Row
                id="subtotal"
                label="Subtotal Operación"
                value={subtotal}
            />
            <Row
                id="comision"
                label="Comisión Casa de Bolsa 3%"
                value={comision}
                tooltip="Tarifa base del 3% establecida por la Casa de Bolsa"
            />
            <Row
                id="iva"
                label="I.V.A. (16%)"
                value={iva}
                tooltip="Impuesto al Valor Agregado aplicado únicamente sobre la comisión"
            />
            <Row
                id="registro"
                label="Derecho de Registro"
                value={registro}
                tooltip="Mínimo 5 Bs o 0.1% de la transacción según el monto total"
            />

            {recargo > 0 && (
                <Row
                    id="recargo"
                    label="Recargo 1.5% (No BNC)"
                    value={recargo}
                    isHighlight
                    tooltip="Cargo adicional del 1.5% aplicado a fondos provenientes de bancos distintos al BNC"
                />
            )}

            <Row
                id="retiva"
                label="Retención I.V.A."
                value={results.retIva || 0}
                tooltip="Retención de Impuesto al Valor Agregado (0 en este MVP)"
            />

            <Row
                id="retislr"
                label="Retención I.S.L.R."
                value={results.retIslr || 0}
                tooltip="Retención de Impuesto Sobre La Renta (0 en este MVP)"
            />

            <Row
                id="total"
                label="Total a Pagar / Recibir"
                value={totalFinal}
                isTotal
            />

            <div className="mt-6 flex gap-2">
                <div className="flex-1 bg-blue-50 p-3 rounded-xl border border-blue-100 flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                        <TrendingUp size={12} className="text-blue-400" />
                        <p className="text-[10px] uppercase font-bold text-blue-400">Monto Líquido</p>
                    </div>
                    <p className="text-sm font-bold text-blue-900">{formatBs(totalFinal)}</p>
                </div>
                <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                        <Landmark size={12} className="text-slate-400" />
                        <p className="text-[10px] uppercase font-bold text-slate-400">Total Impuestos</p>
                    </div>
                    <p className="text-sm font-bold text-slate-700">{formatBs(iva + registro)}</p>
                </div>
            </div>
        </div>
    );
};

export default ResultsDisplay;
