import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileText, TrendingUp, ArrowDownRight, ArrowUpRight, Filter } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const returnsBySector = [
  { name: "Agriculture", value: 74200, color: "#10b981" },
  { name: "Land Appreciation", value: 32500, color: "#3b82f6" },
  { name: "Crowdfunding", value: 21800, color: "#8b5cf6" },
]

const monthlyReturns = [
  { month: "Jan", agriculture: 8000, land: 2500, crowdfunding: 0 },
  { month: "Feb", agriculture: 12000, land: 2500, crowdfunding: 0 },
  { month: "Mar", agriculture: 15000, land: 3000, crowdfunding: 0 },
  { month: "Apr", agriculture: 18500, land: 3000, crowdfunding: 0 },
  { month: "May", agriculture: 0, land: 3000, crowdfunding: 4500 },
  { month: "Jun", agriculture: 0, land: 3500, crowdfunding: 4500 },
  { month: "Jul", agriculture: 0, land: 3500, crowdfunding: 6400 },
  { month: "Aug", agriculture: 0, land: 4000, crowdfunding: 6400 },
  { month: "Sep", agriculture: 0, land: 4000, crowdfunding: 0 },
  { month: "Oct", agriculture: 0, land: 4500, crowdfunding: 0 },
  { month: "Nov", agriculture: 0, land: 4500, crowdfunding: 0 },
  { month: "Dec", agriculture: 0, land: 5000, crowdfunding: 0 },
]

const returnHistory = [
  { id: "DISB-2024-0156", date: "2024-04-28", cycle: "CYC-2024-0041", type: "Agriculture", gross: 25000, fee: 6500, net: 18500, method: "M-Pesa" },
  { id: "DISB-2024-0142", date: "2024-03-15", cycle: "CYC-2024-0040", type: "Agriculture", gross: 20000, fee: 5200, net: 14800, method: "Bank Transfer" },
  { id: "DISB-2024-0108", date: "2024-04-15", cycle: "DIV-LAND-Q1", type: "Land Appreciation", gross: 8200, fee: 0, net: 8200, method: "Wallet" },
  { id: "DISB-2024-0095", date: "2024-02-28", cycle: "DIV-LAND-Q4", type: "Land Appreciation", gross: 7800, fee: 0, net: 7800, method: "M-Pesa" },
  { id: "DISB-2024-0072", date: "2024-05-10", cycle: "POOL-2024-008", type: "Crowdfunding", gross: 5600, fee: 700, net: 4900, method: "Bank Transfer" },
  { id: "DISB-2024-0051", date: "2024-01-20", cycle: "CYC-2023-0038", type: "Agriculture", gross: 30000, fee: 7800, net: 22200, method: "M-Pesa" },
]

export default function InvestorReturns() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Returns History</h1>
          <p className="text-slate-500 text-sm mt-1">Detailed record of all disbursements and dividends.</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" /> Export Statement
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <span className="text-sm text-slate-500">Total Agriculture Returns</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">KES 74,200</div>
            <div className="text-xs text-slate-500 mt-1">4 cycles completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <ArrowUpRight className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-slate-500">Land Appreciation</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">KES 32,500</div>
            <div className="text-xs text-slate-500 mt-1">Quarterly dividends</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <ArrowDownRight className="h-5 w-5 text-violet-600" />
              <span className="text-sm text-slate-500">Crowdfunding Returns</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">KES 21,800</div>
            <div className="text-xs text-slate-500 mt-1">2 pool distributions</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Returns by Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyReturns}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `KES ${v / 1000}K`} />
                  <Tooltip
                    contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
                    formatter={(value: number, name: string) => [`KES ${value.toLocaleString()}`, name]}
                  />
                  <Bar dataKey="agriculture" stackId="a" fill="#10b981" />
                  <Bar dataKey="land" stackId="a" fill="#3b82f6" />
                  <Bar dataKey="crowdfunding" stackId="a" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Returns by Sector</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={returnsBySector}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {returnsBySector.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `KES ${value.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-2">
              {returnsBySector.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                    <span className="text-slate-600">{s.name}</span>
                  </div>
                  <span className="font-medium">KES {s.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">All Disbursements</CardTitle>
          <Button variant="ghost" size="sm" className="text-slate-500">
            <Filter className="h-4 w-4 mr-1" /> Filter
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reference</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Cycle/Pool</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Gross</TableHead>
                <TableHead className="text-right">Fee</TableHead>
                <TableHead className="text-right">Net</TableHead>
                <TableHead>Method</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {returnHistory.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-mono text-xs">{r.id}</TableCell>
                  <TableCell className="text-sm">{r.date}</TableCell>
                  <TableCell className="text-sm">{r.cycle}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">
                      {r.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-sm">KES {r.gross.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-sm text-amber-600">- KES {r.fee.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-sm font-medium text-emerald-700">KES {r.net.toLocaleString()}</TableCell>
                  <TableCell className="text-sm">{r.method}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <FileText className="h-4 w-4 text-slate-400" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
