import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917009534336?text=Hi%20Dr.%20Bhatti%2C%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={26} color="white" />
    </a>
  );
}
