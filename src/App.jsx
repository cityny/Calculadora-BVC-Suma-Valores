import React, { useState, useMemo } from 'react';
import { calculateFinancials } from './logic/calculator';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import { Calculator, ReceiptText, TrendingUp, Sparkles, MessageCircle } from 'lucide-react';

function App() {
    // Estado inicial cargado desde localStorage o valores por defecto
    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem('bvc_calculator_data');
        return saved ? JSON.parse(saved) : {
            cantidad: 100,
            precio: 10,
            esOtroBanco: false,
        };
    });

    // Guardar en localStorage cada vez que el formulario cambia
    React.useEffect(() => {
        localStorage.setItem('bvc_calculator_data', JSON.stringify(formData));
    }, [formData]);

    // Cálculo memorizado para evitar recálculos innecesarios
    const results = useMemo(() => {
        return calculateFinancials(
            Number(formData.cantidad),
            Number(formData.precio),
            formData.esOtroBanco
        );
    }, [formData]);

    const handleFormChange = (newData) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    return (
        <div className="min-h-screen bg-gray-50 text-slate-900 font-sans selection:bg-blue-100">
            {/* Header / Banner Principal */}
            <header className="bg-blue-700 text-white py-6 px-4 shadow-lg">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Calculadora Comisiones BVC - Suma Valores
                        <span className="block text-sm font-normal text-blue-200">
                            Desarrollado por{" "}
                            <a
                                href="https://cityny.github.io/cityny/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-blue-400 decoration-dotted underline-offset-4 hover:text-white hover:decoration-solid transition-all"
                            >
                                Ing. Dionny Nuñez
                            </a>
                        </span>
                    </h1>
                    <div className="hidden md:block">
                        <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Sparkles size={12} /> v1.0.0
                        </span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
                {/* Sección de Introducción Movil-First */}
                <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Una herramienta financiera de alto rendimiento diseñada específicamente para inversores y casas de bolsa que operan en la Bolsa de Valores de Caracas (BVC). Esta aplicación ofrece un cálculo exacto, instantáneo y profesional de las comisiones y cargos asociados a la compra/venta de títulos valores con la empresa "Suma Valores".
                    </p>
                </section>

                {/* Grid Principal para Mobile First */}
                <div className="grid grid-cols-1 gap-8">

                    {/* Formulario de Entrada */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                        <h2 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                            <span className="bg-blue-100 p-2 rounded-lg">
                                <Calculator className="w-5 h-5 text-blue-600" />
                            </span>
                            Datos de la Operación
                        </h2>
                        <CalculatorForm
                            data={formData}
                            onChange={handleFormChange}
                        />
                    </div>

                    {/* Visualización de Resultados */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                        <h2 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                            <span className="bg-blue-100 p-2 rounded-lg">
                                <ReceiptText className="w-5 h-5 text-blue-600" />
                            </span>
                            Desglose de Totales
                        </h2>
                        <ResultsDisplay results={results} />
                    </div>
                </div>

                {/* Footer / Premium Hooks */}
                <footer className="pt-8 pb-12">
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-500/20 p-3 rounded-xl border border-green-500/30">
                                    <MessageCircle className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-green-300">Notificaciones vía WhatsApp Pro</h3>
                                    <p className="text-slate-400 text-xs md:text-sm">
                                        Recibe alertas de precios y confirmaciones directamente en tu móvil.
                                    </p>
                                </div>
                            </div>
                            <button
                                disabled
                                className="bg-slate-700 text-slate-500 px-6 py-2 rounded-xl text-sm font-bold cursor-not-allowed opacity-70 border border-slate-600"
                            >
                                Próximamente
                            </button>
                        </div>
                        {/* Elemento visual decorativo */}
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
                    </div>

                    <p className="text-center text-slate-400 text-[10px] mt-8 uppercase tracking-widest">
                        Calculadora Profesional para Inversionistas BVC
                    </p>
                </footer>
            </main>
        </div>
    );
}

export default App;
