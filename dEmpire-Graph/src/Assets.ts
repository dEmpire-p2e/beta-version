import { Address, BigInt, dataSource, Result } from "@graphprotocol/graph-ts"
import {
    TransferSingle,
    Assets,
    unLock

} from "../generated/Assets/Assets"
import { miner } from "../generated/schema"
import { user } from "../generated/schema"
import { nftamount } from "../generated/schema"
import { nft } from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'


export function handleTransfer(event: TransferSingle): void {

    let resource = nftamount.load(event.params.to.toHex() + "-" + (event.params.id.toI64() + 1).toString())
    let from = nftamount.load(event.params.from.toHex() + "-" + (event.params.id.toI64() + 1).toString())
    log.warning(event.params.from.toHex() + "and" + dataSource.address().toHex() ,[]);
    log.warning(event.params.to.toHex() + "and" + dataSource.address().toHex() ,[]);
    
 
        if (event.params.to.toHexString() == "0x0000000000000000000000000000000000000000") {
            log.warning("----------We are here----------------------",[])
            if (from != null) {
                log.warning("----------We in the boss----------------------",[])
            
                from.locked = BigInt.fromU64(from.locked.toU64() + event.params.value.toU64())
                from.save()
            }
        }


    
    else {
        if (resource == null) {
            
            resource = new nftamount(event.params.to.toHex() + "-" + (event.params.id.toI64() + 1).toString())
            resource.owner = event.params.to.toHex();
            resource.nft = (event.params.id.toI64()+1).toString();
            resource.locked = BigInt.fromU64(0)
            resource.amount = BigInt.fromU64(0)

        }
        resource.amount = BigInt.fromU64(event.params.value.toU64() + resource.amount.toU64())
        if (from != null) {
            from.amount = BigInt.fromU64(from.amount.toU64() - event.params.value.toU64());
            from.save()
        }       
        resource.save()

    }


}


export function handleUnlock(event: unLock): void{

    let resource = nftamount.load(event.params.to.toHex() + "-" + (event.params.id.toI64() + 1).toString())
    if (resource != null) {
        resource.locked = BigInt.fromU64(resource.locked.toU64() - event.params.value.toU64())
        resource.amount = BigInt.fromU64(resource.amount.toU64() - event.params.value.toU64())
        resource.save()
    }    



}