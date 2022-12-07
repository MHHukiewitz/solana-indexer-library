/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category MergeStakes
 * @category generated
 */
export type MergeStakesInstructionArgs = {
  destinationStakeIndex: number
  sourceStakeIndex: number
  validatorIndex: number
}
/**
 * @category Instructions
 * @category MergeStakes
 * @category generated
 */
export const mergeStakesStruct = new beet.BeetArgsStruct<
  MergeStakesInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['destinationStakeIndex', beet.u32],
    ['sourceStakeIndex', beet.u32],
    ['validatorIndex', beet.u32],
  ],
  'MergeStakesInstructionArgs',
)
/**
 * Accounts required by the _mergeStakes_ instruction
 *
 * @property [_writable_] state
 * @property [_writable_] stakeList
 * @property [_writable_] validatorList
 * @property [_writable_] destinationStake
 * @property [_writable_] sourceStake
 * @property [] stakeDepositAuthority
 * @property [] stakeWithdrawAuthority
 * @property [_writable_] operationalSolAccount
 * @property [] clock
 * @property [] stakeHistory
 * @property [] stakeProgram
 * @category Instructions
 * @category MergeStakes
 * @category generated
 */
export type MergeStakesInstructionAccounts = {
  state: web3.PublicKey
  stakeList: web3.PublicKey
  validatorList: web3.PublicKey
  destinationStake: web3.PublicKey
  sourceStake: web3.PublicKey
  stakeDepositAuthority: web3.PublicKey
  stakeWithdrawAuthority: web3.PublicKey
  operationalSolAccount: web3.PublicKey
  clock: web3.PublicKey
  stakeHistory: web3.PublicKey
  stakeProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const mergeStakesInstructionDiscriminator = [
  216, 36, 141, 225, 243, 78, 125, 237,
]

/**
 * Creates a _MergeStakes_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MergeStakes
 * @category generated
 */
export function createMergeStakesInstruction(
  accounts: MergeStakesInstructionAccounts,
  args: MergeStakesInstructionArgs,
  programId = new web3.PublicKey('MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD'),
) {
  const [data] = mergeStakesStruct.serialize({
    instructionDiscriminator: mergeStakesInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.state,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeList,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.validatorList,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.destinationStake,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sourceStake,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeDepositAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeWithdrawAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.operationalSolAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.clock,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeHistory,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}