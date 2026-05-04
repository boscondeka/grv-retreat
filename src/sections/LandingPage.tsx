import { Link } from "react-router-dom"
import {
  ArrowRight,
  Sprout,
  Home,
  Landmark,
  Shield,
  Globe,
  Users,
  BarChart3,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  FileText,
  HandCoins,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-sm">
              GR
            </div>
            <span className="font-semibold text-slate-900 hidden sm:inline">
              Great Rift Valley Retreat
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/investor">
              <Button variant="ghost" size="sm" className="text-slate-600">
                Investor Portal
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                Admin Access
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-[85vh] overflow-hidden">
          <img
            src="/images/hero-rift-valley.jpg"
            alt="Great Rift Valley"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 backdrop-blur-sm">
                550-Acre Master-Planned Destination · Solai, Nakuru County
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Invest in Land.<br />
                <span className="text-emerald-400">Grow Returns.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                The Great Rift Valley Retreat combines freehold land ownership,
                managed productive farmland, and premium agritourism — all on one
                integrated digital platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/investor">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                    Enter Investor Portal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/investor/marketplace">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                    Browse Opportunities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Acres", value: "550", suffix: "" },
              { label: "Investor Return", value: "74", suffix: "% net" },
              { label: "Gross per Cycle", value: "80,000", suffix: " KES" },
              { label: "Management Fee", value: "26", suffix: "%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                  <span className="text-emerald-400 text-lg ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Sectors */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-emerald-200 text-emerald-700">
              Investment Sectors
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Three Ways to Invest
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose from land ownership, managed agriculture, or hospitality development —
              each with transparent returns and full platform visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg shadow-slate-200/50">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/hero-rift-valley.jpg"
                  alt="Land Ownership"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Home className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Land Ownership</h3>
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Freehold serviced plots in 1/8, 1/4, and 1/2 acre sizes.
                  All plots include internal access roads, utility corridors,
                  and structured site planning.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">1/8 Acre</Badge>
                  <Badge variant="secondary" className="text-xs">1/4 Acre</Badge>
                  <Badge variant="secondary" className="text-xs">1/2 Acre</Badge>
                </div>
                <Link to="/investor/marketplace">
                  <Button variant="ghost" className="text-emerald-600 p-0 h-auto hover:bg-transparent hover:text-emerald-700">
                    View Plots <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg shadow-slate-200/50">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/farm-aerial.jpg"
                  alt="Agriculture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Sprout className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Agriculture</h3>
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Participate in managed crop cycles with confirmed ready markets.
                  Each cycle generates KES 80,000 gross. You receive 74% net —
                  we handle all operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">KES 80K/cycle</Badge>
                  <Badge variant="secondary" className="text-xs">74% Net Return</Badge>
                  <Badge variant="secondary" className="text-xs">Ready Market</Badge>
                </div>
                <Link to="/investor/marketplace">
                  <Button variant="ghost" className="text-emerald-600 p-0 h-auto hover:bg-transparent hover:text-emerald-700">
                    View Cycles <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg shadow-slate-200/50">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/hospitality-lodge.jpg"
                  alt="Hospitality"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                    <Landmark className="h-5 w-5 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Hospitality</h3>
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Invest in eco-lodges, villas, and farm-linked guest experiences.
                  Revenue from occupancy and events distributed to stakeholders
                  with full transparency.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">Eco-Lodges</Badge>
                  <Badge variant="secondary" className="text-xs">Villas</Badge>
                  <Badge variant="secondary" className="text-xs">Agritourism</Badge>
                </div>
                <Link to="/investor/marketplace">
                  <Button variant="ghost" className="text-emerald-600 p-0 h-auto hover:bg-transparent hover:text-emerald-700">
                    Coming Soon <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-emerald-200 text-emerald-700">
              Platform
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Integrated Digital Infrastructure
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              One platform managing operations, investor relations, crowdfunding,
              and banking — built for scale and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Dashboard",
                desc: "Live portfolio tracking, cycle status, and return projections for every investor.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: HandCoins,
                title: "Automated Disbursements",
                desc: "From harvest confirmation to M-Pesa or bank transfer — fully automated revenue distribution.",
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                icon: Users,
                title: "Crowdfunding Engine",
                desc: "Pool investments from multiple investors. Pro-rata returns with full transparency.",
                color: "bg-violet-100 text-violet-600",
              },
              {
                icon: Globe,
                title: "Diaspora Ready",
                desc: "Invest in USD, GBP, EUR, or KES. Live FX rates and international payment rails integrated.",
                color: "bg-amber-100 text-amber-600",
              },
              {
                icon: Shield,
                title: "Bank-Grade Security",
                desc: "AES-256 encryption, TLS 1.3, multi-factor authentication, and full KYC/AML compliance.",
                color: "bg-rose-100 text-rose-600",
              },
              {
                icon: FileText,
                title: "Document Vault",
                desc: "E-signed contracts, title summaries, investment statements, and KYC records — all in one place.",
                color: "bg-slate-100 text-slate-600",
              },
            ].map((feature) => (
              <Card key={feature.title} className="border border-slate-200 hover:border-emerald-300 transition-colors">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              Transparent Model
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Fair Revenue Split
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every agricultural cycle follows the same transparent formula.
              No hidden fees. No manual intervention.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div className="text-center md:text-left">
                <div className="text-sm text-slate-400 mb-1">Gross Revenue per Cycle</div>
                <div className="text-4xl font-bold text-white">KES 80,000</div>
              </div>
              <ArrowRight className="hidden md:block text-slate-500 h-8 w-8" />
              <div className="flex gap-6 w-full md:w-auto">
                <div className="flex-1 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-1">26%</div>
                  <div className="text-sm text-slate-400">Management Fee</div>
                  <div className="text-lg font-semibold text-amber-300 mt-2">KES 20,800</div>
                </div>
                <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">74%</div>
                  <div className="text-sm text-slate-400">Net to Investors</div>
                  <div className="text-lg font-semibold text-emerald-300 mt-2">KES 59,200</div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <p className="text-sm text-slate-400 text-center">
                The 26% management fee covers all farm operations: labour, inputs, irrigation,
                pest control, equipment, transport, insurance, and platform administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Invest?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Access the investor portal to browse active opportunities, view your portfolio,
            and track returns in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/investor">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8">
                Enter Investor Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/admin">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                Management Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-sm">
                  GR
                </div>
                <span className="font-semibold text-white">Great Rift Valley Retreat</span>
              </div>
              <p className="text-sm leading-relaxed">
                A 550-acre master-planned destination in Solai, Nakuru County,
                combining land ownership, agriculture, and premium hospitality.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Sectors</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/investor/marketplace" className="hover:text-emerald-400 transition-colors">Land Ownership</Link></li>
                <li><Link to="/investor/marketplace" className="hover:text-emerald-400 transition-colors">Agriculture</Link></li>
                <li><Link to="/investor/marketplace" className="hover:text-emerald-400 transition-colors">Hospitality</Link></li>
                <li><Link to="/investor/marketplace" className="hover:text-emerald-400 transition-colors">Agritourism</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/investor" className="hover:text-emerald-400 transition-colors">Investor Portal</Link></li>
                <li><Link to="/admin" className="hover:text-emerald-400 transition-colors">Management Dashboard</Link></li>
                <li><Link to="/investor/marketplace" className="hover:text-emerald-400 transition-colors">Investment Marketplace</Link></li>
                <li><Link to="/investor/wallet" className="hover:text-emerald-400 transition-colors">Payments & Wallet</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin size={14} /> Solai, Nakuru County, Kenya
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} /> +254 118 746 074
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} /> inquiries@greatriftvalleyretreat.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-sm text-center">
            &copy; 2024 The Great Rift Valley Retreat. All rights reserved. Confidential.
          </div>
        </div>
      </footer>
    </div>
  )
}
