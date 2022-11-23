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
  console.log("Prompt 1")
  // console.log("--1.Double the hitpoints of everyone in the party--")
  party.forEach((el) => {
    el.hitpoints = 2 * el.hitpoints
  })
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 2")
  // console.log("--2.Timothy has been hit with an arrow, subtract 5 points from his hp--")
  party.forEach((el) => {
    if (el.name == "Timothy")
      el.hitpoints = el.hitpoints - 5
  })
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 3")
  // console.log("--3.Sarah's tiger has been turned into a jellyfish by a wizard, please change it--")
  party.forEach((el) => {
    if (el.name == "Sarah")
      el.companion.type = "jellyfish"
  })
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 4")
  // console.log("--4.Timothy drank this potion. Raise his hitpoints by 20 and remove 'potion' from his belongings.--")
  party.forEach((el) => {
    if (el.name == "Timothy") {
      el.hitpoints = el.hitpoints + 20
      const index = el.belongings.indexOf("potion");
      {
        if (index > -1) // only splice array when item is found
          el.belongings.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  })
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 5")
  // console.log("--5.Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings--")
  
  party.forEach((el) => {
    if (el.name == "Joline") {
      const index = el.belongings.indexOf("bread");
      {
        if (index > -1) // only splice array when item is found
          el.belongings.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    if (el.name == "Timothy")
      el.belongings.push("bread")
  })
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 6")
  // console.log("--6.Joline got upset and left the party. Take her out of the array.--")
  
  for(i=0;i<party.length; i++)
  {
         if(party[i].name=="Joline")
           party.splice(i,1)
  }
  
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 7")
  // console.log("--7.Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)--")
  let new_adventurer =
  {
    name: "Alex",
    hitpoints: 40,
    belongings: ["Slingshot", "rocks", "can food"],
    companions:
    {
      name: "rattle",
      type: "snake"
    }
  }
  party.push(new_adventurer)
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 8") 
  // console.log("--8.The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)--")
  let amountofgold = 200;
  for (i = 0; i < party.length; i++)
    party[i].gold = Math.floor(amountofgold / party.length)
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 9")
  // console.log("--9.Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear.--")
  party.forEach((el) => {
    if (el.name == "Sarah")
    {
      el.gold=el.gold-20
      el.companion.type = "bear"
    }
  })
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 10")
  // console.log("--10.Timothy’s sword has gotten old. Change it to 'Rusty Sword'--")
  party.forEach((el) => {
    if (el.name == "Timothy")
    {
      const index = el.belongings.indexOf("sword");
      {
        if (index > -1) 
          el.belongings.splice(index, 1); 
      }
      el.belongings.push("Rusty Sword")
    }
  })
  console.log(party)
  console.log("********************************")
  
  console.log("Prompt 11")
  // console.log("--11.Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.--")
  
  const setLeader = (leaderName) => {
    for (i = 0; i < party.length; i++) {
      if (party[i].name == leaderName)
        party[i].leader = true
      else
        party[i].leader = false
    }
  }
  setLeader("Sarah")
  console.log(party)
  console.log("********************************")