/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { indexer, KingdomlyNFT_Approval, KingdomlyNFT_ApprovalForAll, KingdomlyNFT_BatchMetadataUpdate, KingdomlyNFT_ConsecutiveTransfer, KingdomlyNFT_KingdomlyFeeContractChanged, KingdomlyNFT_MaxMintPerWalletChanged, KingdomlyNFT_OwnershipTransferred, KingdomlyNFT_PreSaleMintScheduledStartTimestampChanged, KingdomlyNFT_PreSaleMintStatusChanged, KingdomlyNFT_SalePriceChanged, KingdomlyNFT_TokensDelegateMinted, KingdomlyNFT_TokensMinted, KingdomlyNFT_Transfer } from "envio";

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "Approval" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.KingdomlyNFT_Approval.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "ApprovalForAll" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.KingdomlyNFT_ApprovalForAll.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "BatchMetadataUpdate" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_BatchMetadataUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fromTokenId: event.params.fromTokenId,
    toTokenId: event.params.toTokenId,
  };

  context.KingdomlyNFT_BatchMetadataUpdate.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "ConsecutiveTransfer" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_ConsecutiveTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fromTokenId: event.params.fromTokenId,
    toTokenId: event.params.toTokenId,
    from: event.params.from,
    to: event.params.to,
  };

  context.KingdomlyNFT_ConsecutiveTransfer.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "KingdomlyFeeContractChanged" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_KingdomlyFeeContractChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeContractAddress: event.params.feeContractAddress,
  };

  context.KingdomlyNFT_KingdomlyFeeContractChanged.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "MaxMintPerWalletChanged" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_MaxMintPerWalletChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newMaxMintPerWallet: event.params.newMaxMintPerWallet,
    mintGroupId: event.params.mintGroupId,
  };

  context.KingdomlyNFT_MaxMintPerWalletChanged.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "OwnershipTransferred" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.KingdomlyNFT_OwnershipTransferred.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "PreSaleMintScheduledStartTimestampChanged" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_PreSaleMintScheduledStartTimestampChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    timestamp: event.params.timestamp,
    mintGroupId: event.params.mintGroupId,
  };

  context.KingdomlyNFT_PreSaleMintScheduledStartTimestampChanged.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "PreSaleMintStatusChanged" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_PreSaleMintStatusChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    status: event.params.status,
    mintGroupId: event.params.mintGroupId,
  };

  context.KingdomlyNFT_PreSaleMintStatusChanged.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "SalePriceChanged" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_SalePriceChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    mintId: event.params.mintId,
    newPrice: event.params.newPrice,
  };

  context.KingdomlyNFT_SalePriceChanged.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "TokensDelegateMinted" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_TokensDelegateMinted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    vault: event.params.vault,
    hotWallet: event.params.hotWallet,
    amount: event.params.amount,
    mintId: event.params.mintId,
  };

  context.KingdomlyNFT_TokensDelegateMinted.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "TokensMinted" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_TokensMinted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    recipient: event.params.recipient,
    amount: event.params.amount,
    mintId: event.params.mintId,
  };

  context.KingdomlyNFT_TokensMinted.set(entity);
}
);

indexer.onEvent(
  { contract: "KingdomlyNFT", event: "Transfer" },
  async ({ event, context }) => {
  const entity: KingdomlyNFT_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.KingdomlyNFT_Transfer.set(entity);
}
);
