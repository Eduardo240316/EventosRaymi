export default function PageBanner({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-navy-900 pb-16 pt-20 text-center text-white">
      <div className="container-x">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-white/60">{subtitle}</p>}
      </div>
    </section>
  )
}
