import { Address, BigInt, dataSource, Result } from "@graphprotocol/graph-ts"
import {
    Transfer,
    Aureus

} from "../generated/Aureus/Aureus"
import { miner } from "../generated/schema"
import { user } from "../generated/schema"
import { nftamount } from "../generated/schema"
import { nft } from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'


export function handleTransfer(event: Transfer): void {

    let contract = Aureus.bind(event.address)
    let resource = user.load(event.params.from.toHex())
    let to = user.load(event.params.to.toHex())
    if(resource == null){
        resource = new user(event.params.from.toHex());
        
    }
    resource.aureus = contract.balanceOf(event.params.from)
    resource.save()
    if(to == null){
        to = new user(event.params.to.toHex());
         
    }
    to.aureus = contract.balanceOf(event.params.to)
    to.save()
    
}