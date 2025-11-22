export default function handler(req, res) {
  res.status(200).json([
    { id: 1, nombre: "Perfume Dior", precio: 350 },
    { id: 2, nombre: "Carolina Herrera 212", precio: 280 }
  ]);
}


