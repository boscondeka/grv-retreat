import { Routes, Route } from "react-router-dom"
import LandingPage from "./sections/LandingPage"
import { InvestorLayout, AdminLayout } from "./components/Layout"
import InvestorDashboard from "./sections/InvestorDashboard"
import InvestorPortfolio from "./sections/InvestorPortfolio"
import InvestorMarketplace from "./sections/InvestorMarketplace"
import InvestorReturns from "./sections/InvestorReturns"
import InvestorDocuments from "./sections/InvestorDocuments"
import InvestorWallet from "./sections/InvestorWallet"
import AdminDashboard from "./sections/AdminDashboard"
import AdminPlots from "./sections/AdminPlots"
import AdminAgriculture from "./sections/AdminAgriculture"
import AdminCRM from "./sections/AdminCRM"
import AdminCrowdfunding from "./sections/AdminCrowdfunding"
import AdminFinance from "./sections/AdminFinance"
import AdminCompliance from "./sections/AdminCompliance"
import AdminSettings from "./sections/AdminSettings"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/investor" element={<InvestorLayout><InvestorDashboard /></InvestorLayout>} />
      <Route path="/investor/portfolio" element={<InvestorLayout><InvestorPortfolio /></InvestorLayout>} />
      <Route path="/investor/marketplace" element={<InvestorLayout><InvestorMarketplace /></InvestorLayout>} />
      <Route path="/investor/returns" element={<InvestorLayout><InvestorReturns /></InvestorLayout>} />
      <Route path="/investor/documents" element={<InvestorLayout><InvestorDocuments /></InvestorLayout>} />
      <Route path="/investor/wallet" element={<InvestorLayout><InvestorWallet /></InvestorLayout>} />

      <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
      <Route path="/admin/plots" element={<AdminLayout><AdminPlots /></AdminLayout>} />
      <Route path="/admin/agriculture" element={<AdminLayout><AdminAgriculture /></AdminLayout>} />
      <Route path="/admin/crm" element={<AdminLayout><AdminCRM /></AdminLayout>} />
      <Route path="/admin/crowdfunding" element={<AdminLayout><AdminCrowdfunding /></AdminLayout>} />
      <Route path="/admin/finance" element={<AdminLayout><AdminFinance /></AdminLayout>} />
      <Route path="/admin/compliance" element={<AdminLayout><AdminCompliance /></AdminLayout>} />
      <Route path="/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
    </Routes>
  )
}

export default App
