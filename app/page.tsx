import Counter from "./components/Counter";
import ContactCTA from "./components/ContactCTA";

export const metadata = {
  title: "Claudio Valletta | Comunicazione scientifica per aziende",
  description:
    "Aiuto aziende e brand innovativi a spiegare in modo chiaro e credibile ciò che fanno, trasformando concetti complessi in contenuti che aumentano fiducia, comprensione e probabilità di scelta.",
  keywords: [
    "comunicazione scientifica per aziende",
    "video scientifici per brand",
    "divulgazione scientifica B2B",
    "content creator per aziende tech",
    "video per aziende innovative",
    "comunicazione innovazione e tecnologia",
  ],
  openGraph: {
    title: "Claudio Valletta | Comunicazione scientifica per aziende",
    description:
      "Contenuti scientifici e video branded per aziende che vogliono spiegare meglio innovazione, tecnologia e prodotti complessi e facilitare la scelta del cliente.",
    url: "https://www.claudiovalletta.it",
    siteName: "Claudio Valletta",
    locale: "it_IT",
    type: "website",
  },
};

const services = [
  {
    icon: "🧠",
    title: "Strategy & script",
    desc: "Analizziamo paper, prodotto, target e messaggi chiave. Poi trasformiamo la complessità in uno script chiaro, autorevole e davvero memorabile.",
  },
  {
    icon: "🎥",
    title: "Riprese in sede",
    desc: "Veniamo da voi con troupe e attrezzatura. In una singola sessione raccogliamo il materiale necessario senza rallentare il lavoro del team.",
  },
  {
    icon: "🚀",
    title: "Produzione, distribuzione e supporto campagne",
    desc: "Mi occupo di tutto end-to-end, chiedendo approvazione in ogni passaggio: concept, script, riprese, editing, pubblicazione e, se serve, supporto nel setting delle campagne pubblicitarie.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Brief e analisi",
    time: "2 giorni",
  },
  {
    step: "02",
    title: "Script e storyboard",
    time: "Approvazione condivisa",
  },
  {
    step: "03",
    title: "Riprese in sede",
    time: "Mezza giornata",
  },
  {
    step: "04",
    title: "Consegna, pubblicazione e campagne",
    time: "Pronto per i tuoi canali",
  },
];

const portfolioItems = [
  {
    brand: "Duracell",
    sector: "Consumer tech / Product communication",
    format: "Video educational branded",
    platform: "Instagram Reel",
    goal: "Awareness + memorability",
    title:
      "La scienza del prodotto raccontata in modo semplice, forte e memorabile",
    summary:
      "Con Duracell l'obiettivo era trasformare un tema tecnico di prodotto in un contenuto divulgativo capace di catturare attenzione subito, far capire il valore dell'innovazione e restare impresso.",
    challenge:
      "Rendere interessante e immediato un argomento tecnico senza farlo sembrare una pubblicità classica, mantenendo ritmo, chiarezza e autorevolezza.",
    solution:
      "Abbiamo costruito un video con struttura divulgativa, hook forte, spiegazione accessibile e visual pensati per aumentare retention e comprensione del messaggio.",
    outcome:
      "Il contenuto ha totalizzato circa 13 milioni di visualizzazioni, trasformando un messaggio tecnico in un contenuto ad altissima portata, memorabile e perfettamente associabile al brand.",
    videoUrl: "https://www.instagram.com/p/DSmwPOOjI3e/",
    thumbnail: "/portfolio/featured-cover.jpg",
    videoSrc: "duracell.mp4",
    featured: true,
    statValue: 13,
    statSuffix: "M",
    statLabel: "visualizzazioni",
  },
];

const ageDistribution = [
  { label: "18–24", value: 11 },
  { label: "25–34", value: 38 },
  { label: "35–44", value: 26 },
  { label: "45–54", value: 14 },
  { label: "55–64", value: 7 },
  { label: "65+", value: 3 },
];

const socialPlatforms = [
  { label: "Instagram", value: 210 },
  { label: "YouTube", value: 88 },
  { label: "TikTok", value: 78 },
  { label: "Facebook", value: 53 },
];

const faqs = [
  {
    question: "Dove vengono pubblicati i contenuti?",
    answer:
      "Sui canali che richiede il cliente. Possiamo pubblicare sul vostro profilo, sul mio, in co-post, oppure anche solo sui canali del brand, in base all'obiettivo della campagna.",
  },
  {
    question: "Ti occupi solo della parte creativa o gestisci tutto?",
    answer:
      "Mi occupo di tutto il processo, dall'analisi iniziale fino alla consegna finale, chiedendo sempre approvazione a ogni passaggio importante: concept, script, riprese, montaggio e pubblicazione.",
  },
  {
    question: "Puoi aiutare anche con le campagne pubblicitarie?",
    answer:
      "Sì. Posso supportarvi anche nel setting delle campagne pubblicitarie, aiutando a costruire contenuti che funzionino bene anche in adv e coordinandomi con il vostro team o con chi gestisce la parte media.",
  },
  {
    question: "Lavori solo con grandi aziende?",
    answer:
      "No. Lavoro bene con brand strutturati, scaleup e aziende innovative che hanno qualcosa di complesso o interessante da spiegare meglio. La cosa importante è che ci sia un obiettivo chiaro e un progetto sensato da costruire.",
  },
  {
    question: "Fai anche solo script o consulenza senza riprese?",
    answer:
      "Sì. In alcuni casi posso supportare anche solo su strategia, concept, script, format o supervisione creativa, se il team del cliente gestisce internamente produzione e pubblicazione.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-50 font-sans text-zinc-900 selection:bg-blue-500/30 dark:bg-zinc-950 dark:text-zinc-50">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              scroll-behavior: smooth;
            }

            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .logos-scroll {
              display: flex;
              width: max-content;
              animation: scroll 46s linear infinite;
            }

            .logos-wrapper:hover .logos-scroll {
              animation-play-state: paused;
            }
          `,
        }}
      />

      <header className="relative isolate flex min-h-[86vh] flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-24 text-center md:pt-32">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.28),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_25%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-zinc-950/70" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-950" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_40px_rgba(59,130,246,0.18)] backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            17M+ persone raggiunte ogni mese con contenuti scientifici
          </div>

          <h1 className="max-w-6xl text-5xl font-black leading-[0.98] tracking-tight text-white md:text-7xl lg:text-[5.4rem]">
            Se nessuno capisce
            <br />
            quello che fai,
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              nessuno comprerà
              <br />
              quello che fai.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-zinc-300 md:text-2xl">
            Trasformo tecnologia, ricerca e innovazione in contenuti che
            attirano attenzione, costruiscono fiducia e rendono il tuo brand più
            facile da capire, ricordare e scegliere.
          </p>

          <div className="mt-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="#contatti"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-[0_12px_40px_rgba(37,99,235,0.35)] transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_16px_60px_rgba(37,99,235,0.45)]"
            >
              Ottieni una proposta su misura
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/12"
            >
              Vedi esempi reali
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-20 mx-auto -mt-16 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-zinc-200/80 bg-white/90 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80 md:grid-cols-4 md:p-5">
          {[
            { end: 430, suffix: "k", prefix: "+", label: "Follower" },
            { end: 17, suffix: "M", prefix: "+", label: "Views al mese" },
            { end: 100, suffix: "%", prefix: "", label: "Rigore scientifico" },
            { end: 15, suffix: "+", prefix: "", label: "Clienti B2B" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-zinc-200/70 bg-gradient-to-b from-white to-zinc-50 p-5 text-center dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950"
            >
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 md:text-4xl">
                <Counter
                  end={item.end}
                  suffix={item.suffix}
                  prefix={item.prefix}
                />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_45%)]" />
        <div className="relative z-10 mx-auto mb-14 max-w-6xl px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
            Social proof
          </div>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
            Brand che ci hanno già scelto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Collaborazioni con aziende tech, pharma e realtà innovative in
            crescita che vogliono spiegare meglio il proprio valore.
          </p>
        </div>

        <div className="logos-wrapper relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="logos-scroll">
            <div className="flex items-center gap-24 px-12">
              <img
                src="Telepass.svg"
                alt="Telepass"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Generali.svg"
                alt="Generali"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Bayer.svg"
                alt="Bayer"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Fanpage.it.png"
                alt="Fanpage.it"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Duracell.png"
                alt="Duracell"
                className="h-20 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="trentino.png"
                alt="Trentino"
                className="h-20 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Geberit.png"
                alt="Geberit"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="airup.png"
                alt="AirUp"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="eni.svg"
                alt="ENI"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
            </div>

            <div className="flex items-center gap-24 px-12" aria-hidden="true">
              <img
                src="Telepass.svg"
                alt="Telepass"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Generali.svg"
                alt="Generali"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Bayer.svg"
                alt="Bayer"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Fanpage.it.png"
                alt="Fanpage.it"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Duracell.png"
                alt="Duracell"
                className="h-20 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="trentino.png"
                alt="Trentino"
                className="h-20 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="Geberit.png"
                alt="Geberit"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="airup.png"
                alt="AirUp"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
              <img
                src="eni.svg"
                alt="ENI"
                className="h-14 w-auto max-w-[180px] object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servizi" className="relative px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.06),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
              Servizio end-to-end
            </div>
            <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              La credibilità di un divulgatore.
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                L’operatività di un team che produce tutto per te.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              Unisco autorevolezza scientifica, capacità di semplificare e
              produzione completa: dal brief alle riprese, fino alla consegna,
              pubblicazione e supporto campagne. Tu approvi ogni passaggio,
              senza perderti nella complessità tecnica.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/90 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_70px_rgba(0,0,0,0.12)] dark:border-zinc-800 dark:bg-zinc-900/90"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute -right-8 -top-8 text-[8rem] opacity-[0.05] transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-3xl shadow-inner dark:bg-zinc-800">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-black tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div id="metodo" className="mt-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
                Metodo
              </div>
              <h3 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
                Un processo semplice,
                <br />
                dalla scienza al contenuto finito
              </h3>
            </div>

            <div className="relative mt-14 grid gap-6 md:grid-cols-4">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-blue-400/60 to-transparent md:block" />
                  )}

                  <div className="h-full rounded-[1.75rem] border border-zinc-200 bg-white/90 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/90">
                    <div className="mb-5 inline-flex rounded-full bg-blue-600/10 px-3 py-1 text-sm font-black tracking-wider text-blue-600 dark:text-blue-400">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-black leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white shadow-[0_10px_35px_rgba(37,99,235,0.3)] transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Ottieni una proposta su misura
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="relative scroll-mt-24 overflow-hidden border-t border-zinc-200 bg-zinc-100/60 px-6 py-28 dark:border-zinc-800 dark:bg-zinc-900/20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.06),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
              Portfolio
            </div>

            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Progetti reali.
              <br />
              Contenuti pensati per farti capire e ricordare.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              Non creo solo video belli da vedere: progetto contenuti che
              rendono un brand più chiaro, più credibile e più facile da
              scegliere.
            </p>
          </div>

          {portfolioItems
            .filter((item) => item.featured)
            .map((item) => (
              <article
                key={item.brand}
                className="mb-10 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative min-h-[340px] bg-zinc-950">
                    {item.videoSrc ? (
                      <video
                        src={item.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={item.thumbnail}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.thumbnail}
                        alt={item.brand}
                        className="h-full w-full object-cover"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    <div className="absolute left-6 top-6 flex flex-wrap gap-3">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-wide text-zinc-900 backdrop-blur">
                        {item.brand}
                      </span>
                      <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur">
                        {item.goal}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-4 inline-flex items-end gap-2 rounded-[1.25rem] border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-md">
                        <div className="text-5xl font-black leading-none text-white md:text-6xl">
                          <Counter
                            end={item.statValue}
                            suffix={item.statSuffix}
                          />
                        </div>
                        <div className="pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-200">
                          {item.statLabel}
                        </div>
                      </div>

                      <h3 className="max-w-2xl text-3xl font-black leading-tight text-white md:text-4xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="mb-6 flex flex-wrap gap-3">
                      <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm dark:bg-zinc-800">
                        {item.format}
                      </span>
                      <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm dark:bg-zinc-800">
                        {item.platform}
                      </span>
                      <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {item.goal}
                      </span>
                    </div>

                    <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {item.summary}
                    </p>

                    <div className="mt-8 grid gap-5">
                      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950/60">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                          Challenge
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                          {item.challenge}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950/60">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                          Solution
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                          {item.solution}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950/60">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                          Outcome
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                          {item.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                      {item.videoUrl && (
                        <a
                          href={item.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-500"
                        >
                          Guarda il progetto →
                        </a>
                      )}

                      <a
                        href="#contatti"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3.5 font-bold transition hover:-translate-y-1 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-800"
                      >
                        Richiedi casi studio completi →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}

          <div className="mb-20">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Esempi visivi
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
                  Alcuni contenuti realizzati
                </h3>
              </div>

              <a
                href="#contatti"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-bold transition hover:-translate-y-1 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-800"
              >
                Voglio un progetto simile →
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.72fr_0.72fr_1.2fr]">
              <article className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] dark:border-zinc-800 dark:bg-zinc-900">
                <div className="relative aspect-[9/16] bg-zinc-950">
                  <video
                    src="generali.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/portfolio/vertical-1.jpg"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-zinc-900 backdrop-blur">
                      Generali
                    </span>
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur">
                      Climate education
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Output
                      </p>
                      <div className="mt-1 flex items-end gap-2">
                        <span className="text-4xl font-black leading-none text-white">
                          <Counter end={6} />
                        </span>
                        <span className="pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200">
                          video
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-200 p-6 dark:border-zinc-800">
                  <div className="mb-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                      Case study
                    </p>
                    <h4 className="mt-2 text-xl font-black leading-snug">
                      Cambiamento climatico e polizze spiegati in modo chiaro
                    </h4>
                  </div>

                  <div className="grid gap-5">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        Obiettivo
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        Spiegare temi legati a cambiamento climatico,
                        prevenzione e protezione assicurativa in modo più
                        accessibile, utile e credibile.
                      </p>
                    </div>

                    <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-950/60">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        Risultato
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        Realizzati{" "}
                        <span className="font-bold text-zinc-900 dark:text-white">
                          6 video
                        </span>{" "}
                        dedicati a spiegare in modo divulgativo il legame tra
                        rischio climatico, protezione e polizze.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="relative aspect-[9/16] bg-zinc-950">
                  <video
                    src="telepass.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/portfolio/vertical-2.jpg"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-zinc-900 backdrop-blur">
                      Telepass
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Reach
                      </p>
                      <div className="mt-1 flex items-end gap-2">
                        <span className="text-4xl font-black leading-none text-white">
                          <Counter end={2} suffix="M" />
                        </span>
                        <span className="pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200">
                          views circa
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-200 p-5 dark:border-zinc-800">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                        Brand
                      </p>
                      <h4 className="mt-1 text-xl font-black">Telepass</h4>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Continuity
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        Obiettivo
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        Aumentare i contenuti sulla pagina del brand, rendere il
                        racconto dell’innovazione più comprensibile e rafforzare
                        la crescita del profilo.
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        Risultato
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        Circa{" "}
                        <span className="font-bold text-zinc-900 dark:text-white">
                          2 video al mese per circa un anno
                        </span>
                        , con un totale di circa{" "}
                        <span className="font-bold text-zinc-900 dark:text-white">
                          2 milioni di views
                        </span>{" "}
                        e supporto alla crescita dei contenuti e dei follower
                        della pagina.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="relative aspect-[16/9] bg-zinc-950">
                  <video
                    src="airup.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/portfolio/horizontal-1.jpg"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-zinc-900 backdrop-blur">
                      AirUp
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-end gap-2 rounded-2xl border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-md">
                      <span className="text-4xl font-black leading-none text-white">
                        <Counter end={200} suffix="k" />
                      </span>
                      <span className="pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200">
                        views
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-200 p-6 dark:border-zinc-800">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                        Brand
                      </p>
                      <h4 className="mt-1 text-xl font-black">AirUp</h4>
                    </div>
                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400">
                      Science storytelling
                    </span>
                  </div>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        Obiettivo
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        Spiegare la scienza dietro AirUp in modo visivamente
                        forte, semplice da capire e adatto a un contenuto
                        branded ad alta qualità.
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        Risultato
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        Un video con{" "}
                        <span className="font-bold text-zinc-900 dark:text-white">
                          animazioni originali
                        </span>{" "}
                        e circa{" "}
                        <span className="font-bold text-zinc-900 dark:text-white">
                          200k views
                        </span>
                        , pensato per rendere il concetto immediato e
                        memorabile.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="mb-16 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Audience snapshot
                </p>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                  Community
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-black">430k</p>
                  <p className="mt-1 text-sm text-zinc-500">Follower</p>
                </div>
                <div>
                  <p className="text-3xl font-black">17M+</p>
                  <p className="mt-1 text-sm text-zinc-500">Views / mese</p>
                </div>
                <div>
                  <p className="text-3xl font-black">7–15%</p>
                  <p className="mt-1 text-sm text-zinc-500">Engagement</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm dark:bg-zinc-800">
                  63% uomini
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm dark:bg-zinc-800">
                  37% donne
                </span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                Distribuzione età
              </p>

              {ageDistribution.map((item) => (
                <div key={item.label} className="mb-4 last:mb-0">
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                Piattaforme
              </p>

              {socialPlatforms.map((item) => (
                <div key={item.label} className="mb-4 last:mb-0">
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span>{item.label}</span>
                    <span>{item.value}K</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400"
                      style={{ width: `${(item.value / 210) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16 rounded-[2rem] border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
                  FAQ
                </div>
                <h3 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
                  Domande frequenti
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                  Per capire rapidamente come lavoro e come può essere costruita
                  una collaborazione.
                </p>
              </div>

              <div className="mt-10 grid gap-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950/60"
                  >
                    <h4 className="text-lg font-black tracking-tight">
                      {faq.question}
                    </h4>
                    <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
            <h3 className="text-2xl font-black tracking-tight md:text-3xl">
              Vuoi vedere materiali più completi?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Scarica il media kit oppure guarda il profilo pubblico per capire
              tono, stile e posizionamento dei contenuti.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="/media-kit.pdf"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white shadow-[0_10px_35px_rgba(37,99,235,0.3)] transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Scarica il media kit →
              </a>

              <a
                href="https://www.instagram.com/claudio_divulgatore/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3.5 font-bold transition hover:-translate-y-1 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-800"
              >
                Vedi il profilo completo →
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />

      <a
        href="mailto:business@claudiovalletta.info"
        className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 font-bold text-zinc-900 shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
        aria-label="Manda una mail"
      >
        <span>✉️</span>
        <span className="hidden sm:inline">Manda mail</span>
      </a>

      <a
        href="https://wa.me/393485331716"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-bold text-white shadow-[0_10px_35px_rgba(16,185,129,0.35)] transition hover:-translate-y-1 hover:bg-emerald-400"
        aria-label="Contatta su WhatsApp"
      >
        <span>💬</span>
        <span className="hidden sm:inline">Contatta su WhatsApp</span>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Claudio Valletta - Agenzia di Divulgazione Scientifica",
            url: "https://www.claudiovalletta.it",
            logo: "https://www.claudiovalletta.it/logo.png",
            sameAs: [
              "https://www.instagram.com/claudio_divulgatore/",
              "https://www.linkedin.com/in/claudiovalletta",
            ],
            description:
              "Agenzia di comunicazione scientifica B2B. Video per aziende pharma, tech e green. Strategia, produzione, pubblicazione e supporto campagne.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Milano",
              addressCountry: "IT",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "business@claudiovalletta.info",
              contactType: "customer service",
            },
          }),
        }}
      />
    </div>
  );
}
