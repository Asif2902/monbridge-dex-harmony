 import { useEffect } from "react";
import { DocsPagination } from "@/components/docs/DocsPagination";

const DocDeepLinking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <section className="doc-section section-animation-delay-0">
        <h1 className="doc-title">Deep Linking Support</h1>
        <p className="doc-paragraph text-lg text-slate-600">
          Learn how to use MonBridgeDex's deep linking features for direct swap interface integration.
        </p>
      </section>

      <section className="doc-section section-animation-delay-1">
        <h2 className="doc-subtitle">URL Format</h2>
        <div className="doc-card">
          <div className="mb-6">
            <h3 className="text-md font-medium text-slate-800">Basic Structure</h3>
            <div className="mt-2 p-4 bg-slate-50 rounded-lg border border-slate-200 font-mono text-sm">
              https://monbridgedex.xyz/swap?tokenIn+tokenOut
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-slate-800">Parameters:</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="font-mono text-monbridge-600 min-w-[80px] mt-1">tokenIn:</span>
                  <span className="text-sm text-slate-600 ml-2">
                    Token symbol (e.g., mon, usdc) or token contract address
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-monbridge-600 min-w-[80px] mt-1">tokenOut:</span>
                  <span className="text-sm text-slate-600 ml-2">
                    Token symbol or token contract address
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <path d="M12 9v4"/>
                    <path d="M12 17h.01"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-amber-800">Note</h4>
                  <p className="text-sm text-amber-700 mt-1">
                    Use mon for the native Monad token. The platform will automatically handle wrapping if needed (e.g., WMON).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-2">
        <h2 className="doc-subtitle">Examples</h2>
        <div className="doc-card space-y-6">
          <div>
            <h3 className="text-md font-medium text-slate-800 mb-3">Swap MON to USDC</h3>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <code className="text-sm font-mono text-slate-800">
                https://monbridgedex.xyz/swap?mon+usdc
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-slate-800 mb-3">Swap USDT to an unlisted token</h3>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <code className="text-sm font-mono text-slate-800">
                https://monbridgedex.xyz/swap?usdt+0xabc123...def
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-slate-800 mb-3">Swap MON to a custom token by address</h3>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <code className="text-sm font-mono text-slate-800">
                https://monbridgedex.xyz/swap?mon+0xdef456...789
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-3">
        <h2 className="doc-subtitle">Optional Parameters</h2>
        <div className="doc-card">
          <div className="mb-6">
            <h3 className="text-md font-medium text-slate-800">Amount Parameter</h3>
            <p className="text-sm text-slate-600 mt-1">
              Pre-fill the amount input using the amount parameter.
            </p>
            <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <code className="text-sm font-mono text-slate-800">
                &amount=1.5
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-slate-800 mb-3">Example with Amount</h3>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <code className="text-sm font-mono text-slate-800">
                https://monbridgedex.xyz/swap?mon+usdc&amount=1.5
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-4">
        <h2 className="doc-subtitle">Coming Soon</h2>
        <div className="doc-card">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                  <path d="M12 2v4"/>
                  <path d="M12 18v4"/>
                  <path d="M4.93 4.93l2.83 2.83"/>
                  <path d="M16.24 16.24l2.83 2.83"/>
                  <path d="M2 12h4"/>
                  <path d="M18 12h4"/>
                  <path d="M4.93 19.07l2.83-2.83"/>
                  <path d="M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-md font-medium text-slate-800">Referral Parameter Support</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Coming soon: Support for ref parameter (referral tracking for partners and influencers)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DocsPagination />
    </div>
  );
};

export default DocDeepLinking;