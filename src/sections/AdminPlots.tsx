import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, MapPin, Filter, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const plotStats = {
  total: 120,
  available: 34,
  reserved: 18,
  sold: 62,
  underDevelopment: 6,
}

const plots = [
  { id: "PLOT-128-001", size: "1/8 Acre", phase: "Phase 1", location: "Sunrise Court", price: 185000, status: "Available", buyer: null, infrastructure: "Complete" },
  { id: "PLOT-128-002", size: "1/8 Acre", phase: "Phase 1", location: "Sunrise Court", price: 185000, status: "Reserved", buyer: "James Omondi", infrastructure: "Complete" },
  { id: "PLOT-256-003", size: "1/4 Acre", phase: "Phase 2", location: "Garden Grove", price: 425000, status: "Sold", buyer: "Sarah Kimani", infrastructure: "Complete" },
  { id: "PLOT-512-004", size: "1/2 Acre", phase: "Phase 3", location: "Ridge View", price: 980000, status: "Available", buyer: null, infrastructure: "Planned" },
  { id: "PLOT-256-005", size: "1/4 Acre", phase: "Phase 2", location: "Garden Grove", price: 440000, status: "Sold", buyer: "Mwangi & Associates", infrastructure: "Complete" },
  { id: "PLOT-128-006", size: "1/8 Acre", phase: "Phase 1", location: "Sunrise Court", price: 190000, status: "Available", buyer: null, infrastructure: "Complete" },
  { id: "PLOT-512-007", size: "1/2 Acre", phase: "Phase 3", location: "Cliffside", price: 1200000, status: "Reserved", buyer: "Diaspora SACCO", infrastructure: "Planned" },
  { id: "PLOT-256-008", size: "1/4 Acre", phase: "Phase 2", location: "Garden Grove", price: 450000, status: "Under Development", buyer: "Great Rift Holdings", infrastructure: "In Progress" },
]

export default function AdminPlots() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Plot Inventory</h1>
          <p className="text-slate-500 text-sm mt-1">Complete registry of all plots across the retreat.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" /> Add Plot
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Plot</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Plot ID</Label>
                  <Input placeholder="e.g. PLOT-128-009" />
                </div>
                <div className="space-y-2">
                  <Label>Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1/8">1/8 Acre</SelectItem>
                      <SelectItem value="1/4">1/4 Acre</SelectItem>
                      <SelectItem value="1/2">1/2 Acre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Location / Phase</Label>
                <Input placeholder="e.g. Phase 4, Lakeside" />
              </div>
              <div className="space-y-2">
                <Label>Price (KES)</Label>
                <Input type="number" placeholder="e.g. 250000" />
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Create Plot</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Total Plots</div>
            <div className="text-2xl font-bold text-slate-900">{plotStats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Available</div>
            <div className="text-2xl font-bold text-emerald-700">{plotStats.available}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Reserved</div>
            <div className="text-2xl font-bold text-amber-600">{plotStats.reserved}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Sold</div>
            <div className="text-2xl font-bold text-blue-600">{plotStats.sold}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Under Dev</div>
            <div className="text-2xl font-bold text-violet-600">{plotStats.underDevelopment}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Plot Registry</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search plots..." className="pl-9 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" /> Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plot ID</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Phase</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Buyer / Investor</TableHead>
                <TableHead>Infrastructure</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plots.map((plot) => (
                <TableRow key={plot.id}>
                  <TableCell className="font-mono text-xs">{plot.id}</TableCell>
                  <TableCell className="text-sm">{plot.size}</TableCell>
                  <TableCell className="text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-400" />
                      {plot.location}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{plot.phase}</TableCell>
                  <TableCell className="text-right text-sm font-medium">KES {plot.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={
                      plot.status === "Available" ? "bg-emerald-100 text-emerald-700 text-xs" :
                      plot.status === "Reserved" ? "bg-amber-100 text-amber-700 text-xs" :
                      plot.status === "Sold" ? "bg-blue-100 text-blue-700 text-xs" :
                      "bg-violet-100 text-violet-700 text-xs"
                    }>
                      {plot.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{plot.buyer || "—"}</TableCell>
                  <TableCell className="text-sm">{plot.infrastructure}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
