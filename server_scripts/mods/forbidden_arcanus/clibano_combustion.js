ServerEvents.recipes(event =>{
event.custom({
    type: "forbidden_arcanus:clibano_combustion",
    cooking_time: 600,
    ingredient: {
      item: "eidolon:pewter_blend"
    },
    result: {
      item: "eidolon:pewter_ingot", count: 2
    }
   })
event.custom({
  type:"forbidden_arcanus:clibano_combustion",
   cooking_time: 1200,
   igredient: {
     item: "eidolon:pewter_ingot"
   },
   result: {
     item: "kubejs:hot_pewter_ingot"
    }
   })
})