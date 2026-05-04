import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Settings, Bell, Shield, Globe, Users, Wallet } from "lucide-react"

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Platform Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Configure system parameters, integrations, and user preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 space-y-6">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg flex items-center gap-2">
              <Settings className="h-5 w-5 text-slate-600" />
              General Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Platform Name</Label>
                <Input defaultValue="Great Rift Valley Retreat" />
              </div>
              <div className="space-y-2">
                <Label>Support Email</Label>
                <Input defaultValue="inquiries@greatriftvalleyretreat.com" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Default Currency</Label>
                <Select defaultValue="kes">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kes">KES (Kenyan Shilling)</SelectItem>
                    <SelectItem value="usd">USD (US Dollar)</SelectItem>
                    <SelectItem value="gbp">GBP (British Pound)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Timezone</Label>
                <Select defaultValue="nairobi">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nairobi">Africa/Nairobi (EAT)</SelectItem>
                    <SelectItem value="london">Europe/London (GMT/BST)</SelectItem>
                    <SelectItem value="new_york">America/New_York (ET)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className="h-4 w-4" /> Security Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Require 2FA for Admin Users</div>
                    <div className="text-xs text-slate-500">Enforce authenticator app or hardware token</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Require 2FA for Investors</div>
                    <div className="text-xs text-slate-500">SMS or email OTP for portal access</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Session Timeout</div>
                    <div className="text-xs text-slate-500">Auto-logout after inactivity</div>
                  </div>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4" /> Payment Integrations
              </h3>
              <div className="space-y-4">
                {[
                  { name: "M-Pesa (Daraja API)", status: "Connected", type: "Mobile Money" },
                  { name: "KCB Bank (Pesalink)", status: "Connected", type: "Bank Transfer" },
                  { name: "Equity Bank (EazzyAPI)", status: "Connected", type: "Bank Transfer" },
                  { name: "Stripe", status: "Connected", type: "Card / International" },
                ].map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Wallet className="h-4 w-4 text-slate-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{integration.name}</div>
                        <div className="text-xs text-slate-500">{integration.type}</div>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 text-xs">{integration.status}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="flex justify-end gap-2">
              <Button variant="outline">Reset Changes</Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Save Settings</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-5 w-5 text-slate-600" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm">New Investor Registration</div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">KYC Submission</div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Cycle Harvest Complete</div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Disbursement Triggered</div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Pool Fully Funded</div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Daily Summary Email</div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-slate-600" />
                Staff Access
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Alice Wanjiku", role: "Sales Manager", status: "Active" },
                { name: "Bob Otieno", role: "Farm Manager", status: "Active" },
                { name: "Carol Mwangi", role: "Finance Officer", status: "Active" },
              ].map((staff) => (
                <div key={staff.name} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <div>
                    <div className="text-sm font-medium">{staff.name}</div>
                    <div className="text-xs text-slate-500">{staff.role}</div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">{staff.status}</Badge>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full">+ Add Staff Member</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
