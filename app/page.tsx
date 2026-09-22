"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, Check, CircleHelp, RefreshCw, ShieldCheck, Sparkles } from "lucide-react";

function Header() {
  return <header className="header"><Link href="/" className="logo">REVOLVE<span>•</span></Link><nav><a href="#produto">Produto</a><a href="#recursos">Recursos</a><Link href="/support">Suporte</Link><Link href="/shop" className="shop-link">Comprar Orbit</Link></nav></header>;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return <main>
    <Header />
    <section className="hero">
      <img src="/revolve-device.png" alt="Dispositivo Orbit com o companheiro Mimo" className="hero-image" />
      <div className="hero-copy"><p className="eyebrow">SEU TEMPO, EM MOVIMENTO</p><h1>Menos lembretes.<br/>Mais presença.</h1><p>Orbit reúne seus compromissos em um dispositivo discreto e portátil. Mimo acompanha sua rotina com alertas simples, sem transformar o dia em mais uma tela.</p><div className="hero-actions"><Link href="/shop" className="button light">Conheça o Orbit <ArrowRight size={18}/></Link><a href="#como-funciona" className="text-link">Veja como funciona</a></div><div className="hero-proof"><span><Check/> 7 dias de bateria</span><span><Check/> Sincronização segura</span></div></div>
    </section>

    <section className="marquee" aria-label="Benefícios"><span>ORGANIZE</span><i/> <span>LEMBRE</span><i/> <span>RESPIRE</span><i/> <span>REALIZE</span></section>

    <section id="produto" className="section product-intro"><div><p className="eyebrow">ORBIT + MIMO</p><h2>Uma dupla pequena.<br/>Uma rotina mais leve.</h2></div><p>Orbit guarda o essencial. Mimo traduz compromissos em sinais claros e gentis. Juntos, eles ajudam você a lembrar do que importa sem depender do celular o tempo todo.</p></section>

    <section id="como-funciona" className="steps section">
      <article><span>01</span><CalendarDays/><h3>Conecte sua agenda</h3><p>Sincronize seus calendários e escolha quais compromissos merecem atenção.</p></article>
      <article><span>02</span><Bell/><h3>Receba sinais simples</h3><p>Luz, vibração e o visor circular mostram o próximo passo sem interromper seu ritmo.</p></article>
      <article><span>03</span><RefreshCw/><h3>Ajuste conforme o dia</h3><p>Remarque, confirme ou silencie alertas usando poucos comandos no próprio dispositivo.</p></article>
    </section>

    <section id="recursos" className="feature-band section">
      <div className="feature-number">24</div><div><p className="eyebrow">FEITO PARA A VIDA REAL</p><h2>Organização sem excesso.</h2><p>Resistente, leve e com bateria para acompanhar a semana. Orbit foi pensado para caber na mão, no bolso e na rotina.</p><ul><li><ShieldCheck/> Dados protegidos</li><li><Sparkles/> Alertas personalizáveis</li><li><CircleHelp/> Suporte quando precisar</li></ul></div>
    </section>

    <section className="quote section"><p>“Não preciso lembrar de tudo.<br/>Preciso lembrar do que importa.”</p><span>REVOLVE GLOBAL</span></section>

    <section className="newsletter section">
      <div><p className="eyebrow">FIQUE POR PERTO</p><h2>Novidades que valem o seu tempo.</h2><p>Receba atualizações do Orbit, dicas de organização e acesso antecipado a novos recursos.</p></div>
      {sent ? <div className="success"><Check/> Cadastro realizado. Até breve.</div> : <form onSubmit={(e)=>{e.preventDefault(); if(email) setSent(true)}}><label htmlFor="email">Seu melhor e-mail</label><div><input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="nome@email.com" required/><button type="submit">Quero receber</button></div></form>}
    </section>

    <footer><div><Link href="/" className="logo">REVOLVE<span>•</span></Link><p>Uma nova forma de acompanhar o seu tempo.</p></div><div><strong>Explore</strong><Link href="/shop">Loja</Link><Link href="/support">Suporte</Link><Link href="/terms">Termos de uso</Link></div><div><strong>Contato</strong><a href="mailto:hello@revolve.example">hello@revolve.example</a><span>Atendimento de segunda a sexta</span></div><small>© 2026 Revolve Global · Projeto de portfólio</small></footer>
  </main>;
}
