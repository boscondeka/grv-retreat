import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileText, Eye, Shield, FileCheck, FileSignature } from "lucide-react"

const documents = [
  { id: "DOC-001", name: "Investment Agreement - Block C Maize", type: "Contract", date: "2024-03-15", size: "1.2 MB", signed: true, status: "Active" },
  { id: "DOC-002", name: "KYC Record - John Doe", type: "KYC", date: "2023-06-01", size: "3.4 MB", signed: false, status: "Verified" },
  { id: "DOC-003", name: "Plot Title Summary - PLOT-128-004", type: "Title", date: "2023-06-20", size: "0.8 MB", signed: true, status: "Registered" },
  { id: "DOC-004", name: "Crowdfunding Participation - POOL-2024-008", type: "Contract", date: "2024-02-10", size: "1.5 MB", signed: true, status: "Active" },
  { id: "DOC-005", name: "Q1 2024 Investment Statement", type: "Statement", date: "2024-04-05", size: "0.5 MB", signed: false, status: "Generated" },
  { id: "DOC-006", name: "Q2 2024 Investment Statement", type: "Statement", date: "2024-07-05", size: "0.6 MB", signed: false, status: "Generated" },
  { id: "DOC-007", name: "Disbursement Receipt - DISB-2024-0156", type: "Receipt", date: "2024-04-28", size: "0.3 MB", signed: false, status: "Confirmed" },
  { id: "DOC-008", name: "Tax Certificate - WHT 2024", type: "Tax", date: "2024-01-31", size: "0.4 MB", signed: false, status: "Filed" },
]

const kycStatus = {
  status: "Verified",
  date: "2023-06-01",
  documents: [
    { label: "National ID / Passport", provided: true },
    { label: "Tax PIN (KRA)", provided: true },
    { label: "Proof of Address", provided: true },
    { label: "Bank Statement", provided: true },
    { label: "AML Screening", provided: true },
  ],
}

export default function InvestorDocuments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Documents</h1>
        <p className="text-slate-500 text-sm mt-1">All your contracts, statements, receipts, and KYC records.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-slate-900">KYC Verification Status</h3>
                <Badge className="bg-emerald-100 text-emerald-700">{kycStatus.status}</Badge>
              </div>
              <p className="text-sm text-slate-500">Verified on {kycStatus.date} · All required documents submitted</p>
            </div>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
            {kycStatus.documents.map((doc) => (
              <div key={doc.label} className="flex items-center gap-2 text-sm">
                <FileCheck className={`h-4 w-4 ${doc.provided ? "text-emerald-500" : "text-slate-300"}`} />
                <span className={doc.provided ? "text-slate-700" : "text-slate-400"}>{doc.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Document Library</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Signed</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-slate-400" />
                      <span className="text-sm font-medium">{doc.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">{doc.type}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{doc.date}</TableCell>
                  <TableCell className="text-sm">{doc.size}</TableCell>
                  <TableCell>
                    <Badge className={
                      doc.status === "Active" ? "bg-emerald-100 text-emerald-700" :
                      doc.status === "Verified" ? "bg-blue-100 text-blue-700" :
                      doc.status === "Registered" ? "bg-violet-100 text-violet-700" :
                      "bg-slate-100 text-slate-700"
                    } text-xs>
                      {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {doc.signed ? (
                      <div className="flex items-center gap-1 text-emerald-600 text-sm">
                        <FileSignature className="h-4 w-4" /> Yes
                      </div>
                    ) : (
                      <span className="text-slate-400 text-sm">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4 text-slate-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4 text-slate-400" />
                      </Button>
                    </div>
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
