let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]
// Prompt 1: double the hitpoints of everyone in the party

party.forEach((el) =>
{
  el.hitpoints=2*el.hitpoints
})
console.log(party)

// // // Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
party.forEach((el) =>
{
  if(el.name=="Timothy")
    el.hitpoints=el.hitpoints-5
})
console.log(party)

// // Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
party.forEach((el) =>
{
  if(el.name=="Sarah")
    el.companion.type="jellyfish"
})
console.log(party)

// Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
party.forEach((el) =>
{
  if(el.name=="Timothy")
  {
    el.hitpoints=el.hitpoints+20
    const index = el.belongings.indexOf("potion");
    {
      if (index > -1) // only splice array when item is found
        el.belongings.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
})
console.log(party)

// Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings

party.forEach((el) =>
{
  if(el.name=="Joline")
  {
   const index = el.belongings.indexOf("bread");
    {
      if (index > -1) // only splice array when item is found
        el.belongings.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  if(el.name=="Timothy")
     el.belongings.push("bread")    
})
console.log(party)

// Prompt 6: Joline got upset and left the party. Take her out of the array.