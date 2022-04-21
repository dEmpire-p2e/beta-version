import { BigInt, dataSource, Result } from "@graphprotocol/graph-ts"
import {
    Transfer

} from "../generated/Miner/Miner"
import { miner } from "../generated/schema"
import { user } from "../generated/schema"
import { nftamount } from "../generated/schema"
import { nft } from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'

const MINER_ID = 0;

export function handleTransfer(event: Transfer): void {
    let resource = miner.load(event.params.tokenId.toString())
    log.warning(event.params.to.toHexString(),[]);
    if(dataSource.address() == event.params.to || dataSource.address() == event.params.from){
        if(event.address == event.params.to){
            if(resource != null){
                resource.locked = true
                resource.lastcollected = event.block.number;
                resource.save()

            }
            
        }
        else if(dataSource.address() == event.params.from){
            if(resource != null){
                resource.locked = false
                resource.save()
            
            }
        }


    } 
    else{
   
    if (resource == null) {
        resource = new miner(event.params.tokenId.toString())
        resource.owner = event.params.to.toHex();
        resource.locked = false
        let userr = user.load(event.params.to.toHex())
        if(userr == null){
            userr = new user(event.params.to.toHex());
            userr.aureus = BigInt.fromI32(0);
        
        }
        resource.townhall = userr.townhall
        resource.save()
    }
}
}
   
    












  