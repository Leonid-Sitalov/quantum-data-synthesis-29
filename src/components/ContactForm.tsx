import { useState } from "react";
import Icon from "@/components/ui/icon";
import func2url from "../../backend/func2url.json";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      setErrorText("Укажите имя и телефон");
      return;
    }
    setStatus("loading");
    setErrorText("");
    try {
      const res = await fetch(func2url.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Не удалось отправить заявку");
      }
      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorText(err instanceof Error ? err.message : "Ошибка отправки");
    }
  };

  return (
    <section
      id="request"
      className="relative bg-neutral-950 text-white py-20 lg:py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-[0.3em] text-[#00ff3c] font-bold">
          Оставить заявку
        </h3>
        <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          Обсудим{" "}
          <span className="text-[#00ff3c] drop-shadow-[0_0_12px_rgba(0,255,60,0.3)]">
            ваш проект
          </span>
        </h2>
        <p className="text-neutral-300 text-lg mb-10 max-w-2xl">
          Заполните форму — свяжемся в течение рабочего дня. Заявка уходит напрямую на
          sitalov-leonid@project-rai.ru.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-wider text-neutral-400 mb-2">
              Имя *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-neutral-900 border border-neutral-800 focus:border-[#00ff3c] outline-none px-4 py-3 text-white placeholder-neutral-500 transition-colors"
              placeholder="Как к вам обращаться"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-wider text-neutral-400 mb-2">
              Телефон *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-neutral-900 border border-neutral-800 focus:border-[#00ff3c] outline-none px-4 py-3 text-white placeholder-neutral-500 transition-colors"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div className="flex flex-col sm:col-span-2">
            <label className="text-xs uppercase tracking-wider text-neutral-400 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 focus:border-[#00ff3c] outline-none px-4 py-3 text-white placeholder-neutral-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col sm:col-span-2">
            <label className="text-xs uppercase tracking-wider text-neutral-400 mb-2">
              Задача
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="bg-neutral-900 border border-neutral-800 focus:border-[#00ff3c] outline-none px-4 py-3 text-white placeholder-neutral-500 transition-colors resize-none"
              placeholder="Коротко опишите проект или вопрос"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#00ff3c] text-black px-8 py-3 text-sm uppercase tracking-wider font-bold hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(0,255,60,0.4)] disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Icon name="Loader2" size={18} className="animate-spin" />
                  Отправляем…
                </>
              ) : (
                <>
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </>
              )}
            </button>
            {status === "success" && (
              <span className="text-[#00ff3c] flex items-center gap-2 text-sm">
                <Icon name="CheckCircle2" size={18} />
                Заявка отправлена. Спасибо!
              </span>
            )}
            {status === "error" && (
              <span className="text-red-400 flex items-center gap-2 text-sm">
                <Icon name="AlertTriangle" size={18} />
                {errorText}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
