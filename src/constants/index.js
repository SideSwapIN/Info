export const FACTORY_ADDRESS = '0x3F5a6e62cccD2C9AAF3dE431e127D65BC457000a'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  // 'https://gateway.ipfs.io/ipns/tokens.sideswap.finance',
  // 'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
]

// hide from overview list
// Convert blacklist to whitelist
export const TOKEN_BLACKLIST = [
  "0x4b21b980d0dc7d3c0c6175b0a412694f3a1c7c6b",
  "0x813bcb548f99bc081e5efeeaa65e3018befb92ae",
  "0x3f97bf3cd76b5ca9d4a4e9cd8a73c24e32d6c193",
  "0xa9f4eeb30dc48d4ef77310a2108816c80457cf6f",
  "0x1cd3e2a23c45a690a18ed93fd1412543f464158f",
  "0x50bcb6ecf1fddd35d649fb1bc6760dd7aa32b348",
  "0xd33db7ec50a98164cc865dfaa64666906d79319c",
  "0x373a1d936b4792a93715717855b90880fe806572"
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5',
  '0x97cb8cbe91227ba87fc21aaf52c4212d245da3f8',
  '0x1acba73121d5f63d8ea40bdc64edb594bd88ed09',
  '0x7d7e813082ef6c143277c71786e5be626ec77b20',
  '0x6bbb3376776dd35b95f1b516776a06d8303c8011'// sideswap/usec
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
  '0xa6e11deaff55249f2b5d70503c0eb0c92ed49a01':
    'This is a scam token, don’t believe it',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or USDC pairings.'

// pairs that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES_PAIRS = [
  '0x9928e4046d7c6513326ccea028cd3e7a91c7590a',
  '0x87da823b6fc8eb8575a235a824690fda94674c88',
  '0xcd7989894bc033581532d2cd88da5db0a4b12859',
  '0xe1573b9d29e2183b1af0e743dc2754979a40d237',
  '0x45804880de22913dafe09f4980848ece6ecbaf78',
  '0x709f7b10f22eb62b05913b59b92ddd372d4e2152',
]

// tokens that should be tracked but arent due to lag in subgraph
// all pairs that include token will be tracked
export const TRACKED_OVERRIDES_TOKENS = ['0x956f47f50a910163d8bf957cf5846d573e7f87ca']
