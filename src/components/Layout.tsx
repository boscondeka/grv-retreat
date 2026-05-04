import type { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  TrendingUp,
  Sprout,
  Users,
  Wallet,
  FileText,
  Settings,
  Shield,
  ChevronRight,
  BarChart3,
  Landmark,
  HandCoins,
  Briefcase,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SidebarItem {
  label: string
  icon: React.ElementType
  path: string
  badge?: string
}

const investorNav: SidebarItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/investor" },
  { label: "Portfolio", icon: Briefcase, path: "/investor/portfolio" },
  { label: "Marketplace", icon: TrendingUp, path: "/investor/marketplace" },
  { label: "Returns", icon: BarChart3, path: "/investor/returns" },
  { label: "Documents", icon: FileText, path: "/investor/documents" },
  { label: "Wallet", icon: Wallet, path: "/investor/wallet" },
]

const adminNav: SidebarItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { label: "Plot Inventory", icon: Landmark, path: "/admin/plots" },
  { label: "Agriculture", icon: Sprout, path: "/admin/agriculture" },
  { label: "CRM & Investors", icon: Users, path: "/admin/crm" },
  { label: "Crowdfunding", icon: HandCoins, path: "/admin/crowdfunding" },
  { label: "Finance", icon: BarChart3, path: "/admin/finance" },
  { label: "KYC & Compliance", icon: Shield, path: "/admin/compliance" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
]

function Sidebar({ items, role }: { items: SidebarItem[]; role: string }) {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`flex flex-col h-screen bg-slate-900 text-white transition-all duration-300 ${collapsed ? "w-20" : "w-64"} border-r border-slate-800`}
    >
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-900">
              GR
            </div>
            <span className="font-semibold text-sm tracking-tight">
              Great Rift Valley
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-400 hover:text-white hover:bg-slate-800"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu size={18} /> : <X size={18} />}
        </Button>
      </div>

      <div className="px-3 py-2">
        {!collapsed && (
          <Badge
            variant="outline"
            className="text-xs border-slate-700 text-slate-400 mb-2"
          >
            {role} Portal
          </Badge>
        )}
      </div>

      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const active = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-emerald-600/20 text-emerald-400 font-medium"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              <item.icon size={18} />
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && item.badge && (
                <span className="ml-auto text-xs bg-emerald-600 text-white px-1.5 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="p-3 border-t border-slate-800">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
        >
          <LogOut size={18} />
          {!collapsed && <span>Exit to Site</span>}
        </Link>
      </div>
    </div>
  )
}

export function InvestorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={investorNav} role="Investor" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Investor Portal</span>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
              KYC Verified
            </Badge>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-700">
                JD
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-slate-900">John Doe</p>
                <p className="text-xs text-slate-500">Diaspora Investor</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={adminNav} role="Admin" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Management</span>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">Company Core</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-amber-100 text-amber-700">
              Admin
            </Badge>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-medium text-white">
                AM
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-slate-900">Admin User</p>
                <p className="text-xs text-slate-500">Operations Manager</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
