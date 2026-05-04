import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wallet, ArrowDownRight, ArrowUpRight, Smartphone, Building2, CreditCard, Globe } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const walletSummary = {
  balance: 87450,
  usdEquivalent: 672.50,
  pending: 18500,
  locked: 40000,
  total: 145950,
}

const paymentMethods = [
  { id: "mpesa", name: "M-Pesa", type: "Mobile Money", number: "+254 712 345 678", icon: Smartphone, status: "Active" },
  { id: "kcb", name: "KCB Bank", type: "Bank Account", number: "1234567890", icon: Building2, status: "Active" },
  { id: "equity", name: "Equity Bank", type: "Bank Account", number: "0987654321", icon: Building2, status: "Active" },
  { id: "stripe", name: "Visa ending in 4242", type: "Card", number: "USD Card", icon: CreditCard, status: "Active" },
]

const transactions = [
  { id: "TXN-2024-0891", date: "2024-05-02", type: "Deposit", method: "M-Pesa", amount: 50000, status: "Completed" },
  { id: "TXN-2024-0856", date: "2024-04-28", type: "Disbursement", method: "M-Pesa", amount: -18500, status: "Completed" },
  { id: "TXN-2024-0843", date: "2024-04-20", type: "Investment", method: "Wallet", amount: -15000, status: "Completed" },
  { id: "TXN-2024-0821", date: "2024-04-15", type: "Deposit", method: "Bank Transfer", amount: 100000, status: "Completed" },
  { id: "TXN-2024-0798", date: "2024-04-10", type: "Withdrawal", method: "Bank Transfer", amount: -25000, status: "Completed" },
  { id: "TXN-2024-0772", date: "2024-04-05", type: "Investment", method: "Wallet", amount: -25000, status: "Completed" },
]

export default function InvestorWallet() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Wallet & Payments</h1>
        <p className="text-slate-500 text-sm mt-1">Manage funds, payment methods, and transaction history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Wallet className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Available Balance</div>
                <div className="text-3xl font-bold text-slate-900">KES {walletSummary.balance.toLocaleString()}</div>
                <div className="text-xs text-slate-500">≈ USD {walletSummary.usdEquivalent.toFixed(2)}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div>
                <div className="text-xs text-slate-500 mb-1">Pending Disbursements</div>
                <div className="text-lg font-semibold text-amber-600">KES {walletSummary.pending.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Locked in Cycles</div>
                <div className="text-lg font-semibold text-blue-600">KES {walletSummary.locked.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Total Value</div>
                <div className="text-lg font-semibold text-emerald-700">KES {walletSummary.total.toLocaleString()}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-3">
            <TopUpDialog />
            <WithdrawDialog />
            <Button variant="outline" className="w-full">
              <Globe className="h-4 w-4 mr-2" /> Currency Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="methods" className="w-full">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="methods" className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <Card key={method.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <method.icon className="h-5 w-5 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-900">{method.name}</h3>
                        <Badge className="bg-emerald-100 text-emerald-700 text-xs">{method.status}</Badge>
                      </div>
                      <div className="text-sm text-slate-500">{method.type} · {method.number}</div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400">
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="border-dashed border-2 border-slate-200">
              <CardContent className="p-6 flex items-center justify-center">
                <Button variant="ghost" className="text-slate-500">
                  + Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell className="font-mono text-xs">{tx.id}</TableCell>
                      <TableCell className="text-sm">{tx.date}</TableCell>
                      <TableCell className="text-sm">{tx.type}</TableCell>
                      <TableCell className="text-sm">{tx.method}</TableCell>
                      <TableCell className={`text-right text-sm font-medium ${tx.amount > 0 ? "text-emerald-700" : "text-amber-600"}`}>
                        {tx.amount > 0 ? "+" : ""}KES {Math.abs(tx.amount).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-emerald-100 text-emerald-700 text-xs">{tx.status}</Badge>
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

function TopUpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
          <ArrowDownRight className="h-4 w-4 mr-2" /> Top Up Wallet
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Top Up Wallet</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Amount (KES)</Label>
            <Input type="number" placeholder="Enter amount" />
          </div>
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <Select defaultValue="mpesa">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mpesa">M-Pesa STK Push</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="card">Card Payment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Proceed to Payment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function WithdrawDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <ArrowUpRight className="h-4 w-4 mr-2" /> Withdraw Funds
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Withdraw Funds</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="bg-slate-50 rounded-lg p-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Available</span>
              <span className="font-medium">KES 87,450</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Amount (KES)</Label>
            <Input type="number" placeholder="Enter amount" />
          </div>
          <div className="space-y-2">
            <Label>Withdraw To</Label>
            <Select defaultValue="mpesa">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mpesa">M-Pesa (+254 712 345 678)</SelectItem>
                <SelectItem value="kcb">KCB Bank (1234567890)</SelectItem>
                <SelectItem value="equity">Equity Bank (0987654321)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Request Withdrawal</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
