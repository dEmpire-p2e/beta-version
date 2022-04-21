import { BigInt } from "@graphprotocol/graph-ts"
import {
  addERC721,
  addERC1155,
  startGamev
} from "../generated/MainGame/MainGame"
import { miner } from "../generated/schema"
import { user } from "../generated/schema"
import { nftamount } from "../generated/schema"
import { nft } from "../generated/schema"

export function handleAddERC721(event: addERC721): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
 // let entity = Add.load(event.transaction.from.toHex())
  let entity = new nft(event.params.id.toString())
  entity.nftid  = BigInt.fromI32(0)
  entity.name = event.params.name
  entity.price = event.params.price
  entity.contract = event.params.contractid.toHexString()
  entity.type = false;
  entity.save()
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
 // if (!entity) {
  //  entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
 //   entity.count = BigInt.fromI32(0)
//  }

  // BigInt and BigDecimal math are supported
//entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
//  entity.account = event.params.account
 // entity.operator = event.params.operator

  // Entities can be written to the store with `.save()`
//  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balanceOf(...)
  // - contract.balanceOfBatch(...)
  // - contract.currentcount(...)
  // - contract.isApprovedForAll(...)
  // - contract.owner(...)
  // - contract.supportsInterface(...)
  // - contract.uri(...)
  // - contract.addAsset(...)
}

export function handleAddERC1155(event: addERC1155): void {
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
   // let entity = Add.load(event.transaction.from.toHex())
    let entity = new nft(event.params.id.toString())

    entity.nftid  = event.params.nftid
    entity.name = event.params.name
    entity.price = event.params.price
    entity.contract = event.params.contractid.toHexString()
    entity.type = true;
    entity.save()
}


export function handlestartGamev(event: startGamev): void{

  let entity = user.load(event.params.own.toHex());
  if(entity == null){
    entity = new user(event.params.own.toHex());
   

  
  }
  entity.townhall = event.params.townhallid
  entity.save()


}