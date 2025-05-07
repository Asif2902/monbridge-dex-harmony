import { useEffect } from "react"; import { DocsPagination } from "@/components/docs/DocsPagination";

const DocTokenomics = () => { useEffect(() => { window.scrollTo(0, 0); }, []);

return ( <div className="space-y-8"> <section className="doc-section section-animation-delay-0"> <h1 className="doc-title">Tokenomics</h1> <p className="doc-paragraph text-lg text-slate-600"> Token details and metrics will be revealed soon. </p> </section>

<section className="doc-section section-animation-delay-1">
    <h2 className="doc-subtitle">Token Overview</h2>
    <div className="doc-card">
      <div className="flex flex-col md:flex-row md:items-center mb-8">
        <div className="mb-6 md:mb-0 md:mr-8">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden bg-gray-100">
            {/* Logo coming soon placeholder */}
            <div className="text-xs text-slate-400">Logo Coming Soon</div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-slate-500">Token Name</div>
              <div className="text-lg font-medium text-slate-800">To be revealed</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Symbol</div>
              <div className="text-lg font-medium text-slate-800">TBR</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Total Supply</div>
              <div className="text-lg font-medium text-slate-800">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-slate-800">Token Distribution</h3>
        <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Distribution bars hidden until reveal */}
            <div className="flex flex-col items-center opacity-50">
              <div className="text-2xl font-medium text-slate-800">--</div>
              <div className="text-sm text-slate-600 text-center">Community</div>
            </div>
            <div className="flex flex-col items-center opacity-50">
              <div className="text-2xl font-medium text-slate-800">--</div>
              <div className="text-sm text-slate-600 text-center">Team</div>
            </div>
            <div className="flex flex-col items-center opacity-50">
              <div className="text-2xl font-medium text-slate-800">--</div>
              <div className="text-sm text-slate-600 text-center">Pre-sell</div>
            </div>
            <div className="flex flex-col items-center opacity-50">
              <div className="text-2xl font-medium text-slate-800">--</div>
              <div className="text-sm text-slate-600 text-center">Listing</div>
            </div>
            <div className="flex flex-col items-center opacity-50">
              <div className="text-2xl font-medium text-slate-800">--</div>
              <div className="text-sm text-slate-600 text-center">Others</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 text-center text-sm text-slate-500">
            Details will be revealed soon
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="doc-section section-animation-delay-2">
    <h2 className="doc-subtitle">Fee Structure & Distribution</h2>
    <div className="doc-card opacity-75">
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-6 text-slate-800">Fee Distribution Model</h3>
        <p className="text-sm text-slate-500 mb-4">Will be available after token launch.</p>
      </div>
    </div>
  </section>

  <section className="doc-section section-animation-delay-3">
    <h2 className="doc-subtitle">Vesting Schedule</h2>
    <div className="doc-card opacity-75">
      <p className="doc-paragraph mb-6">
        Vesting details will be announced soon.
      </p>
    </div>
  </section>

  <DocsPagination />
</div>

); };

export default DocTokenomics;

