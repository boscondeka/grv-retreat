import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { TrendingUp, ArrowDownRight, ArrowUpRight, Sprout, Download } from "lucide-react"

const revenueSources = [
  { name: "Plot Sales", value: 1450000, color: "#8b5cf6" },
  { name: "Management Fees", value: 520000, color: "#f59e0b" },
  { name: "Hospitality Revenue", value: 180000, color: "#3b82f6" },
  { name: "Other", value: 45000, color: "#94a3b8" },
]

const monthlyRevenue = [
  { month: "Jan", revenue: 420000, expenses: 310000 },
  { month: "Feb", revenue: 380000, expenses: 290000 },
  { month: "Mar", revenue: 650000, expenses: 420000 },
  { month: "Apr", revenue: 510000, expenses: 380000 },
  { month: "May", revenue: 485000, expenses: 350000 },
]

const transactions = [
  { id: "TXN-2024-1001", date: "2024-05-02", type: "Plot Sale", description: "PLOT-256-005 - Mwangi & Associates", amount: 450000, direction: "in" },
  { id: "TXN-2024-1000", date: "2024-05-01", type: "Investment", description: "Mwangi & Associates - Agriculture", amount: 250000, direction: "in" },
  { id: "TXN-2024-0998", date: "2024-04-28", type: "Disbursement", description: "CYC-2024-0041 - 12 investors", amount: 59200, direction: "out" },
  { id: "TXN-2024-0995", date: "2024-04-25", type: "Management Fee", description: "Q1 Agriculture operations", amount: 85000, direction: "in" },
  { id: "TXN-2024-0990", date: "2024-04-20", type: "Plot Sale", description: "PLOT-128-002 - James Omondi", amount: 185000, direction: "in" },
  { id: "TXN-2024-0985", date: "2024-04-15", type: "Expense", description: "Farm inputs - Seeds & Fertilizer", amount: 42000, direction: "out" },
]

const disbursements = [
  { id: "DISB-2024-0156", date: "2024-04-28", cycle: "CYC-2024-0041", investors: 12, gross: 80000, fee: 20800, net: 59200, method: "M-Pesa B2C" },
  { id: "DISB-2024-0142", date: "2024-03-15", cycle: "CYC-2024-0040", investors: 10, gross: 80000, fee: 20800, net: 59200, method: "Bank EFT" },
  { id: "DISB-2024-0108", date: "2024-04-15", cycle: "DIV-LAND-Q1", investors: 42, gross: 325000, fee: 0, net: 325000, method: "Mixed" },
]

export default function AdminFinance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Finance & Reporting</h1>
          <p className="text-slate-500 text-sm mt-1">Revenue, disbursements, and financial reports.</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" /> Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <span className="text-sm text-slate-500">Total Revenue</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">KES 4.2M</div>
            <div className="text-xs text-emerald-600 mt-1">+8.2% vs last quarter</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <ArrowUpRight className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-slate-500">Plot Sales</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">KES 1.45M</div>
            <div className="text-xs text-blue-600 mt-1">5 plots sold</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Sprout className="h-5 w-5 text-amber-600" />
              <span className="text-sm text-slate-500">Management Fees</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">KES 520K</div>
            <div className="text-xs text-amber-600 mt-1">4 cycles managed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <ArrowDownRight className="h-5 w-5 text-rose-600" />
              <span className="text-sm text-slate-500">Disbursed</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">KES 1.8M</div>
            <div className="text-xs text-rose-600 mt-1">To 64 investors</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Revenue vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `KES ${v / 1000}K`} />
                  <Tooltip formatter={(value: number) => `KES ${value.toLocaleString()}`} />
                  <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
                  <Bar dataKey="expenses" fill="#f43f5e" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Revenue by Source</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={revenueSources} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                    {revenueSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `KES ${value.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-2">
              {revenueSources.map((s) => (
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

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="transactions">All Transactions</TabsTrigger>
          <TabsTrigger value="disbursements">Disbursements</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell className="font-mono text-xs">{tx.id}</TableCell>
                      <TableCell className="text-sm">{tx.date}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-xs">{tx.type}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{tx.description}</TableCell>
                      <TableCell className={`text-right text-sm font-medium ${tx.direction === "in" ? "text-emerald-700" : "text-amber-600"}`}>
                        {tx.direction === "in" ? "+" : "-"}KES {tx.amount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="disbursements" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Cycle</TableHead>
                    <TableHead>Investors</TableHead>
                    <TableHead className="text-right">Gross</TableHead>
                    <TableHead className="text-right">Fee</TableHead>
                    <TableHead className="text-right">Net Disbursed</TableHead>
                    <TableHead>Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {disbursements.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell className="font-mono text-xs">{d.id}</TableCell>
                      <TableCell className="text-sm">{d.date}</TableCell>
                      <TableCell className="text-sm">{d.cycle}</TableCell>
                      <TableCell className="text-sm">{d.investors}</TableCell>
                      <TableCell className="text-right text-sm">KES {d.gross.toLocaleString()}</TableCell>
                      <TableCell className="text-right text-sm text-amber-600">- KES {d.fee.toLocaleString()}</TableCell>
                      <TableCell className="text-right text-sm font-medium text-emerald-700">KES {d.net.toLocaleString()}</TableCell>
                      <TableCell className="text-sm">{d.method}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
