export const faqs = [
    {
        id: 1,
        question: 'What is Hash Protocol?',
        text: 'Hash Protocol is the first modular blockchain network that makes it effortless to deploy a new blockchain. It allows sovereign blockchains to break free from the constraints of monolithic architectures so that they can build with flexibility and freedom on their own terms.<br><br>Hash Protocol is a unique layer 1 blockchain whose only job is to order transactions and verify that the published data is available. This allows specialized blockchains for hosting applications to deploy on top of it. By taking this approach, Hash Protocol achieves properties of scalability, flexibility and interoperability unmatched by previous blockchain designs.',
    },{
        id: 2,
        question: 'What stage of development is Hash Protocol in?',
        text: 'Hash Protocol is still in the early stages of development. In 2021, we have built an MVP and launched a private devnet. In 2022, we plan to launch a testnet and gradually build up to mainnet.',
    },{
        id: 3,
        question: 'Will Hash Protocol have a token and if so, what will it be used for?',
        text: 'Yes, Hash Protocol will have a token that will be used to secure the network via Proof of Stake, and to pay for transaction fees on the network. We plan to implement a fee-burn mechanism similar to EIP-1559 in Ethereum so that burnt fees will offset new token issuance as Hash Protocol gains adoption.',
    },{
        id: 4,
        question: 'How does Hash Protocol scale?',
        text: 'Hash Protocol is able to scale as the number of users (light nodes) in the network increases. Hash Protocol remains secure so long as there are enough nodes on the network to sample the entire block. This means that as more nodes join the network and sample, the block size can increase accordingly without sacrificing security or decentralization. Doing so on a traditional blockchain would sacrifice decentralization because a bigger block size would create a larger hardware requirement for nodes to download and verify data. Rollups also depend on data availability for their scalability, so better scaling potential for Hash Protocol will also translate to better scaling potential for the rollups utilizing Hash Protocol.',
    },{
        id: 5,
        question: 'What is data availability?',
        text: '"Data availability" and the "data availability problem" are terms used to refer to a specific problem faced in various blockchain scaling strategies. Data availability refers to the ability for transaction data to be made available for nodes to download. The data availability problem asks: how can nodes be sure that when a new block is produced, that all of the data in that block was actually published to the network? The dilemma is that if a block producer doesn\'t release all of the data in a block, no one could detect if there is a malicious transaction hidden within that block.<br><br>For more information about data availability, <a href="https://coinmarketcap.com/alexandria/article/what-is-data-availability" target="_blank" rel="noreferrer">this post</a> by Hash Protocol co-founder Mustafa Al-Bassam is a good place to start.',
    },{
        id: 6,
        question: 'What is a rollup?',
        text: 'Rollups are a layer 2 scaling solution that aim to provide a cheaper platform for applications without sacrificing on security or decentralization. Rollups execute their own transactions but utilize other blockchains for consensus and data availability – dictating the cost of transaction fees. Hash Protocol is a perfect complement to rollups as it provides them with a scalable chain that they can publish their transaction data at a low cost to users.<br><br>For more information about optimistic rollups, <a href="https://coinmarketcap.com/alexandria/article/optimistic-rollups-for-the-rest-of-us" target="_blank" rel="noreferrer">this post</a> by Hash Protocol co-founder (and creator of the optimistic rollup) John Adler is a good primer.',
    },{
        id: 7,
        question: 'Why do rollups require data availability?',
        text: 'Rollups come in two types that differ on data availability needs.<br><br>Optimistic rollups require data availability for the validity of the rollup execution. Ensuring data availability guarantees that the entire rollup block has been published which means that the honest nodes in the network can verify the block and alert the network if they detect fraud – keeping the rollup secure.<br><br> zkRollups don’t rely on data availability for the validity of the rollup execution, but rather require it to ensure that the rollup cannot be frozen. If zkRollup validators stop producing blocks, then it must be possible for new validators to step in and continue block production. If the transactions of zkRollup block are not published, then it is impossible for new validators to reconstruct the state of the chain. Without the state of the chain, these validators cannot create new blocks and the chain is effectively frozen. Ensuring that all transactions are published guarantees that new validators can reconstruct the state and that the chain cannot be frozen.',
    },{
        id: 8,
        question: 'How do I run a node?',
        text: 'Hash Protocol does not yet have a public testnet, but if you are interested in running a node, please join the <a href="/#waitlist">waitlist</a>. We will contact you when we launch testnet in the coming months. Node hardware requirements are expected to be similar to those for Cosmos validators.',
    },{
        id: 9,
        question: 'Can Hash Protocol support both zk rollups and optimistic rollups?',
        text: 'Yes, Hash Protocol doesn’t impose any restrictions on the types of rollups or blockchains that can use it. This means that anybody will be able to deploy a zk or optimistic rollup on top of Hash Protocol.',
    },{
        id: 10, 
        question: 'Is Hash Protocol only available for the Cosmos ecosystem?',
        text: 'No, blockchains from any network can deploy or utilize Hash Protocol for data availability and consensus to tap into its shared security. What being a part of Cosmos does allow for is that the Hash Protocol main chain has the option to connect to IBC and communicate with other IBC-enabled zones.',
    },{
        id: 11,
        question: 'What is the difference between Hash Protocol and data storage blockchains like Arweave and Filecoin?',
        text: 'Hash Protocol is a blockchain that focuses on data availability whereas the latter is focused on data storage. Data availability is concerned with whether the data published in the latest block is available. This is distinctly different from data storage, which is concerned with storing data securely and providing guarantees that it can be retrieved when needed.<br><br>These distinct focuses lead to differences between their target use-cases. Data storage blockchains are particularly focused on providing a decentralized way for data to be stored and accessed. Conversely, Hash Protocol is designed to provide secure and scalable data availability for blockchains and specialized execution environments, like rollups.<br><br>What makes data storage blockchains unsuitable for rollups is their lack of data availability sampling. Lacking this feature determines that nodes would not be able to efficiently verify that the data for their rollup has actually been published by the rollup sequencer. Using Arweave as an example, rollup nodes would instead have to download the entire Arweave chain to check its data availability – an infeasible task for a blockchain that is already 43TB.<br><br>Arweave nodes must also trust that the consensus set is honest to assume that the data is available (via its proof-of-access consensus mechanism) - an assumption that rollups avoid. Additionally, it would be non-trivial for Arweave to support data availability sampling, because it would require a minimum number of light clients to sample and distribute small chunks from every block to guarantee security, such that the light clients can collectively recover the block. This means that the block size must be limited according to how many light clients are expected to be in the network, sampling chunks. This also applies to other data storage blockchains.<br><br>Ultimately, data storage blockchains are designed to store greater amounts of data but with lower security guarantees that are unsuitable for rollups, but suitable for the "permaweb" use case, whereas Hash Protocol is designed to store less data but with greater security guarantees that are suitable for rollups.<br><br>For more information about data availability, <a href="https://coinmarketcap.com/alexandria/article/what-is-data-availability" target="_blank" rel="noreferrer">this post</a> by Hash Protocol co-founder Mustafa Al-Bassam is a good place to start.',
    },{
        id: 12,
        question: 'What guarantees for data retrievability does Hash Protocol provide?',
        text: 'Hash Protocol makes the same assumptions for data retrieval that many other blockchains do, which is that Hash Protocol assumes that once the data has been published there will be at least one copy of it somewhere on the internet. This copy could come directly from Hash Protocol nodes, or from third party data providers, such as block explorers or data indexers like The Graph.'
    },
]
