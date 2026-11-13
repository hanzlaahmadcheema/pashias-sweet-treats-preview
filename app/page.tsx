import {
  CakeIcon,
  SparklesIcon,
  GiftIcon,
  HeartIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { clinic, serviceGroups, faqs, orderSteps } from "@/lib/content";
import { OrderForm } from "@/components/OrderForm";
import { Reveal } from "@/components/Reveal";

const GROUP_ICONS = [
  CakeIcon,
  SparklesIcon,
  GiftIcon,
  HeartIcon,
];

function SectionHeading({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="top">
      {/* ---------- HERO (photo-led, MedBills pattern) ---------- */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-pumpkin-50 via-ivory to-sand"
        aria-labelledby="hero-heading"
      >
        <div className="container-responsive py-10 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="inline-flex animate-hero items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-pumpkin-800 shadow-sm">
                <CakeIcon className="h-4 w-4 text-honey" aria-hidden="true" />
                Homemade bakery · Ennis, Texas
              </p>
              <h1
                id="hero-heading"
                className="mt-5 animate-hero animate-hero-delay-1 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]"
              >
                Homemade goodness, from our porch to your table.
              </h1>
              <div className="mt-5 animate-hero-photo animate-hero-delay-2 md:hidden">
                <img
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1600&q=80"
                  alt="Cupcakes with mint frosting and colorful sprinkles on a white cake stand"
                  width={1600}
                  height={1067}
                  className="h-auto w-full rounded-2xl shadow-xl"
                />
              </div>
              <p className="mt-5 animate-hero animate-hero-delay-2 max-w-prose text-lg leading-relaxed text-muted">
                Homemade cakes, cupcakes, candy and pies — plus sourdough
                breads and cookies, all made with the finest and freshest
                ingredients. Porch pickup in Ennis, or find us at Canton First
                Monday.
              </p>
              <div className="mt-7 flex animate-hero animate-hero-delay-3 flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-pumpkin-700 px-7 py-3 font-bold text-white shadow-lg shadow-pumpkin-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pumpkin-800 hover:shadow-xl"
                >
                  See the goodies
                </a>
                <a
                  href={clinic.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-pumpkin-800 px-7 py-3 font-bold text-pumpkin-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pumpkin-50"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
                  DM to order
                </a>
              </div>
              <div className="mt-8 flex animate-hero animate-hero-delay-4 flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-pumpkin-600" aria-hidden="true" />
                  Half down to book
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-pumpkin-600" aria-hidden="true" />
                  Porch pickup
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-pumpkin-600" aria-hidden="true" />
                  Canton First Monday
                </span>
              </div>
            </div>
            <div className="relative hidden animate-hero-photo animate-hero-delay-2 md:block">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1600&q=80"
                  alt="Cupcakes with mint frosting and colorful sprinkles on a white cake stand"
                  width={1600}
                  height={1067}
                  className="h-[480px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="flex items-center gap-1.5 text-lg font-extrabold text-ink">
                  <CakeIcon className="h-5 w-5 text-honey" aria-hidden="true" />
                  Homemade Little Debbie Treats
                </p>
                <p className="text-sm text-muted">
                  Zebra Cakes · Oatmeal Cream Pies · Fudge Rounds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="border-y border-pumpkin-100 bg-pumpkin-50" aria-label="Why customers choose us">
        <div className="container-responsive grid grid-cols-2 gap-x-4 gap-y-5 py-6 md:grid-cols-4">
          {[
            { strong: "Half down to book", sub: "Non-refundable deposit" },
            { strong: "Porch Farm Stand", sub: "1132 Stacks Rd, Ennis" },
            { strong: "Canton First Monday", sub: "Pavilion 4500, Booths 4569–4571" },
            { strong: "Thanksgiving orders", sub: "Pumpkin Pecan Pie" },
          ].map((f, i) => (
            <Reveal key={f.strong} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <div className="border-l-2 border-pumpkin-200 pl-4">
              <p className="font-extrabold text-pumpkin-800">{f.strong}</p>
              <p className="text-sm text-muted">{f.sub}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- MENU ---------- */}
      <section id="menu" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="menu-heading">
        <div className="container-responsive">
          <Reveal>
          <SectionHeading
            title="The goodies"
            intro="Everything below is homemade, by hand, with the finest and freshest ingredients. No prices are listed — message us with what you want and we will quote you before anything is baked. All orders require a non-refundable deposit of half down."
          />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((group, i) => {
              const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
              return (
                <Reveal
                  key={group.title}
                  delay={(i % 4) as 0 | 1 | 2 | 3}
                >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {group.image && (
                    <img
                      src={group.image}
                      alt={group.imageAlt ?? ""}
                      width={1600}
                      height={1067}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pumpkin-50 text-pumpkin-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-ink">
                      {group.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{group.blurb}</p>
                    <ul className="mt-4 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[0.95rem] text-ink">
                          <CheckCircleIcon
                            className="mt-0.5 h-5 w-5 shrink-0 text-pumpkin-600"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <p className="text-lg font-extrabold text-pumpkin-800">
                        {group.price}
                      </p>
                      <a
                        href={clinic.facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center font-bold text-pumpkin-800 underline-offset-4 hover:underline"
                      >
                        DM to order
                      </a>
                    </div>
                  </div>
                </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- MADE WITH LOVE (dark band) ---------- */}
      <section id="story" className="scroll-mt-24 bg-pumpkin-900 py-16 md:py-24" aria-labelledby="story-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
          <div>
            <p className="flex items-center gap-2 font-bold text-honey">
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
              Made with love, just for y&rsquo;all
            </p>
            <h2 id="story-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              A homemade bakery with a porch farm stand
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pumpkin-100">
              Pashia is self-taught at cake decorating and still learning every
              day — and she puts her love into every little detail, especially
              when it is for her grandbabies, Raelynn and Waylon, who call her
              Mimi. Their birthdays get KPop cakes, Smokey and the Bandit
              cookies, cake pops and pudding cups, made just for them.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-pumpkin-100">
              At Canton First Monday, our sourdough breads and Lemon Blueberry
              Rolls sold out by the end of the day, and our Zebra Cakes were a
              huge hit. Come find us on the Lewis side, Pavilion 4500, Booths
              4569, 4570 and 4571 — and come early.
            </p>
            <a
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-honey px-7 py-3 font-bold text-pumpkin-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amberstar"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
              DM to order
            </a>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1200&q=80"
              alt="Happy Birthday written in chocolate sauce with truffles and a raspberry on a dark plate"
              width={1200}
              height={800}
              loading="lazy"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- HOW ORDERING WORKS ---------- */}
      <section id="how" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="how-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
            <SectionHeading
              title="How ordering works"
              intro="Three simple steps — and your goodies are baked fresh for the day you need them."
            />
            </Reveal>
            <ol className="mt-8 space-y-6">
              {orderSteps.map((step, i) => (
                <Reveal key={step.title} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pumpkin-800 text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{step.title}</p>
                    <p className="mt-1 leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-ink">What to include in your message</h3>
            <ul className="mt-4 space-y-3">
              {[
                "What you want — a custom cake, pies, sourdough, rolls or sweet treats",
                "When you need it — the date and time",
                "How many people it is for",
                "The theme, colors, or a photo of what you have in mind",
                "Any allergies we should know about",
                "Whether you want porch pickup or to meet us at Canton First Monday",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-pumpkin-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Message as early as you can — all orders require a non-refundable
              deposit of half down, and the porch stand is open all day or
              until we sell out.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- MEET THE BAKER ---------- */}
      <section className="border-y border-pumpkin-100 bg-pumpkin-50 py-16 md:py-24" aria-labelledby="baker-heading">
        <Reveal>
        <div className="container-responsive grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-pumpkin-800 shadow-xl md:h-52 md:w-52">
            <span className="font-serif text-7xl font-semibold text-honey md:text-8xl" aria-hidden="true">
              P
            </span>
          </div>
          <div>
            <h2 id="baker-heading" className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Meet the baker behind Pashia&rsquo;s Sweet Treats
            </h2>
            <p className="mt-2 font-semibold text-pumpkin-700">
              Homemade bakery · {clinic.area}
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              {clinic.owner.bio}
            </p>
            <p className="mt-4 text-muted">
              Homemade cakes, cupcakes, candy and pies, sourdough breads and
              cookies — for birthdays, Thanksgiving, Canton First Monday, and
              every sweet tooth in between.
            </p>
          </div>
        </div>
        </Reveal>
      </section>

      {/* ---------- OCCASIONS ---------- */}
      <section className="py-16 md:py-24" aria-labelledby="occasions-heading">
        <div className="container-responsive">
          <Reveal>
          <SectionHeading
            title="Made for your occasion"
            intro="Homemade goodies for every kind of celebration — tell us the day, and we will bake for it."
          />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Birthdays", body: "Custom cakes in any theme — KPop for Raelynn, Smokey and the Bandit for Waylon — plus cake pops, pretzels and pudding cups." },
              { title: "Thanksgiving", body: "Pumpkin Pecan Pie — two holiday favorites in one, baked in a homemade all-butter crust. Orders are open now." },
              { title: "Canton First Monday", body: "Find us on the Lewis side, Pavilion 4500, Booths 4569, 4570 and 4571 — sourdough, Lemon Blueberry Rolls and Zebra Cakes." },
              { title: "Porch Farm Stand", body: "Stop by 1132 Stacks Rd in Ennis — fresh sourdough, Texas Roadhouse-style rolls, Zebra Cakes and more, until we sell out." },
            ].map((o, i) => (
              <Reveal key={o.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pumpkin-50 text-pumpkin-700">
                  <CakeIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">{o.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{o.body}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ORDER ---------- */}
      <section id="book" className="scroll-mt-24 border-y border-pumpkin-100 bg-pumpkin-50 py-16 md:py-24" aria-labelledby="book-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="Order"
              intro="Request an order here and we will confirm it by message — or skip the form and message us on Facebook directly."
            />
            </Reveal>
            <p className="mt-6 flex items-center gap-3 text-lg font-bold text-pumpkin-800">
              <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />
              <a href={clinic.facebookUrl} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                Message us on Facebook
              </a>
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              1132 Stacks Rd, Ennis, TX 75119. Porch pickup at the farm stand.
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <ClockIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              The porch stand is open all day, or until we sell out.
            </p>
            <p className="mt-3 text-muted">
              No phone number or email listed — Facebook message is the way to
              reach us.
            </p>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <OrderForm />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="container-responsive max-w-3xl">
          <Reveal>
          <SectionHeading
            title="Questions customers ask"
            intro="Answers from the bakery's public information. Anything else — message us and ask."
          />
          </Reveal>
          <div className="mt-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) as 0 | 1}>
              <details className="group border-t border-slate-200 py-5 last:border-b">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl font-normal text-muted transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-muted">{f.a}</p>
              </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section id="visit" className="scroll-mt-24 border-t border-slate-200 py-16 md:py-24" aria-labelledby="visit-heading">
        <div className="container-responsive grid gap-10 md:grid-cols-2">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="The Porch Farm Stand"
              intro="Our little farm stand on the porch at 1132 Stacks Rd in Ennis — open all day, or until we sell out."
            />
            </Reveal>
            <p className="mt-6 leading-relaxed text-muted">
              Fresh sourdough bread, Texas Roadhouse-style rolls with homemade
              butter, Zebra Cakes, S&rsquo;mores in a Jar, cookies and more —
              whatever we have baked that day. Don&rsquo;t see something
              you&rsquo;re craving? Send us a message — we love taking special
              orders and pre-orders.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Ordering ahead matters most: all orders require a non-refundable
              deposit of half down. The more detail you send — theme, colors,
              a photo of what you love — the better the result.
            </p>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl bg-pumpkin-800 p-6 text-white shadow-xl sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold">DM to order</h3>
            <p className="mt-3 leading-relaxed text-pumpkin-100">
              Facebook message is how every order starts. Tell us what you
              want, when you need it, and how many people it is for — we will
              confirm your order and the price.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-pumpkin-900 transition-colors hover:bg-pumpkin-50"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
                Message on Facebook
              </a>
              <a
                href="#menu"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                See the goodies
              </a>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-pumpkin-100">
              No phone number or email listed — Facebook is the fastest way to
              reach us.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-pumpkin-900 py-16 md:py-20" aria-labelledby="closing-heading">
        <Reveal>
        <div className="container-responsive max-w-3xl text-center md:text-left">
          <h2 id="closing-heading" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Hungry? Message us to order.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pumpkin-100 md:mx-0">
            Homemade cakes, cupcakes, candy, pies, sourdough and cookies —
            baked with love in Ennis. Message us on Facebook with what you
            need and when, and we will take it from there.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start md:justify-start">
            <a
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-honey px-7 py-3 font-bold text-pumpkin-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amberstar"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
              Message us on Facebook
            </a>
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/60 px-7 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              See the goodies
            </a>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
