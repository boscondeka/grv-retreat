import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Users, Clock, Plus } from "lucide-react"

const pools = [
  {
    id: "POOL-2024-008",
    name: "Hospitality Build - Eco-Lodge 3",
    type: "Hospitality",
    target: 2500000,
    raised: 1875000,
    minStake: 50000,
    investors: 14,
    deadline: "2024-06-15",
    status: "Funded",
    projectedReturn: "12% p.a.",
    description: "Construction of 6-room eco-lodge on cliffside plot. Revenue from occupancy and dining.",
  },
  {
    id: "POOL-2024-009",
    name: "Agritourism Experience Center",
    type: "Agritourism",
    target: 1200000,
    raised: 850000,
    minStake: 25000,
    investors: 8,
    deadline: "2024-07-15",
    status: "Open",
    projectedReturn: "15% p.a.",
    description: "Farm-to-table dining, cooking classes, and guided farm tours. Mixed revenue streams.",
  },
  {
    id: "POOL-2024-010",
    name: "Solar Irrigation Expansion",
    type: "Infrastructure",
    target: 1500000,
    raised: 980000,
    minStake: 25000,
    investors: 14,
    deadline: "2024-06-30",
    status: "Open",
    projectedReturn: "10% p.a.",
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
    deadline: "2024-07-15",
    status: "Open",
    projectedReturn: "18% p.a.",
    description: "Open-air dining experience serving retreat produce. Revenue from dining and events.",
  },
]

export default function AdminCrowdfunding() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Crowdfunding Engine</h1>
          <p className="text-slate-500 text-sm mt-1">Create and manage investment pools across all sectors.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" /> Create Pool
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Crowdfund Pool</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Pool Name</Label>
                <Input placeholder="e.g. Eco-Lodge 4 Construction" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Investment Type</Label>
                  <Select>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="agritourism">Agritourism</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="land">Land Syndicate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label> Amount (KES)</Label>
                  <Input type="number" placeholder="e.g. 1000000" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Minimum Stake (KES)</Label>
                  <Input type="number" placeholder="e.g. 25000" />
                </div>
                <div className="space-y-2">
                  <Label>Funding Deadline</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Projected Return</Label>
                <Input placeholder="e.g. 12% p.a." />
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Create Pool</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Active Pools</div>
            <div className="text-3xl font-bold text-slate-900">4</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Total Raised</div>
            <div className="text-3xl font-bold text-emerald-700">KES 5.9M</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Total Investors</div>
            <div className="text-3xl font-bold text-blue-600">44</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Avg Pool Size</div>
            <div className="text-3xl font-bold text-violet-600">KES 1.5M</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="open" className="w-full">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="open">Open Pools</TabsTrigger>
          <TabsTrigger value="funded">Funded</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value="open" className="mt-6 grid md:grid-cols-2 gap-6">
          {pools.filter((p) => p.status === "Open").map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </TabsContent>

        <TabsContent value="funded" className="mt-6 grid md:grid-cols-2 gap-6">
          {pools.filter((p) => p.status === "Funded").map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </TabsContent>

        <TabsContent value="closed" className="mt-6">
          <Card className="border-dashed border-2">
            <CardContent className="p-12 text-center">
              <p className="text-slate-500">No closed pools yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function PoolCard({ pool }: { pool: any }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-violet-100 text-violet-700">{pool.type}</Badge>
          <Badge className={pool.status === "Funded" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}>
            {pool.status}
          </Badge>
        </div>
        <CardTitle className="text-lg">{pool.name}</CardTitle>
        <p className="text-sm text-slate-500">{pool.id}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600 mb-4">{pool.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <div className="text-slate-500 text-xs"></div>
            <div className="font-medium">KES {pool.target.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs">Raised</div>
            <div className="font-medium text-emerald-700">KES {pool.raised.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs">Min Stake</div>
            <div className="font-medium">KES {pool.minStake.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs">Projected Return</div>
            <div className="font-medium text-emerald-700">{pool.projectedReturn}</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {pool.investors} investors</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {pool.deadline}</span>
          </div>
          <Progress value={(pool.raised / pool.target) * 100} className="h-2" />
          <div className="text-right text-xs text-slate-500 mt-1">{((pool.raised / pool.target) * 100).toFixed(0)}% funded</div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">View Investors</Button>
          <Button variant="outline" size="sm" className="flex-1">Edit Pool</Button>
        </div>
      </CardContent>
    </Card>
  )
}
