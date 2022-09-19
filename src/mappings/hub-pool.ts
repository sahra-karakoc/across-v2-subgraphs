import { BigInt } from "@graphprotocol/graph-ts"
import {
  HubPool,
  BondSet,
  CrossChainContractsSet,
  EmergencyRootBundleDeleted,
  IdentifierSet,
  L1TokenEnabledForLiquidityProvision,
  L2TokenDisabledForLiquidityProvision,
  LiquidityAdded,
  LiquidityRemoved,
  LivenessSet,
  OwnershipTransferred,
  Paused,
  ProposeRootBundle,
  ProtocolFeeCaptureSet,
  ProtocolFeesCapturedClaimed,
  RootBundleCanceled,
  RootBundleDisputed,
  RootBundleExecuted,
  SetEnableDepositRoute,
  SetPoolRebalanceRoute,
  SpokePoolAdminFunctionTriggered
} from "../../generated/HubPool/HubPool"
import { AddedLiquidity, RemovedLiquidity } from "../../generated/schema"

import {createOrLoadUser} from "../../src/mappings/helpers"
export function handleBondSet(event: BondSet): void {

}

export function handleCrossChainContractsSet(
  event: CrossChainContractsSet
): void {}

export function handleEmergencyRootBundleDeleted(
  event: EmergencyRootBundleDeleted
): void {}

export function handleIdentifierSet(event: IdentifierSet): void {}

export function handleL1TokenEnabledForLiquidityProvision(
  event: L1TokenEnabledForLiquidityProvision
): void {}

export function handleL2TokenDisabledForLiquidityProvision(
  event: L2TokenDisabledForLiquidityProvision
): void {}

export function handleLiquidityAdded(event: LiquidityAdded): void {
    let user = createOrLoadUser(event.params.liquidityProvider.toHexString()); 
    let previousCount = user.addedLiquidityCount
    user.addedLiquidityCount = previousCount.plus(BigInt.fromI32(1))
    let id = event.params.l1Token.toString().concat("-").concat(user.addedLiquidityCount.toString())
    let addedLiquidity = new AddedLiquidity(id)
    user.save()
    addedLiquidity.save()
}

export function handleLiquidityRemoved(event: LiquidityRemoved): void {}

export function handleLivenessSet(event: LivenessSet): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleProposeRootBundle(event: ProposeRootBundle): void {}

export function handleProtocolFeeCaptureSet(
  event: ProtocolFeeCaptureSet
): void {}

export function handleProtocolFeesCapturedClaimed(
  event: ProtocolFeesCapturedClaimed
): void {}

export function handleRootBundleCanceled(event: RootBundleCanceled): void {}

export function handleRootBundleDisputed(event: RootBundleDisputed): void {}

export function handleRootBundleExecuted(event: RootBundleExecuted): void {}

export function handleSetEnableDepositRoute(
  event: SetEnableDepositRoute
): void {}

export function handleSetPoolRebalanceRoute(
  event: SetPoolRebalanceRoute
): void {}

export function handleSpokePoolAdminFunctionTriggered(
  event: SpokePoolAdminFunctionTriggered
): void {}
