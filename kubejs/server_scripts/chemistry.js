function electrolysis(fluid, amount, result1, resultAmount1, result2, resultAmount2) {
    onEvent('recipes', event => {
    event.custom({
        "type": "createindustrialchemistry:electrolysis",
        "ingredients": [
          {
            "fluid": fluid,
            "amount": amount
          }
        ],
        "results": [
          {
            "fluid": result1,
            "amount": resultAmount1
          },
          {
            "fluid": result2,
            "amount": resultAmount2
          }
        ]
    }).id('milkyway:chemistry/electrolysis/' + fluid.split(':')[1])
})}
function coolingLiquid(fluid, amount, result, resultAmount) {
    onEvent('recipes', event => {
        event.custom({
            "type": "createindustrialchemistry:cooling",
            "ingredients": [
              {
                "fluid": fluid,
                "amount": amount
              }
            ],
            "results": [
              {
                "fluid": resultFluid,
                "amount": resultAmount
              }
            ]
        }).id('milkyway:chemistry/cooling/' + result.split(':')[1])
})}
function coolingItem(fluid, amount, result) {
    onEvent('recipes', event => {
        event.custom({
            "type": "createindustrialchemistry:cooling",
            "ingredients": [
              {
                "fluid": fluid,
                "amount": amount
              }
            ],
            "results": [
              {
                "item": result
              }
            ]
        }).id('milkyway:chemistry/cooling/' + result.split(':')[1])
})}
onEvent('recipes', event => {
	log.push('Registering Chemistry Recipes')
	meth(event)
  chemistryRemoval(event)
	log.push('Chemistry Recipes Updated')
	})
function meth(event) {
  event.custom({
    "type": "create:mixing",
    "ingredients": [
        {
            "item": 'createbb:aluminosilicate_catalyst'
        },
        {
            "fluid": 'createindustrialchemistry:methanol',
            "amount": 5
        },
        {
            "fluid": 'createbb:ammonia',
            "amount": 5
        }
    ],
    "results": [
        {
            "fluid": 'createbb:methylamine',
            "amount": 10
        },
        {
          "item": 'createbb:aluminosilicate_catalyst'
        }
    ]
}).id('milkyway:chemistry/mixing/methylamine')
event.custom({
  "type": "create:mixing",
  "ingredients": [
      {
          "item": 'minecraft:sugar'
      },
      {
          "fluid": 'createindustrialchemistry:oxygen',
          "amount": 25
      }
  ],
  "results": [
      {
          "fluid": 'createbb:acetic_anhydride',
          "amount": 50
      }
  ]
}).id('milkyway:chemistry/mixing/acetic_anhydride')
}
function chemistryRemoval(event) {
  function replaceIn(originIn, newIn) {
    event.replaceInput({}, originIn, newIn);
  function removeByID(recipeId) {
    onEvent('recipes', event => {
        event.remove({ id: recipeId });
    })
  }
}
replaceIn('createindustrialchemistry:nickel', 'thermal:nickel_ingot')
replaceIn('createindustrialchemistry:aluminium', 'mw_core:aluminium_ingot')
replaceIn('refinedstorage:silicon', 'createindustrialchemistry:silicon')
replaceIn('createindustrialchemistry:salt', 'mw_core:salt')

removeByID('createbb:phase2/methylamine_mixing')
removeByID('createbb:phase2/acetic_anhydride_mixing')

function replaceOut(originOut, newOut) {
  event.replaceOutput({}, originOut, newOut);
}
replaceOut('createindustrialchemistry:salt', 'mw_core:salt')
replaceOut('createindustrialchemistry:nickel', 'thermal:nickel_ingot')
}
electrolysis('createindustrialchemistry:molten_aluminium_oxide', 500, 'tconstruct:molten_aluminum', 200, 'createindustrialchemistry:oxygen', 300)