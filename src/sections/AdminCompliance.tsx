import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Shield, CheckCircle2, Clock, FileCheck, XCircle, Download } from "lucide-react"

const kycStats = {
  verified: 198,
  pending: 12,
  rejected: 3,
  total: 213,
}

const pendingKYC = [
  { id: "INV-0888", name: "Diaspora SACCO", type: "SACCO", submitted: "2024-04-28", status: "Pending Review", documents: 3, total: 5, risk: "Low" },
  { id: "INV-0887", name: "Robert Mwangi", type: "Individual", submitted: "2024-04-27", status: "Documents Missing", documents: 2, total: 4, risk: "Low" },
  { id: "INV-0885", name: "Nairobi Holdings Ltd", type: "Corporate", submitted: "2024-04-25", status: "Pending Review", documents: 4, total: 6, risk: "Medium" },
  { id: "INV-0883", name: "Aisha Mohammed", type: "Individual", submitted: "2024-04-23", status: "AML Flagged", documents: 4, total: 4, risk: "High" },
]

const complianceRecords = [
  { id: "COMP-2024-001", type: "CMA Filing", description: "Q1 Investment Product Disclosure", date: "2024-04-15", status: "Filed", due: "2024-04-30" },
  { id: "COMP-2024-002", type: "CBK Report", description: "Monthly Payment Services Report", date: "2024-05-01", status: "Filed", due: "2024-05-05" },
  { id: "COMP-2024-003", type: "KRA WHT", description: "Q1 Withholding Tax Summary", date: "2024-04-20", status: "Pending", due: "2024-05-10" },
  { id: "COMP-2024-004", type: "Data Protection", description: "Annual Data Audit Report", date: "—", status: "Pending", due: "2024-06-30" },
]

const amlAlerts = [
  { id: "AML-2024-001", investor: "Aisha Mohammed", type: "PEP Match", severity: "High", date: "2024-04-23", status: "Under Review" },
  { id: "AML-2024-002", investor: "Global Traders Inc", type: "Large Transaction", severity: "Medium", date: "2024-04-20", status: "Cleared" },
]

export default function AdminCompliance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">KYC & Compliance</h1>
          <p className="text-slate-500 text-sm mt-1">Investor verification, regulatory filings, and AML monitoring.</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" /> Export Audit Log
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span className="text-sm text-slate-500">Verified</span>
            </div>
            <div className="text-3xl font-bold text-emerald-700">{kycStats.verified}</div>
            <div className="text-xs text-slate-500 mt-1">{((kycStats.verified / kycStats.total) * 100).toFixed(0)}% of total</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-amber-600" />
              <span className="text-sm text-slate-500">Pending</span>
            </div>
            <div className="text-3xl font-bold text-amber-600">{kycStats.pending}</div>
            <div className="text-xs text-slate-500 mt-1">Requires action</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="h-5 w-5 text-rose-600" />
              <span className="text-sm text-slate-500">Rejected</span>
            </div>
            <div className="text-3xl font-bold text-rose-600">{kycStats.rejected}</div>
            <div className="text-xs text-slate-500 mt-1">Blocked from investing</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-slate-500">AML Alerts</span>
            </div>
            <div className="text-3xl font-bold text-blue-600">{amlAlerts.length}</div>
            <div className="text-xs text-slate-500 mt-1">{amlAlerts.filter((a) => a.status === "Under Review").length} under review</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="kyc" className="w-full">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="kyc">Pending KYC</TabsTrigger>
          <TabsTrigger value="compliance">Regulatory Filings</TabsTrigger>
          <TabsTrigger value="aml">AML Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="kyc" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">KYC Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investor</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Documents</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingKYC.map((kyc) => (
                    <TableRow key={kyc.id}>
                      <TableCell>
                        <div className="text-sm font-medium">{kyc.name}</div>
                        <div className="text-xs text-slate-500">{kyc.id}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-xs">{kyc.type}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{kyc.submitted}</TableCell>
                      <TableCell>
                        <Badge className={
                          kyc.status === "Pending Review" ? "bg-amber-100 text-amber-700 text-xs" :
                          kyc.status === "Documents Missing" ? "bg-blue-100 text-blue-700 text-xs" :
                          "bg-red-100 text-red-700 text-xs"
                        }>
                          {kyc.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        <div className="flex items-center gap-2">
                          <Progress value={(kyc.documents / kyc.total) * 100} className="w-16 h-2" />
                          <span>{kyc.documents}/{kyc.total}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={
                          kyc.risk === "Low" ? "bg-emerald-100 text-emerald-700 text-xs" :
                          kyc.risk === "Medium" ? "bg-amber-100 text-amber-700 text-xs" :
                          "bg-red-100 text-red-700 text-xs"
                        }>
                          {kyc.risk}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm">Review</Button>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">Approve</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Regulatory Filing Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Filing ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complianceRecords.map((rec) => (
                    <TableRow key={rec.id}>
                      <TableCell className="font-mono text-xs">{rec.id}</TableCell>
                      <TableCell className="text-sm">{rec.type}</TableCell>
                      <TableCell className="text-sm">{rec.description}</TableCell>
                      <TableCell className="text-sm">{rec.due}</TableCell>
                      <TableCell>
                        <Badge className={rec.status === "Filed" ? "bg-emerald-100 text-emerald-700 text-xs" : "bg-amber-100 text-amber-700 text-xs"}>
                          {rec.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <FileCheck className="h-4 w-4 text-slate-400" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="aml" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">AML Monitoring Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Alert ID</TableHead>
                    <TableHead>Investor</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {amlAlerts.map((alert) => (
                    <TableRow key={alert.id}>
                      <TableCell className="font-mono text-xs">{alert.id}</TableCell>
                      <TableCell className="text-sm font-medium">{alert.investor}</TableCell>
                      <TableCell className="text-sm">{alert.type}</TableCell>
                      <TableCell>
                        <Badge className={
                          alert.severity === "High" ? "bg-red-100 text-red-700 text-xs" :
                          alert.severity === "Medium" ? "bg-amber-100 text-amber-700 text-xs" :
                          "bg-blue-100 text-blue-700 text-xs"
                        }>
                          {alert.severity}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{alert.date}</TableCell>
                      <TableCell>
                        <Badge className={alert.status === "Cleared" ? "bg-emerald-100 text-emerald-700 text-xs" : "bg-amber-100 text-amber-700 text-xs"}>
                          {alert.status}
                        </Badge>
                      </TableCell>
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
