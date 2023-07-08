import { Ifo } from './types'

const ifos: Ifo[] = [

  {
    id: 'POOL',
    address: '0x3D654af15779aa38cA85CB56d497C9255f721C38',
    isActive: false,
    name: 'POOL',
    subTitle: 'Trading Token',
    description:
      'POOL TOKEN ($POOL) will be the governance token of XYZ',
    launchDate: 'Sep. 25',
    launchTime: '10AM UTC',
    saleAmount: '20,000,000 POOL',
    raiseAmount: '100 WBNB / 100% (min cap)',
    cakeToBurn: '1,500 WBNB / 1500% (max cap)',
    projectSiteUrl: 'https://google.com/',
    currency: 'WBNB',
    currencyAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    tokenDecimals: 9,
    tokenSymbol: 'BELT',
    releaseBlockNumber: 11227765
  },
  {
    id: 'POOL',
    address: '0x7bFAF7c5B3327E51A69e93b0D0d1dC2024d9F3c8',
    isActive: true,
    name: 'POOL',
    subTitle: 'Trading Token',
    description:
      'FAKE COIN ($FCOIN) will be the governance token of XYZ',
    launchDate: 'Mar. 30',
    launchTime: '14AM UTC',
    saleAmount: '150 FCOIN',
    raiseAmount: '15 BUSD / 100% (min cap)',
    cakeToBurn: '15 BUSD / 100% (max cap)',
    projectSiteUrl: 'https://google.com/',
    currency: 'BUSD',
    currencyAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    tokenDecimals: 18,
    tokenSymbol: 'FCOIN',
    releaseBlockNumber: 11227765
  },
  // {
  //   id: 'belt',
  //   address: '0xc9FBedC033a1c479a6AD451ffE463025E92a1d38',
  //   isActive: false,
  //   name: 'Belt (BELT)',
  //   subTitle: 'AMM protocol incorporating multi-strategy yield optimization',
  //   description:
  //     'Belt.fi is a protocol that allows users to retain the stability of their asset positions and get maximum yields with minimal risk, including automated vault compounding and yield optimization strategies. BELT is the governance and incentivization token of Belt Finance. BELT will be distributed to all types of pools.',
  //   launchDate: 'Mar. 10',
  //   launchTime: '5PM SGT',
  //   saleAmount: '150,000 BELT',
  //   raiseAmount: '$3,000,000',
  //   cakeToBurn: '$1,500,000',
  //   projectSiteUrl: 'https://beta.belt.fi/',
  //   currency: 'CAKE-BNB LP',
  //   currencyAddress: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
  //   tokenDecimals: 18,
  //   tokenSymbol: 'BELT',
  //   releaseBlockNumber: 5493919,
  //   campaignId: '511080000',
  // },
]

export default ifos
