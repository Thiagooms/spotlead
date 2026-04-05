import Link from 'next/link'

export const metadata = {
  title: 'Termos de Uso e Política de Privacidade — SpotLead',
  description: 'Leia os termos de uso e a política de privacidade da plataforma SpotLead.',
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-[1.35rem] font-semibold text-black mb-4">{title}</h2>
      <div className="flex flex-col gap-3 text-[15px] text-black/65 leading-relaxed">
        {children}
      </div>
    </section>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>
}

export default function TermosEPrivacidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-black/[0.07] sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/assets/logo-nova.svg" alt="SpotLead" style={{ height: '1.75rem', width: 'auto' }} />
            <span className="text-[0.95rem] font-semibold text-black/80">SpotLead</span>
          </Link>
          <Link href="/login" className="text-[13px] text-black/45 hover:text-black/70 transition-colors">
            ← Voltar
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-[2rem] font-semibold text-black mb-3">
            Termos de Uso e Política de Privacidade
          </h1>
          <p className="text-[13.5px] text-black/35">Última atualização: abril de 2026</p>
        </div>

        <nav className="mb-12 p-5 rounded-2xl bg-black/[0.03] border border-black/[0.06]">
          <p className="text-[12px] font-semibold text-black/40 uppercase tracking-widest mb-3">Nesta página</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#termos-de-uso" className="text-[14px] text-black/60 hover:text-black/90 transition-colors underline-offset-2 hover:underline">
                1. Termos de Uso
              </a>
            </li>
            <li>
              <a href="#politica-de-privacidade" className="text-[14px] text-black/60 hover:text-black/90 transition-colors underline-offset-2 hover:underline">
                2. Política de Privacidade
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-14">

          <Section id="termos-de-uso" title="1. Termos de Uso">
            <Paragraph>
              A SpotLead é uma plataforma SaaS que permite a freelancers e profissionais autônomos prospectar leads qualificados a partir de dados públicos do Google Maps, organizar oportunidades em um pipeline visual e automatizar o contato via WhatsApp.
            </Paragraph>
            <Paragraph>
              Ao acessar ou usar a SpotLead, você concorda com estes termos. Se não concordar com alguma parte, não utilize a plataforma.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">1.1 Elegibilidade</h3>
            <Paragraph>
              O uso da plataforma é destinado a pessoas físicas maiores de 18 anos ou pessoas jurídicas devidamente constituídas. Ao se cadastrar, você declara que atende a esses requisitos.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">1.2 Conta e acesso</h3>
            <Paragraph>
              Cada usuário é responsável pela segurança e pelo uso de seu próprio acesso. A autenticação é realizada via e-mail (magic link) ou conta Google, gerenciadas pelo Supabase Auth. Você não deve compartilhar seu acesso com terceiros.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">1.3 Uso aceitável</h3>
            <Paragraph>
              Você concorda em usar a SpotLead apenas para fins lícitos e de acordo com estas condições. É proibido:
            </Paragraph>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1">
              <li>Usar a plataforma para atividades ilegais, fraudulentas ou prejudiciais a terceiros</li>
              <li>Tentar contornar limites de plano ou burlar funcionalidades de controle de acesso</li>
              <li>Coletar ou armazenar dados de terceiros sem consentimento adequado</li>
              <li>Realizar engenharia reversa, descompilar ou modificar o código da plataforma</li>
              <li>Usar bots, scripts ou automações não autorizadas para acessar a plataforma</li>
            </ul>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">1.4 Planos e pagamentos</h3>
            <Paragraph>
              A SpotLead oferece um plano gratuito com funcionalidades limitadas e um plano Pro pago. Os pagamentos do plano Pro são processados via Mercado Pago. Ao assinar o plano Pro, você autoriza a cobrança recorrente no valor vigente à época da contratação.
            </Paragraph>
            <Paragraph>
              Cancelamentos podem ser feitos a qualquer momento e terão efeito ao fim do período já pago.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">1.5 Disponibilidade</h3>
            <Paragraph>
              A SpotLead se esforça para manter a plataforma disponível continuamente, mas não garante disponibilidade ininterrupta. Manutenções, atualizações e eventos fora do nosso controle podem causar indisponibilidades temporárias.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">1.6 Rescisão</h3>
            <Paragraph>
              Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos, sem aviso prévio, em casos graves. Em situações menos severas, tentaremos contato antes de qualquer ação.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">1.7 Limitação de responsabilidade</h3>
            <Paragraph>
              A SpotLead não se responsabiliza por decisões comerciais tomadas com base nos dados exibidos na plataforma, pela qualidade ou atualidade dos dados públicos do Google Maps, nem por perdas indiretas decorrentes do uso ou da impossibilidade de uso da plataforma.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">1.8 Alterações nos termos</h3>
            <Paragraph>
              Podemos atualizar estes termos periodicamente. Alterações relevantes serão comunicadas por e-mail ou notificação na plataforma. O uso continuado após a publicação das alterações representa aceitação dos novos termos.
            </Paragraph>
          </Section>

          <div className="h-px bg-black/[0.06]" />

          <Section id="politica-de-privacidade" title="2. Política de Privacidade">
            <Paragraph>
              Sua privacidade é importante para nós. Esta política explica como coletamos, usamos e protegemos suas informações ao usar a SpotLead.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">2.1 Dados coletados</h3>
            <Paragraph>
              Ao usar a SpotLead, podemos coletar os seguintes dados:
            </Paragraph>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1">
              <li><strong className="text-black/75">E-mail:</strong> fornecido no cadastro, usado para autenticação e comunicação</li>
              <li><strong className="text-black/75">Dados de conta Google:</strong> quando o acesso é feito via Google OAuth (nome e e-mail)</li>
              <li><strong className="text-black/75">Leads salvos:</strong> informações de negócios que você salva na plataforma (nome, telefone, website, localização)</li>
              <li><strong className="text-black/75">Dados de uso:</strong> informações sobre como você usa a plataforma, para melhorar a experiência</li>
              <li><strong className="text-black/75">Dados de pagamento:</strong> processados integralmente pelo Mercado Pago; não armazenamos dados de cartão</li>
            </ul>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">2.2 Como usamos os dados</h3>
            <Paragraph>
              Os dados coletados são utilizados para:
            </Paragraph>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1">
              <li>Autenticar e identificar você na plataforma</li>
              <li>Fornecer as funcionalidades do produto (busca, pipeline, score de leads)</li>
              <li>Processar pagamentos e gerenciar assinaturas</li>
              <li>Enviar comunicações relacionadas ao produto (magic links, notificações de conta)</li>
              <li>Melhorar a plataforma com base em padrões de uso agregados</li>
            </ul>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">2.3 Compartilhamento de dados</h3>
            <Paragraph>
              Não vendemos seus dados pessoais. Compartilhamos dados apenas com os provedores técnicos necessários para operação da plataforma:
            </Paragraph>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1">
              <li><strong className="text-black/75">Supabase:</strong> banco de dados, autenticação e armazenamento</li>
              <li><strong className="text-black/75">Google:</strong> autenticação OAuth e API do Google Maps (Places)</li>
              <li><strong className="text-black/75">Mercado Pago:</strong> processamento de pagamentos</li>
              <li><strong className="text-black/75">Vercel:</strong> hospedagem e entrega da aplicação</li>
            </ul>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">2.4 Segurança</h3>
            <Paragraph>
              Adotamos medidas técnicas para proteger seus dados, incluindo criptografia em trânsito (HTTPS), autenticação segura via Supabase Auth e controle de acesso baseado em sessão. Nenhum sistema é 100% seguro, e não podemos garantir segurança absoluta.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">2.5 Cookies e armazenamento local</h3>
            <Paragraph>
              Utilizamos cookies de sessão para manter você autenticado na plataforma. Esses cookies são essenciais para o funcionamento do produto e não podem ser desativados sem comprometer o acesso.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">2.6 Seus direitos</h3>
            <Paragraph>
              Você tem direito a acessar, corrigir ou solicitar a exclusão dos seus dados pessoais. Para exercer esses direitos, entre em contato pelo e-mail abaixo. Atenderemos sua solicitação dentro do prazo legal aplicável.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">2.7 Retenção de dados</h3>
            <Paragraph>
              Seus dados são mantidos enquanto sua conta estiver ativa. Após a exclusão da conta, os dados são removidos ou anonimizados dentro de um prazo razoável, salvo obrigações legais de retenção.
            </Paragraph>

            <h3 className="text-[1rem] font-semibold text-black/80 mt-2">2.8 Alterações nesta política</h3>
            <Paragraph>
              Esta política pode ser atualizada periodicamente. Notificaremos alterações relevantes por e-mail ou dentro da plataforma.
            </Paragraph>
          </Section>

          <div className="h-px bg-black/[0.06]" />

          <div className="text-[14px] text-black/45 leading-relaxed">
            <p className="font-semibold text-black/60 mb-1">Dúvidas ou solicitações?</p>
            <p>
              Entre em contato pelo e-mail{' '}
              <a href="mailto:contato@spotlead.com.br" className="text-black/70 underline underline-offset-2 hover:text-black transition-colors">
                contato@spotlead.com.br
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}
