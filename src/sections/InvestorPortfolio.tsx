import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Sprout, Home, Landmark, Clock, AlertCircle, CheckCircle2, MapPin, Ruler } from "lucide-react"

const holdings = {
  agriculture: [
    {
      id: "CYC-2024-0040",
      block: "Block A - Maize",
      status: "Harvested",
      invested: 20000,
      returned: 14800,
      cycleStart: "2023-10-01",
      cycleEnd: "2024-03-15",
      roi: 74,
    },
    {
      id: "CYC-2024-0041",
      block: "Block B - Beans",
      status: "Disbursed",
      invested: 25000,
      returned: 18500,
      cycleStart: "2023-11-01",
      cycleEnd: "2024-04-28",
      roi: 74,
    },
    {
      id: "CYC-2024-0042",
      block: "Block C - Maize",
      status: "Active",
      invested: 25000,
      returned: 0,
      cycleStart: "2024-03-15",
      cycleEnd: "2024-08-20",
      roi: 0,
    },
    {
      id: "CYC-2024-0043",
      block: "Block D - Beans",
      status: "Planting",
      invested: 15000,
      returned: 0,
      cycleStart: "2024-05-01",
      cycleEnd: "2024-10-15",
      roi: 0,
    },
  ],
  land: [
    {
      id: "PLOT-128-004",
      size: "1/4 Acre",
      location: "Phase 2, Ridge View",
      purchasePrice: 450000,
      currentValue: 520000,
      appreciation: 15.5,
      status: "Freehold",
      dateAcquired: "2023-06-15",
    },
    {
      id: "PLOT-256-012",
      size: "1/8 Acre",
      location: "Phase 1, Garden Court",
      purchasePrice: 180000,
      currentValue: 210000,
      appreciation: 16.7,
      status: "Freehold",
      dateAcquired: "2023-09-20",
    },
  ],
  crowdfunding: [
    {
      id: "POOL-2024-008",
      name: "Hospitality Build - Eco-Lodge 3",
      target: 2500000,
      raised: 1875000,
      myStake: 50000,
      myPercentage: 2.0,
      status: "Funded",
      projectedReturn: "12% p.a.",
    },
    {
      id: "POOL-2024-009",
      name: "Agritourism Experience Center",
      target: 1200000,
      raised: 850000,
      myStake: 25000,
      myPercentage: 2.08,
      status: "Open",
      projectedReturn: "15% p.a.",
    },
  ],
}

export default function InvestorPortfolio() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Portfolio</h1>
        <p className="text-slate-500 text-sm mt-1">Complete overview of all your investments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Total Invested</div>
            <div className="text-2xl font-bold text-slate-900">KES 342,500</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Total Returned</div>
            <div className="text-2xl font-bold text-emerald-700">KES 128,400</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Active Investments</div>
            <div className="text-2xl font-bold text-slate-900">6</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Portfolio IRR</div>
            <div className="text-2xl font-bold text-emerald-700">18.4%</div>
          </CardContent>
        </Card>
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
          <div className="space-y-4">
            {holdings.agriculture.map((cycle) => (
              <Card key={cycle.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{cycle.block}</h3>
                        <Badge
                          className={
                            cycle.status === "Disbursed"
                              ? "bg-emerald-100 text-emerald-700"
                              : cycle.status === "Harvested"
                                ? "bg-blue-100 text-blue-700"
                                : cycle.status === "Active"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-slate-100 text-slate-700"
                          }
                        >
                          {cycle.status === "Disbursed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                          {cycle.status === "Active" && <Clock className="h-3 w-3 mr-1" />}
                          {cycle.status === "Planting" && <AlertCircle className="h-3 w-3 mr-1" />}
                          {cycle.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-500 mb-3">{cycle.id}</div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Invested</div>
                          <div className="font-medium text-slate-900">KES {cycle.invested.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Returned</div>
                          <div className="font-medium text-emerald-700">
                            {cycle.returned > 0 ? `KES ${cycle.returned.toLocaleString()}` : "—"}
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Cycle Start</div>
                          <div className="font-medium text-slate-900">{cycle.cycleStart}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Expected Close</div>
                          <div className="font-medium text-slate-900">{cycle.cycleEnd}</div>
                        </div>
                      </div>
                    </div>
                    {cycle.status === "Active" || cycle.status === "Planting" ? (
                      <div className="md:w-48">
                        <div className="text-sm text-slate-500 mb-1">Cycle Progress</div>
                        <Progress value={cycle.status === "Active" ? 65 : 20} className="h-2 mb-1" />
                        <div className="text-xs text-slate-500">{cycle.status === "Active" ? "65%" : "20%"} complete</div>
                      </div>
                    ) : (
                      <div className="md:w-48 text-right">
                        <div className="text-sm text-slate-500">ROI</div>
                        <div className="text-2xl font-bold text-emerald-700">{cycle.roi}%</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="land" className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {holdings.land.map((plot) => (
              <Card key={plot.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-slate-900">{plot.id}</h3>
                      <div className="text-sm text-slate-500">{plot.location}</div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700">{plot.status}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Ruler className="h-4 w-4 text-slate-400" />
                      {plot.size}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      {plot.location}
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-4 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500 text-xs">Purchase</div>
                      <div className="font-medium">KES {plot.purchasePrice.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Current Value</div>
                      <div className="font-medium text-emerald-700">KES {plot.currentValue.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Appreciation</div>
                      <div className="font-medium text-emerald-700">+{plot.appreciation}%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="crowdfunding" className="mt-6">
          <div className="space-y-4">
            {holdings.crowdfunding.map((pool) => (
              <Card key={pool.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{pool.name}</h3>
                        <Badge className={pool.status === "Funded" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}>
                          {pool.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-500 mb-3">{pool.id}</div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Pool Target</div>
                          <div className="font-medium">KES {pool.target.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Total Raised</div>
                          <div className="font-medium">KES {pool.raised.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">My Stake</div>
                          <div className="font-medium text-emerald-700">KES {pool.myStake.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">My Share</div>
                          <div className="font-medium">{pool.myPercentage}%</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-40">
                      <div className="text-sm text-slate-500 mb-1">Funded</div>
                      <Progress value={(pool.raised / pool.target) * 100} className="h-2 mb-1" />
                      <div className="text-xs text-slate-500">{((pool.raised / pool.target) * 100).toFixed(0)}% of target</div>
                      <div className="mt-2 text-sm text-emerald-700 font-medium">{pool.projectedReturn} projected</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
