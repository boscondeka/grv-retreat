import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Plus, Users } from "lucide-react"

const cycles = [
  {
    id: "CYC-2024-0042",
    block: "Block C - Maize",
    crop: "Maize",
    status: "Active",
    stage: "Growth",
    plantingDate: "2024-03-15",
    projectedHarvest: "2024-08-20",
    investors: 8,
    investedTotal: 80000,
    projectedRevenue: 80000,
    progress: 65,
    inputs: { seeds: 8000, fertilizer: 12000, labour: 15000, pest: 3000, irrigation: 4000, transport: 2000, insurance: 1500 },
  },
  {
    id: "CYC-2024-0043",
    block: "Block D - Beans",
    crop: "Beans",
    status: "Active",
    stage: "Planting",
    plantingDate: "2024-05-01",
    projectedHarvest: "2024-10-15",
    investors: 6,
    investedTotal: 60000,
    projectedRevenue: 60000,
    progress: 20,
    inputs: { seeds: 6000, fertilizer: 9000, labour: 12000, pest: 2500, irrigation: 3000, transport: 1500, insurance: 1000 },
  },
  {
    id: "CYC-2024-0041",
    block: "Block B - Beans",
    crop: "Beans",
    status: "Closed",
    stage: "Disbursed",
    plantingDate: "2023-11-01",
    projectedHarvest: "2024-04-28",
    investors: 12,
    investedTotal: 80000,
    projectedRevenue: 80000,
    progress: 100,
    inputs: { seeds: 8000, fertilizer: 12000, labour: 15000, pest: 3000, irrigation: 4000, transport: 2000, insurance: 1500 },
    actualRevenue: 80000,
    managementFee: 20800,
    netReturn: 59200,
  },
  {
    id: "CYC-2024-0040",
    block: "Block A - Maize",
    crop: "Maize",
    status: "Closed",
    stage: "Archived",
    plantingDate: "2023-10-01",
    projectedHarvest: "2024-03-15",
    investors: 10,
    investedTotal: 80000,
    projectedRevenue: 80000,
    progress: 100,
    inputs: { seeds: 8000, fertilizer: 12000, labour: 15000, pest: 3000, irrigation: 4000, transport: 2000, insurance: 1500 },
    actualRevenue: 80000,
    managementFee: 20800,
    netReturn: 59200,
  },
]

export default function AdminAgriculture() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Agriculture Module</h1>
          <p className="text-slate-500 text-sm mt-1">Crop cycle management, revenue tracking, and disbursement control.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" /> New Cycle
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Crop Cycle</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Block</Label>
                  <Select>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">Block A</SelectItem>
                      <SelectItem value="B">Block B</SelectItem>
                      <SelectItem value="C">Block C</SelectItem>
                      <SelectItem value="D">Block D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Crop Type</Label>
                  <Select>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maize">Maize</SelectItem>
                      <SelectItem value="beans">Beans</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Planting Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Projected Harvest</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Target Investment (KES)</Label>
                <Input type="number" defaultValue={80000} />
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Create Cycle</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Active Cycles</div>
            <div className="text-3xl font-bold text-slate-900">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Total Investors</div>
            <div className="text-3xl font-bold text-slate-900">14</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Capital Deployed</div>
            <div className="text-3xl font-bold text-emerald-700">KES 140K</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">YTD Revenue</div>
            <div className="text-3xl font-bold text-blue-600">KES 320K</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="active">Active Cycles</TabsTrigger>
          <TabsTrigger value="closed">Closed / Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6 space-y-4">
          {cycles.filter((c) => c.status === "Active").map((cycle) => (
            <Card key={cycle.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-semibold text-slate-900">{cycle.block}</h3>
                      <Badge className="bg-emerald-100 text-emerald-700">{cycle.status}</Badge>
                      <Badge variant="secondary">{cycle.stage}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-slate-500 text-xs">Cycle ID</div>
                        <div className="font-medium">{cycle.id}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs">Planted</div>
                        <div className="font-medium">{cycle.plantingDate}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs">Harvest</div>
                        <div className="font-medium">{cycle.projectedHarvest}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs">Investors</div>
                        <div className="font-medium flex items-center gap-1">
                          <Users className="h-3 w-3" /> {cycle.investors}
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-500">Cycle Progress</span>
                        <span className="font-medium">{cycle.progress}%</span>
                      </div>
                      <Progress value={cycle.progress} className="h-2" />
                    </div>
                  </div>
                  <div className="lg:w-64 bg-slate-50 rounded-xl p-4">
                    <div className="text-sm text-slate-500 mb-2">Input Costs Breakdown</div>
                    <div className="space-y-2 text-sm">
                      {Object.entries(cycle.inputs).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-slate-600 capitalize">{key}</span>
                          <span className="font-medium">KES {value.toLocaleString()}</span>
                        </div>
                      ))}
                      <div className="border-t border-slate-200 pt-2 flex justify-between font-semibold">
                        <span>Total Inputs</span>
                        <span>KES {Object.values(cycle.inputs).reduce((a, b) => a + b, 0).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                  <Button variant="outline" size="sm">Log Activity</Button>
                  <Button variant="outline" size="sm">Update Status</Button>
                  <Button variant="outline" size="sm">View Investors</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="closed" className="mt-6 space-y-4">
          {cycles.filter((c) => c.status === "Closed").map((cycle) => (
            <Card key={cycle.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-semibold text-slate-900">{cycle.block}</h3>
                      <Badge className="bg-slate-100 text-slate-700">{cycle.status}</Badge>
                      <Badge variant="secondary">{cycle.stage}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-slate-500 text-xs">Cycle ID</div>
                        <div className="font-medium">{cycle.id}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs">Investors</div>
                        <div className="font-medium flex items-center gap-1">
                          <Users className="h-3 w-3" /> {cycle.investors}
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs">Gross Revenue</div>
                        <div className="font-medium">KES {(cycle as any).actualRevenue?.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs">Net Distributed</div>
                        <div className="font-medium text-emerald-700">KES {(cycle as any).netReturn?.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-64 bg-emerald-50 rounded-xl p-4">
                    <div className="text-sm text-emerald-700 mb-2">Revenue Split</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Gross Revenue</span>
                        <span className="font-medium">KES {(cycle as any).actualRevenue?.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-amber-600">
                        <span>Management Fee (26%)</span>
                        <span className="font-medium">- KES {(cycle as any).managementFee?.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-emerald-200 pt-2 flex justify-between font-semibold text-emerald-800">
                        <span>Net to Investors</span>
                        <span>KES {(cycle as any).netReturn?.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
