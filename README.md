# # Estación Telegráfica Interactiva (SEC-08)

Repositorio oficial del proyecto de diseño y fabricación de una estación telegráfica de código abierto y hardware modular, desarrollada como sistema físico de entrenamiento y transmisión en código Morse.

---

## 1. Descripción del Proyecto

La estación telegráfica es un dispositivo hardware/software interactivo concebido para la práctica, decodificación y simulación de transmisiones en código Morse bajo escenarios operativos simulados. El sistema integra una interfaz física robusta con pulsadores táctiles y analógicos, una estructura prismática de MDF fabricada por corte láser y un microcontrolador Arduino Uno encargado del procesamiento de señales, la comunicación Serial bidireccionales y la ejecución de rutinas de práctica en tiempo real.

---

## 2. Componentes de Hardware

El sistema se compone de los siguientes elementos físicos y electrónicos:

* **Microcontrolador:** Arduino Uno (ATMega328P).
* **Pulsador Principal:** Botón Arcade de $\varnothing 32\text{ mm}$ (microschwift con terminales COM y NO).
* **Pulsador Secundario:** Botón táctil mecánico SX28 ($1.5 \times 1.5\text{ cm}$).
* **Control Analógico:** Potenciómetro Slider B103 ($10\text{ k}\Omega$, dimensiones $7.5 \times 1\text{ cm}$).
* **Placa de Distribución:** Placa preperforada PCB de $5 \times 7\text{ cm}$.
* **Chasis Contenedor:** Placas de MDF de 3 mm de espesor, unidas mediante adhesivo de cianocrilato (La Gotita) sin uniones machihembradas.

---

## 3. Esquema de Conexiones Eléctricas

Todas las conexiones operan bajo una lógica de tierra común y entradas con resistencia pull-up interna (`INPUT_PULLUP`):

| Componente | Terminal / Pin Físico | Pin en Arduino Uno | Nota de Configuración |
| :--- | :--- | :--- | :--- |
| **Botón Arcade** | Terminal COM | GND (Tierra) | Requiere puente común en protoboard |
| **Botón Arcade** | Terminal NO (Normally Open) | Pin Digital 2 | Configurado como `INPUT_PULLUP` |
| **Botón SX28** | Terminal de Señal | Pin Digital 4 | Configurado como `INPUT_PULLUP` |
| **Botón SX28** | Terminal de Tierra | GND (Tierra) | - |
| **Slider B103** | Terminal Izquierdo | 5V | Alimentación del divisor de tensión |
| **Terminal Central** | Cursor (Salida Analógica) | Pin Analógico A0 | Lectura de posición para velocidad |
| **Terminal Derecho** | Extremo Derecho | GND (Tierra) | Cierre de circuito analógico |

*Nota sobre GND:* Dado que el Arduino Uno cuenta con un número limitado de pines de tierra físicos, se recomienda utilizar una placa protoboard como nodo común o realizar un empalme en estrella aislado para unificar las tierras de los tres componentes.

---

## 4. Fabricación y Mecanizado de la Caja (Corte Láser)

El chasis de la estación responde a una geometría prismática rectangular estándar sin inclinación, diseñada para optimizar el espacio interior y la ergonomía superior.

### Dimensiones de la Caja Armada
* **Ancho ($X$):** 180 mm
* **Profundidad ($Y$):** 130 mm
* **Altura Constante ($Z$):** 70 mm

### Despiece 2D (MDF 3 mm)
1. **Base Inferior (1 unidad):** $174 \times 124\text{ mm}$.
2. **Panel Frontal (1 unidad):** $174 \times 70\text{ mm}$.
3. **Panel Trasero (1 unidad):** $174 \times 70\text{ mm}$ (incluye ranura superior de $16 \times 8\text{ mm}$ para el paso del cable USB).
4. **Laterales - Izquierdo y Derecho (2 unidades):** $124 \times 70\text{ mm}$.
5. **Tapa Superior Plana (1 unidad):** $180 \times 130\text{ mm}$, mecanizada con:
   * Ranura central superior para el slider ($75 \times 10\text{ mm}$).
   * Perforación circular izquierda para el botón arcade ($\varnothing 32\text{ mm}$).
   * Perforación cuadrada derecha para el botón SX28 ($15 \times 15\text{ mm}$).

---

## 5. Instrucciones de Ensamblaje y Puesta en Marcha

1. **Corte y Preparación:** Exportar las piezas vectoriales en formato DXF a escala 1:1. Lijar ligeramente los cantos de las placas de MDF de 3 mm para remover residuos de resina del láser.
2. **Montaje Estructural:** Unir los paneles perimetrales a la base utilizando adhesivo de cianocrilato (La Gotita), empleando escuadras de soporte a 90° durante el fraguado.
3. **Cableado Físico:** Conectar los componentes a la placa PCB y al Arduino Uno siguiendo estrictamente la tabla de ruteo de pines.
4. **Carga de Firmware:** Compilar y subir el código de control al Arduino Uno asegurando la lectura por puerto Serial (9600 baudios).
