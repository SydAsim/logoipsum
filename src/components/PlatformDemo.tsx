import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Database,
  Code2,
  CheckCircle2,
  BarChart3,
  Layers,
  RefreshCw,
  Zap,
  Sliders
} from 'lucide-react';

interface DatasetScenario {
  id: string;
  title: string;
  badge: string;
  query: string;
  metrics: { label: string; value: string; change: string; positive: boolean }[];
  insights: string[];
  chartData: { label: string; v1: number; v2: number }[];
  sqlSnippet: string;
}

const scenarios: DatasetScenario[] = [
  {
    id: 'retention',
    title: 'Customer Cohort Retention',
    badge: 'Growth Analytics',
    query: 'Identify high-value cohorts with >65% 90-day retention and surface churn triggers.',
    metrics: [
      { label: '90-Day Retention', value: '68.4%', change: '+14.2% YoY', positive: true },
      { label: 'Net Revenue Retention', value: '134%', change: '+8.1%', positive: true },
      { label: 'Identified Churn Risk', value: '3.1%', change: '-2.4%', positive: true },
      { label: 'Avg LTV Expansion', value: '$4,280', change: '+$840', positive: true }
    ],
    insights: [
      'Teams onboarded with automated Slack alerts exhibit 3.4x higher 6-month stickiness.',
      'Feature adoption spike occurring between Day 14 and Day 21 correlates with 89% annual renewal rate.',
      'Identified 42 accounts in the mid-market tier eligible for zero-touch annual tier upgrade.'
    ],
    chartData: [
      { label: 'Week 1', v1: 98, v2: 95 },
      { label: 'Week 2', v1: 89, v2: 84 },
      { label: 'Week 4', v1: 82, v2: 74 },
      { label: 'Week 8', v1: 76, v2: 65 },
      { label: 'Week 12', v1: 72, v2: 58 },
      { label: 'Week 16', v1: 68, v2: 51 }
    ],
    sqlSnippet: `WITH cohort_retention AS (
  SELECT user_id, DATE_TRUNC('month', created_at) AS cohort_month,
         EXTRACT(DAY FROM last_active - created_at) AS retention_days
  FROM analytics.user_sessions
)
SELECT cohort_month, COUNT(DISTINCT user_id) AS total_users,
       AVG(CASE WHEN retention_days >= 90 THEN 1.0 ELSE 0.0 END) AS rate_90d
FROM cohort_retention
GROUP BY 1 ORDER BY 1 DESC;`
  },
  {
    id: 'arr-growth',
    title: 'SaaS ARR & Revenue Run-rate',
    badge: 'Financial Modeling',
    query: 'Decompose current $18.4M ARR by product tier, expansion velocity, and payback period.',
    metrics: [
      { label: 'Current ARR', value: '$18.42M', change: '+86% YoY', positive: true },
      { label: 'CAC Payback', value: '5.2 mo', change: '-1.8 mo', positive: true },
      { label: 'Gross Margin', value: '82.4%', change: '+3.1%', positive: true },
      { label: 'Expansion ARR', value: '$4.18M', change: '+44%', positive: true }
    ],
    insights: [
      'Enterprise tier is driving 62% of net new ARR additions with average deal cycle of 22 days.',
      'Self-serve conversion velocity accelerated by 29% following instant preview activation.',
      'Projected to hit $25M ARR milestone 45 days ahead of prior quarterly forecast.'
    ],
    chartData: [
      { label: 'Q1', v1: 10.2, v2: 8.5 },
      { label: 'Q2', v1: 12.6, v2: 10.1 },
      { label: 'Q3', v1: 15.3, v2: 12.0 },
      { label: 'Q4', v1: 18.4, v2: 14.2 },
      { label: 'Q1 Projected', v1: 21.8, v2: 16.8 },
      { label: 'Q2 Projected', v1: 25.4, v2: 19.5 }
    ],
    sqlSnippet: `SELECT 
  product_tier,
  SUM(monthly_recurring_rev * 12) AS annualized_arr,
  AVG(cac_usd / NULLIF(mrr_usd, 0)) AS payback_months
FROM finance.subscriptions
WHERE status = 'ACTIVE'
GROUP BY product_tier;`
  },
  {
    id: 'supply-chain',
    title: 'Global Supply Chain Latency',
    badge: 'Operations',
    query: 'Flag fulfillment bottlenecks and calculate routing optimizations across global fulfillment hubs.',
    metrics: [
      { label: 'Avg Fulfillment Time', value: '18.2 hr', change: '-34%', positive: true },
      { label: 'Freight Cost / Unit', value: '$2.14', change: '-12.8%', positive: true },
      { label: 'On-Time Delivery', value: '99.4%', change: '+4.2%', positive: true },
      { label: 'Route Redundancy', value: '94.8%', change: '+18%', positive: true }
    ],
    insights: [
      'Rerouting high-density shipments through regional cross-dock hubs trimmed 14.6 hours per batch.',
      'Automated predictive customs paperwork reduced clearance holds from 3.2% to 0.1%.',
      'Inventory turnover frequency increased from 8.2x to 11.4x annually across key SKUs.'
    ],
    chartData: [
      { label: 'Jan', v1: 32, v2: 44 },
      { label: 'Feb', v1: 28, v2: 41 },
      { label: 'Mar', v1: 24, v2: 38 },
      { label: 'Apr', v1: 21, v2: 35 },
      { label: 'May', v1: 19, v2: 33 },
      { label: 'Jun', v1: 18, v2: 31 }
    ],
    sqlSnippet: `SELECT 
  hub_location,
  AVG(EXTRACT(EPOCH FROM (delivered_at - dispatched_at))/3600) AS avg_hours,
  PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY customs_duration_min) AS p95_customs
FROM logistics.dispatches
GROUP BY hub_location;`
  }
];

export const PlatformDemo: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState('retention');
  const [viewMode, setViewMode] = useState<'visual' | 'sql'>('visual');
  const [isTransforming, setIsTransforming] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleSimulateTransform = () => {
    setIsTransforming(true);
    setTimeout(() => {
      setIsTransforming(false);
    }, 800);
  };

  return (
    <section id="platform" className="w-full py-20 px-6 lg:px-[120px] relative z-10 bg-gradient-to-b from-transparent via-white/80 to-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-xs font-inter font-medium text-black mb-3">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Interactive Data Sandbox</span>
          </div>
          <h2 className="font-fustat font-bold text-3xl sm:text-5xl text-black tracking-tight mb-4">
            From Raw Complex Data to Instant Clarity
          </h2>
          <p className="font-fustat font-medium text-lg text-[#505050]">
            Experience how our intelligent engine parses messy tabular sources, generates vectorized transforms, and delivers instant, executive-grade intelligence.
          </p>
        </div>

        {/* Dataset Scenario Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {scenarios.map((scenario) => {
            const isActive = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                onClick={() => {
                  setActiveScenarioId(scenario.id);
                  handleSimulateTransform();
                }}
                className={`px-4 py-2 rounded-full font-schibsted text-sm font-medium transition-all flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-black text-white border-black shadow-md'
                    : 'bg-white/80 text-black/70 hover:text-black border-black/10 hover:bg-white'
                }`}
              >
                <span>{scenario.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-inter ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-black/60'
                  }`}
                >
                  {scenario.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Platform Console Card */}
        <div className="bg-white rounded-2xl border border-black/10 shadow-2xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="bg-gray-50/80 border-b border-black/5 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="font-mono text-xs text-gray-500 ml-2">
                active-stream://{activeScenario.id}.parquet
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-gray-200/70 p-0.5 rounded-lg flex items-center">
                <button
                  onClick={() => setViewMode('visual')}
                  className={`px-3 py-1 text-xs font-schibsted font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'visual' ? 'bg-white text-black shadow-xs' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Visual Analysis</span>
                </button>
                <button
                  onClick={() => setViewMode('sql')}
                  className={`px-3 py-1 text-xs font-schibsted font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'sql' ? 'bg-white text-black shadow-xs' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Generated SQL / Code</span>
                </button>
              </div>

              <button
                onClick={handleSimulateTransform}
                disabled={isTransforming}
                className="px-3 py-1 bg-black text-white text-xs font-schibsted font-medium rounded-lg flex items-center gap-1.5 hover:bg-black/80 transition-all cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isTransforming ? 'animate-spin' : ''}`} />
                <span>{isTransforming ? 'Transforming...' : 'Re-run AI'}</span>
              </button>
            </div>
          </div>

          {/* Active Prompt Query Strip */}
          <div className="px-6 py-3.5 bg-black/[0.02] border-b border-black/5 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0">
              <Zap className="w-3.5 h-3.5 fill-white" />
            </div>
            <div className="font-schibsted text-sm text-black flex-1 font-medium">
              <span className="text-gray-400 mr-2">Query:</span>
              "{activeScenario.query}"
            </div>
            <span className="text-xs font-schibsted font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 hidden sm:inline-block">
              Latency: 142ms
            </span>
          </div>

          {/* Body Content: Visual Charts & Metrics OR SQL Code */}
          <div className="p-6 lg:p-8">
            {viewMode === 'visual' ? (
              <div className="space-y-8">
                {/* 4 Metric KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activeScenario.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50/60 rounded-xl p-4 border border-black/5 hover:border-black/20 transition-all group"
                    >
                      <div className="text-xs font-schibsted text-gray-500 mb-1 group-hover:text-black transition-colors">
                        {metric.label}
                      </div>
                      <div className="font-fustat font-bold text-2xl lg:text-3xl text-black">
                        {metric.value}
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs font-schibsted font-semibold text-emerald-600 mt-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dynamic SVG Interactive Chart & Insights Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Custom Clean SVG Chart */}
                  <div className="lg:col-span-7 bg-white rounded-xl p-5 border border-black/10 shadow-xs">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-schibsted font-semibold text-sm text-black">
                          Performance Trajectory
                        </h4>
                        <p className="text-xs text-gray-400 font-schibsted">
                          Real-time stream with historical baseline comparison
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-schibsted">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-black" />
                          <span className="text-gray-600">Model Optimized</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                          <span className="text-gray-400">Baseline</span>
                        </div>
                      </div>
                    </div>

                    {/* SVG Visualization */}
                    <div className="w-full h-56 relative flex items-end pt-4">
                      <div className="w-full h-full flex items-end justify-between gap-2 px-2">
                        {activeScenario.chartData.map((d, i) => {
                          const maxVal = Math.max(...activeScenario.chartData.map((item) => Math.max(item.v1, item.v2)));
                          const heightPct1 = (d.v1 / maxVal) * 85;
                          const heightPct2 = (d.v2 / maxVal) * 85;
                          const isHovered = hoveredPoint === i;

                          return (
                            <div
                              key={i}
                              onMouseEnter={() => setHoveredPoint(i)}
                              onMouseLeave={() => setHoveredPoint(null)}
                              className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                            >
                              {/* Hover Tooltip */}
                              {isHovered && (
                                <div className="absolute -top-10 bg-black text-white text-[11px] font-schibsted py-1 px-2.5 rounded-md shadow-lg z-20 whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
                                  <div>Opt: {d.v1} | Base: {d.v2}</div>
                                </div>
                              )}

                              <div className="w-full flex items-end justify-center gap-1.5 h-full">
                                {/* Bar 1 (Model Optimized) */}
                                <div
                                  style={{ height: `${heightPct1}%` }}
                                  className="w-full max-w-[20px] bg-black rounded-t-sm transition-all duration-300 group-hover:bg-black/80"
                                />
                                {/* Bar 2 (Baseline) */}
                                <div
                                  style={{ height: `${heightPct2}%` }}
                                  className="w-full max-w-[20px] bg-gray-200 rounded-t-sm transition-all duration-300 group-hover:bg-gray-300"
                                />
                              </div>

                              <span className="text-[11px] font-schibsted text-gray-500 mt-2 truncate w-full text-center">
                                {d.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right: AI Synthesis & Actionable Takeaways */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                    <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-5">
                      <div className="flex items-center gap-2 text-emerald-800 font-schibsted font-semibold text-sm mb-3">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>GPT-4o Executive Synthesis</span>
                      </div>
                      <div className="space-y-2.5">
                        {activeScenario.insights.map((insight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-schibsted text-gray-800 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 border border-black/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-black" />
                        <span className="text-xs font-schibsted font-medium text-gray-700">
                          Automated scheduled refresh
                        </span>
                      </div>
                      <span className="text-xs font-schibsted text-emerald-600 font-semibold">
                        Every 15 min
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* SQL / Code View */
              <div className="relative">
                <div className="bg-gray-950 text-gray-100 p-6 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-gray-800">
                  <pre>{activeScenario.sqlSnippet}</pre>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-schibsted text-gray-500">
                  <span>Engine: Vectorized DuckDB + PostgreSQL Dialect</span>
                  <span className="text-black font-medium">100% Deterministic & Verifiable</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
