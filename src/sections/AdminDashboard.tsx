import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Users,
  Sprout,
  Home,
  Wallet,
  ArrowUpRight,
  AlertTriangle,
  Activity,
} from "lucide-react"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const revenueData = [
  { month: "Jan", plots: 450000, agriculture: 320000, fees: 85000 },
  { month: "Feb", plots: 180000, agriculture: 280000, fees: 78000 },
  { month: "Mar", plots: 680000, agriculture: 410000, fees: 105000 },
  { month: "Apr", plots: 220000, agriculture: 360000, fees: 92000 },
  { month: "May", plots: 540000, agriculture: 290000, fees: 74000 },
]

const activeCycles = [
  { id: "CYC-2024-0042", block: "Block C - Maize", status: "Active", progress: 65, investors: 8, revenue: 80000, disbursed: false },
  { id: "CYC-2024-0043", block: "Block D - Beans", status: "Planting", progress: 20, investors: 6, revenue: 0, disbursed: false },
  { id: "CYC-2024-0041", block: "Block B - Beans", status: "Disbursed", progress: 100, investors: 12, revenue: 80000, disbursed: true },
  { id: "CYC-2024-0040", block: "Block A - Maize", status: "Closed", progress: 100, investors: 10, revenue: 80000, disbursed: true },
]

const recentInvestors = [
  { id: "INV-0891", name: "Sarah Kimani", type: "Individual", date: "2024-05-02", invested: 45000, status: "Active" },
  { id: "INV-0890", name: "Mwangi & Associates", type: "Corporate", date: "2024-05-01", invested: 250000, status: "Active" },
  { id: "INV-0888", name: "Diaspora SACCO", type: "SACCO", date: "2024-04-28", invested: 120000, status: "Pending KYC" },
  { id: "INV-0885", name: "James Omondi", type: "Individual", date: "2024-04-25", invested: 15000, status: "Active" },
]

const alerts = [
  { type: "warning", message: "Pool POOL-2024-009 is 70% funded with 5 days remaining", time: "2 hours ago" },
  { type: "error", message: "KYC pending for 3 new investor registrations", time: "5 hours ago" },
  { type: "info", message: "Cycle CYC-2024-0042 approaching harvest date (Aug 20)", time: "1 day ago" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Management Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Company Core · Operations overview</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Activity className="h-4 w-4" /> System Health: OK
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-emerald-600" />
              </div>
              <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +8.2%
              </Badge>
            </div>
            <div className="text-2xl font-bold text-slate-900">KES 4.2M</div>
            <div className="text-sm text-slate-500 mt-1">Total Revenue YTD</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +12
              </Badge>
            </div>
            <div className="text-2xl font-bold text-slate-900">247</div>
            <div className="text-sm text-slate-500 mt-1">Active Investors</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Sprout className="h-5 w-5 text-amber-600" />
              </div>
              <Badge variant="outline" className="text-amber-600 border-amber-200">4 Active</Badge>
            </div>
            <div className="text-2xl font-bold text-slate-900">18</div>
            <div className="text-sm text-slate-500 mt-1">Cycles This Year</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                <Home className="h-5 w-5 text-violet-600" />
              </div>
              <Badge variant="outline" className="text-violet-600 border-violet-200">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +5
              </Badge>
            </div>
            <div className="text-2xl font-bold text-slate-900">42</div>
            <div className="text-sm text-slate-500 mt-1">Plots Sold</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Revenue Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `KES ${v / 1000}K`} />
                  <Tooltip
                    contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
                    formatter={(value: number) => `KES ${value.toLocaleString()}`}
                  />
                  <Bar dataKey="plots" fill="#8b5cf6" name="Plot Sales" />
                  <Bar dataKey="agriculture" fill="#10b981" name="Agriculture" />
                  <Bar dataKey="fees" fill="#f59e0b" name="Management Fees" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${
                  alert.type === "error" ? "bg-red-50" :
                  alert.type === "warning" ? "bg-amber-50" : "bg-blue-50"
                }`}>
                  <AlertTriangle className={`h-5 w-5 shrink-0 ${
                    alert.type === "error" ? "text-red-500" :
                    alert.type === "warning" ? "text-amber-500" : "text-blue-500"
                  }`} />
                  <div>
                    <p className={`text-sm ${
                      alert.type === "error" ? "text-red-800" :
                      alert.type === "warning" ? "text-amber-800" : "text-blue-800"
                    }`}>{alert.message}</p>
                    <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Active Crop Cycles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeCycles.map((cycle) => (
              <div key={cycle.id} className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-slate-900">{cycle.block}</div>
                    <div className="text-xs text-slate-500">{cycle.id} · {cycle.investors} investors</div>
                  </div>
                  <Badge className={
                    cycle.status === "Active" ? "bg-emerald-100 text-emerald-700" :
                    cycle.status === "Planting" ? "bg-amber-100 text-amber-700" :
                    cycle.status === "Disbursed" ? "bg-blue-100 text-blue-700" :
                    "bg-slate-100 text-slate-700"
                  }>
                    {cycle.status}
                  </Badge>
                </div>
                <div className="mb-2">
                  <Progress value={cycle.progress} className="h-2" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{cycle.progress}% complete</span>
                  {cycle.revenue > 0 && (
                    <span className="font-medium">KES {cycle.revenue.toLocaleString()} gross</span>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Investors</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Investor</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Invested</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentInvestors.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell>
                      <div className="text-sm font-medium">{inv.name}</div>
                      <div className="text-xs text-slate-500">{inv.id}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">{inv.type}</Badge>
                    </TableCell>
                    <TableCell className="text-right text-sm">KES {inv.invested.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge className={inv.status === "Active" ? "bg-emerald-100 text-emerald-700 text-xs" : "bg-amber-100 text-amber-700 text-xs"}>
                        {inv.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
