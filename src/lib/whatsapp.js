// Número do WhatsApp que vai receber os pedidos.
// Formato: DDI + DDD + número, só dígitos (ex: 55 81 99999-9999 -> "5581999999999")
export const WHATSAPP_NUMBER = "558199112170"; // <-- SUBSTITUA pelo número real

export function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
