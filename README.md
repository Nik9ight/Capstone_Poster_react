# LViT-N Poster (React + Vite)

This is a web-based interactive scientific poster designed for the **LViT-N** project (Medical Image Segmentation), built using React and Vite. It serves as an accessible digital version of a research poster and is specifically configured with dimensions and scaling to be printable as a landscape A0 poster (1189mm × 841mm).

## Features
- **A0 Print Optimized:** Specially scaled CSS to maintain physical dimensions, high-quality graphics, and typographical requirements (e.g., 26-32pt paragraphs, 48-60pt headings) for physical printing.
- **Component-Driven:** Sections (Abstract, Architecture, Ablation Study, etc.) are organized logically as React components for easy editing.
- **Vite Setup:** Fast local compilation, Hot Module Replacement (HMR), and optimized production builds.

## Setup Instructions

Make sure you have [Node.js](https://nodejs.org/) installed.

## Specifications
The poster design targets the following physical formatting guidelines:
- **Poster size:** A0
- **Headings:** 48 to 60-point font size
- **Content:** 24 to 32 font size single spaced
- **Graphs:** no smaller than 12cm x 18cm
- **Photographs:** no smaller than 12cm x 18cm

### Current Implementation State
The CSS leverages a print scaling technique (`transform: scale(2.667)`) to map digital pixels to physical print sizes (where 1pt = 1.333px). Currently, the React app meets these specs as follows:
- **Poster size:** `target` dimensions of `1686px` × `1192px` scaled up by `2.667`, yielding exactly A0 (1189mm × 841mm).
- **Headings:** Main title uses `font-size: 30px` (scales to 60pt). Section headers use `font-size: 26px` (scales to 52pt). *(Pass)*
- **Content:** Paragraph text uses `font-size: 13px` (scales to 26pt) with a line-height of `1.15` (single spaced). *(Pass)*
- **Graphs:** Full-width graphs (e.g., Architecture, Evaluation) span the main right-side column (2/3 width of A0, well over 50cm wide), far exceeding the 12cm × 18cm minimum. *(Pass)*
- **Photographs:** The current `SamplesGallery` component fits 6 images per row in a 1/3-width column. When printed, each photo is roughly 5cm × 5cm. *(Needs adjustment/re-design to pass the 12cm minimum).*

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at the URL provided in the terminal (usually `http://localhost:5173`).

3. **Build for Production:**
   ```bash
   npm run build
   ```
   This will output a static application to the `dist` directory, which can be deployed to any static host.

## Printing
To export this poster for physical printing:
1. Start the React app.
2. Open the page in your browser (e.g., Chrome).
3. Open the Print dialog (`Ctrl/Cmd + P`).
4. Set the paper size to **A0 Landscape** with **No Margins**. Ensure that "Background graphics" is enabled.
5. Save as PDF.
