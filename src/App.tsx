import { useAppStore } from './store'
import { ViewStateSwitcher } from './components/ViewStateSwitcher'
import { Landing } from './pages/Landing'
import { AppLayout } from './components/Layout'
import { DashboardPhase1Active } from './pages/DashboardPhase1Active'
import { ComingSoon } from './pages/ComingSoon'

function DashboardContent() {
  const viewState = useAppStore(s => s.viewState)

  if (viewState === 'phase_1_active') return <DashboardPhase1Active />
  return <ComingSoon state={viewState} />
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
