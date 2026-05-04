import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Search, Users, TrendingUp, Filter, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const investors = [
  { id: "INV-0001", name: "John Doe", email: "john.doe@email.com", phone: "+254 712 345 678", type: "Diaspora", country: "UK", status: "Active", invested: 342500, returns: 128400, joined: "2023-06-01" },
  { id: "INV-0002", name: "Sarah Kimani", email: "sarah.k@email.com", phone: "+254 723 456 789", type: "Individual", country: "Kenya", status: "Active", invested: 185000, returns: 45000, joined: "2023-08-15" },
  { id: "INV-0003", name: "Mwangi & Associates Ltd", email: "info@mwangi.co.ke", phone: "+254 720 123 456", type: "Corporate", country: "Kenya", status: "Active", invested: 1250000, returns: 320000, joined: "2023-09-20" },
  { id: "INV-0004", name: "Diaspora SACCO", email: "invest@diasporasacco.org", phone: "+1 416 555 0123", type: "SACCO", country: "Canada", status: "Pending KYC", invested: 0, returns: 0, joined: "2024-04-28" },
  { id: "INV-0005", name: "James Omondi", email: "j.omondi@email.com", phone: "+254 711 987 654", type: "Individual", country: "Kenya", status: "Active", invested: 75000, returns: 18000, joined: "2023-11-10" },
  { id: "INV-0006", name: "Green Impact Fund", email: "investments@greenimpact.org", phone: "+254 730 555 888", type: "Institutional", country: "Kenya", status: "Active", invested: 2500000, returns: 0, joined: "2024-01-15" },
]

const leads = [
  { id: "LEAD-0891", name: "Grace Muthoni", source: "Website", interest: "1/4 Acre Plot", date: "2024-05-02", status: "New", assigned: "Unassigned" },
  { id: "LEAD-0890", name: "Peter Njoroge", source: "Referral", interest: "Agriculture Cycle", date: "2024-05-01", status: "Contacted", assigned: "Alice Wanjiku" },
  { id: "LEAD-0888", name: "Nairobi Investment Group", source: "Email", interest: "Crowdfunding Pool", date: "2024-04-28", status: "Qualified", assigned: "Bob Otieno" },
  { id: "LEAD-0885", name: "Mary Wambui", source: "Site Visit", interest: "1/8 Acre Plot", date: "2024-04-25", status: "Negotiation", assigned: "Alice Wanjiku" },
]

export default function AdminCRM() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">CRM & Investors</h1>
          <p className="text-slate-500 text-sm mt-1">Manage prospects, investors, and relationships.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" /> Add Investor
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Investor</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input placeholder="Full Name / Company Name" />
              <Input placeholder="Email Address" />
              <Input placeholder=" Number" />
            </div>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Create Record</Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Total Investors</div>
            <div className="text-3xl font-bold text-slate-900">247</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Active</div>
            <div className="text-3xl font-bold text-emerald-700">198</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Pending KYC</div>
            <div className="text-3xl font-bold text-amber-600">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">New Leads</div>
            <div className="text-3xl font-bold text-blue-600">24</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="investors" className="w-full">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="investors" className="flex items-center gap-2">
            <Users className="h-4 w-4" /> Investors
          </TabsTrigger>
          <TabsTrigger value="leads" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" /> Leads & Pipeline
          </TabsTrigger>
        </TabsList>

        <TabsContent value="investors" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Investor Registry</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search investors..." className="pl-9 w-64" />
                  </div>
                  <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-1" /> Filter</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investor</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Invested</TableHead>
                    <TableHead className="text-right">Returns</TableHead>
                    <TableHead>Joined</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investors.map((inv) => (
                    <TableRow key={inv.id}>
                      <TableCell>
                        <div className="text-sm font-medium">{inv.name}</div>
                        <div className="text-xs text-slate-500">{inv.id}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-xs">{inv.type}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{inv.country}</TableCell>
                      <TableCell>
                        <Badge className={inv.status === "Active" ? "bg-emerald-100 text-emerald-700 text-xs" : "bg-amber-100 text-amber-700 text-xs"}>
                          {inv.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right text-sm font-medium">KES {inv.invested.toLocaleString()}</TableCell>
                      <TableCell className="text-right text-sm text-emerald-700">KES {inv.returns.toLocaleString()}</TableCell>
                      <TableCell className="text-sm">{inv.joined}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leads" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Lead Pipeline</CardTitle>
                <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-1" /> Filter</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lead</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Interest</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>
                        <div className="text-sm font-medium">{lead.name}</div>
                        <div className="text-xs text-slate-500">{lead.id}</div>
                      </TableCell>
                      <TableCell className="text-sm">{lead.source}</TableCell>
                      <TableCell className="text-sm">{lead.interest}</TableCell>
                      <TableCell>
                        <Badge className={
                          lead.status === "New" ? "bg-blue-100 text-blue-700 text-xs" :
                          lead.status === "Contacted" ? "bg-amber-100 text-amber-700 text-xs" :
                          lead.status === "Qualified" ? "bg-violet-100 text-violet-700 text-xs" :
                          "bg-emerald-100 text-emerald-700 text-xs"
                        }>
                          {lead.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{lead.assigned}</TableCell>
                      <TableCell className="text-sm">{lead.date}</TableCell>
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
