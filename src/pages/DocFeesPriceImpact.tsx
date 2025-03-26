
import { useEffect } from "react";
import { DocsPagination } from "@/components/docs/DocsPagination";

const DocFeesPriceImpact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <section className="doc-section section-animation-delay-0">
        <h1 className="doc-title">Fees & Price Impact</h1>
        <p className="doc-paragraph text-lg text-slate-600">
          Understanding the fee structure and price impact in Mon Bridge Dex.
        </p>
      </section>

      <section className="doc-section section-animation-delay-1">
        <h2 className="doc-subtitle">Fees</h2>
        <div className="doc-card">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1 mb-6 md:mb-0">
              <h3 className="text-lg font-medium mb-4 text-slate-800">Swap Fee</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v6a2 2 0 0 0 2 2h6" />
                    <path d="M18 14v-2" />
                    <path d="M18 20v-2" />
                    <path d="M14 20h-2" />
                    <path d="M22 20h-2" />
                    <rect x="2" y="8" width="12" height="12" rx="2" />
                    <path d="m6 12 4 4" />
                    <path d="m6 16 4-4" />
                  </svg>
                </div>
                <div className="text-2xl font-medium text-slate-800">0.1%</div>
              </div>
              <p className="doc-paragraph">
                A fee of 0.1% is charged on the input amount of each swap. This fee is deducted before the swap is executed.
              </p>
              <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-medium text-slate-700">Fee Accumulation:</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Fees are accumulated in the smart contract and can be withdrawn by the contract owner.
                </p>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-4 text-slate-800">Gas Fees</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8 10 4-6 4 6" />
                    <path d="m8 18 4-6 4 6" />
                  </svg>
                </div>
                <div className="text-2xl font-medium text-slate-800">Variable</div>
              </div>
              <p className="doc-paragraph">
                Gas fees are paid in ETH/MON for blockchain transactions. These fees vary based on network congestion and the complexity of the transaction.
              </p>
              <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-medium text-slate-700">Gas Optimization:</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Mon Bridge Dex optimizes gas usage by efficiently routing trades through the most cost-effective paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-2">
        <h2 className="doc-subtitle">Price Impact</h2>
        <div className="doc-card">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Definition</h3>
            <p className="doc-paragraph">
              Price impact is the difference between the expected and actual swap rate due to pool liquidity. It represents the effect your trade has on the market price.
            </p>
            <div className="mt-4 p-4 rounded-lg bg-monbridge-50 border border-monbridge-100">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-monbridge-600">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 7v6" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <p className="text-sm text-monbridge-800">
                  <strong>Example:</strong> A large swap in a pool with limited liquidity will have a higher price impact than a smaller swap or a swap in a pool with deep liquidity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Warning Threshold</h3>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <div className="text-2xl font-medium text-slate-800">15%</div>
            </div>
            <p className="doc-paragraph">
              A confirmation modal appears if price impact exceeds 15%. This serves as a warning that your trade may be executed at a significantly different rate than expected.
            </p>
            <div className="doc-callout warning mt-4">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-amber-800 font-medium">High Price Impact Warning</p>
                  <p className="text-sm text-amber-700 mt-1">
                    Swaps with high price impact can result in significantly less favorable rates. Consider breaking your trade into smaller amounts to minimize price impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Minimizing Price Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5" />
                    <path d="m5 12 5-5" />
                    <path d="M19 12H5" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">Split large trades into multiple smaller trades</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5" />
                    <path d="m5 12 5-5" />
                    <path d="M19 12H5" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">Trade during periods of higher liquidity</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5" />
                    <path d="m5 12 5-5" />
                    <path d="M19 12H5" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">Consider using stable pairs for large swaps when possible</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5" />
                    <path d="m5 12 5-5" />
                    <path d="M19 12H5" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">Monitor pool depth before executing large trades</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <DocsPagination />
    </div>
  );
};

export default DocFeesPriceImpact;
