"use client";

import React, { useState } from "react";
import { Check, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "",
    messaggio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.nome || !formData.email || !formData.messaggio) {
      alert("Completa i campi obbligatori!");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="successMessage space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">Grazie per avermi scritto!</h3>
        <p className="text-xs text-[#A0A0A0] max-w-md mx-auto leading-relaxed">
          Il tuo messaggio e stato registrato correttamente. Mi prendero il tempo di leggerlo e ti ricontattero per email o sul tuo canale WhatsApp entro pochissime ore.
        </p>
        <button onClick={() => setIsSubmitted(false)} className="text-xs text-[#E8D5B0] hover:underline">
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-5" id="brief-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="formLabel">Nome *</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Come ti chiami?"
            required
            className="formInput"
          />
        </div>
        <div>
          <label className="formLabel">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="La tua email lavorativa"
            required
            className="formInput"
          />
        </div>
      </div>

      <div>
        <label className="formLabel">Oggetto</label>
        <input
          type="text"
          name="oggetto"
          value={formData.oggetto}
          onChange={handleInputChange}
          placeholder="Ad es. Sviluppo e-commerce abbigliamento"
          className="formInput"
        />
      </div>

      <div>
        <label className="formLabel">Messaggio *</label>
        <textarea
          name="messaggio"
          value={formData.messaggio}
          onChange={handleInputChange}
          placeholder="Raccontami la tua attivita e cosa vorresti vendere online..."
          rows={5}
          required
          className="formInput resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 uppercase tracking-wider text-xs font-bold rounded-xl text-[#0A0A0A] bg-[#E8D5B0] hover:bg-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            "Invio in corso..."
          ) : (
            <>
              Invia Messaggio Interattivo <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
