import { BigInt} from "@graphprotocol/graph-ts"
import {User, HubPool} from "../../generated/schema"

export function createOrLoadHubPool(id: string): HubPool {

    let hubPool = HubPool.load(id)

    if (hubPool == null){
        hubPool = new HubPool(id)
        hubPool.cumulativeUniqueLiquidityProvidersCount = BigInt.fromI32(0)
        hubPool.save()
    }

    return hubPool
}

export function createOrLoadUser(id: string): User {

    let user = User.load(id)

    if (user == null){
        user = new User(id)

        // TODO depending on the event calling this function, initialize one the above to one 
        // wait maybe not? do it inside the event instead maybe 
        user.addedLiquidityCount = BigInt.fromI32(0)
        user.removedLiquidityCount = BigInt.fromI32(0)
        let hubPool = createOrLoadHubPool( "1")

        // TODO add User to hubPool.cumulativeUniqueLiquidityProviders
        let previousCount = hubPool.cumulativeUniqueLiquidityProvidersCount
        hubPool.cumulativeUniqueLiquidityProvidersCount = previousCount.plus(BigInt.fromI32(1))
        user.save()
        hubPool.save()

    }

    
    return user
}