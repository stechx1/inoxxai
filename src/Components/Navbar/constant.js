export const headings = [
  {
    heading: 'Mainet Explorer',
  },
  {
    heading: 'Testnet Explorer',
  },
  {
    heading: 'Faucet',
  },
  {
    heading: 'Bridge',
  },
  {
    heading: 'Staking',
  },
  {
    heading: 'About',
  },
  {
    heading: 'Whitepaper',
  },
  {
    heading: 'Docs',
  },
  {
    heading: 'Issue ERC20 Tokens',
  },
  {
    heading: 'Block Rewards',
  },
  {
    heading: 'Block Rewards',
  },
  {
    heading: 'Create a Foundary Project',
  },
  {
    heading: 'Run Full Nodes',
  },
];

export const items = [
  {
    label: 'Explorer',
    key: 'explorer',
    // icon: <MailOutlined />,
    children: [
      {
        label: (
          <a
            href='https://docs.inoxxai.pro/developers/explorer'
            target='_blank'
            rel='noopener noreferrer'
          >
            Mainnet Explorer
          </a>
        ),
        key: 'Mainnet Explorer',
      },
      {
        label: (
          <a
            href='https://explorer-testnet.inoxxai.pro/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Testnet Explorer
          </a>
        ),
        key: 'Testnet Explorer',
      },
    ],
  },
  {
    label: 'Utility',
    key: 'utiltity',
    // icon: <MailOutlined />,
    children: [
      {
        label: (
          <a
            href='https://faucet.inoxxai.pro/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Faucet
          </a>
        ),
        key: 'faucet',
      },
      {
        label: (
          <a
            href='https://bridge.inoxxai.pro/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Bridge
          </a>
        ),
        key: 'bridge',
      },
      {
        label: (
          <a
            href='https://token.inoxxai.pro/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Create Smart AI contract Token
          </a>
        ),
        key: 'aitoken',
      },
      {
        label: (
          <a href='/' target='_blank' rel='noopener noreferrer'>
            Mint NFT
          </a>
        ),
        key: 'aitoken',
      },
      {
        label: (
          <a href='/' target='_blank' rel='noopener noreferrer'>
            AI generate NFT & Prompts
          </a>
        ),
        key: 'aigenerate',
      },
      {
        label: (
          <a href='/' target='_blank' rel='noopener noreferrer'>
            AI tools
          </a>
        ),
        key: 'aitools',
      },
    ],
  },
  {
    label: (
      <a href='/' target='_blank' rel='noopener noreferrer'>
        Staking (Coming Soon)
      </a>
    ),
    key: 'staking',
  },
  {
    label: (
      <a href='/about' target='_blank' rel='noopener noreferrer'>
        About
      </a>
    ),
    key: 'about',
  },
  {
    label: 'Documentation',
    key: 'documentation',
    // icon: <MailOutlined />,
    children: [
      {
        label: (
          <a
            href='https://docs.inoxxai.pro/project-goal/whitepaper'
            target='_blank'
            rel='noopener noreferrer'
          >
            Whitepaper
          </a>
        ),
        key: 'whitepaper',
      },
      {
        label: (
          <a
            href='https://docs.inoxxai.pro/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Docs
          </a>
        ),
        key: 'docs',
      },
      {
        label: (
          <a
            href='https://docs.inoxxai.pro/overview/issue-erc20-token'
            target='_blank'
            rel='noopener noreferrer'
          >
            Issue ERC20 Tokens
          </a>
        ),
        key: 'docs',
      },
      {
        label: (
          <a
            href='https://docs.inoxxai.pro/developers/run-a-node/run-a-validator-node/block-rewards'
            target='_blank'
            rel='noopener noreferrer'
          >
            Block Rewards
          </a>
        ),
        key: 'block-rewards',
      },
      {
        label: (
          <a
            href='https://docs.inoxxai.pro/overview/issue-erc20-token'
            target='_blank'
            rel='noopener noreferrer'
          >
            Issue ERC20 Tokens
          </a>
        ),
        key: 'docs',
      },
    ],
  },
  {
    label: 'Development',
    key: 'development',
    // icon: <MailOutlined />,
    children: [
      {
        label: (
          <a
            href='https://docs.inoxxai.pro/developers/deploy-nfts/create-a-foundry-project'
            target='_blank'
            rel='noopener noreferrer'
          >
            Create A Foundary Project
          </a>
        ),
        key: 'whitepaper',
      },
      {
        label: (
          <a
            href='https://docs.inoxxai.pro/developers/run-a-node/run-a-full-node'
            target='_blank'
            rel='noopener noreferrer'
          >
            Run Full Nodes
          </a>
        ),
        key: 'run-full-nodes',
      },
    ],
  },
];
