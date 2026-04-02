import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="bg-indigo-950 pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 text-xs font-medium px-3 py-1.5 rounded-full w-fit">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
              Mais de 500 freelancers já prospectam com SpotLead
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Encontre clientes.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-indigo-400">Feche contratos.</span>
              </h1>
            </div>

            <p className="text-indigo-200/80 text-lg leading-relaxed max-w-md">
              Busque negócios no Google Maps, identifique os melhores leads com score automático e organize tudo no seu pipeline. Sem planilhas, sem desperdício de tempo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Começar grátis
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="#como-funciona"
                className="flex items-center justify-center gap-2 text-indigo-300 hover:text-white font-medium px-6 py-3 rounded-xl border border-indigo-700/50 hover:border-indigo-500/50 transition-all"
              >
                Ver como funciona
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2 border-t border-indigo-800/50">
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-xl">10</span>
                <span className="text-indigo-400 text-xs">leads grátis</span>
              </div>
              <div className="w-px h-8 bg-indigo-800" />
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-xl">R$50</span>
                <span className="text-indigo-400 text-xs">plano Pro/mês</span>
              </div>
              <div className="w-px h-8 bg-indigo-800" />
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-xl">∞</span>
                <span className="text-indigo-400 text-xs">leads ilimitados</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-indigo-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm w-full max-w-md shadow-2xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 bg-white/10 rounded-md h-6 flex items-center px-3">
                  <span className="text-indigo-300 text-xs">spotlead.com.br/dashboard</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                  <div className="w-8 h-8 bg-indigo-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="5.5" cy="5.5" r="3.5" stroke="#818cf8" strokeWidth="1.2"/>
                      <path d="M8.5 8.5L11.5 11.5" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">Agência de Marketing Digital</p>
                    <p className="text-indigo-400 text-xs">São Paulo, SP</p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                    <div className="w-1 h-1 rounded-full bg-green-400" />
                    Score 3
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                  <div className="w-8 h-8 bg-indigo-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="5.5" cy="5.5" r="3.5" stroke="#818cf8" strokeWidth="1.2"/>
                      <path d="M8.5 8.5L11.5 11.5" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">Studio de Design Gráfico</p>
                    <p className="text-indigo-400 text-xs">Curitiba, PR</p>
                  </div>
                  <div className="flex items-center gap-1 bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded-full">
                    <div className="w-1 h-1 rounded-full bg-orange-400" />
                    Score 2
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                  <div className="w-8 h-8 bg-indigo-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="5.5" cy="5.5" r="3.5" stroke="#818cf8" strokeWidth="1.2"/>
                      <path d="M8.5 8.5L11.5 11.5" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">E-commerce de Moda</p>
                    <p className="text-indigo-400 text-xs">Rio de Janeiro, RJ</p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                    <div className="w-1 h-1 rounded-full bg-green-400" />
                    Score 3
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-white/5 rounded-lg p-2.5 text-center">
                    <p className="text-white font-bold text-lg">24</p>
                    <p className="text-indigo-400 text-xs">leads salvos</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2.5 text-center">
                    <p className="text-white font-bold text-lg">8</p>
                    <p className="text-indigo-400 text-xs">abordados</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2.5 text-center">
                    <p className="text-white font-bold text-lg">3</p>
                    <p className="text-indigo-400 text-xs">fechados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
