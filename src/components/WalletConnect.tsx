// MetaMaskConnector.tsx
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const USDC_CONTRACT_ADDRESS = '0x0882477e7895bdC5cea7cB1552ed914aB157Fe56'; // USDC on Ethereum mainnet
const USDC_ABI = [
  "function balanceOf(address owner) view returns (uint256)"
];

const WalletConnect: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState<string>('0');
  const [usdcBalance, setUsdcBalance] = useState<string>('0');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        getBalances(accounts[0]); // Fetch balances after connecting
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const getBalances = async (walletAddress: string) => {
    if (!window.ethereum) return;

    try {
      // Create an ethers provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get ETH balance
      const balance = await provider.getBalance(walletAddress);
      setEthBalance(ethers.utils.formatEther(balance)); // Convert balance to standard units

      if (!ethers.utils.isAddress(walletAddress)) {
        throw new Error(`Invalid Ethereum address: ${walletAddress}`);
      }
      // Get USDC balance
      const usdcContract = new ethers.Contract(USDC_CONTRACT_ADDRESS, USDC_ABI, provider);
      // console.log("My wallet address : ", walletAddress);
      const usdcBal = await usdcContract.balanceOf(walletAddress);
      setUsdcBalance(ethers.utils.formatUnits(usdcBal, 6)); // USDC has 6 decimals
    } catch (error) {
      console.error("Error fetching balances:", error);
    }
  };

  useEffect(() => {
    if (account) {
      getBalances(account); // Get balances when the account changes
    }
  }, [account]);

  return (
    <div className=" text-white">
      <h1>Connect to MetaMask</h1>
      {account ? (
        <div>
          <p>Connected as: {account}</p>
          <p>ETH Balance: {ethBalance} ETH</p>
          <p>USDC Balance: {usdcBalance} USDC</p>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
