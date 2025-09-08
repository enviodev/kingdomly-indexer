# Kingdomly Indexer

A HyperIndex indexer for the Kingdomly NFT collection on Monad testnet.

## Contract Information

- **Contract Name**: KingdomlyNFT
- **Contract Address**: `0xD20EF03E432208af083C0fb4e401049F4F29949F`
- **Network**: Monad Testnet (Chain ID: 10143)
- **Contract Type**: ERC-721 NFT Collection

## Features

This indexer tracks the following events from the Kingdomly NFT contract:

- `Approval` - NFT approval events
- `ApprovalForAll` - Operator approval events
- `BatchMetadataUpdate` - Metadata update events
- `ConsecutiveTransfer` - Consecutive transfer events
- `KingdomlyFeeContractChanged` - Fee contract changes
- `MaxMintPerWalletChanged` - Mint limit changes
- `OwnershipTransferred` - Ownership transfer events
- `PreSaleMintScheduledStartTimestampChanged` - Presale timing changes
- `PreSaleMintStatusChanged` - Presale status changes
- `SalePriceChanged` - Price change events
- `TokensDelegateMinted` - Delegated minting events
- `TokensMinted` - Regular minting events
- `Transfer` - NFT transfer events

## Getting Started

### Prerequisites

- Node.js v20
- pnpm
- Docker
- PostgreSQL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/enviodev/kingdomly-indexer.git
cd kingdomly-indexer
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
echo "ENVIO_PG_PUBLIC_SCHEMA=kingdomly_indexer" > .env
```

4. Generate code:
```bash
pnpm codegen
```

5. Start the indexer:
```bash
pnpm dev
```

## Development

- **GraphQL Endpoint**: http://localhost:8080/v1/graphql
- **Development Console**: https://envio.dev/console

## Project Structure

- `config.yaml` - Indexer configuration
- `schema.graphql` - GraphQL schema definition
- `src/EventHandlers.ts` - Event handler implementations
- `kingdomly_ABI.json` - Contract ABI
- `generated/` - Generated code (excluded from git)

## License

MIT