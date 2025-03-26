
import { useEffect } from "react";
import { DocsPagination } from "@/components/docs/DocsPagination";

const DocGettingStarted = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <section className="doc-section section-animation-delay-0">
        <h1 className="doc-title">Getting Started</h1>
        <p className="doc-paragraph text-lg text-slate-600">
          Everything you need to know to get started with Mon Bridge Dex.
        </p>
      </section>

      <section className="doc-section section-animation-delay-1" id="prerequisites">
        <h2 className="doc-subtitle">2.1 Prerequisites</h2>
        <div className="doc-card">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-monbridge-100 rounded-full p-2 mt-1 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-monbridge-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16 10-4 4-2-2" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium text-slate-800">A Web3 wallet (e.g., MetaMask)</h3>
                <p className="text-sm text-slate-600 mt-1">
                  You'll need a Web3-compatible wallet to interact with Mon Bridge Dex. MetaMask is the most popular option.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-monbridge-100 rounded-full p-2 mt-1 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-monbridge-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16 10-4 4-2-2" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium text-slate-800">Mon Testnet configured in your wallet</h3>
                <div className="mt-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="text-sm font-medium text-slate-700">Network Name:</div>
                    <div className="text-sm text-slate-600">Mon Testnet</div>
                    
                    <div className="text-sm font-medium text-slate-700">RPC URL:</div>
                    <div className="text-sm text-slate-600 break-words">https://testnet-rpc.monad.xyz</div>
                    
                    <div className="text-sm font-medium text-slate-700">Chain ID:</div>
                    <div className="text-sm text-slate-600">10143</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-monbridge-100 rounded-full p-2 mt-1 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-monbridge-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16 10-4 4-2-2" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium text-slate-800">Testnet ETH/MON for gas fees</h3>
                <p className="text-sm text-slate-600 mt-1">
                  You'll need some testnet ETH or MON to pay for transaction fees on the network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-2" id="connecting-wallet">
        <h2 className="doc-subtitle">2.2 Connecting a Wallet</h2>
        <div className="doc-card">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div>
                <h3 className="text-md font-medium text-slate-800">Navigate to Mon Bridge Dex</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Open your browser and go to <a href="https://app.monbridge.xyz" className="text-monbridge-600 hover:text-monbridge-800 underline">https://app.monbridge.xyz</a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div>
                <h3 className="text-md font-medium text-slate-800">Click Connect Wallet and authorize the connection</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Look for the "Connect Wallet" button in the top right corner of the interface. Click it and select your wallet provider from the options.
                </p>
                <div className="mt-3 border rounded-lg overflow-hidden">
                  <div className="bg-slate-50 p-3 border-b">
                    <div className="text-sm font-medium text-slate-700">Wallet Connection Process</div>
                  </div>
                  <div className="p-4 bg-white">
                    <ol className="list-decimal ml-4 space-y-2 text-sm text-slate-700">
                      <li>Click "Connect Wallet" in the top-right corner</li>
                      <li>Select your wallet provider (e.g., MetaMask)</li>
                      <li>Approve the connection request in your wallet</li>
                      <li>Your wallet address will appear once connected</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div>
                <h3 className="text-md font-medium text-slate-800">Confirm the wallet is connected to Mon Testnet</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Ensure that your wallet is set to the Mon Testnet (Chain ID: 10143). The application will attempt to switch networks automatically, but you may need to approve this action.
                </p>
                <div className="doc-callout warning mt-3">
                  <p className="text-sm text-amber-800">
                    <strong>Important:</strong> Always verify you're connected to Mon Testnet before making any transactions. This helps prevent unintended actions on mainnet networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DocsPagination />
    </div>
  );
};

export default DocGettingStarted;
