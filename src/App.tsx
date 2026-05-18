import { useAppStore } from './store'
import { ViewStateSwitcher } from './components/ViewStateSwitcher'
import { Landing } from './pages/Landing'
import { AppLayout } from './components/Layout'
import { DashboardPhase1Active } from './pages/DashboardPhase1Active'
import { DashboardPhase1Warning } from './pages/DashboardPhase1Warning'
import { DashboardPhase2Active } from './pages/DashboardPhase2Active'
import { FundedDashboard } from './pages/FundedDashboard'
import { AuthNoAccounts } from './pages/AuthNoAccounts'
import { KycPending } from './pages/KycPending'
import { PhasePassed } from './pages/PhasePassed'
import { AccountFailed } from './pages/AccountFailed'
import { HardBreach } from './pages/HardBreach'
import { MultipleActive } from './pages/MultipleActive'

function DashboardContent() {
  const viewState = useAppStore(s => s.viewState)
  switch (viewState) {
    case 'auth_no_accounts':        return <AuthNoAccounts />
    case 'kyc_pending':             return <KycPending />
    case 'phase_1_active':          return <DashboardPhase1Active />
    case 'phase_1_warning':         return <DashboardPhase1Warning />
    case 'phase_1_failed':          return <AccountFailed phase="phase_1" />
    case 'phase_1_hard_breach':     return <HardBreach phase="phase_1" />
    case 'phase_1_passed':          return <PhasePassed phase="phase_1" />
    case 'phase_2_active':          return <DashboardPhase2Active />
    case 'phase_2_failed':          return <AccountFailed phase="phase_2" />
    case 'phase_2_passed':          return <PhasePassed phase="phase_2" />
    case 'funded_active':           return <FundedDashboard variant="active" />
    case 'funded_eligible_payout':  return <FundedDashboard variant="eligible" />
    case 'funded_payout_requested': return <FundedDashboard variant="requested" />
    case 'funded_hard_breach':      return <HardBreach phase="funded" />
    case 'multiple_active':         return <MultipleActive />
    default:                        return null
  }
}

export default function App() {
  const viewState = useAppStore(s => s.viewState)
  return (
    <>
      {viewState === 'guest' ? (
        <Landing />
      ) : (
        <AppLayout>
          <DashboardContent />
        </AppLayout>
      )}
      <ViewStateSwitcher />
    </>
  )
}
