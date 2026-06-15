import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { gallery, galleryCategories } from '../data'

export default function Galeria() {
  const [cat, setCat] = useState('Todos')

  const filtered = cat === 'Todos' ? gallery : gallery.filter((g) => g.cat === cat)

  return (
    <>
      <PageBanner
        eyebrow="Nuestros eventos"
        title="Galería de Momentos"
        subtitle="Cada foto cuenta una historia única celebrada en RAYMI"
      />

      <section className="bg-white py-14">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-6 py-2 text-sm font-medium transition ${
                  cat === c
                    ? 'border-gold bg-gold text-navy-900'
                    : 'border-gray-300 text-navy-700 hover:border-gold'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
            {filtered.map((g, i) => (
              <div
                key={g.src}
                className={`group overflow-hidden rounded-xl ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={g.src}
                  alt={g.cat}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-navy-700/60">
            Mostrando {filtered.length} de 48 fotos
          </p>
          <div className="mt-4 text-center">
            <button className="rounded-full border border-gold px-6 py-2.5 text-sm font-medium text-gold transition hover:bg-gold hover:text-navy-900">
              Ver más fotos →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
