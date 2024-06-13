# BuildSo DeFi DApp Development
## Overview
This DeFi application provides robust features for wallet connectivity, token swapping, and real-time visualization of cryptocurrency prices. Built using Next.js and TypeScript, the app leverages decentralized exchange protocols and Web3 technologies to offer a seamless user experience on the Sepolia testnet.

## Features
Wallet Connection: Securely connect to Ethereum wallets using MetaMask or WalletConnect.
Cryptocurrency Price Charting: Interactive charts displaying real-time and historical cryptocurrency prices.
Token Swapping: Swap ERC-20 tokens directly within the application using decentralized exchange protocols.
Tech Stack
Next.js: Framework for building server-rendered React applications.
TypeScript: Superset of JavaScript for type safety and improved developer experience.
Chart.js: Library for creating interactive charts.
Pusher: Service for real-time WebSocket connections.
Web3: Library to interact with the Ethereum blockchain.
Tailwind CSS: Utility-first CSS framework for styling.
## Demo

url : https://drive.google.com/file/d/1i7Ynbsx_RP5MFEjl8GvpPbI5atMZi36I/view?usp=sharing

## Installation
### Clone the repository
```bash
git clone https://github.com/your-username/defi-dapp.git
cd defi-dapp
```
### Install dependencies

```bash
npm install --legacy-peer-deps
```

## Start the development server

```bash
npm run dev
```
#### The application will be available at http://localhost:3000.

## Usage
### Wallet Connection
The application supports MetaMask and WalletConnect for wallet connection. Users can connect their wallets to the application, which will auto-detect the presence of the wallet and establish a secure session.

### Cryptocurrency Price Charting
Use the dropdown menu to select a cryptocurrency. The chart will display historical price data for the selected cryptocurrency. You can also select the time frame (Day, Week, Month) to view the price data accordingly. The chart updates in real-time using WebSocket connections.

### Token Swapping
The application integrates with the 0x protocol for token swapping. Users can select the tokens they want to swap, enter the amount, and execute the swap transaction. The application manages ERC-20 token approvals and handles blockchain interactions with transaction signing.

## Code Overview
### Components
Navbar: Handles navigation between the "Chart" and "Swap" pages.
PriceChart: Displays the price chart for the selected cryptocurrency with real-time updates.
Swap: Component for swapping ERC-20 tokens using the 0x protocol.
WalletConnection: Manages wallet connectivity using MetaMask or WalletConnect.

### Hooks and Utilities
useEffect: Used for fetching data and setting up WebSocket connections.
useState: Manages state for selected cryptocurrency, time frame, chart data, and swap details.

### WebSocket Connection
The application uses Pusher for real-time data streaming. The setupWebSocket function in PriceChart sets up the WebSocket connection and updates the chart with live price data.

## API Integration
CoinGecko: Fetches historical price data for cryptocurrencies.
0x Protocol: Manages token swap transactions and approvals.
Web3: Interacts with the Ethereum blockchain for wallet connectivity and transaction signing.

## Contributing
### Fork the repository

Create a new branch

```bash
git checkout -b feature/your-feature-name
Commit your changes
```

```bash
git commit -m "Add your message"
Push to the branch
```

```bash
git push origin feature/your-feature-name
Open a pull request
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or issues, please contact kccreations1704@gmail.com.

