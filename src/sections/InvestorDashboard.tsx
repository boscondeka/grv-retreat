import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Wallet,
  Sprout,
  Home,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  AlertCircle,
  ChevronRight,
} from "lucide-react"
import { Link } from "react-router-dom"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const returnsData = [
  { month: "Jan", returns: 12000 },
  { month: "Feb", returns: 18500 },
  { month: "Mar", returns: 24000 },
  { month: "Apr", returns: 18000 },
  { month: "May", returns: 32000 },
  { month: "Jun", returns: 28000 },
  { month: "Jul", returns: 45000 },
  { month: "Aug", returns: 39000 },
  { month: "Sep", returns: 52000 },
  { month: "Oct", returns: 48000 },
  { month: "Nov", returns: 61000 },
  { month: "Dec", returns: 59200 },
]

const activeCycles = [
  {
    id: "CYC-2024-0042",
    block: "Block C - Maize",
    status: "Active",
    planted: "2024-03-15",
    projectedHarvest: "2024-08-20",
    invested: 25000,
    projectedReturn: 18500,
    progress: 65,
  },
  {
    id: "CYC-2024-0043",
    block: "Block D - Beans",
    status: "Planting",
    planted: "2024-05-01",
    projectedHarvest: "2024-10-15",
    invested: 15000,
    projectedReturn: 11100,
    progress: 20,
  },
]

const recentActivity = [
  {
    type: "disbursement",
    title: "Cycle CYC-2024-0041 Disbursed",
    amount: "+ KES 18,500",
    date: "2024-04-28",
    status: "completed",
  },
  {
    type: "investment",
    title: "Invested in Block D - Beans",
    amount: "- KES 15,000",
    date: "2024-05-01",
    status: "completed",
  },
  {
    type: "dividend",
    title: "Q1 Land Appreciation Dividend",
    amount: "+ KES 8,200",
    date: "2024-04-15",
    status: "completed",
  },
  {
    type: "deposit",
    title: "Wallet Top-up (M-Pesa)",
    amount: "+ KES 50,000",
    date: "2024-04-10",
    status: "completed",
  },
]

export default function InvestorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Investor Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back, John. Here's your portfolio at a glance.
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/investor/marketplace">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              New Investment
            </Button>
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-emerald-600" />
              </div>
              <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +12.5%
              </Badge>
            </div>
            <div className="text-2xl font-bold text-slate-900">KES 342,500</div>
            <div className="text-sm text-slate-500 mt-1">Total Invested</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +8.3%
              </Badge>
            </div>
            <div className="text-2xl font-bold text-slate-900">KES 128,400</div>
            <div className="text-sm text-slate-500 mt-1">Lifetime Returns</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Sprout className="h-5 w-5 text-amber-600" />
              </div>
              <Badge variant="outline" className="text-amber-600 border-amber-200">
                Active
              </Badge>
            </div>
            <div className="text-2xl font-bold text-slate-900">4</div>
            <div className="text-sm text-slate-500 mt-1">Active Cycles</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                <Home className="h-5 w-5 text-violet-600" />
              </div>
              <Badge variant="outline" className="text-violet-600 border-violet-200">
                Freehold
              </Badge>
            </div>
            <div className="text-2xl font-bold text-slate-900">2 Plots</div>
            <div className="text-sm text-slate-500 mt-1">Land Holdings</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Returns Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              Returns History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={returnsData}>
                  <defs>
                    <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `KES ${v / 1000}K`} />
                  <Tooltip
                    contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
                    formatter={(value: number) => [`KES ${value.toLocaleString()}`, "Returns"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="returns"
                    stroke="#10b981"
                    strokeWidth={2}
                    fill="url(#colorReturns)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Summary */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Wallet className="h-5 w-5 text-emerald-600" />
              Wallet
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-emerald-50 rounded-xl p-4 text-center">
              <div className="text-sm text-emerald-700 mb-1">Available Balance</div>
              <div className="text-3xl font-bold text-emerald-800">KES 87,450</div>
              <div className="text-xs text-emerald-600 mt-1">≈ USD 672.50</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Pending Disbursements</span>
                <span className="font-medium text-slate-900">KES 18,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Locked in Active Cycles</span>
                <span className="font-medium text-slate-900">KES 40,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Total Wallet Value</span>
                <span className="font-medium text-emerald-700">KES 145,950</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link to="/investor/wallet">
                <Button variant="outline" className="w-full text-sm">
                  Top Up
                </Button>
              </Link>
              <Link to="/investor/wallet">
                <Button className="w-full text-sm bg-emerald-600 hover:bg-emerald-700">
                  Withdraw
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Cycles & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Sprout className="h-5 w-5 text-amber-600" />
              Active Crop Cycles
            </CardTitle>
            <Link to="/investor/portfolio">
              <Button variant="ghost" size="sm" className="text-emerald-600">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeCycles.map((cycle) => (
              <div key={cycle.id} className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-slate-900">{cycle.block}</div>
                    <div className="text-xs text-slate-500">{cycle.id}</div>
                  </div>
                  <Badge
                    variant={cycle.status === "Active" ? "default" : "secondary"}
                    className={cycle.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}
                  >
                    {cycle.status === "Active" ? (
                      <Clock className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    )}
                    {cycle.status}
                  </Badge>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Cycle Progress</span>
                    <span className="font-medium">{cycle.progress}%</span>
                  </div>
                  <Progress value={cycle.progress} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-500 text-xs">Invested</div>
                    <div className="font-semibold text-slate-900">KES {cycle.invested.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">Projected Return</div>
                    <div className="font-semibold text-emerald-700">KES {cycle.projectedReturn.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      activity.type === "disbursement" || activity.type === "dividend"
                        ? "bg-emerald-100"
                        : activity.type === "investment"
                          ? "bg-amber-100"
                          : "bg-blue-100"
                    }`}
                  >
                    {activity.type === "disbursement" || activity.type === "dividend" ? (
                      <ArrowDownRight className="h-4 w-4 text-emerald-600" />
                    ) : activity.type === "investment" ? (
                      <ArrowUpRight className="h-4 w-4 text-amber-600" />
                    ) : (
                      <Wallet className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-900 truncate">{activity.title}</p>
                      <span
                        className={`text-sm font-semibold shrink-0 ml-2 ${
                          activity.amount.startsWith("+") ? "text-emerald-600" : "text-amber-600"
                        }`}
                      >
                        {activity.amount}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
