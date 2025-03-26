
import { useEffect } from "react";
import { DocsPagination } from "@/components/docs/DocsPagination";

const DocSecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <section className="doc-section section-animation-delay-0">
        <h1 className="doc-title">Security & Best Practices</h1>
        <p className="doc-paragraph text-lg text-slate-600">
          Ensure safe interactions with Mon Bridge Dex by following these security guidelines.
        </p>
      </section>

      <section className="doc-section section-animation-delay-1">
        <div className="doc-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 13h6" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-800">Verify Network</h3>
              </div>
              <p className="text-sm text-slate-600">
                Always confirm your wallet is connected to Mon Testnet before initiating any transactions. This prevents accidental operations on mainnet or other networks.
              </p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="text-xs font-medium text-blue-800">Network Check</div>
                <div className="text-xs text-blue-700 mt-1">
                  Verify Chain ID: 10143 (Mon Testnet)
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-800">Audit Token Contracts</h3>
              </div>
              <p className="text-sm text-slate-600">
                Validate custom token addresses before importing them to avoid interacting with malicious contracts. Always verify the token's legitimacy.
              </p>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <div className="text-xs font-medium text-amber-800">Token Verification</div>
                <div className="text-xs text-amber-700 mt-1">
                  Check contract code and verify authenticity
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 10-4 4-4-4" />
                    <path d="M12 2v16" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-800">Monitor Slippage</h3>
              </div>
              <p className="text-sm text-slate-600">
                Split large trades to minimize price impact. Higher slippage increases the risk of receiving less favorable rates than expected.
              </p>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="text-xs font-medium text-green-800">Slippage Management</div>
                <div className="text-xs text-green-700 mt-1">
                  Use smaller trades for less price impact
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="M7 12h10" />
                    <path d="M7 8h5" />
                    <path d="M7 16h9" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-800">Secure Private Keys</h3>
              </div>
              <p className="text-sm text-slate-600">
                Never share your wallet's seed phrase or private keys. Store them securely offline and use hardware wallets when possible.
              </p>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <div className="text-xs font-medium text-purple-800">Key Security</div>
                <div className="text-xs text-purple-700 mt-1">
                  Keep private keys offline and secure
                </div>
              </div>
            </div>
          </div>
          
          <div className="doc-callout info mt-8">
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-monbridge-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-monbridge-800">Additional Security Recommendations</h4>
                <ul className="mt-2 space-y-2 text-sm text-monbridge-700">
                  <li className="flex items-start">
                    <div className="h-4 w-4 rounded-full bg-white flex items-center justify-center text-monbridge-500 mt-0.5 mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Use a dedicated browser or profile for DeFi transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 rounded-full bg-white flex items-center justify-center text-monbridge-500 mt-0.5 mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Double-check transaction details before confirming</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 rounded-full bg-white flex items-center justify-center text-monbridge-500 mt-0.5 mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Keep your wallet software and operating system updated</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 rounded-full bg-white flex items-center justify-center text-monbridge-500 mt-0.5 mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Be cautious of phishing attempts through unofficial communication channels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 border border-red-100 rounded-xl bg-red-50">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-red-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-red-800">Common Security Risks</h3>
                <p className="text-sm text-red-700 mt-2">
                  Be aware of these common security threats when interacting with DeFi applications:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center text-red-500 mt-0.5 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <span className="text-sm text-red-700">Phishing websites that mimic legitimate DeFi interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center text-red-500 mt-0.5 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <span className="text-sm text-red-700">Malicious browser extensions that can modify transaction data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center text-red-500 mt-0.5 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <span className="text-sm text-red-700">Scam tokens designed to drain wallet funds when approved</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DocsPagination />
    </div>
  );
};

export default DocSecurity;
