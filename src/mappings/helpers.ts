import { BigInt} from "@graphprotocol/graph-ts"
import {User, HubPool} from "../../generated/schema"

export function createOrLoadHubPool(id: string): HubPool {

    let hubPool = HubPool.load(id)

    if (hubPool == null){
        hubPool = new HubPool(id)
        
    }

    hubPool.save()
    return hubPool
}

export function creteOrLoadUser(id: string): User {

    let user = User.load(id)

    if (user == null){
        user = new User(id)

        user.liquidityAddedCount = BigInt.fromI32(0)
        user.liquidityRemovedCount = BigInt.fromI32(0)
        let hubPool = createOrLoadHubPool( "1")

        // TODO add User to hubPool.cumulativeUniqueLiquidityProviders
        let cumulativeUniqueLiquidityProvidersCount = hubPool.cumulativeUniqueLiquidityProvidersCount
        hubPool.cumulativeUniqueLiquidityProvidersCount = cumulativeUniqueLiquidityProvidersCount.plus(BigInt.fromI32(1))
    }

    user.save()
    return user
}