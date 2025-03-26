
import { useEffect } from "react";
import { DocsPagination } from "@/components/docs/DocsPagination";

const DocTokenomics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <section className="doc-section section-animation-delay-0">
        <h1 className="doc-title">Tokenomics</h1>
        <p className="doc-paragraph text-lg text-slate-600">
          Understanding the MDB token distribution and utility.
        </p>
      </section>

      <section className="doc-section section-animation-delay-1">
        <h2 className="doc-subtitle">Token Overview</h2>
        <div className="doc-card">
          <div className="flex flex-col md:flex-row md:items-center mb-8">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-20 h-20 bg-gradient-to-br from-monbridge-500 to-monbridge-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                MDB
              </div>
            </div>
            
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-slate-500">Token Name</div>
                  <div className="text-lg font-medium text-slate-800">Mon Bridge Dex</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Symbol</div>
                  <div className="text-lg font-medium text-slate-800">MDB</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Total Supply</div>
                  <div className="text-lg font-medium text-slate-800">1,000,000,000</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Token Distribution</h3>
            <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-full h-2 bg-monbridge-100 rounded-full mb-2 relative">
                    <div className="absolute top-0 left-0 h-full bg-monbridge-500 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                  <div className="text-2xl font-medium text-slate-800">55%</div>
                  <div className="text-sm text-slate-600 text-center">Community</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-full h-2 bg-monbridge-100 rounded-full mb-2 relative">
                    <div className="absolute top-0 left-0 h-full bg-monbridge-500 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <div className="text-2xl font-medium text-slate-800">15%</div>
                  <div className="text-sm text-slate-600 text-center">Team</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-full h-2 bg-monbridge-100 rounded-full mb-2 relative">
                    <div className="absolute top-0 left-0 h-full bg-monbridge-500 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <div className="text-2xl font-medium text-slate-800">10%</div>
                  <div className="text-sm text-slate-600 text-center">Pre-sell</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-full h-2 bg-monbridge-100 rounded-full mb-2 relative">
                    <div className="absolute top-0 left-0 h-full bg-monbridge-500 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <div className="text-2xl font-medium text-slate-800">10%</div>
                  <div className="text-sm text-slate-600 text-center">Listing</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-full h-2 bg-monbridge-100 rounded-full mb-2 relative">
                    <div className="absolute top-0 left-0 h-full bg-monbridge-500 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <div className="text-2xl font-medium text-slate-800">15%</div>
                  <div className="text-sm text-slate-600 text-center">Others</div>
                  <div className="text-xs text-slate-500 mt-1">(To be revealed)</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="text-sm text-slate-600 text-center">
                  Total Supply: <span className="font-medium">1,000,000,000 MDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-2">
        <h2 className="doc-subtitle">Fee Structure & Distribution</h2>
        <div className="doc-card">
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-6 text-slate-800">Fee Distribution Model</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-monbridge-50 to-white border border-monbridge-100 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-monbridge-100 flex items-center justify-center text-monbridge-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <div className="text-2xl font-medium text-monbridge-800 mb-2">40%</div>
                <div className="text-slate-700">Stakers Rewards</div>
                <p className="text-sm text-slate-500 mt-3">
                  Distributed to users who stake MDB tokens in the platform
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-monbridge-50 to-white border border-monbridge-100 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-monbridge-100 flex items-center justify-center text-monbridge-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <div className="text-2xl font-medium text-monbridge-800 mb-2">40%</div>
                <div className="text-slate-700">Buy Back & Burn</div>
                <p className="text-sm text-slate-500 mt-3">
                  Used to purchase MDB tokens from the market and permanently remove them from circulation
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-monbridge-50 to-white border border-monbridge-100 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-monbridge-100 flex items-center justify-center text-monbridge-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m14.31 8 5.74 9.94" />
                    <path d="M9.69 8h11.48" />
                    <path d="m7.38 12 5.74-9.94" />
                    <path d="M9.69 16 3.95 6.06" />
                    <path d="M14.31 16H2.83" />
                    <path d="m16.62 12-5.74 9.94" />
                  </svg>
                </div>
                <div className="text-2xl font-medium text-monbridge-800 mb-2">20%</div>
                <div className="text-slate-700">Development</div>
                <p className="text-sm text-slate-500 mt-3">
                  Allocated for continued platform development, maintenance, and new features
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Token Utility</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Governance</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    MDB holders can vote on platform decisions, including fee adjustments, new DEX integrations, and feature development.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Fee Discounts</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Users who stake MDB tokens receive discounts on trading fees, with higher discounts for larger stake amounts.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Staking Rewards</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Stakers earn a share of the platform's trading fees proportional to their stake.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Premium Features</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Access to advanced trading tools, analytics, and priority routing for MDB holders.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-3">
        <h2 className="doc-subtitle">Vesting Schedule</h2>
        <div className="doc-card">
          <p className="doc-paragraph mb-6">
            The release schedule for MDB tokens is designed to ensure price stability and align incentives for long-term growth.
          </p>
          
          <div className="relative overflow-x-auto rounded-lg border border-slate-200">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Allocation</th>
                  <th>Percentage</th>
                  <th>Vesting Period</th>
                  <th>Initial Unlock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Community</td>
                  <td>55%</td>
                  <td>Gradual release over 4 years</td>
                  <td>10% at TGE</td>
                </tr>
                <tr>
                  <td className="font-medium">Team</td>
                  <td>15%</td>
                  <td>2-year cliff, then 2-year linear vesting</td>
                  <td>0% at TGE</td>
                </tr>
                <tr>
                  <td className="font-medium">Pre-sell</td>
                  <td>10%</td>
                  <td>6-month cliff, then 18-month linear vesting</td>
                  <td>5% at TGE</td>
                </tr>
                <tr>
                  <td className="font-medium">Listing</td>
                  <td>10%</td>
                  <td>Immediate availability for exchange listings</td>
                  <td>100% at TGE</td>
                </tr>
                <tr>
                  <td className="font-medium">Others</td>
                  <td>15%</td>
                  <td>To be announced</td>
                  <td>To be announced</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="doc-callout info mt-6">
            <p className="text-sm text-slate-700">
              <strong>Note:</strong> TGE refers to Token Generation Event, the initial creation and distribution of MDB tokens.
            </p>
          </div>
        </div>
      </section>

      <DocsPagination />
    </div>
  );
};

export default DocTokenomics;
