import { useEffect } from "react";
import { DocsPagination } from "@/components/docs/DocsPagination";

const DocCoreFunctionality = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <section className="doc-section section-animation-delay-0">
        <h1 className="doc-title">Core Functionality</h1>
        <p className="doc-paragraph text-lg text-slate-600">
          Learn about the main features of Mon Bridge Dex and how to use them effectively.
        </p>
      </section>

      <section className="doc-section section-animation-delay-1" id="token-swaps">
        <h2 className="doc-subtitle">3.1 Token Swaps</h2>
        <div className="doc-card">
          <h3 className="text-lg font-medium mb-4 text-slate-800">Steps to Swap Tokens:</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Select Tokens</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Choose input (e.g., MON) and output (e.g., WMON) tokens. Use the Import Token button for custom tokens (paste contract address).
                </p>
                <div className="mt-3 rounded-lg bg-slate-50 border border-slate-200 p-3">
                  <div className="text-xs text-slate-500">Example: Selecting MON to WMON swap</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Enter Amount</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Input the swap amount or click Max to use your full balance.
                </p>
                <div className="mt-3 rounded-lg bg-slate-50 border border-slate-200 p-3">
                  <div className="text-xs text-slate-500">Example: Enter 1.0 Mon amount</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Review Details</h4>
                <p className="text-sm text-slate-600 mt-1">
                  The interface will display:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc ml-5">
                  <li>Estimated Output: Calculated using the best available DEX router.</li>
                  <li>Price Impact: Shown as a percentage (warning displayed if &gt;15%).</li>
                  <li>Fee: 0.1% of the input amount.</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">4</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Confirm Swap</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Approve the transaction in your wallet. Track progress via the Mon Testnet Explorer.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Supported Swap Types:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="text-center">
                  <div className="font-medium text-slate-800">MON → Token</div>
                  <div className="text-sm text-slate-500 mt-1">Swap MON for any supported token</div>
                </div>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="text-center">
                  <div className="font-medium text-slate-800">Token → MON</div>
                  <div className="text-sm text-slate-500 mt-1">Swap any supported token for MON</div>
                </div>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="text-center">
                  <div className="font-medium text-slate-800">Token → Token</div>
                  <div className="text-sm text-slate-500 mt-1">Swap between any two supported tokens</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-2" id="adding-liquidity">
        <h2 className="doc-subtitle">3.2 Adding Liquidity</h2>
        <div className="doc-card">
          <h3 className="text-lg font-medium mb-4 text-slate-800">Steps to Add Liquidity:</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Navigate to the Liquidity tab</h4>
                <p className="text-sm text-slate-600 mt-1">
                  From the main interface, select the "Liquidity" tab to access liquidity management features.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Select Pair & DEX</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Choose a token pair (e.g., WMON/USDT) and DEX router (e.g., MBD Swap).
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Enter Amounts</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Input amounts for both tokens. Use Max to auto-calculate based on pool ratios.
                </p>
                <div className="doc-callout info mt-3">
                  <p className="text-sm text-slate-700">
                    <strong>Tip:</strong> When adding to an existing pool, the ratio between tokens is fixed. Entering an amount for one token will automatically calculate the required amount for the other.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">4</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Approve & Confirm</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Approve token allowances (if first-time deposit). Confirm the transaction.
                </p>
                <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-sm font-medium text-slate-700">Note:</div>
                  <p className="text-sm text-slate-600 mt-1">
                    Adding liquidity to a new pool mints LP tokens representing your share.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-3" id="removing-liquidity">
        <h2 className="doc-subtitle">3.3 Removing Liquidity</h2>
        <div className="doc-card">
          <h3 className="text-lg font-medium mb-4 text-slate-800">Steps to Remove Liquidity:</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Navigate to the Liquidity tab</h4>
                <p className="text-sm text-slate-600 mt-1">
                  From the main interface, select the "Liquidity" tab to access liquidity management features.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Select LP Tokens</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Choose the DEX router and token pair.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Enter LP Amount</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Specify the LP tokens to withdraw (use Max for 99.99999999% of your balance).
                </p>
                <div className="doc-callout info mt-3">
                  <p className="text-sm text-slate-700">
                    <strong>Tip:</strong> Using exactly 100% may cause rounding errors in some cases, which is why the Max button uses slightly less than 100%.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-monbridge-50 text-monbridge-800 font-medium rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">4</div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Confirm Withdrawal</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Approve and execute the transaction to receive your proportional tokens.
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

export default DocCoreFunctionality;
