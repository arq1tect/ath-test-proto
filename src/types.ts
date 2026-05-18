export type ViewState =
  | 'guest'
  | 'auth_no_accounts'
  | 'kyc_pending'
  | 'phase_1_active'
  | 'phase_1_warning'
  | 'phase_1_failed'
  | 'phase_1_hard_breach'
  | 'phase_1_passed'
  | 'phase_2_active'
  | 'phase_2_failed'
  | 'phase_2_passed'
  | 'funded_active'
  | 'funded_eligible_payout'
  | 'funded_payout_requested'
  | 'funded_hard_breach'
  | 'multiple_active'

export const VIEW_STATE_LIST: Array<{ id: ViewState; label: string; group: string }> = [
  { id: 'guest',                  label: 'Guest',                   group: 'Public' },
  { id: 'auth_no_accounts',       label: 'Auth — No Accounts',      group: 'Onboarding' },
  { id: 'kyc_pending',            label: 'KYC Pending',             group: 'Onboarding' },
  { id: 'phase_1_active',         label: 'Phase 1 — Active',        group: 'Phase 1' },
  { id: 'phase_1_warning',        label: 'Phase 1 — Warning',       group: 'Phase 1' },
  { id: 'phase_1_failed',         label: 'Phase 1 — Failed',        group: 'Phase 1' },
  { id: 'phase_1_hard_breach',    label: 'Phase 1 — Hard Breach',   group: 'Phase 1' },
  { id: 'phase_1_passed',         label: 'Phase 1 — Passed',        group: 'Phase 1' },
  { id: 'phase_2_active',         label: 'Phase 2 — Active',        group: 'Phase 2' },
  { id: 'phase_2_failed',         label: 'Phase 2 — Failed',        group: 'Phase 2' },
  { id: 'phase_2_passed',         label: 'Phase 2 — Passed',        group: 'Phase 2' },
  { id: 'funded_active',          label: 'Funded — Active',         group: 'Funded' },
  { id: 'funded_eligible_payout', label: 'Funded — Payout Eligible', group: 'Funded' },
  { id: 'funded_payout_requested',label: 'Funded — Payout Requested', group: 'Funded' },
  { id: 'funded_hard_breach',     label: 'Funded — Hard Breach',    group: 'Funded' },
  { id: 'multiple_active',        label: 'Multiple Active',         group: 'Special' },
]

export interface Trade {
  id: string
  symbol: string
  direction: 'long' | 'short'
  lots: number
  entryPrice: number
  exitPrice?: number
  pnl: number
  closedAt?: string
  isOpen: boolean
}

export interface BalancePoint {
  day: string
  balance: number
}

export interface MockAccount {
  id: string
  size: number
  blocks: number
  phase: 'phase_1' | 'phase_2' | 'funded'
  balance: number
  equity: number
  totalPnl: number
  dailyPnl: number
  tradingDays: number
  requiredTradingDays: number
  profitTargetPct: number
  dailyDDLimitPct: number
  maxDDLimitPct: number
  dailyDDUsedPct: number
  maxDDUsedPct: number
  startDate: string
  openPositions: Trade[]
  recentTrades: Trade[]
  balanceHistory: BalancePoint[]
}
