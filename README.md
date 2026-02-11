# 📊 Calculadora Comisiones BVC - Suma Valores

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Netlify Status](https://img.shields.io/badge/Netlify-Success-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://calculadorave.netlify.app/)
[![Visitas](https://komarev.com/ghpvc/?username=cityny-calculadora-bvc&color=blue&style=for-the-badge&label=VISITAS)](https://calculadorave.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Una herramienta financiera de alto rendimiento diseñada específicamente para inversores y casas de bolsa que operan en la **Bolsa de Valores de Caracas (BVC)**. Esta aplicación ofrece un cálculo exacto, instantáneo y profesional de las comisiones y cargos asociados a la compra/venta de títulos valores con la empresa "Suma Valores".

---

## 🔗 Enlaces Rápidos
- **🚀 Demo en Vivo:** [calculadorave.netlify.app](https://calculadorave.netlify.app/)
- **👨‍💻 Desarrollado por:** [Ing. Dionny Nuñez](https://cityny.github.io/cityny/index.html)

---

## 📸 Screenshots
*(Sección para capturas de pantalla de la interfaz)*
> [!NOTE]
> Próximamente se añadirán capturas de pantalla detallando la versión Mobile y Desktop.

---

## 🧐 Análisis del Proyecto

La **Calculadora Comisiones BVC** no es solo una herramienta de cálculo; es un ejercicio de **UI/UX Premium** aplicado al sector FinTech. 

### 1. Lógica Financiera Robusta
El núcleo del proyecto (`calculator.js`) implementa reglas precisas basadas en el estándar de la casa de bolsa **Suma Valores**:
- **Comisión Casa de Bolsa:** Tasa fija del 3%.
- **Recargo Bancario:** 1.5% dinámico para fondos provenientes de entidades distintas al BNC.
- **Impuestos:** Manejo estricto de I.V.A. (16%) y Derecho de Registro (mínimo de 5 Bs o 0.1% proporcional).

### 2. Diseño Centrado en el Usuario (UX)
- **Productividad Total:** Implementación de navegación por teclado mediante la tecla `Enter`, permitiendo una entrada de datos fluida sin soltar el teclado.
- **Feedback Inmediato:** Tooltips personalizados con visualización instantánea (sin delay del navegador) optimizados para dispositivos móviles (tap-to-view).
- **Jerarquía Visual:** Uso de rejillas responsivas (Triple Grid) para agrupar los totales financieros por categorías (Monto, Impuestos, Comisión).

---

## 🚀 Características Principales
- **Persistencia de Datos:** Utiliza `localStorage` para guardar tus últimos valores ingresados, asegurando que no pierdas tu trabajo al recargar la página.
- ✅ **Cálculo en Tiempo Real:** Sin botones de "Calcular"; todo se actualiza mientras escribes.
- ✅ **Mobile Optimized:** Diseño 100% responsivo con botones y triggers táctiles de gran tamaño.
- ✅ **Efectos Premium:** Micro-animaciones de zoom in y sombras dinámicas en las tarjetas de resultados.
- ✅ **Ayuda Contextual:** Iconos de información en cada campo para explicar términos financieros complejos.

---

## 🛠️ Stack Tecnológico
- **Frontend:** React.js (Hooks & Functional Components)
- **Bundler:** Vite (para una carga ultra rápida en desarrollo)
- **Estilos:** Tailwind CSS (Arquitectura de utilidades)
- **Iconografía:** Lucide React
- **Arquitectura:** Component-Based

---

## 📂 Estructura del Proyecto
```text
Calculadora BVC/
├── src/
│   ├── components/
│   │   ├── CalculatorForm.jsx  # Formulario y validación
│   │   └── ResultsDisplay.jsx   # Desglose y tarjetas de totales
│   ├── logic/
│   │   └── calculator.js       # Motor de cálculo financiero
│   ├── App.jsx                 # Orquestador principal
│   ├── index.css               # Diseño base y Tailwind
│   └── main.jsx                # Punto de entrada React
├── public/                     # Assets estáticos
├── package.json                # Dependencias
└── vite.config.js              # Configuración de compilación
```

---

## 🏁 Instalación y Uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/cityny/calculadora-bvc.git
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar en desarrollo:
   ```bash
   npm run dev
   ```

---

## 🏷️ Autor
**Ing. Dionny Nuñez** - *Full Stack Developer*
- GitHub: [@cityny](https://github.com/cityny)
- Web: [CityNy Development](https://cityny.github.io/cityny/index.html)

---
*Este proyecto es parte del ecosistema de herramientas financieras diseñadas para darle uso con la empresa "Suma Valores".*
