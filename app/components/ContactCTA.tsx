"use client";

import { useState, useRef } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function ContactCTA() {
  const [openForm, setOpenForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileWarning, setFileWarning] = useState("");
  const [submitError, setSubmitError] = useState("");

  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  const resetFormState = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setFileName("");
    setFileWarning("");
    setSubmitError("");

    if (formRef.current) {
      formRef.current.reset();
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setFileWarning("");

    if (!formRef.current) return;

    const file = fileInputRef.current?.files?.[0];

    if (file) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setSubmitError("Puoi allegare solo file PDF, DOC o DOCX.");
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setFileWarning(
          "File troppo grande. Scrivici direttamente a business@claudiovalletta.info.",
        );
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setFileName("");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);

      const response = await fetch(
        "https://formsubmit.co/6f0c5795a8f9f5fa0b1b6f5a47b65b0d",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setSubmitError(
        "Errore nell'invio. Riprova tra poco o scrivi a business@claudiovalletta.info.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    setSubmitError("");
    setFileWarning("");

    if (!file) {
      setFileName("");
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setSubmitError("Formato non supportato. Usa PDF, DOC o DOCX.");
      e.target.value = "";
      setFileName("");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileWarning(
        "File troppo grande. Scrivici direttamente a business@claudiovalletta.info.",
      );
      e.target.value = "";
      setFileName("");
      return;
    }

    setFileName(file.name);
  };

  const closeForm = () => {
    setOpenForm(false);

    setTimeout(() => {
      resetFormState();
    }, 250);
  };

  return (
    <>
      <footer
        id="contatti"
        className="py-28 px-6 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-zinc-950 -z-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 text-white rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Trasformiamo i tuoi contenuti complessi in qualcosa che funziona
            davvero
          </h2>

          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Raccontaci cosa la tua azienda vorrebbe comunicare. Ti risponderemo
            entro 24 ore con idee concrete e una proposta su misura, oppure
            scrivici direttamente a{" "}
            <a
              href="mailto:business@claudiovalletta.info"
              className="text-white font-semibold underline underline-offset-4 hover:text-zinc-200 transition"
            >
              business@claudiovalletta.info
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => setOpenForm(true)}
              className="px-10 py-5 text-xl font-bold text-black bg-white rounded-full hover:bg-zinc-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
            >
              Compila il form →
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                const user = "business";
                const domain = "claudiovalletta.info";
                const subject = "Richiesta progetto B2B";
                window.location.href = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}`;
              }}
              className="px-10 py-5 text-xl font-bold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all"
            >
              Oppure manda una mail
            </button>
          </div>

          <p className="text-zinc-400 text-sm mt-8 italic">
            📎 Puoi allegare un file: analizzeremo il materiale per una proposta
            dedicata.
          </p>
        </div>

        <div className="mt-20 text-zinc-600 text-sm font-medium flex flex-col md:flex-row items-center justify-center gap-4">
          <span>© {new Date().getFullYear()} Claudio Valletta.</span>
          <span className="hidden md:inline">•</span>
          <span>P.IVA 13594360961</span>
        </div>
      </footer>

      {openForm && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeForm}
        >
          <div
            className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 md:p-10 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-zinc-400 bg-zinc-100 dark:bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center z-20 hover:text-zinc-900 dark:hover:text-white transition"
            >
              ✕
            </button>

            {isSuccess ? (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold mb-3 text-zinc-900 dark:text-white">
                  Richiesta ricevuta!
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                  Grazie per averci contattato. Ti risponderemo entro 24 ore.
                </p>

                <button
                  onClick={closeForm}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:scale-105 transition shadow-lg shadow-blue-500/20"
                >
                  Torna al sito
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-900 dark:text-white mt-4 md:mt-0">
                  Raccontaci il progetto
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  Inserisci i dettagli qui sotto. I campi con * sono
                  obbligatori.
                </p>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nuovo Lead B2B dal sito!"
                  />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="Azienda"
                      required
                      placeholder="Azienda *"
                      className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <input
                      type="text"
                      name="Nome"
                      required
                      placeholder="Nome e Cognome *"
                      className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email di lavoro *"
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />

                  <textarea
                    name="Messaggio"
                    required
                    rows={4}
                    placeholder="Di cosa si occupa il progetto? Qual è il vostro obiettivo principale? *"
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  />

                  <div className="relative group">
                    <label className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition bg-white dark:bg-zinc-900">
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="attachment"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        onChange={handleFileChange}
                      />

                      <div className="flex flex-col items-center gap-2 text-center">
                        <svg
                          className="w-8 h-8 text-zinc-400 group-hover:text-blue-500 transition"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>

                        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                          {fileName ? (
                            <span className="text-blue-600 font-bold">
                              {fileName}
                            </span>
                          ) : (
                            "Allega un file (opzionale) (PDF/DOC/DOCX)"
                          )}
                        </span>

                        <span className="text-xs text-zinc-400">
                          Dimensione massima: 10 MB
                        </span>
                      </div>
                    </label>
                  </div>

                  {fileWarning && (
                    <div className="rounded-xl border border-amber-300 bg-amber-50 text-amber-800 px-4 py-3 text-sm dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
                      {fileWarning}
                    </div>
                  )}

                  {submitError && (
                    <div className="rounded-xl border border-red-300 bg-red-50 text-red-700 px-4 py-3 text-sm dark:border-red-800 dark:bg-red-950/40 dark:text-red-300">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-lg font-bold text-white hover:bg-blue-500 transition disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Invio in corso...
                      </span>
                    ) : (
                      "Invia richiesta"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
