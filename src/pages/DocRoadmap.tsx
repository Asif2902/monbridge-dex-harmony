import { useEffect } from "react";
import { DocsPagination } from "@/components/docs/DocsPagination";

const DocRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <section className="doc-section section-animation-delay-0">
        <h1 className="doc-title">Project Roadmap</h1>
        <p className="doc-paragraph text-lg text-slate-600">
          MonBridge DEX development timeline and milestone achievements.
        </p>
      </section>

      <section className="doc-section section-animation-delay-1">
        <h2 className="doc-subtitle">Completed Milestones</h2>
        <div className="doc-card space-y-6">
          <div className="flex items-start">
            <div className="bg-green-100 text-green-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5L20 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">Built the Website</h3>
              <p className="text-sm text-slate-600 mt-1">
                Developed and launched the MonBridge DEX web interface with core functionality.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 text-green-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5L20 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">Developed Smart Contracts</h3>
              <p className="text-sm text-slate-600 mt-1">
                Created and deployed core smart contracts for token swapping and liquidity management.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 text-green-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5L20 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">Live on Testnet</h3>
              <p className="text-sm text-slate-600 mt-1">
                Successfully deployed and tested on Mon Testnet with initial DEX integrations.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 text-green-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5L20 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">DEX Aggregation</h3>
              <p className="text-sm text-slate-600 mt-1">
                Integrated major DEXes into the aggregation system for optimal swap rates.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 text-green-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5L20 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">UI Upgrades</h3>
              <p className="text-sm text-slate-600 mt-1">
                Enhanced user interface with improved navigation and trading experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-2">
        <h2 className="doc-subtitle">Pre-Mainnet In Progress</h2>
        <div className="doc-card space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="M19 12H5" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">Final Testnet Refinements</h3>
              <ul className="text-sm text-slate-600 mt-1 list-disc ml-4 space-y-1">
                <li>Optimize smart contract for gas efficiency</li>
                <li>Test edge cases for multi-DEX execution (Private)</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="M19 12H5" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">Community & Marketing Initiatives</h3>
              <ul className="text-sm text-slate-600 mt-1 list-disc ml-4 space-y-1">
                <li>Pre-sale preparation (whitelist, terms, and allocations)</li>
                <li>TGE (Token Generation Event) strategy</li>
                <li>Airdrop campaign execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-3">
        <h2 className="doc-subtitle">Mainnet Deployment Preparation</h2>
        <div className="doc-card space-y-6">
          <div className="flex items-start">
            <div className="bg-purple-100 text-purple-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="M19 12H5" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">Launch Preparations</h3>
              <ul className="text-sm text-slate-600 mt-1 list-disc ml-4 space-y-1">
                <li>Ensure liquidity availability on launch</li>
                <li>Prepare initial incentives for early adopters</li>
                <li>Beta launch with selective users for early feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-4">
        <h2 className="doc-subtitle">Post-Mainnet: Expansion & Growth</h2>
        <div className="doc-card space-y-6">
          <div className="flex items-start">
            <div className="bg-amber-100 text-amber-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">Future Feature Enhancements</h3>
              <ul className="text-sm text-slate-600 mt-1 list-disc ml-4 space-y-1">
                <li>Multi-router split support</li>
                <li>Balancer V2/V3 integration</li>
                <li>Uniswap V3 support</li>
                <li>UI V2 upgrade with new analytics</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-100 text-amber-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">Advanced Aggregation & Optimization</h3>
              <ul className="text-sm text-slate-600 mt-1 list-disc ml-4 space-y-1">
                <li>Implement MEV protection mechanisms</li>
                <li>Optimize gas usage for cross-DEX swaps</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-100 text-amber-800 rounded-full p-2 mt-1 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-slate-800">Growth & Adoption</h3>
              <ul className="text-sm text-slate-600 mt-1 list-disc ml-4 space-y-1">
                <li>Airdrop distribution</li>
                <li>CEX listing discussions</li>
                <li>Referral & staking rewards</li>
                <li>Expansion into new chains</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <DocsPagination />
    </div>
  );
};

export default DocRoadmap;