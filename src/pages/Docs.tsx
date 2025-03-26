
import { useEffect } from "react";
import { DocsPagination } from "@/components/docs/DocsPagination";

const Docs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <section className="doc-section section-animation-delay-0">
        <div className="doc-card p-8 rounded-xl">
          <h1 className="doc-title">Mon Bridge Dex Documentation</h1>
          <div className="flex items-center justify-between text-slate-500 text-sm mt-2 mb-8">
            <span>Version 1.0</span>
            <span>Last Updated: March 26, 2025</span>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="md:col-span-3">
              <h2 className="text-xl font-medium mb-4">Table of Contents</h2>
              <ul className="space-y-4">
                <li>
                  <a href="/docs" className="text-monbridge-600 hover:text-monbridge-800 transition-colors">
                    1. Overview
                  </a>
                </li>
                <li>
                  <a href="/docs/getting-started" className="text-monbridge-600 hover:text-monbridge-800 transition-colors">
                    2. Getting Started
                  </a>
                  <ul className="ml-5 mt-2 space-y-1">
                    <li>
                      <a href="/docs/getting-started#prerequisites" className="text-slate-600 hover:text-monbridge-600 transition-colors">
                        2.1 Prerequisites
                      </a>
                    </li>
                    <li>
                      <a href="/docs/getting-started#connecting-wallet" className="text-slate-600 hover:text-monbridge-600 transition-colors">
                        2.2 Connecting a Wallet
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/docs/core-functionality" className="text-monbridge-600 hover:text-monbridge-800 transition-colors">
                    3. Core Functionality
                  </a>
                  <ul className="ml-5 mt-2 space-y-1">
                    <li>
                      <a href="/docs/core-functionality#token-swaps" className="text-slate-600 hover:text-monbridge-600 transition-colors">
                        3.1 Token Swaps
                      </a>
                    </li>
                    <li>
                      <a href="/docs/core-functionality#adding-liquidity" className="text-slate-600 hover:text-monbridge-600 transition-colors">
                        3.2 Adding Liquidity
                      </a>
                    </li>
                    <li>
                      <a href="/docs/core-functionality#removing-liquidity" className="text-slate-600 hover:text-monbridge-600 transition-colors">
                        3.3 Removing Liquidity
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/docs/fees-price-impact" className="text-monbridge-600 hover:text-monbridge-800 transition-colors">
                    4. Fees & Price Impact
                  </a>
                </li>
                <li>
                  <a href="/docs/security" className="text-monbridge-600 hover:text-monbridge-800 transition-colors">
                    5. Security & Best Practices
                  </a>
                </li>
                <li>
                  <a href="/docs/technical-specifications" className="text-monbridge-600 hover:text-monbridge-800 transition-colors">
                    6. Technical Specifications
                  </a>
                </li>
                <li>
                  <a href="/docs/tokenomics" className="text-monbridge-600 hover:text-monbridge-800 transition-colors">
                    7. Tokenomics
                  </a>
                </li>
              </ul>
            </div>
            <div className="doc-card md:col-span-1 h-fit flex flex-col items-center justify-center p-6 bg-gradient-to-b from-monbridge-50 to-white">
              <div className="font-medium text-monbridge-800 mb-3">Quick Links</div>
              <div className="space-y-2 w-full">
                <a href="/docs/getting-started" className="block w-full text-center px-3 py-2 text-sm rounded-lg bg-white border border-slate-100 text-slate-700 hover:border-monbridge-200 hover:text-monbridge-700 transition-colors">
                  Getting Started
                </a>
                <a href="/docs/core-functionality" className="block w-full text-center px-3 py-2 text-sm rounded-lg bg-white border border-slate-100 text-slate-700 hover:border-monbridge-200 hover:text-monbridge-700 transition-colors">
                  Core Functions
                </a>
                <a href="/docs/tokenomics" className="block w-full text-center px-3 py-2 text-sm rounded-lg bg-white border border-slate-100 text-slate-700 hover:border-monbridge-200 hover:text-monbridge-700 transition-colors">
                  Tokenomics
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-1" id="overview">
        <h2 className="doc-subtitle">1. Overview</h2>
        <div className="doc-card">
          <p className="doc-paragraph">
            Mon Bridge Dex is a decentralized exchange (DEX) aggregator on the Mon Testnet (Chain ID: 10143), designed to optimize token swaps by comparing rates across multiple DEX routers (e.g., Octoswap, Bean Dex). 
          </p>
          
          <h3 className="text-lg font-medium mt-6 mb-3 text-slate-800">Key features include:</h3>
          
          <ul className="doc-list">
            <li>
              <span className="doc-highlight">Best Swap Rates:</span> Aggregates liquidity from integrated DEXes to maximize output.
            </li>
            <li>
              <span className="doc-highlight">Multi-Token Support:</span> Swap MON, WMON (wrapped MON), USDC, USDT, and custom tokens.
            </li>
            <li>
              <span className="doc-highlight">Liquidity Management:</span> Add/remove liquidity from supported pools.
            </li>
            <li>
              <span className="doc-highlight">Low Fees:</span> 0.1% fee per swap, with fees accumulated for contract owner withdrawal.
            </li>
          </ul>
          
          <div className="doc-callout info mt-8">
            <p className="text-sm text-slate-700">
              <strong>Note:</strong> MON is automatically wrapped to WMON for compatibility with DEX operations.
            </p>
          </div>
          
          <div className="mt-8 border rounded-lg p-4 bg-white">
            <h4 className="text-sm font-medium text-slate-700 mb-2">Currently aggregates liquidity from:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
                Uniswap
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800">
                Bean DEX
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-800">
                OctoSwap
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800">
                Atlantis DEX
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-800">
                Monda Fund
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800">
                Taya Finance
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-800">
                PancakeSwap
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-800">
                Madness Exchange
              </span>
            </div>
          </div>
        </div>
      </section>

      <DocsPagination />
    </div>
  );
};

export default Docs;
