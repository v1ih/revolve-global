import Link from "next/link";
import { ArrowLeft, Battery, Bell, Bluetooth, Check, PackageCheck } from "lucide-react";

export default function Shop() {
  return <main className="subpage"><header className="subhead"><Link href="/" className="logo">REVOLVE<span>•</span></Link><Link href="/"><ArrowLeft size={16}/> Voltar</Link></header><section className="shop-hero"><div className="shop-visual"><img src="/revolve-global/revolve-device.png" alt="Orbit e Mimo"/></div><div className="shop-copy"><p className="eyebrow">ORBIT + MIMO</p><h1>Seu tempo, sem ruído.</h1><p className="price">R$ 649 <span>ou 10x de R$ 64,90</span></p><p>Dispositivo portátil com visor circular, alertas por vibração e luz, sincronização de agendas e o companheiro Mimo.</p><ul className="specs"><li><Battery/> Bateria de até 7 dias</li><li><Bluetooth/> Bluetooth 5.3</li><li><Bell/> Alertas personalizáveis</li><li><PackageCheck/> Frete grátis no Brasil</li></ul><a href="mailto:hello@revolve.example?subject=Quero conhecer o Orbit" className="button dark">Tenho interesse</a><p className="fine"><Check/> 30 dias para testar · 1 ano de garantia</p></div></section></main>;
}
