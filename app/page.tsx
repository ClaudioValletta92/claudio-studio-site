import Counter from "./components/Counter";
import ContactCTA from "./components/ContactCTA";

export const metadata = {
  title:
    "Claudio Valletta | Agenzia di Divulgazione e Comunicazione Scientifica B2B",
  description:
    "Trasformiamo paper, dati e tecnologie in asset di fiducia per aziende pharma, tech e green. Video scientifici che generano lead qualificati e posizionano il tuo brand.",
  keywords: [
    "agenzia divulgazione scientifica B2B",
    "comunicazione scientifica aziendale",
    "video per aziende farmaceutiche",
    "marketing scientifico",
    "content creator scienza imprese",
    "lead generation scientifica",
  ],
  openGraph: {
    title: "Claudio Valletta | Agenzia di Divulgazione Scientifica B2B",
    description:
      "Video scientifici che convertono. Per aziende che vogliono essere leader di fiducia nel proprio settore.",
    url: "https://www.claudiovalletta.it",
    siteName: "Claudio Valletta Network",
    locale: "it_IT",
    type: "website",
  },
};

const services = [
  {
    icon: "🧠",
    title: "Strategy & script",
    desc: "Analizziamo paper, prodotto e messaggi chiave. Poi trasformiamo la complessità in uno script chiaro, autorevole e davvero memorabile.",
  },
  {
    icon: "🎥",
    title: "Riprese in sede",
    desc: "Veniamo da voi con troupe e attrezzatura. In una singola sessione raccogliamo il materiale necessario senza rallentare il lavoro del team.",
  },
  {
    icon: "🚀",
    title: "Editing & distribution",
    desc: "Montiamo, rifiniamo e adattiamo ogni contenuto al canale giusto. Può vivere sui vostri asset oppure essere amplificato tramite la mia audience.",
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
    title: "Consegna e distribuzione",
    time: "Pronto per i tuoi canali",
  },
];

const caseStudies = [
  {
    brand: "Duracell",
    tag: "Awareness",
    tagStyle:
      "text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-500/10",
    overlay: "bg-blue-500/10",
    title: "Come rendere un prodotto tecnico più memorabile",
    desc: "Abbiamo trasformato una value proposition tecnica in un contenuto semplice da capire, forte da ricordare e facile da condividere.",
    metric1: "Formato: branded science storytelling",
    metric2: "Obiettivo: attenzione + memorabilità",
  },
  {
    brand: "Telepass",
    tag: "Education",
    tagStyle:
      "text-emerald-700 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-500/10",
    overlay: "bg-emerald-500/10",
    title: "Spiegare innovazione senza sembrare pubblicità",
    desc: "Abbiamo usato una narrativa educativa per dare contesto, abbassare la barriera tecnica e aumentare fiducia verso il brand.",
    metric1: "Formato: explainer ad alto watch time",
    metric2: "Obiettivo: fiducia + chiarezza",
  },
  {
    brand: "Generali",
    tag: "Trust",
    tagStyle:
      "text-purple-700 bg-purple-100 dark:text-purple-300 dark:bg-purple-500/10",
    overlay: "bg-purple-500/10",
    title: "Da tema complesso a messaggio chiaro e utile",
    desc: "Il focus non è solo farsi vedere: è essere capiti. Qui il contenuto lavora per semplificare, posizionare e creare autorevolezza.",
    metric1: "Formato: divulgazione orientata al brand",
    metric2: "Obiettivo: trust + posizionamento",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30 overflow-x-hidden">
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

      <header className="relative isolate flex min-h-[86vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-28 text-center md:pt-32">
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
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent" />
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
          <h1 className="max-w-6xl text-5xl font-black tracking-tight text-white md:text-7xl lg:text-[5.4rem] leading-[0.98]">
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
            Trasformiamo tecnologia, ricerca e innovazione in contenuti che
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

      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
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

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_45%)]" />
        <div className="max-w-6xl mx-auto px-6 text-center mb-14 relative z-10">
          <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 backdrop-blur">
            Social proof
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">
            Brand che ci hanno già scelto
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
            </div>
          </div>
        </div>
      </section>

      <section id="servizi" className="relative py-28 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.06),transparent_25%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 backdrop-blur">
              Servizio end-to-end
            </div>
            <h2 className="mt-6 text-4xl font-black md:text-6xl leading-[1.05] tracking-tight">
              La credibilità di un divulgatore.
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                L’operatività di un team che produce tutto per te.
              </span>
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              Unisco autorevolezza scientifica, capacità di semplificare e
              produzione completa: dal brief alle riprese, fino alla consegna
              finale. Così tu non ti perdi nella complessità tecnica.
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
              <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 backdrop-blur">
                Metodo
              </div>
              <h3 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">
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
        <div className="relative max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 backdrop-blur">
              Portfolio
            </div>
            <h2 className="mt-5 text-4xl font-black md:text-6xl tracking-tight leading-[1.05]">
              Casi studio:
              <br />
              contenuti che trasformano complessità in attenzione
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Alcuni esempi di come traduciamo temi tecnici e scientifici in
              contenuti più chiari, memorabili e utili per il brand.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {caseStudies.map((item) => (
              <div
                key={item.brand}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <video
                    src="/herovideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 ${item.overlay} transition-opacity duration-300 group-hover:opacity-30`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex rounded-full bg-white/90 dark:bg-zinc-900/90 px-3 py-1 text-xs font-black backdrop-blur">
                      {item.brand}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <div
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${item.tagStyle}`}
                    >
                      {item.tag}
                    </div>
                    <h3 className="mt-4 text-2xl font-black leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                    <p className="text-sm text-zinc-500">{item.metric1}</p>
                    <p className="mt-1 text-sm font-bold">{item.metric2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Audience snapshot
                </p>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                  Live audience
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

          <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
              Vuoi vedere materiali più completi?
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
              Scarica il media kit oppure guarda il profilo pubblico per capire
              tono, stile e posizionamento dei contenuti.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="/media-kit.pdf"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-500 shadow-[0_10px_35px_rgba(37,99,235,0.3)]"
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
              "https://www.instagram.com/claudiovalletta",
              "https://www.linkedin.com/in/claudiovalletta",
              "https://www.tiktok.com/@claudiovalletta",
            ],
            description:
              "Agenzia di comunicazione scientifica B2B. Video per aziende pharma, tech e green. Lead generation e posizionamento.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Milano",
              addressCountry: "IT",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "ciao@claudiovalletta.it",
              contactType: "customer service",
            },
          }),
        }}
      />
    </div>
  );
}
