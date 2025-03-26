
import { useEffect } from "react";
import { DocsPagination } from "@/components/docs/DocsPagination";

const DocTechnicalSpecifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <section className="doc-section section-animation-delay-0">
        <h1 className="doc-title">Technical Specifications</h1>
        <p className="doc-paragraph text-lg text-slate-600">
          Detailed technical information about Mon Bridge Dex implementation.
        </p>
      </section>

      <section className="doc-section section-animation-delay-1">
        <h2 className="doc-subtitle">Smart Contracts</h2>
        <div className="doc-card">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4 text-slate-800">DexAggregator</h3>
            <p className="doc-paragraph">
              The core contract that manages swap routing, fee accumulation, and liquidity operations.
            </p>
            
            <div className="mt-6 border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 p-3 border-b border-slate-200">
                <h4 className="text-sm font-medium text-slate-700">Key Contract Functions</h4>
              </div>
              <div className="doc-code">
                <pre><code>{`// Core swap function
function aggregateSwap(
    address tokenIn,
    address tokenOut,
    uint256 amountIn,
    uint256 minAmountOut,
    address[] calldata dexRouters
) external payable returns (uint256 amountOut);

// Fee management
function feeAccumulatedETH() external view returns (uint256);
function feeAccumulatedTokens(address token) external view returns (uint256);
function withdrawFees(address recipient) external onlyOwner;

// Liquidity management
function addLiquidity(
    address router,
    address tokenA,
    address tokenB,
    uint256 amountADesired,
    uint256 amountBDesired,
    uint256 amountAMin,
    uint256 amountBMin
) external returns (uint256 amountA, uint256 amountB, uint256 liquidity);

function removeLiquidity(
    address router,
    address tokenA,
    address tokenB,
    uint256 liquidity,
    uint256 amountAMin,
    uint256 amountBMin
) external returns (uint256 amountA, uint256 amountB);`}</code></pre>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-md font-medium text-slate-800 mb-2">Supported Standards</h4>
              <p className="text-sm text-slate-600">
                Mon Bridge Dex integrates with Uniswap V2-compatible DEXes. This allows for a consistent interface when interacting with different liquidity providers.
              </p>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Contract Architecture</h3>
            
            <div className="relative overflow-x-auto rounded-lg border border-slate-200">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th className="text-left">Component</th>
                    <th className="text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">Aggregator Core</td>
                    <td>Routes trades through optimal DEX paths based on output amount</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Fee Manager</td>
                    <td>Collects and distributes platform fees</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Liquidity Manager</td>
                    <td>Handles all liquidity-related operations across DEXes</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Router Adapter</td>
                    <td>Standardizes interactions with different DEX routers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-2">
        <h2 className="doc-subtitle">Frontend</h2>
        <div className="doc-card">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Libraries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-white">
                <h4 className="text-md font-medium text-slate-800 mb-2">Ethers.js</h4>
                <p className="text-sm text-slate-600">
                  Used for wallet interactions and contract calls. Provides a consistent interface for interacting with the Ethereum blockchain.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-white">
                <h4 className="text-md font-medium text-slate-800 mb-2">React</h4>
                <p className="text-sm text-slate-600">
                  Frontend framework for building the user interface with reusable components.
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-md font-medium text-slate-800 mb-2">Rate Limiting</h4>
              <p className="text-sm text-slate-600">
                The application implements a rate limit of 50 calls per second to prevent API overload and ensure smooth operation.
              </p>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Application Architecture</h3>
            <div className="doc-code">
              <pre><code>{`// High-level application architecture
|-- components/
|   |-- swap/
|   |   |-- SwapForm.js
|   |   |-- TokenSelector.js
|   |   |-- PriceInfo.js
|   |
|   |-- liquidity/
|       |-- AddLiquidity.js
|       |-- RemoveLiquidity.js
|       |-- PoolInfo.js
|
|-- services/
|   |-- web3.js         # Wallet connection and provider
|   |-- aggregator.js   # Contract interaction
|   |-- tokenList.js    # Token metadata management
|
|-- hooks/
|   |-- useSwap.js      # Swap logic and state
|   |-- useLiquidity.js # Liquidity management
|   |-- useTokens.js    # Token balances and allowances
|
|-- utils/
    |-- formatters.js   # Value formatting
    |-- calculator.js   # Price calculations`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section-animation-delay-3">
        <h2 className="doc-subtitle">Supported Routers</h2>
        <div className="doc-card">
          <p className="doc-paragraph mb-6">
            Mon Bridge Dex integrates with up to 10 DEX routers to find the optimal path for token swaps.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 text-center border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="font-medium text-slate-800">Uniswap</div>
            </div>
            <div className="p-4 text-center border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="font-medium text-slate-800">Bean DEX</div>
            </div>
            <div className="p-4 text-center border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="font-medium text-slate-800">OctoSwap</div>
            </div>
            <div className="p-4 text-center border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="font-medium text-slate-800">Atlantis DEX</div>
            </div>
            <div className="p-4 text-center border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="font-medium text-slate-800">Monda Fund</div>
            </div>
            <div className="p-4 text-center border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="font-medium text-slate-800">Taya Finance</div>
            </div>
            <div className="p-4 text-center border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="font-medium text-slate-800">PancakeSwap</div>
            </div>
            <div className="p-4 text-center border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="font-medium text-slate-800">Madness Exchange</div>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-slate-100 to-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-medium mb-4 text-slate-800">Integration Requirements</h3>
            <p className="text-sm text-slate-600 mb-4">
              For a DEX to be integrated with Mon Bridge Dex, it must meet the following requirements:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">Implement Uniswap V2-compatible router interface</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">Provide public access to price and liquidity data</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-monbridge-50 flex items-center justify-center text-monbridge-600 mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">Support MON Testnet (Chain ID: 10143)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <DocsPagination />
    </div>
  );
};

export default DocTechnicalSpecifications;
