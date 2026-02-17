import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  productName: string;
  price: number;
  selectedSize?: string;
}

const WHATSAPP_NUMBER = "919999999999"; // Replace with your number

const WhatsAppButton = ({ productName, price, selectedSize }: WhatsAppButtonProps) => {
  const message = encodeURIComponent(
    `Hi! I'm interested in buying:\n\n` +
    `🛍️ *${productName}*\n` +
    `💰 Price: ₹${price.toLocaleString("en-IN")}\n` +
    (selectedSize ? `📏 Size: ${selectedSize}\n` : "") +
    `\nPlease share availability and payment details.`
  );

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-3 rounded-lg bg-whatsapp px-6 py-4 font-heading text-base font-semibold text-whatsapp-foreground transition-all hover:brightness-110 active:scale-[0.98]"
    >
      <MessageCircle className="h-5 w-5" />
      Buy Now on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
