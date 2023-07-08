import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'NUK',
    tokenAddress: '0x6819983a136774bA31979Df2b428714B7F56083b',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x6819983a136774bA31979Df2b428714B7F56083b',  // token address
    contractAddress: {
      97: '',
      56: '0xF154dE83a61e728bc4F4e66699ac575f9732b573',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
