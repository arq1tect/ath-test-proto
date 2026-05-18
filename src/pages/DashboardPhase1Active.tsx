import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Terminal, TrendingUp, TrendingDown, Calendar, Target, AlertTriangle, ArrowUpRight } from 'lucide-react'
import { MOCK_ACCOUNT_PHASE1_ACTIVE } from '../mockData'
import type { Trade } from '../types'

const acc = MOCK_ACCOUNT_PHASE1_ACTIVE

function fmt(n: number, decimals = 2) {
  return n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}

function StatCard({ label, value, sub, positive }: { label: string; value: string; sub?: string; positive?: boolean }) {
  return (
    <div style={{
      background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 10,
      padding: '18px 20px',
    }}>
      <div style={{ fontSize: 11, color: '#475569', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#f1f5f9', letterSpacing: '-0.02em' }}>
        {value}
      </div>
      {sub && (
        <div style={{ fontSize: 12, color: positive === undefined ? '#64748b' : positive ? '#22c55e' : '#f43f5e', marginTop: 4 }}>
          {sub}
        </div>
      )}
    </div>
  )
}

function ProgressBar({ value, color = '#6366f1' }: { value: number; color?: string }) {
  return (
    <div style={{ height: 6, background: '#1a1a28', borderRadius: 3, overflow: 'hidden' }}>
      <div style={{ width: `${Math.min(value, 100)}%`, height: '100%', background: color, borderRadius: 3, transition: 'width 0.3s' }} />
    </div>
  )
}

function RiskMeter({ label, usedPct, limitPct, limitAmt }: { label: string; usedPct: number; limitPct: number; limitAmt: number }) {
  const color = usedPct > 70 ? '#f43f5e' : usedPct > 40 ? '#fbbf24' : '#22c55e'
  const usedAmt = (limitAmt * usedPct) / 100
  return (
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: '#64748b' }}>{label}</span>
        <span style={{ fontSize: 12, color }}>
          ${fmt(usedAmt, 0)} / ${fmt(limitAmt, 0)} ({limitPct}%)
        </span>
      </div>
      <ProgressBar value={usedPct} color={color} />
      <div style={{ fontSize: 11, color: '#334155', marginTop: 4 }}>
        {usedPct.toFixed(0)}% of limit used
      </div>
    </div>
  )
}

function TradeRow({ trade }: { trade: Trade }) {
  const positive = trade.pnl >= 0
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 0', borderBottom: '1px solid #13131f',
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8,
        background: trade.direction === 'long' ? '#052e16' : '#2d0a0a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {trade.direction === 'long'
          ? <TrendingUp size={14} color="#22c55e" />
          : <TrendingDown size={14} color="#f43f5e" />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{trade.symbol}</div>
        <div style={{ fontSize: 11, color: '#475569' }}>
          {trade.direction === 'long' ? 'Long' : 'Short'} · {trade.lots} lots
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: positive ? '#22c55e' : '#f43f5e' }}>
          {positive ? '+' : ''}{fmt(trade.pnl)}
        </div>
        <div style={{ fontSize: 11, color: '#334155' }}>{trade.closedAt}</div>
      </div>
    </div>
  )
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: '#11111c', border: '1px solid #1e1e30',
      borderRadius: 8, padding: '8px 12px', fontSize: 12,
    }}>
      <div style={{ color: '#64748b', marginBottom: 4 }}>{label}</div>
      <div style={{ color: '#f1f5f9', fontWeight: 600 }}>${fmt(payload[0].value, 0)}</div>
    </div>
  )
}

export function DashboardPhase1Active() {
  const profitTargetAmt = acc.size * (acc.profitTargetPct / 100)
  const profitProgress = Math.min((acc.totalPnl / profitTargetAmt) * 100, 100)

  return (
    <div style={{ padding: '24px', maxWidth: 1100 }}>

      {/* Phase status bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 10,
        padding: '14px 20px', marginBottom: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              PHASE 1
            </div>
            <div style={{ width: 1, height: 14, background: '#1e1e30' }} />
            <div style={{ fontSize: 12, color: '#64748b' }}>
              {acc.id} · {acc.blocks} Blocks · ${(acc.size / 1000).toFixed(0)}K
            </div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: '#022c22', border: '1px solid #064e3b', borderRadius: 6,
            padding: '3px 10px', fontSize: 11, color: '#22c55e', fontWeight: 600,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
            Active
          </div>
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 7,
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          border: 'none', borderRadius: 7, padding: '8px 16px',
          color: '#fff', fontSize: 12, cursor: 'pointer', fontWeight: 600,
        }}>
          <Terminal size={13} />
          Open Terminal
          <ArrowUpRight size={12} />
        </button>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
        <StatCard label="Balance"    value={`$${fmt(acc.balance, 0)}`}  />
        <StatCard label="Equity"     value={`$${fmt(acc.equity, 0)}`}   />
        <StatCard label="Total P&L"  value={`+$${fmt(acc.totalPnl, 0)}`} sub={`+${((acc.totalPnl / acc.size) * 100).toFixed(2)}%`} positive={true} />
        <StatCard label="Daily P&L"  value={`+$${fmt(acc.dailyPnl, 0)}`} sub={`+${((acc.dailyPnl / acc.size) * 100).toFixed(2)}%`} positive={true} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 16 }}>

        {/* Balance chart */}
        <div style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 10, padding: '20px' }}>
          <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Balance History
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={acc.balanceHistory}>
              <defs>
                <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a28" />
              <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#334155' }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fontSize: 10, fill: '#334155' }}
                axisLine={false} tickLine={false}
                tickFormatter={v => `$${(v / 1000).toFixed(0)}K`}
                domain={['auto', 'auto']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={2} fill="url(#balGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Targets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 10, padding: '18px 20px', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Target size={14} color="#6366f1" />
              <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Profit Target
              </span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 4 }}>
              ${fmt(acc.totalPnl, 0)}
              <span style={{ fontSize: 13, color: '#334155', fontWeight: 400 }}> / ${fmt(profitTargetAmt, 0)}</span>
            </div>
            <div style={{ fontSize: 12, color: '#64748b', marginBottom: 10 }}>
              {profitProgress.toFixed(1)}% of {acc.profitTargetPct}% target
            </div>
            <ProgressBar value={profitProgress} color="#6366f1" />
          </div>

          <div style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 10, padding: '18px 20px', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Calendar size={14} color="#6366f1" />
              <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Trading Days
              </span>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {Array.from({ length: acc.requiredTradingDays }).map((_, i) => (
                <div key={i} style={{
                  height: 28, flex: 1, borderRadius: 5,
                  background: i < acc.tradingDays ? '#6366f1' : '#1a1a28',
                }} />
              ))}
            </div>
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 8 }}>
              {acc.tradingDays} of {acc.requiredTradingDays} days completed
            </div>
          </div>
        </div>
      </div>

      {/* Risk meters */}
      <div style={{
        background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 10,
        padding: '18px 20px', marginBottom: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <AlertTriangle size={14} color="#fbbf24" />
          <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Risk Meters
          </span>
        </div>
        <div style={{ display: 'flex', gap: 40 }}>
          <RiskMeter
            label="Daily Drawdown"
            usedPct={acc.dailyDDUsedPct}
            limitPct={acc.dailyDDLimitPct}
            limitAmt={acc.size * (acc.dailyDDLimitPct / 100)}
          />
          <RiskMeter
            label="Max Drawdown"
            usedPct={acc.maxDDUsedPct}
            limitPct={acc.maxDDLimitPct}
            limitAmt={acc.size * (acc.maxDDLimitPct / 100)}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

        {/* Open positions */}
        <div style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 10, padding: '18px 20px' }}>
          <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14 }}>
            Open Positions ({acc.openPositions.length})
          </div>
          {acc.openPositions.map(t => (
            <div key={t.id} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 0', borderBottom: '1px solid #13131f',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7,
                background: t.direction === 'long' ? '#052e16' : '#2d0a0a',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {t.direction === 'long'
                  ? <TrendingUp size={13} color="#22c55e" />
                  : <TrendingDown size={13} color="#f43f5e" />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{t.symbol}</div>
                <div style={{ fontSize: 11, color: '#475569' }}>{t.lots} lots · @{t.entryPrice}</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e' }}>
                +${fmt(t.pnl)}
              </div>
            </div>
          ))}
        </div>

        {/* Recent trades */}
        <div style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 10, padding: '18px 20px' }}>
          <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14 }}>
            Recent Trades
          </div>
          {acc.recentTrades.map(t => <TradeRow key={t.id} trade={t} />)}
        </div>
      </div>
    </div>
  )
}
