import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Sprout, Home, Landmark, Clock, Users, ArrowRight, TrendingUp, Shield } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const opportunities = {
  agriculture: [
    {
      id: "CYC-2024-0045",
      block: "Block E - Maize",
      season: "Long Rains 2024",
      minStake: 5000,
      targetAmount: 80000,
      funded: 45000,
      investors: 6,
      projectedReturn: 74,
      status: "Open",
      deadline: "2024-06-15",
      description: "High-yield maize cycle on newly irrigated Block E. Confirmed market buyer at harvest.",
    },
    {
      id: "CYC-2024-0046",
      block: "Block F - Beans",
      season: "Short Rains 2024",
      minStake: 5000,
      targetAmount: 80000,
      funded: 72000,
      investors: 9,
      projectedReturn: 74,
      status: "Closing Soon",
      deadline: "2024-05-20",
      description: "Drought-resistant bean variety with premium market pricing. Limited remaining slots.",
    },
    {
      id: "CYC-2024-0047",
      block: "Block G - Vegetables",
      season: "Continuous",
      minStake: 10000,
      targetAmount: 120000,
      funded: 30000,
      investors: 3,
      projectedReturn: 68,
      status: "Open",
      deadline: "2024-07-01",
      description: "Tomato and capsicum rotation with weekly market delivery contracts.",
    },
  ],
  land: [
    {
      id: "PLOT-512-089",
      size: "1/2 Acre",
      location: "Phase 3, Cliffside",
      price: 980000,
      status: "Available",
      features: ["Lake View", "Cliffside", "Premium"],
      infrastructure: "Roads, water, electricity planned",
    },
    {
      id: "PLOT-256-090",
      size: "1/4 Acre",
      location: "Phase 2, Garden Grove",
      price: 420000,
      status: "Available",
      features: ["Garden View", "Serviced"],
      infrastructure: "Roads, water connected",
    },
    {
      id: "PLOT-128-091",
      size: "1/8 Acre",
      location: "Phase 1, Sunrise Court",
      price: 195000,
      status: "Reserved",
      features: ["Entry Level", "Serviced"],
      infrastructure: "Roads, water connected",
    },
  ],
  crowdfunding: [
    {
      id: "POOL-2024-010",
      name: "Solar Irrigation Expansion",
      type: "Infrastructure",
      target: 1500000,
      raised: 980000,
      minStake: 25000,
      investors: 14,
      projectedReturn: "10% p.a.",
      status: "Open",
      deadline: "2024-06-30",
      description: "Expand solar-powered irrigation to Blocks H and I, increasing arable capacity by 40%.",
    },
    {
      id: "POOL-2024-011",
      name: "Farm-to-Table Restaurant",
      type: "Hospitality",
      target: 800000,
      raised: 320000,
      minStake: 15000,
      investors: 8,
      projectedReturn: "18% p.a.",
      status: "Open",
      deadline: "2024-07-15",
      description: "Open-air dining experience serving retreat produce. Revenue from dining and events.",
    },
  ],
}

export default function InvestorMarketplace() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Investment Marketplace</h1>
          <p className="text-slate-500 text-sm mt-1">Browse and invest in open opportunities across all sectors.</p>
        </div>
      </div>

      <Tabs defaultValue="agriculture" className="w-full">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="agriculture" className="flex items-center gap-2">
            <Sprout className="h-4 w-4" /> Agriculture
          </TabsTrigger>
          <TabsTrigger value="land" className="flex items-center gap-2">
            <Home className="h-4 w-4" /> Land
          </TabsTrigger>
          <TabsTrigger value="crowdfunding" className="flex items-center gap-2">
            <Landmark className="h-4 w-4" /> Crowdfunding
          </TabsTrigger>
        </TabsList>

        <TabsContent value="agriculture" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.agriculture.map((opp) => (
              <Card key={opp.id} className="flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={opp.status === "Open" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}>
                      {opp.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3 w-3" /> {opp.deadline}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{opp.block}</CardTitle>
                  <p className="text-sm text-slate-500">{opp.season} · {opp.id}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-slate-600 mb-4">{opp.description}</p>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Target</span>
                      <span className="font-medium">KES {opp.targetAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Funded</span>
                      <span className="font-medium">KES {opp.funded.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Min Stake</span>
                      <span className="font-medium">KES {opp.minStake.toLocaleString()}</span>
                    </div>
                    <Progress value={(opp.funded / opp.targetAmount) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>{opp.investors} investors joined</span>
                      <span>{((opp.funded / opp.targetAmount) * 100).toFixed(0)}% funded</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-500">Net Return</div>
                        <div className="text-lg font-bold text-emerald-700">{opp.projectedReturn}%</div>
                      </div>
                      <InvestDialog opportunity={opp} type="agriculture" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="land" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.land.map((plot) => (
              <Card key={plot.id} className="overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-emerald-100 to-slate-200 flex items-center justify-center">
                  <Home className="h-16 w-16 text-emerald-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-900">{plot.size}</h3>
                    <Badge className={plot.status === "Available" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}>
                      {plot.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">{plot.location} · {plot.id}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {plot.features.map((f) => (
                      <Badge key={f} variant="secondary" className="text-xs">{f}</Badge>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mb-4">{plot.infrastructure}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-xs text-slate-500">Price</div>
                      <div className="text-xl font-bold text-slate-900">KES {plot.price.toLocaleString()}</div>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Inquire <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="crowdfunding" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.crowdfunding.map((pool) => (
              <Card key={pool.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-violet-100 text-violet-700">{pool.type}</Badge>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3 w-3" /> {pool.deadline}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{pool.name}</CardTitle>
                  <p className="text-sm text-slate-500">{pool.id}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">{pool.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-slate-500 text-xs">Pool Target</div>
                      <div className="font-medium">KES {pool.target.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Min Stake</div>
                      <div className="font-medium">KES {pool.minStake.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Investors</div>
                      <div className="font-medium flex items-center gap-1">
                        <Users className="h-3 w-3" /> {pool.investors}
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Projected Return</div>
                      <div className="font-medium text-emerald-700">{pool.projectedReturn}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Progress value={(pool.raised / pool.target) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>KES {pool.raised.toLocaleString()} raised</span>
                      <span>{((pool.raised / pool.target) * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                  <InvestDialog opportunity={pool} type="crowdfunding" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function InvestDialog({ opportunity, type: _type }: { opportunity: any; type: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
          <TrendingUp className="h-4 w-4 mr-2" /> Invest Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Invest in {opportunity.block || opportunity.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Target Amount</span>
              <span className="font-medium">KES {opportunity.targetAmount?.toLocaleString() || opportunity.target?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Min Stake</span>
              <span className="font-medium">KES {opportunity.minStake.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Projected Return</span>
              <span className="font-medium text-emerald-700">{opportunity.projectedReturn}{typeof opportunity.projectedReturn === "number" ? "%" : ""}</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Investment Amount (KES)</Label>
            <Input id="amount" type="number" placeholder="Enter amount" defaultValue={opportunity.minStake} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="method">Payment Method</Label>
            <Select defaultValue="mpesa">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mpesa">M-Pesa</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="wallet">Portal Wallet</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-start gap-2 text-xs text-slate-500">
            <Shield className="h-4 w-4 shrink-0 mt-0.5" />
            <span>Your investment will be held in escrow until the pool is fully funded. You can withdraw before funding closes.</span>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
            Confirm Investment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
