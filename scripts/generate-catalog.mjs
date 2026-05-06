import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const publicDir = path.resolve("public");

// Use landscape A4 for more horizontal space
const doc = new PDFDocument({
  size: "A4",
  layout: "landscape",
  margin: 0,
  info: {
    Title: "FútbolKits — Catálogo 2025/26",
    Author: "FútbolKits",
  },
});

const output = fs.createWriteStream("public/catalogo.pdf");
doc.pipe(output);

// Page dimensions (A4 landscape)
const W = 841.89;
const H = 595.28;

// Colors
const BLACK = "#050505";
const WHITE = "#ffffff";
const GRAY = "#a0a0a0";
const TEAL = "#14b8a6";
const DARK_GRAY = "#1a1a1a";

function darkPage() {
  doc.rect(0, 0, W, H).fill(BLACK);
}

function addImage(imagePath, x, y, maxW, maxH) {
  const fullPath = path.join(publicDir, imagePath);
  if (fs.existsSync(fullPath)) {
    doc.image(fullPath, x, y, { fit: [maxW, maxH], align: "center", valign: "center" });
    return true;
  }
  return false;
}

// All products
const selecciones = [
  { name: "Colombia Local", image: "Selecciones/Colombia.jpg" },
  { name: "Colombia Visitante", image: "Selecciones/Colombia-visitante.jpg" },
  { name: "Argentina", image: "Selecciones/Argentina.jpg" },
  { name: "Brasil", image: "Selecciones/Brasil.jpg" },
  { name: "Portugal", image: "Selecciones/Portugal.jpg" },
  { name: "España", image: "Selecciones/España.jpg" },
  { name: "Colombia Mujer", image: "Selecciones/Colombia-mujer.jpeg" },
];

const retro = [
  { name: "Retro 2007", image: "Retro/Colombia-2007.jpg" },
  { name: "Retro 2007", image: "Retro/Colombia-2007-hombre.jpg" },
  { name: "Retro 2001", image: "Retro/Colombia-2001.jpeg" },
  { name: "Retro 1990", image: "Retro/Colombia-1990.jpeg" },
];

const buzos = [
  { name: "Buzo Colombia", image: "Buzos/colombia.jpeg" },
  { name: "Buzo Argentina", image: "Buzos/argentina.jpeg" },
  { name: "Buzo Barcelona", image: "Buzos/barcelona.jpeg" },
  { name: "Buzo Atl. Nacional", image: "Buzos/atletico-nacional.jpeg" },
];

// ============ SINGLE PAGE CATALOG ============
darkPage();

// Header
doc.fontSize(8).fillColor(TEAL).font("Helvetica").text("TEMPORADA 2025/26", 40, 25, { characterSpacing: 2 });
doc.fontSize(22).fillColor(WHITE).font("Helvetica-Bold").text("FútbolKits", 40, 38);
doc.fontSize(8).fillColor(GRAY).font("Helvetica").text("Catálogo de Camisetas Originales", 40, 64);

// Divider line
doc.moveTo(40, 80).lineTo(W - 40, 80).strokeColor(DARK_GRAY).lineWidth(0.5).stroke();

// --- SELECCIONES SECTION ---
const secY = 92;
doc.fontSize(7).fillColor(TEAL).font("Helvetica").text("SELECCIONES", 40, secY, { characterSpacing: 2 });

const selImgW = 82;
const selImgH = 105;
const selStartX = 40;
const selStartY = secY + 14;
const selGap = 8;

selecciones.forEach((item, i) => {
  const x = selStartX + i * (selImgW + selGap);
  
  // Card background
  doc.roundedRect(x, selStartY, selImgW, selImgH + 20, 4).fill(DARK_GRAY);
  
  // Image
  addImage(item.image, x + 3, selStartY + 3, selImgW - 6, selImgH - 6);
  
  // Text
  doc.fontSize(6.5).fillColor(WHITE).font("Helvetica-Bold").text(item.name, x + 4, selStartY + selImgH + 4, { width: selImgW - 8 });
});

// --- COLOMBIA RETRO SECTION ---
const retroY = 248;
doc.fontSize(7).fillColor(TEAL).font("Helvetica").text("COLOMBIA RETRO", 40, retroY, { characterSpacing: 2 });

const retImgW = 105;
const retImgH = 130;
const retStartY = retroY + 14;
const retGap = 10;

retro.forEach((item, i) => {
  const x = 40 + i * (retImgW + retGap);
  
  // Card background
  doc.roundedRect(x, retStartY, retImgW, retImgH + 22, 4).fill(DARK_GRAY);
  
  // Image
  addImage(item.image, x + 4, retStartY + 4, retImgW - 8, retImgH - 8);
  
  // Text
  doc.fontSize(7).fillColor(WHITE).font("Helvetica-Bold").text(item.name, x + 5, retStartY + retImgH + 5, { width: retImgW - 10 });
});

// --- BUZOS SECTION ---
const buzoX = 510;
doc.fontSize(7).fillColor(TEAL).font("Helvetica").text("BUZOS", buzoX, retroY, { characterSpacing: 2 });

const buzImgW = 72;
const buzImgH = 90;
const buzStartY = retroY + 14;
const buzGapX = 8;
const buzGapY = 8;

buzos.forEach((item, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = buzoX + col * (buzImgW + buzGapX);
  const y = buzStartY + row * (buzImgH + 28 + buzGapY);
  
  // Card background
  doc.roundedRect(x, y, buzImgW, buzImgH + 20, 4).fill(DARK_GRAY);
  
  // Image
  addImage(item.image, x + 3, y + 3, buzImgW - 6, buzImgH - 6);
  
  // Text
  doc.fontSize(6).fillColor(WHITE).font("Helvetica-Bold").text(item.name, x + 4, y + buzImgH + 4, { width: buzImgW - 8 });
});

// --- FOOTER ---
doc.moveTo(40, H - 45).lineTo(W - 40, H - 45).strokeColor(DARK_GRAY).lineWidth(0.5).stroke();
doc.fontSize(7).fillColor(GRAY).font("Helvetica").text("WhatsApp: +57 300 000 0000  •  Instagram: @futbolkits", 40, H - 35);
doc.fontSize(7).fillColor(GRAY).text("© 2026 FútbolKits — Todos los derechos reservados", 40, H - 24);
doc.fontSize(7).fillColor(TEAL).text("futbolkits.com", W - 140, H - 30);

doc.end();

output.on("finish", () => {
  console.log("✅ Catálogo generado: public/catalogo.pdf (1 página, landscape A4)");
});
