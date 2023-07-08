import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'NUK',
    lpAddresses: {
      97: '',
      56: '0x6819983a136774bA31979Df2b428714B7F56083b',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x6819983a136774bA31979Df2b428714B7F56083b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'NUK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xEdB12b0cF3526042907cEdD29b582499193592B5',   // lp address token-bnb
    },
    tokenSymbol: 'NUK',
    tokenAddresses: {
      97: '',
      56: '0x6819983a136774bA31979Df2b428714B7F56083b', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
