How To Set Up The DAO

1. Deploy Token, Governance, and TimelockController contracts

2. From the TOKEN contract, 
	      - Mint the tokens to the deployer's wallet address
        - Transfer ownership of tokens from deployer to Governance contract using the transferOwnership(address); function
        - Transfer tokens to Governance contract using the transfer(address, uint256); function
        - Delegate wallets to vote using the delegate(address); function

3. There is no frontend for this repository; however, a great service to use for DAOs is Tally. 

4. Go to tally.xyz and Add Your DAO by following the on-screen  instructions.

5. Once DAO is added, test by creating a proposal and switching wallet address to vote on the proposal.

DISCLAIMER: The contracts in this repository have not been audited. Use at your own risk. It is highly recommended you audit these contracts with an independent third party auditing company if you plan to use these contracts in a production environment where real crypto will be traded. By using these contracts, you hold me harmless from any loss of funds that may result from improper use or modifications of these contracts.
