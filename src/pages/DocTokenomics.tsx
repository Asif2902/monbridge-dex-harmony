import { useEffect } from "react"; import { DocsPagination } from "@/components/docs/DocsPagination";

const DocTokenomics = () => { useEffect(() => { window.scrollTo(0, 0); }, []);

return ( <div className="space-y-8"> <section className="doc-section section-animation-delay-0"> <h1 className="doc-title">Tokenomics</h1> <p className="doc-paragraph text-lg text-slate-600"> Token details and metrics will be revealed soon. </p> </section>

<section className="doc-section section-animation-delay-1">
    <h2 className="doc-subtitle">Token Overview</h2>
    <div className="doc-card">
      <div className="flex flex-col md:flex-row md:items-center mb-8">
        <div className="mb-6 md:mb-0 md:mr-8">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
            <img   
              src="https://monbridgedex.xyz/Tokenlogo.png"   
              alt="MBD Token Logo"   
              className="w-full h-full object-cover"
            />
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
              <div className="text-lg font-medium text-slate-800">To be revealed</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Total Supply</div>
              <div className="text-lg font-medium text-slate-800">To be revealed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-slate-800">Token Distribution</h3>
        <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
          <div className="text-xl font-medium text-slate-700">Distribution details to be revealed soon</div>
        </div>
      </div>
    </div>
  </section>

  <section className="doc-section section-animation-delay-2">
    <h2 className="doc-subtitle">Fee Structure & Distribution</h2>
    <div className="doc-card">
      <div className="text-center p-6">
        <div className="text-xl font-medium text-slate-700">Fee structure to be revealed soon</div>
      </div>
    </div>
  </section>

  <section className="doc-section section-animation-delay-3">
    <h2 className="doc-subtitle">Vesting Schedule</h2>
    <div className="doc-card">
      <div className="text-center p-6">
        <div className="text-xl font-medium text-slate-700">Vesting schedule to be revealed soon</div>
      </div>
    </div>
  </section>

  <DocsPagination />
</div>

); };

export default DocTokenomics;

