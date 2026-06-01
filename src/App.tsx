import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import anaCecilia2 from './assets/images/ana-cecilia-2.png.jpeg';
import anaCecilia1 from './assets/images/ana-cecilia.jpeg';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  Lock,
  ChevronDown,
  Award,
  BookOpen,
  Calendar,
  Users,
  Percent,
  Play,
  Heart,
  MessageCircle,
  HelpCircle,
  X,
  Zap,
  Calculator,
  ShieldCheck,
  Star,
  FileText,
  Volume2,
  VolumeX,
  CreditCard,
  Gift,
  Flame,
  Eye,
  Scissors,
  Check
} from 'lucide-react';

// Interfaces for our structured data & easy maintenance
interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  earningIncrease: string;
  beforeLash: string;
  afterLash: string;
}

interface Bonus {
  id: number;
  title: string;
  originalPrice: string;
  badge: string;
  description: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function App() {
  // Interactive Before/After slider position (0-100)
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  // Accordion active item state
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  // Checkout Pop-up or Direct Success Sim
  const [checkoutModalOpen, setCheckoutModalOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'success'>('form');
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  // Sticky checkout bar when scrolled
  const [showStickyBar, setShowStickyBar] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSimulatedCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const resetCheckout = () => {
    setCheckoutModalOpen(false);
    setCheckoutStep('form');
    setUserName('');
    setUserPhone('');
    setUserEmail('');
  };

  // Testimonials Array adapted to Lash Designer niche
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mariana Alencar",
      role: "Atendimento no Lar em Montes Claros MG",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      text: "Eu andava exausta trabalhando dez horas por dia em uma loja de shopping para ganhar um salário mínimo que sumia antes do dia vinte. Deixava meus filhos pequenos com vizinhos e quase não os via crescer. Decidi arriscar e comecei a atender na sala de casa com o Método da Ana Cecília. Hoje controlo minha própria agenda, trabalho pertinho dos meus filhos e meu faturamento me deu a verdadeira independência que eu sempre sonhei.",
      earningIncrease: "Independência de tempo e R$ 6.800 por mês",
      beforeLash: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=300&auto=format&fit=crop", // Simulated poor lash look
      afterLash: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=300&auto=format&fit=crop"   // Flawless wispy high quality
    },
    {
      id: 2,
      name: "Sabrina Viana",
      role: "Empreendedora Independente em Montes Claros MG",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      text: "Eu tinha medo de não conseguir aprender por começar do absoluto zero e não ter espaço chique. Comecei atendendo na minha própria mesa de jantar usando as técnicas simples e humanas de acolhimento da Ana Cecília. Em poucos meses consegui sair do emprego que me sugaria a vida toda e hoje sou dona do meu próprio tempo, conquistando minha liberdade e realizando sonhos que antes pareciam impossíveis.",
      earningIncrease: "Liberdade da CLT e R$ 8.100 por mês",
      beforeLash: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=300&auto=format&fit=crop",
      afterLash: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Tainá Medeiros",
      role: "Profissional Autônoma em Montes Claros MG",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&auto=format&fit=crop",
      text: "Eu me sentia extremamente frustrada dependendo financeiramente de terceiros para comprar qualquer coisa básica para mim ou para minha casa. O curso da Ana me deu a chave de ouro para criar uma renda própria. Com as estratégias simples de atração de clientes locais, consegui iniciar em casa e hoje me sinto orgulhosa por ser totalmente independente financeira.",
      earningIncrease: "Construção de renda de R$ 5.200 por mês",
      beforeLash: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=300&auto=format&fit=crop",
      afterLash: "https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=300&auto=format&fit=crop"
    }
  ];

  // Exclusive Bonuses for Lash Mãos de Fada
  const bonuses: Bonus[] = [
    {
      id: 1,
      title: "Suporte Especial VIP de Acompanhamento no WhatsApp",
      badge: "Valioso de Verdade",
      originalPrice: "R$ 497,00",
      description: "Você não estará sozinha nessa nova jornada de transformação pessoal. Durante seis meses inteiros, você terá o suporte individual da nossa equipe para tirar suas dúvidas de atendimento e ganhar total segurança em cada atendimento."
    },
    {
      id: 2,
      title: "Roteiro de Atração de Clientes Locais de Forma Orgânica",
      originalPrice: "R$ 147,00",
      badge: "Atração de Clientes",
      description: "Descubra como divulgar o seu novo trabalho na sua região mesmo sem ter muitos seguidores ou experiência nas redes sociais. Esse roteiro ensina abordagens simples para encher sua agenda com vizinhas e amigas locais de forma natural."
    },
    {
      id: 3,
      title: "Manual de Gestão Financeira Decisiva para Mulheres Autônomas",
      originalPrice: "R$ 127,00",
      badge: "Mente Empreendedora",
      description: "Modelos fáceis e descomplicados para você organizar cada centavo da sua nova atividade e separar o dinheiro profissional do seu orçamento familiar. Planeje a conquista de seus sonhos mais desejados passo a passo."
    }
  ];

  // High conversion Lash FAQ accordion items
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Eu nunca trabalhei com beleza e estou do absoluto zero, esse método serve para mim?",
      answer: "Com certeza. O método foi desenhado especialmente para mulheres que estão começando do zero absoluto, mesmo que nunca tenham tocado em uma pinça antes. As aulas iniciais são extremamente simples e didáticas, ensinando você a treinar de forma calma para ganhar confiança antes de seu primeiro atendimento."
    },
    {
      id: 2,
      question: "Eu tenho filhos pequenos e pouco tempo livre, consigo estudar e trabalhar com isso?",
      answer: "Sim, essa é uma das maiores vantagens da profissão Lash Designer. Você pode estudar no seu próprio ritmo e definir os seus horários de atendimento de acordo com a sua rotina familiar. Muitas alunas começam atendendo parentes ou vizinhas no final de semana ou quando os filhos estão na escola, conquistando sua renda com bastante flexibilidade."
    },
    {
      id: 3,
      question: "Preciso alugar um espaço comercial ou ter muito dinheiro para começar?",
      answer: "Não há necessidade de despesas extras no início. Você pode começar na sala ou no quarto da sua própria casa usando apenas uma maca simples e materiais básicos. À medida que o seu faturamento for crescendo e sua independência se consolidar, você poderá decidir o momento ideal de expandir seu negócio."
    },
    {
      id: 4,
      question: "Como funciona o suporte para as alunas do curso?",
      answer: "Temos um suporte próximo e dedicado através do WhatsApp de acompanhamento. Você poderá enviar suas dúvidas práticas e receber respostas detalhadas para avançar com tranquilidade e total segurança em cada etapa do seu aprendizado."
    },
    {
      id: 5,
      question: "Como vou conseguir minhas primeiras clientes sem ter experiência na área?",
      answer: "Você aprenderá estratégias práticas de captação de clientes locais em seu bairro ou arredores. Através de abordagens simples e eficientes de divulgação orgânica, você poderá atrair as primeiras pessoas interessadas e estruturar uma agenda cheia de forma natural."
    },
    {
      id: 6,
      question: "O acesso de estudos expira em quanto tempo e recebo de fato certificado?",
      answer: "O seu acesso é vitalício para assistir as aulas quantas vezes desejar ao longo do tempo. Além disso, ao concluir as aulas práticas, você terá direito ao seu certificado oficial autenticado e assinado por Ana Cecília, consolidando seu merecido status profissional."
    }
  ];

  return (
    <div className="min-h-screen bg-[#090306] font-sans text-slate-100 selection:bg-rose-600 selection:text-white" id="main_wrapper">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Sustains High Conversion Urgency) */}
      <div className="bg-[#1f0710] border-b border-rose-500/25 text-xs py-2.5 px-4 sticky top-0 z-50 shadow-md backdrop-blur bg-opacity-95" id="announcement_bar">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center gap-2 text-rose-300 font-medium justify-center text-center">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping shrink-0"></span>
            <span>SUA INDEPENDÊNCIA COMEÇA HOJE COM R$ 703 DE DESCONTO NO MÉTODO LASH MÃOS DE FADA</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION Custom designed to match the uploaded banner aesthetics */}
      <header className="relative bg-dark-radial pt-16 pb-24 px-4 overflow-hidden border-b border-[#2d0f19]/80" id="hero_section">
        {/* Glowing burgundy/cherry ambient lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#4d0b1d]/20 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-rose-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -left-10 top-1/4 w-80 h-80 bg-[#30050e]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          {/* Subtle elegant authority fairy badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#1b0811]/90 border border-rose-500/30 px-4 py-1.5 rounded-full mb-6 font-mono text-xs text-[#f2a9b6] uppercase tracking-widest"
            id="authority_tag"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>MÉTODO LASH MÃOS DE FADA • ANA CECÍLIA</span>
          </motion.div>

          {/* Headline - High conversion, targeted, emotionally trigger-loaded for lashes */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight md:leading-[1.15] mb-6 font-medium"
            id="main_headline"
          >
            Transforme um pequeno espaço da sua casa em uma <span className="shimmer-rose-gold font-bold italic">fonte de renda com cílios</span>, mesmo começando do absoluto zero.
          </motion.h1>

          {/* Subheadline with clear transformation value */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-200 max-w-3xl mx-auto mb-10 leading-relaxed font-sans font-light"
            id="sub_headline"
          >
            Descubra como construir uma clientela fiel e faturar mais de R$ 10.000,00 por mês atendendo de forma flexível no conforto do seu lar, sem depender de horários de terceiros.
          </motion.p>

          {/* Photo of Ana Cecília at the top above the CTA button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-xs md:max-w-sm mx-auto mb-10 glass-card rounded-2xl overflow-hidden p-2 shadow-2xl border border-rose-500/10 glow-wine"
            id="hero_profile_container"
          >
            <div className="relative aspect-[4/5] w-full bg-[#050103] rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#090306]/20 z-10 pointer-events-none"></div>
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ca4e54] to-transparent rounded-2xl blur-md opacity-40"></div>
              <img 
                src={anaCecilia2} 
                alt="Ana Cecília - Criadora do Método Lash Mãos de Fada" 
                className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#1b050f]/95 border border-[#ca4e54]/30 px-4 py-2.5 rounded-xl z-20 shadow-xl backdrop-blur flex justify-between items-center text-left">
                <div>
                  <span className="text-white font-serif font-bold text-sm block">Ana Cecília</span>
                  <span className="text-[#f2a9b6] text-[10px] uppercase font-mono tracking-wider block">Criadora do Método Mãos de Fada</span>
                </div>
                <span className="bg-[#830e23] border border-rose-400/20 text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping"></span> PROFESSORA OFICIAL
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core High Conversion Primary Button */}
          <div className="max-w-md mx-auto" id="cta_hero_stack">
            <a 
              href="#oferta_section"
              className="bg-shimmer-button text-white font-sans text-sm md:text-base font-bold py-3.5 px-6 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all text-center tracking-wide group glow-rose hover:scale-[1.02] active:scale-98 duration-150 cursor-pointer"
              id="hero_primary_cta"
            >
              <Zap className="w-4 h-4 text-[#ffd3d8] fill-current animate-pulse" />
              <span>INSCREVER-SE AGORA</span>
            </a>
            
            <p className="text-xs text-stone-400 mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
              <span className="flex items-center gap-1 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#e05e78]" /> COMPRA 100% BLINDADA
              </span>
              <span className="hidden sm:inline text-[#2d0f19]">|</span>
              <span className="flex items-center gap-1 font-mono">
                <Award className="w-4 h-4 text-[#e05e78]" /> CERTIFICADO ASSINADO INCLUSO
              </span>
              <span className="hidden sm:inline text-[#2d0f19]">|</span>
              <span className="flex items-center gap-1 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#e05e78]" /> SATISFAÇÃO GARANTIDA
              </span>
            </p>
          </div>

        </div>
      </header>

      {/* 3. TRUST METRIC NUMBERS BAR */}
      <section className="bg-[#120409]/95 border-y border-[#2d111c] py-8 px-4" id="stats_bar_section">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" id="stat_box_grid">
          <div className="p-2">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-1">+4.200</h2>
            <p className="text-xs md:text-sm text-[#e2a5b4] uppercase tracking-widest font-mono">Vidas Transformadas</p>
          </div>
          <div className="p-2 border-l border-rose-950">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-1">100%</h2>
            <p className="text-xs md:text-sm text-[#e2a5b4] uppercase tracking-widest font-mono">Autonomia de Agenda e Tempo</p>
          </div>
          <div className="p-2 border-l border-rose-950">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-1">R$ 0</h2>
            <p className="text-xs md:text-sm text-[#e2a5b4] uppercase tracking-widest font-mono">Custo de Aluguel no Início</p>
          </div>
          <div className="p-2 border-l border-rose-950">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-1">Suporte</h2>
            <p className="text-xs md:text-sm text-[#e2a5b4] uppercase tracking-widest font-mono">Acompanhamento Prático Seguro</p>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE DOR + IDENTIFICAÇÃO (Eyelash specific pain points) */}
      <section className="py-24 px-4 bg-[#090306] relative" id="dores_section">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-950/15 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-rose-400 text-xs font-mono font-bold tracking-widest uppercase bg-rose-950/40 px-3 py-1 rounded-full mb-3 inline-block border border-rose-500/10">
            VOCÊ DESEJA MUDAR ISSO?
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6">
            Até quando você continuará vendendo suas horas por um <span className="text-rose-400 underline decoration-rose-500/40">salário que desaparece antes do fim do mês</span>?
          </h2>
          <p className="text-[#f4c8ca] max-w-2xl mx-auto font-light leading-relaxed">
            Muitas mulheres passam a vida inteira presas em uma rotina que consome toda a sua energia sem proporcionar o retorno financeiro que garante tranquilidade para o futuro de quem elas mais amam.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6" id="pain_bullets_grid">
          
          {/* Card Pain 1: Poor Retention */}
          <div className="bg-[#12050b]/60 border border-rose-950/40 p-8 rounded-2xl flex gap-4 items-start hover:border-rose-950 transition duration-300">
            <div className="bg-rose-950/30 p-3 rounded-xl shrink-0">
              <AlertCircle className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">A Dependência de Horários Alheios</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Viver presa a ordens estritas e rotinas inflexíveis do mercado tradicional, sentindo que todo o seu imenso esforço diário gera lucros para outra pessoa enquanto seu valor profissional é deixado em segundo plano.
              </p>
            </div>
          </div>

          {/* Card Pain 2: Endless application time */}
          <div className="bg-[#12050b]/60 border border-[#2d111c]/60 p-8 rounded-2xl flex gap-4 items-start hover:border-rose-950 transition duration-300">
            <div className="bg-rose-950/30 p-3 rounded-xl shrink-0">
              <Clock className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">A Ausência do Convívio com Seus Filhos</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Ter que passar a maior parte do dia longe de casa cumprindo escalas cansativas e ver o tempo passar rápido, perdendo os momentos importantes do crescimento das suas filhas e filhos pela falta de flexibilidade.
              </p>
            </div>
          </div>

          {/* Card Pain 3: Cheap Bargaining Clients */}
          <div className="bg-[#12050b]/60 border border-[#2d111c]/60 p-8 rounded-2xl flex gap-4 items-start hover:border-rose-950 transition duration-300">
            <div className="bg-rose-950/30 p-3 rounded-xl shrink-0">
              <DollarSign className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">O Sentimento Frustrante de Sonhos Adiados</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Deixar de lado os objetivos pessoais mais antigos de independência, aquela reforma desejada em seu lar ou a viagem com a família pela falta de margem financeira legítima no orçamento mensal.
              </p>
            </div>
          </div>

          {/* Card Pain 4: Bad technique causing stickies / damage */}
          <div className="bg-[#12050b]/60 border border-rose-950/40 p-8 rounded-2xl flex gap-4 items-start hover:border-rose-950 transition duration-300">
            <div className="bg-rose-950/30 p-3 rounded-xl shrink-0">
              <Flame className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">A Sensação de Exaustão Corporal Extrema</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Se doar por completo até o esgotamento corporal em empregos que demandam longos deslocamentos e esforço excessivo, sem conseguir acumular reservas de dinheiro ou obter o merecido reconhecimento social.
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-md mx-auto text-center mt-12">
          <p className="text-sm text-stone-400 italic mb-4">"O seu tempo na Terra é muito precioso para ser trocado apenas por um salário que limita o seu futuro"</p>
          <a href="#cronograma_section" className="text-rose-400 font-semibold hover:text-rose-300 transition inline-flex items-center gap-1 hover:gap-2">
            Conhecer a metodologia passo a passo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 7. AS 4 GRANDES OPORTUNIDADES / PILARES TÉCNICOS (O CONTEÚDO PROGRAMÁTICO DO CURSO) */}
      <section className="py-24 px-4 bg-[#120409] border-t border-[#2a0c16]/50 relative" id="cronograma_section">
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-950/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-rose-400 text-xs font-mono font-bold tracking-widest uppercase bg-rose-950/60 px-3 py-1 rounded-full mb-3 inline-block border border-rose-500/10">
            METODOLOGIA PASSO A PASSO
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6">
            Dominar a Extensão de Cílios Nunca Foi Tão Simples
          </h2>
          <p className="text-[#f4c8ca] max-w-2xl mx-auto font-light leading-relaxed">
            Esqueça receitas prontas de cílios padrão que deixam todas as mulheres iguais. Ana Cecília vai ensinar a ciência do visagismo e a arte da colagem esticada em 4 pilares:
          </p>
        </div>

        {/* Pillar Layout stack list */}
        <div className="max-w-5xl mx-auto space-y-6" id="pilar_cards_stack">
          
          {/* Pillar 1 */}
          <div className="glass-card border border-rose-950/40 p-8 rounded-2xl flex flex-col md:flex-row gap-6 hover:border-rose-500/20 transition duration-300">
            <div className="bg-[#2a0410] text-[#e2a5b4] font-serif text-3xl font-extrabold w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-rose-500/20">
              01
            </div>
            <div className="space-y-2">
              <span className="text-xs text-rose-400 font-mono font-medium block">Preparação e Higienização Micrométrica</span>
              <h3 className="text-xl text-white font-bold">Blindagem da Adesão: Controle de pH & Umidade</h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                Saiba como retirar qualquer vestígio de gordura natural, resíduos de rímel e pele morta sem usar álcool prejudicial que resseca novos fios. A limpeza correta faz com que a gotícula do adesivo penetre instantaneamente nas cutículas, impedindo quedas imediatas no banho de vapor.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Química de adesivos</span>
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Isolamento de umidade</span>
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Retenção de 45 dias</span>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card border border-rose-950/40 p-8 rounded-2xl flex flex-col md:flex-row gap-6 hover:border-rose-500/20 transition duration-300">
            <div className="bg-[#2a0410] text-[#e2a5b4] font-serif text-3xl font-extrabold w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-rose-500/20">
              02
            </div>
            <div className="space-y-2">
              <span className="text-xs text-rose-400 font-mono font-medium block">Técnica de Isolamento Express</span>
              <h3 className="text-xl text-white font-bold">Uso Ergonômico de Pinças & Isolamento Cirúrgico</h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                O maior segredo para acelerar o seu tempo de mesa: o isolamento em 'pêndulo' e o uso correto da pinça de apoio sem machucar a pálpebra ou forçar o músculo ocular. Você vai aprender a visualizar o fio de transição (fios bebês) e separá-los para evitar os irritantes stickies locais.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Foco ocular aprimorado</span>
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Prevenção de Stickies</span>
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Visão em camadas</span>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card border border-rose-950/40 p-8 rounded-2xl flex flex-col md:flex-row gap-6 hover:border-rose-500/20 transition duration-300">
            <div className="bg-[#2a0410] text-[#e2a5b4] font-serif text-3xl font-extrabold w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-rose-500/20">
              03
            </div>
            <div className="space-y-2">
              <span className="text-xs text-rose-400 font-mono font-medium block">Estilização com Visagismo</span>
              <h3 className="text-xl text-white font-bold">Mapeamento Mágico (Wispy, Cat-Eye, Boneca, Híbrido)</h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                Pare de fazer o mesmo mapa de cílios 'gatinho' em todas as clientes. Entenda como analisar a órbita do olho do cliente, levantar olhares caídos e suavizar distâncias oculares excessivas com tamanhos e espessuras harmônicas. É isso que transforma uma manicure em uma estilista de cílios requintada.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Curvaturas C, CC, D, L e M</span>
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Olhares Rejuvenescidos</span>
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Combinações personalizadas</span>
              </div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="glass-card border border-rose-950/40 p-8 rounded-2xl flex flex-col md:flex-row gap-6 hover:border-rose-500/20 transition duration-300">
            <div className="bg-[#2a0410] text-[#e2a5b4] font-serif text-3xl font-extrabold w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border border-rose-500/20">
              04
            </div>
            <div className="space-y-2">
              <span className="text-xs text-rose-400 font-mono font-medium block">Atendimento & Negócios</span>
              <h3 className="text-xl text-white font-bold">Atração Imediata de Clientes de Alto Padrão</h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                O passo a passo estratégico para o cliente parar de achar caro o preço de R$ 240,00. Criando uma experiência sensorial no atendimento (aroma ideal, som relaxante, macas flutuantes) de forma baratíssima e cobrando o que você realmente merece pelo seu conhecimento.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Fidelidade sem descontos</span>
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Marketing local orgânico</span>
                <span className="bg-[#050103] text-[10px] text-stone-400 px-3 py-0.5 rounded-full border border-rose-950/40">Fotografia sedutora</span>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <a 
            href="#oferta_section"
            className="inline-flex items-center gap-2 text-[#f2a9b6] font-semibold border-b border-[#f2a9b6]/30 pb-1 hover:text-white transition cursor-pointer"
          >
            Quero ter acesso imediato ao cronograma completo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 8. SEÇÃO DA CRIADORA DO MÉTODO (Storytelling, Autoridade, Conexão Humana) */}
      <section className="py-24 px-4 bg-[#090306] relative" id="autora_section">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-rose-600/5 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Author image column with custom overlay mirroring rose banner vibe */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#830e23] to-transparent opacity-30 rounded-2xl z-10"></div>
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ca4e54] to-transparent rounded-2xl blur-md opacity-40"></div>
              <img 
                src={anaCecilia1} 
                alt="Ana Cecília - Criadora do Método Lash Mãos de Fada" 
                className="rounded-2xl w-full h-[450px] object-cover relative z-10 border border-rose-500/20 bg-rose-shadow-image"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#1b050f]/95 border border-[#ca4e54]/30 px-5 py-3 rounded-xl z-20 shadow-xl backdrop-blur font-mono">
                <span className="text-[#f2a9b6] font-bold block text-lg">+4.200</span>
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block">Alunas Mentoradas</span>
              </div>
            </div>

            {/* Biography & Storytelling */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-[#f2a9b6] text-xs font-mono font-bold tracking-widest uppercase bg-rose-950/40 px-3 py-1 rounded-full border border-rose-500/10 inline-block font-mono">
                QUEM VAI GUIAR SEU SUCESSO
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight font-medium">
                Prazer, eu sou a Ana Cecília!
              </h2>
              <div className="space-y-4 text-stone-300 font-light leading-relaxed text-sm md:text-base">
                <p>
                  Sou Lash Designer há mais de 6 anos e criadora do Método Lash Mãos de Fada. Antes de viver dos cílios, trabalhei em emprego tradicional e, como muitas mulheres, tinha sonhos maiores do que a realidade que vivia naquele momento.
                </p>
                <p>
                  Foi através da extensão de cílios que encontrei a oportunidade de construir minha própria renda, conquistar mais liberdade e transformar completamente minha vida profissional.
                </p>
                <p>
                  Comecei atendendo em um pequeno espaço dentro de casa, com poucos recursos, mas com muita vontade de crescer. Com dedicação, aperfeiçoamento constante e foco na experiência das minhas clientes, me tornei referência na minha cidade e construí uma agenda sólida de atendimentos.
                </p>
                <p>
                  Hoje vivo exclusivamente da profissão, tenho clientes que estão comigo há anos e já ajudei milhares de mulheres a dar os primeiros passos no mercado da beleza através do Método Lash Mãos de Fada.
                </p>
                <p>
                  Minha missão é mostrar que você não precisa esperar as condições perfeitas para começar. Com o direcionamento certo, é possível transformar uma habilidade em uma profissão capaz de gerar renda, independência e uma nova perspectiva de futuro.
                </p>
              </div>

              {/* Core value bullet ticks */}
              <div className="grid sm:grid-cols-2 gap-4 pt-3 text-sm text-stone-300">
                <div className="flex items-center gap-2 bg-[#12050b] p-3 rounded-lg border border-rose-950/40">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>Passo a Passo Descomplicado</span>
                </div>
                <div className="flex items-center gap-2 bg-[#12050b] p-3 rounded-lg border border-rose-950/40">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>Acompanhamento VIP por Fone</span>
                </div>
                <div className="flex items-center gap-2 bg-[#12050b] p-3 rounded-lg border border-rose-950/40">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>Foco 100% Prático Real</span>
                </div>
                <div className="flex items-center gap-2 bg-[#12050b] p-3 rounded-lg border border-rose-950/40">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>Acesso Imediato Vitalício</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. REAL ALUNAS TESTIMONIALS (Proof of execution) */}
      <section className="py-24 px-4 bg-[#110408] border-t border-[#2d111c]/60 relative" id="depoimentos_section">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-950/10 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-rose-400 text-xs font-mono font-bold tracking-widest uppercase bg-rose-950/40 px-3 py-1 rounded-full mb-3 inline-block border border-rose-500/10">
            PROVA SOCIAL REAL E COMPROVADA
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-medium mb-4">
            Histórias de Transformação de Quem Mudou de Vida
          </h2>
          <p className="text-[#f4c8ca] max-w-2xl mx-auto font-light">
            Nossas alunas saíram do absoluto sofrimento de cílios grudados e baratos para se tornarem empresárias de cílios independentes e respeitadas em suas cidades.
          </p>
        </div>

        {/* Testimonials grid cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6" id="testimonials_grid">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-[#1b0610]/40 border border-rose-950/30 p-6 rounded-2xl flex flex-col justify-between hover:border-rose-500/20 transition duration-300">
              <div className="space-y-4">
                {/* Visual feedback of stars */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-300 text-sm leading-relaxed italic font-light">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 border-t border-[#310c17] pt-4 flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border border-rose-500/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-stone-400 text-[11px] font-mono">{item.role}</p>
                  <span className="text-emerald-400 text-xs font-semibold font-mono block mt-1">{item.earningIncrease}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. O EXTRATO DA OFERTA IRRECUSÁVEL (The Irresistible Pricing and Checkout Anchor) */}
      <section className="py-24 px-4 bg-[#120409] border-t border-[#2d111c] relative" id="oferta_section">
        {/* Extreme glowing center light behind the pricing pitch */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#830e23]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 mb-12">
          <span className="text-rose-400 text-xs font-mono font-bold tracking-widest uppercase bg-rose-950/60 px-4 py-1.5 rounded-full mb-4 inline-block border border-rose-500/20 font-mono">
            VAGAS REDUZIDAS • ADQUIRA HOJE COM SEGURANÇA
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white font-medium mb-4">
            Garanta Seu Acesso ao <span className="text-gradient-rose-gold font-bold italic">Método Lash Mão de Fada</span>
          </h2>
          <p className="text-[#f4c8ca] max-w-2xl mx-auto font-light leading-relaxed">
            Tenha acesso permanente a todas as aulas gravadas em alta definição, suporte no WhatsApp VIP e muito mais.
          </p>
        </div>

        {/* Pricing Box Container (Highly converting structural design) */}
        <div className="max-w-md mx-auto bg-gradient-to-b from-[#1b050f] via-[#100309] to-[#040102] border-2 border-[#e05e78]/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden glow-wine" id="pricing_card">
          
          <div className="absolute -top-3 -right-3 bg-rose-600 text-white text-[9px] font-mono font-bold px-3 py-1 rotate-12 uppercase tracking-widest shadow-md font-mono">
            MELHOR PREÇO ORIGINAL
          </div>

          <div className="space-y-4 text-center">
            
            <p className="text-[#f2a9b6] font-mono text-xs uppercase tracking-widest font-semibold">TUDO ISSO POR APENAS:</p>

            <div className="space-y-1">
              <span className="text-stone-500 text-sm line-through block">De R$ 1.000,00 reais</span>
              <span className="text-stone-200 text-xs block">Por apenas 12 parcelas de</span>
              
              <div className="flex justify-center items-baseline gap-1">
                <span className="text-[#f2a9b6] text-2xl font-bold">R$</span>
                <span className="text-5xl md:text-6xl text-white font-serif font-extrabold font-mono tracking-tight text-gradient-rose-gold">30,72</span>
              </div>
              
              <span className="text-xs text-[#e2a5b4] block">no cartão de crédito</span>
            </div>

            <div id="pix_pricing_box" className="bg-[#090306] p-3 rounded-xl border border-rose-950/40 my-3 text-center font-mono">
              <p className="text-xs text-stone-300">
                Ou R$ <strong className="text-white text-lg font-mono">297,00</strong> à vista no PIX
              </p>
              <span className="text-[10px] text-emerald-400 block font-mono">★ Sem juros ocultos no pagamento à vista ★</span>
            </div>

            {/* List of elements inside the package */}
            <div className="space-y-2.5 text-left text-xs text-stone-300 pt-3 border-t border-[#310c17]/50 font-medium">
              
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acesso completo ao método simples de início do absoluto zero</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Aulas passo a passo para treinar em sua casa com segurança</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Estratégia prática para atrair clientes locais e encher sua agenda</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Três bônus de aceleração com suporte VIP individual no WhatsApp</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certificado oficial assinado por Ana Cecília</span>
              </div>

            </div>

            {/* Real Checkout triggering button to Kiwify */}
            <a 
              href="https://pay.kiwify.com.br/T5mKqMU"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-shimmer-button text-white font-sans text-sm md:text-base font-bold py-3.5 px-6 rounded-lg shadow-md flex items-center justify-center gap-2 tracking-wide block hover:scale-[1.02] transform duration-150 cursor-pointer mt-6 text-center"
              id="checkout_main_btn"
            >
              <CreditCard className="w-4 h-4 text-[#ffd3d8]" />
              <span>GARANTIR MINHA VAGA</span>
            </a>

            <div className="flex justify-center items-center gap-4 text-[10px] text-stone-400 pt-3 font-mono">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-500" /> Site 100% Protegido
              </span>
              <span>•</span>
              <span>Liberação imediata no seu e-mail</span>
            </div>

          </div>

        </div>

        {/* Warranty section removed as requested */}

      </section>

      {/* 10. VALUATION BONUSES COLLAPSE LIST (Adds Unstoppable Value Weight) */}
      <section className="py-24 px-4 bg-[#090306] relative" id="bonus_section">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-rose-600/5 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-rose-400 text-xs font-mono font-bold tracking-widest uppercase bg-rose-950/40 px-3 py-1 rounded-full mb-3 inline-block border border-rose-500/10">
            PACOTE DE ACELERAÇÃO VIP
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-medium mb-4">
            Estes 3 Bônus Exclusivos Custavam R$ 771,00...
          </h2>
          <p className="text-rose-300 text-lg">
            Se você se inscrever <span className="text-[#f2a9b6] font-bold underline">hoje</span>, sairá com todos eles totalmente de <span id="graca_badge" className="bg-rose-950/50 text-[#fff] px-2 py-0.5 rounded border border-rose-500/30 font-semibold font-mono">GRAÇA</span>!
          </p>
        </div>

        {/* Bonus visual cards stack */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6" id="bonus_cards_grid">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="bg-[#120409] border border-rose-950/40 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              
              {/* Badge label highlight accent */}
              <div className="absolute top-3 right-3 bg-rose-950 border border-rose-500/30 text-rose-300 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                {bonus.badge}
              </div>

              <div className="space-y-3">
                <span className="bg-rose-500/10 text-rose-400 font-mono text-xs font-bold px-2.5 py-1 rounded-md inline-block">
                  BÔNUS VIP 0{bonus.id}
                </span>
                <h3 className="text-white text-lg font-bold leading-snug">{bonus.title}</h3>
                <p className="text-stone-300 text-xs leading-relaxed font-light">{bonus.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#310c17]/50 flex justify-between items-center text-xs">
                <span className="text-stone-500 font-medium">Valor de Prateleira: <span className="line-through">{bonus.originalPrice}</span></span>
                <span className="text-emerald-400 font-bold font-mono">GRÁTIS HOJE</span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 13. FAQ ACCORDION SECTION */}
      <section className="py-24 px-4 bg-[#090306] relative" id="faq_section">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-950/10 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-rose-400 text-xs font-mono font-bold tracking-widest uppercase bg-rose-950/40 px-3 py-1 rounded-full mb-3 inline-block border border-rose-500/10">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-medium mb-4">
            Ainda Tem Alguma Dúvida?
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto font-light">
            Clique nas perguntas abaixo para abrir as respostas e esclarecer de vez qualquer barreira que impeça você de decolar como Lash Designer.
          </p>
        </div>

        {/* Interactive FAQ list components */}
        <div className="max-w-3xl mx-auto space-y-4" id="faq_accordion_wrapper">
          {faqs.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#120409] border border-rose-950/40 rounded-xl overflow-hidden transition"
              id={`faq_box_${item.id}`}
            >
              <button 
                onClick={() => toggleFAQ(item.id)}
                className="w-full text-left p-5 flex justify-between items-center bg-[#17050d] hover:bg-[#1f0913] transition cursor-pointer text-white font-semibold text-sm md:text-base gap-4"
                aria-expanded={activeFAQ === item.id}
              >
                <span>{item.question}</span>
                <ChevronDown className={`w-5 h-5 text-[#f2a9b6] transition-transform duration-300 ${activeFAQ === item.id ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {activeFAQ === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 border-t border-rose-950/30 text-stone-300 text-sm leading-relaxed font-light">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA help card */}
        <div className="max-w-md mx-auto text-center mt-12 bg-[#12050b]/80 border border-rose-950 p-6 rounded-2xl">
          <p className="text-stone-300 text-sm mb-3">Ainda precisa de ajuda para tomar sua decisão técnica?</p>
          <a 
            href="https://wa.me/553888121295?text=Olá,%20tenho%20duvidas%20sobre%20o%20Metodo%20Lash%20Mãos%20de%20Fada" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition text-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Suporte Oficial no WhatsApp</span>
          </a>
        </div>
      </section>

      {/* 14. COMPACT SCROLLING STICKY BAR FOR IMMEDIATE PURCHASE TRANSITIONS */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-0 inset-x-0 bg-[#0d0306]/98 border-t border-rose-500/30 py-3 px-4 z-40 shadow-xl backdrop-blur flex justify-between items-center"
            id="stiky_conversion_bar"
          >
            <div className="hidden md:flex flex-col text-left">
              <span className="text-white text-sm font-bold font-serif">MÉTODO LASH MÃOS DE FADA</span>
              <span className="text-stone-400 text-[10px]">Acesso Vitalício + VIP suporte • De R$ 1.000 por apenas 12x de R$ 30,72</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-end gap-3 w-full md:w-auto">
              <a 
                href="https://pay.kiwify.com.br/T5mKqMU"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-shimmer-button text-white font-sans text-xs md:text-sm font-bold py-2.5 px-5 rounded-lg flex items-center gap-1.5 transition whitespace-nowrap cursor-pointer glow-rose text-center w-full md:w-auto justify-center"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>GARANTIR VAGA</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 15. BRAND FOOTER (Legal, and copyright compliance) */}
      <footer className="bg-[#050103] border-t border-rose-950/65 py-12 px-4 shadow text-stone-500 text-xs text-center" id="brand_footer">
        <div className="max-w-5xl mx-auto space-y-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-left">
              <h4 className="text-stone-200 text-sm font-serif tracking-widest uppercase">LAHS MÃOS DE FADA</h4>
              <p className="text-[10px] text-stone-500 font-sans mt-0.5">Especialização Premium em Cílios com Ana Cecília</p>
            </div>
            <div className="flex flex-wrap gap-4 text-stone-400 justify-center">
              <a href="#hero_section" className="hover:text-white transition">Início</a>
              <a href="#depoimentos_section" className="hover:text-white transition">Depoimentos</a>
              <a href="#oferta_section" className="hover:text-white transition">Comprar Vaga</a>
              <a href="#faq_section" className="hover:text-white transition">Dúvidas</a>
            </div>
          </div>

          <div className="border-t border-rose-950/50 pt-6 text-[10px] space-y-2">
            <p className="leading-relaxed">
              O Método Lash Mãos de Fada é um ecossistema educacional de aperfeiçoamento estético local. Os ganhos financeiros simulados variam de acordo com as especificidades geográficas, dedicação profissional, controle de custos e técnica aplicada da aluna.
            </p>
            <p>
              © Copyright {new Date().getFullYear()} • Golden Academies & Mãos de Fada Inc • Todos os direitos reservados.
            </p>
          </div>

        </div>
      </footer>

      {/* 16. CHICKOUT POP-UP INTERACTIVE BOX MODAL */}
      <AnimatePresence>
        {checkoutModalOpen && (
          <div className="fixed inset-0 bg-[#000]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" id="checkout_modal">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0f0308] border border-rose-500/30 rounded-3xl p-6 md:p-8 w-full max-w-md relative text-center shadow-2xl glow-rose"
              id="checkout_modal_content"
            >
              {/* Close Button */}
              <button 
                onClick={resetCheckout}
                className="absolute top-4 right-4 bg-[#230815] text-[#f2a9b6] p-1.5 rounded-full hover:bg-rose-950 transition cursor-pointer"
                title="Fechar Formulário"
              >
                <X className="w-4 h-4" />
              </button>

              {checkoutStep === 'form' ? (
                // Form step
                <form onSubmit={handleSimulatedCheckoutSubmit} className="space-y-4">
                  <div className="text-center space-y-1 pb-2">
                    <div className="inline-flex items-center justify-center bg-rose-950/50 p-3 rounded-full mb-2 border border-rose-500/25">
                      <Lock className="w-6 h-6 text-[#f2a9b6]" />
                    </div>
                    <h3 className="text-white text-xl font-bold font-serif">Simulador de Inscrição Segura</h3>
                    <p className="text-stone-400 text-xs">
                      Preencha ficticiamente para concluir o fluxo de conversão.
                    </p>
                  </div>

                  <div className="space-y-4 text-left">
                    <div className="space-y-1">
                      <label className="text-xs text-stone-300 font-mono">Seu Nome Completo:</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ex: Amanda Guimarães" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-[#1e0711] border border-rose-950 text-white rounded-lg p-3 text-sm focus:border-rose-500 outline-none transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-stone-300 font-mono">Seu E-mail Principal (Para receber o curso):</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Ex: amanda@gmail.com" 
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full bg-[#1e0711] border border-rose-950 text-white rounded-lg p-3 text-sm focus:border-rose-500 outline-none transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-stone-300 font-mono">WhatsApp com DDD:</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="Ex: (11) 99999-9999" 
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        className="w-full bg-[#1e0711] border border-rose-950 text-white rounded-lg p-3 text-sm focus:border-rose-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="bg-[#1b050f]/60 p-4 rounded-xl border border-rose-950/40 text-left space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-stone-400">Plano Anual Lash Mãos de Fada + Bônus</span>
                      <span className="text-white font-mono font-bold">R$ 297,00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs border-t border-[#310c17] pt-2">
                      <span className="text-emerald-400 font-semibold">Valor com cupom aplicado:</span>
                      <span className="text-emerald-400 font-bold font-mono">12x R$ 29,64</span>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-shimmer-button text-white font-bold py-3.5 px-6 rounded-xl block tracking-wide hover:opacity-90 transform duration-150 cursor-pointer text-sm"
                  >
                    Simular Conclusão de Matrícula
                  </button>

                  <p className="text-[10px] text-stone-500">
                    Ao simular o preenchimento, os dados não serão gravados para fins comerciais externos.
                  </p>

                </form>
              ) : (
                // Success step
                <div className="py-6 space-y-5">
                  <div className="w-16 h-16 bg-emerald-950 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce mb-3 shadow">
                    <Check className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold font-serif">Inscrição Simula com Sucesso!</h3>
                  <p className="text-stone-300 text-sm leading-relaxed max-w-xs mx-auto">
                    Parabéns, <strong className="text-white">{userName}</strong>! O fluxo de conversão do seu funil da <strong>Ana Cecília</strong> está perfeitamente funcional.
                  </p>

                  <div className="bg-[#120409] p-4 rounded-xl text-left border border-rose-950/40 text-xs space-y-1 font-mono">
                    <p className="text-stone-400">✓ Detalhes enviados para: <span className="text-white">{userEmail}</span></p>
                    <p className="text-stone-400">✓ Grupos VIP WhatsApp via: <span className="text-[#f2a9b6]">{userPhone}</span></p>
                  </div>

                  <p className="text-xs text-stone-400 max-w-xs mx-auto">
                    Você pode replicar esse design ou linkar para canais reais de checkout de pagamento como Hotmart, Kiwify ou Eduzz substituindo os botões.
                  </p>

                  <button 
                    onClick={resetCheckout}
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold py-3 px-6 rounded-xl transition cursor-pointer text-sm"
                    id="back_to_page_btn"
                  >
                    Voltar para a Página de Vendas
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
