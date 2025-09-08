import assert from "assert";
import { 
  TestHelpers,
  KingdomlyNFT_Approval
} from "generated";
const { MockDb, KingdomlyNFT } = TestHelpers;

describe("KingdomlyNFT contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for KingdomlyNFT contract Approval event
  const event = KingdomlyNFT.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("KingdomlyNFT_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await KingdomlyNFT.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualKingdomlyNFTApproval = mockDbUpdated.entities.KingdomlyNFT_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedKingdomlyNFTApproval: KingdomlyNFT_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      approved: event.params.approved,
      tokenId: event.params.tokenId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualKingdomlyNFTApproval, expectedKingdomlyNFTApproval, "Actual KingdomlyNFTApproval should be the same as the expectedKingdomlyNFTApproval");
  });
});
