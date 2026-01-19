# 🎬 Strivo V2 - Rediseño Cinematográfico

Nuevo diseño inspirado en **Lando Norris** + **Anthropic** para tu página web de Strivo.

---

## 🎨 Características del nuevo diseño

### Inspiración
- **Lando Norris**: Paleta lima neón sobre negro, animaciones de velocidad, efectos cinematográficos
- **Anthropic**: Tipografía refinada, minimalismo con calidez, layouts limpios

### Nuevas características
- ✅ **Cursor Glow Effect** - El cursor deja un halo de luz
- ✅ **Speed Lines** - Líneas de velocidad animadas en el fondo
- ✅ **Parallax Scrolling** - Elementos que se mueven a diferentes velocidades
- ✅ **Text Reveal Cinematográfico** - Texto que aparece línea por línea
- ✅ **Animated Grid** - Grid que se dibuja al cargar
- ✅ **Counter Animations** - Números que cuentan al entrar en viewport
- ✅ **Blur Fade In** - Elementos que aparecen con desenfoque
- ✅ **Stagger Animations** - Elementos que aparecen en secuencia

---

## 📁 Archivos incluidos

```
strivo-v2/
├── GlobalStyles.css      # Variables CSS + Sistema de diseño + Fuentes
├── Hero.jsx              # Hero cinematográfico
├── Hero.css              # Estilos del Hero
├── About.jsx             # About con efectos de scroll
├── About.css             # Estilos del About
├── ScrollEffects.jsx     # Componentes reutilizables de animación
└── README.md             # Este archivo
```

---

## 🚀 Instalación

### 1. Copiar los archivos

Copiá los archivos a tu proyecto:

```
src/
├── styles/
│   └── GlobalStyles.css    ← Reemplazar tu GlobalStyles
├── components/
│   ├── Hero.jsx            ← Reemplazar
│   ├── Hero.css            ← Crear/Reemplazar
│   ├── About.jsx           ← Reemplazar
│   ├── About.css           ← Crear/Reemplazar
│   └── ScrollEffects.jsx   ← NUEVO (componentes de utilidad)
```

### 2. Importar GlobalStyles

En tu `App.jsx` o `main.jsx`:

```jsx
import './styles/GlobalStyles.css';
```

### 3. Las fuentes se cargan automáticamente

El archivo `GlobalStyles.css` ya incluye el import de Google Fonts:
- **Syne** (Display/Títulos)
- **Inter** (Body/Texto)
- **JetBrains Mono** (Monospace/Código)
- **Playfair Display** (Accent/Citas elegantes)

---

## 🛠️ Usando los efectos de scroll

### ScrollReveal
Revela elementos al entrar en viewport:

```jsx
import { ScrollReveal } from './ScrollEffects';

<ScrollReveal direction="up" delay={0.2}>
  <h2>Este título aparece desde abajo</h2>
</ScrollReveal>
```

Direcciones: `up`, `down`, `left`, `right`, `none`

### StaggerContainer + StaggerItem
Anima múltiples elementos en secuencia:

```jsx
import { StaggerContainer, StaggerItem } from './ScrollEffects';

<StaggerContainer staggerDelay={0.1}>
  <StaggerItem><div>Item 1</div></StaggerItem>
  <StaggerItem><div>Item 2</div></StaggerItem>
  <StaggerItem><div>Item 3</div></StaggerItem>
</StaggerContainer>
```

### Parallax
Efecto parallax basado en scroll:

```jsx
import { Parallax } from './ScrollEffects';

<Parallax speed={0.5}>
  <img src="..." alt="Imagen con parallax" />
</Parallax>
```

### WordReveal
Texto que aparece palabra por palabra:

```jsx
import { WordReveal } from './ScrollEffects';

<h2>
  <WordReveal text="Este texto aparece palabra por palabra" />
</h2>
```

### LineReveal
Texto que aparece con máscara (estilo Lando Norris):

```jsx
import { LineReveal } from './ScrollEffects';

<LineReveal delay={0.3}>
  <h1>Gran Título Cinematográfico</h1>
</LineReveal>
```

### BlurFadeIn
Elementos que aparecen con desenfoque:

```jsx
import { BlurFadeIn } from './ScrollEffects';

<BlurFadeIn delay={0.5} blur={10}>
  <div className="card">Contenido</div>
</BlurFadeIn>
```

### AnimatedCounter
Números que cuentan al entrar en viewport:

```jsx
import { AnimatedCounter } from './ScrollEffects';

<span>
  <AnimatedCounter value={150} suffix="+" duration={2} />
</span>
```

### MagneticHover
Elemento que sigue al cursor en hover:

```jsx
import { MagneticHover } from './ScrollEffects';

<MagneticHover strength={0.3}>
  <button>Botón Magnético</button>
</MagneticHover>
```

### ScrollProgress
Barra de progreso de scroll:

```jsx
import { ScrollProgress } from './ScrollEffects';

function App() {
  return (
    <>
      <ScrollProgress />
      {/* resto de tu app */}
    </>
  );
}
```

---

## 🎨 Paleta de colores

```css
/* Accent - Lima Neón */
--color-accent: #BFFF00;
--color-accent-light: #D4FF4D;

/* Backgrounds - Negros profundos */
--color-bg-primary: #0A0A0B;
--color-bg-secondary: #111113;
--color-bg-tertiary: #18181B;

/* Text */
--color-text-primary: #FAFAFA;
--color-text-secondary: rgba(250, 250, 250, 0.7);
--color-text-tertiary: rgba(250, 250, 250, 0.5);
```

---

## 📱 Responsive

Todo está optimizado para:
- Desktop (1200px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

Los efectos de cursor glow se desactivan en mobile para mejor performance.

---

## ⚡ Performance Tips

1. **Las animaciones usan GPU** - `transform` y `opacity` para mejor rendimiento
2. **Trigger once** - Las animaciones solo se ejecutan una vez
3. **Intersection Observer** - Los efectos solo se activan cuando son visibles
4. **Spring animations** - Movimiento más natural y fluido

---

## 🔧 Personalización

### Cambiar el color accent

En `GlobalStyles.css`:

```css
:root {
  --color-accent: #TU_COLOR;
  --color-accent-rgb: R, G, B; /* Valores RGB separados */
}
```

### Cambiar las fuentes

En `GlobalStyles.css`, modificá el `@import` de Google Fonts y las variables:

```css
--font-display: 'Tu Fuente Display', sans-serif;
--font-body: 'Tu Fuente Body', sans-serif;
```

---

## 🎯 Próximos pasos sugeridos

1. [ ] Actualizar Services con el nuevo estilo
2. [ ] Actualizar Stats con el nuevo estilo
3. [ ] Actualizar Testimonials con el nuevo estilo
4. [ ] Actualizar Contact con el nuevo estilo
5. [ ] Actualizar Footer con el nuevo estilo
6. [ ] Agregar ScrollProgress bar
7. [ ] Agregar Calculadora de ROI interactiva
