# Setup Guide - Portfolio Miguel Roa

Paso a paso para completar tu portafolio y publicarlo.

---

## 1. Configurar Formspree (envio de correos)

El formulario de contacto usa **Formspree** para enviar correos directamente a tu email sin necesidad de backend.

### Pasos:

1. Ve a [https://formspree.io](https://formspree.io)
2. Crea una cuenta gratuita (puedes usar tu email `miguel.roa.dev@gmail.com`)
3. Haz clic en **"New Form"** o **"Create Form"**
4. Dale un nombre (ej: "Portfolio Contact")
5. Te mostraran un ID algo como `xwkgavzb` (8 caracteres)
6. En la carpeta raiz del proyecto `portfolio/`, crea un archivo llamado `.env` con este contenido:

```
VITE_FORMSPREE_ID=xwkgavzb
```

> Reemplaza `xwkgavzb` con **tu ID real**.

7. Reinicia el servidor de desarrollo (`npm run dev`) para que tome el cambio.
8. Prueba el formulario. Los correos llegaran a tu email.

### Verificar:

- Abre tu portfolio en el navegador
- Llena el formulario y dale "Enviar mensaje"
- Deberia mostrar "Mensaje enviado!"
- Revisa tu bandeja de entrada (y spam por si acaso)

---

## 2. Personalizar informacion

Edita estos archivos para poner tu informacion real:

### `src/components/Hero.tsx`
- Links de GitHub y LinkedIn (busca las URLs `https://github.com/` y `https://linkedin.com/`)

### `src/components/Footer.tsx`
- Links de GitHub, LinkedIn y Twitter

### `src/components/Projects.tsx`
- Cambia los proyectos de ejemplo por tus proyectos reales (titulo, descripcion, tags, links)

### `src/components/Contact.tsx`
- La ubicacion ya esta en "Puerto Ordaz, Venezuela"
- El email ya es `miguel.roa.dev@gmail.com`

---

## 3. Agregar foto de perfil (opcional)

1. Coloca tu foto en `public/foto-perfil.jpg`
2. En `src/components/Hero.tsx`, puedes agregar una imagen dentro del hero

---

## 4. Deploy a GitHub Pages

### Preparar el repositorio:

1. Crea un repositorio en GitHub llamado `portfolio`
2. En la carpeta del proyecto, ejecuta:

```bash
git remote add origin https://github.com/MiguelAngelRoa/portfolio.git
git branch -M main
git push -u origin main
```

### Configurar deploy automatico:

1. Instala la dependencia de deploy:

```bash
npm install -D gh-pages
```

2. En `vite.config.ts`, agrega la base si tu usuario de GitHub no es Pages con organization:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

> Cambia `portfolio` por el nombre exacto de tu repositorio.

3. En `package.json`, agrega el script de deploy. Abre `package.json` y en la seccion `"scripts"` agrega:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

4. Agrega el homepage en `package.json` (necesario para rutas):

```json
"homepage": "https://MiguelAngelRoa.github.io/portfolio"
```

5. Ejecuta:

```bash
npm run build
npm run deploy
```

6. Ve a **Settings > Pages** en tu repositorio de GitHub
7. En "Source" selecciona la rama `gh-pages`
8. En 1-2 minutos tu portfolio estara en: `https://MiguelAngelRoa.github.io/portfolio`

### Deploy automatico con GitHub Actions (recomendado):

1. Crea la carpeta `.github/workflows/` y dentro un archivo `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Ve a **Settings > Pages** en tu repositorio
3. En "Source" selecciona **"GitHub Actions"**
4. Ahora cada vez que hagas `git push` a `main`, se despliega automaticamente

---

## 5. Desarrollo local

Para ver tu portafolio en tu maquina:

```bash
cd portfolio
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

---

## 6. Comandos utiles

| Comando | Que hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de produccion en `dist/` |
| `npm run preview` | Vista previa del build de produccion |
| `npm run deploy` | Publica en GitHub Pages (requiere gh-pages) |

---

## Resumen de pendientes

- [x] Crear cuenta en Formspree y obtener el ID
- [ ] Crear archivo `.env` con el ID de Formspree
- [x] Actualizar links de GitHub y LinkedIn en Hero y Footer
- [ ] Reemplazar proyectos de ejemplo con proyectos reales
- [ ] (Opcional) Agregar foto de perfil
- [ ] Crear repositorio en GitHub
- [ ] Configurar deploy (GitHub Actions o gh-pages)
- [ ] Probar formulario de contacto en produccion
