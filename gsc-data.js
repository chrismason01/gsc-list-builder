/* ==========================================================================
   Genestealer Cults — data backbone
   --------------------------------------------------------------------------
   POINTS  : from the attached Munitorum Field Manual PDF (v1.0). This is a
             custom/escalating points pack — many units cost MORE for your
             3rd+ copy. base = cost for your 1st-2nd unit, repeat = 3rd+ unit.
   STATS / RULES : scraped from 39k.pro (datasheets + detachments).
   NOTE    : Where 39k.pro points disagreed with the PDF, the PDF wins.
   ========================================================================== */
window.GSC_DATA = {
  meta: {
    faction: "Genestealer Cults",
    armyRule: "Cult Ambush",
    pointsSource: "Munitorum Field Manual (attached PDF) v1.0",
    statsSource: "39k.pro",
    generated: "2026-06"
  },

  /* ---- UNITS -------------------------------------------------------------
     category : character | battleline | infantry | mounted | vehicle | transport
     role     : LEADER | SUPPORT | "" (from the PDF)
     sizes    : [{models, label, base, repeat}]  base=1st-2nd cost, repeat=3rd+ cost
     wargear  : [{label, pts}]  optional point-costed upgrades (added per pick)
     leads    : [unit ids this character can be attached to]
  ------------------------------------------------------------------------- */
  units: [
    {
      id: "aberrants", name: "Aberrants", category: "infantry", role: "",
      sizes: [{models:5,label:"5 models",base:150,repeat:160},{models:10,label:"10 models",base:300,repeat:310}],
      keywords:["Infantry","Great Devourer","Aberrants"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"6",SV:"5+",W:"3",LD:"7+",OC:"1"}],
      weapons:[{name:"Aberrant weapons",kind:"Melee",range:"Melee",A:"3",skill:"3+",S:"7",AP:"-2",D:"2",keywords:""}],
      factionAbilities:["Cult Ambush"], coreAbilities:["Feel No Pain 5+","Deep Strike"],
      abilities:[{name:"Hulking Bodyguards",text:"While a CHARACTER is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll."}],
      composition:["1 Aberrant Hypermorph","4-9 Aberrants"], equipped:["Aberrant weapons."], leads:[]
    },
    {
      id:"abominant", name:"Abominant", category:"character", role:"LEADER",
      sizes:[{models:1,label:"1 model",base:85,repeat:95}],
      keywords:["Infantry","Character","Great Devourer","Abominant"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"6",SV:"5+",W:"5",LD:"7+",OC:"1"}],
      weapons:[{name:"Power sledgehammer",kind:"Melee",range:"Melee",A:"4",skill:"3+",S:"12",AP:"-2",D:"D6+1",keywords:""}],
      factionAbilities:[], coreAbilities:["Leader","Feel No Pain 5+","Deep Strike"],
      abilities:[
        {name:"Regenerating Gene-mass",text:"The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining."},
        {name:"The Chosen One",text:"While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."}
      ],
      composition:["1 Abominant"], equipped:["power sledgehammer."], leads:["aberrants"]
    },
    {
      id:"achilles", name:"Achilles Ridgerunners", category:"vehicle", role:"",
      sizes:[{models:1,label:"1 model",base:95,repeat:105},{models:2,label:"2 models",base:160,repeat:170}],
      wargear:[{label:"Heavy mining laser (per model)",pts:10}],
      keywords:["Vehicle","Great Devourer","Achilles Ridgerunners"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'12"',T:"7",SV:"3+",W:"8",LD:"7+",OC:"3"}],
      weapons:[
        {name:"Achilles missile launcher",kind:"Ranged",range:'36"',A:"3",skill:"4+",S:"9",AP:"-2",D:"3",keywords:""},
        {name:"Heavy mortar",kind:"Ranged",range:'48"',A:"D6+3",skill:"4+",S:"6",AP:"0",D:"1",keywords:"Blast, Indirect Fire"},
        {name:"Heavy mining laser",kind:"Ranged",range:'36"',A:"D3",skill:"4+",S:"12",AP:"-3",D:"D6+1",keywords:"Blast"},
        {name:"Twin heavy stubber",kind:"Ranged",range:'36"',A:"3",skill:"4+",S:"4",AP:"0",D:"1",keywords:"Rapid Fire 3, Twin-linked"},
        {name:"Armoured hull",kind:"Melee",range:"Melee",A:"3",skill:"4+",S:"5",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:['Scouts 9"',"Deadly Demise 1"],
      abilities:[{name:"Crossfire",text:"In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly GENESTEALER CULTS unit makes an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per turn."}],
      wargearAbilities:[
        {name:"Spotter",text:"The bearer’s ranged weapons have a Ballistic Skill characteristic of 3+."},
        {name:"Survey Augur",text:"Each time the bearer’s unit has shot, select one enemy unit that was hit by one or more attacks made by the bearer this phase. Until the end of the phase, each time a friendly GENESTEALER CULTS model makes an attack against that unit, that attack has the [IGNORES COVER] ability."},
        {name:"Flare launcher",text:"The bearer’s unit has the SMOKE keyword and you can target it with the Smokescreen Stratagem for 0CP."}
      ],
      composition:["1-2 Achilles Ridgerunners"],
      equipped:["heavy mining laser; twin heavy stubbers; armoured hull; flare launcher."],
      options:["Any number of models can each have their heavy mining laser replaced with: 1 Achilles missile launcher; 1 heavy mortar","Any number of models can each have their flare launcher replaced with: 1 spotter; 1 survey augur"],
      leads:[]
    },
    {
      id:"acolyte_auto", name:"Acolyte Hybrids with Autopistols", category:"battleline", role:"",
      sizes:[{models:5,label:"5 models",base:70,repeat:70},{models:10,label:"10 models",base:130,repeat:130}],
      keywords:["Infantry","Battleline","Grenades","Great Devourer","Acolyte Hybrids","Acolyte Hybrids with Autopistols"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"4",SV:"5+",W:"1",LD:"7+",OC:"2"}],
      weapons:[
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"4+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Leader’s bio-weapons",kind:"Melee",range:"Melee",A:"5",skill:"3+",S:"5",AP:"-2",D:"1",keywords:""},
        {name:"Cult claws and knife",kind:"Melee",range:"Melee",A:"3",skill:"3+",S:"4",AP:"-1",D:"1",keywords:""},
        {name:"Heavy mining tool",kind:"Melee",range:"Melee",A:"2",skill:"3+",S:"5",AP:"-2",D:"3",keywords:"Anti-vehicle 4+"}
      ],
      factionAbilities:["Cult Ambush"], coreAbilities:["Deep Strike"],
      abilities:[
        {name:"Claimed for the Cult",text:"At the start of your Command phase, roll one D6 for each objective marker you control that has one or more units from your army with this ability within range of it. If one or more of the results is a 4+, you gain 1CP."},
        {name:"Cult Icon",text:"In your Command phase, you can return up to D3 destroyed models to the bearer’s unit. If within range of an objective marker you control, you can return up to 3 destroyed models instead. Cannot return destroyed CHARACTER models in Attached units."}
      ],
      composition:["1 Acolyte Leader","4-9 Acolyte Hybrids"], equipped:["autopistol; cult claws and knife."],
      options:["For every 5 models, up to 3 Acolyte Hybrids can replace autopistol + cult claws and knife with 1 heavy mining tool.","The Acolyte Leader’s cult claws and knife can be replaced with 1 Leader’s bio-weapons.","One Acolyte Hybrid’s autopistol can be replaced with 1 cult icon."],
      leads:[]
    },
    {
      id:"acolyte_flamers", name:"Acolyte Hybrids with Hand Flamers", category:"battleline", role:"",
      sizes:[{models:5,label:"5 models",base:75,repeat:75},{models:10,label:"10 models",base:150,repeat:150}],
      keywords:["Infantry","Battleline","Grenades","Great Devourer","Acolyte Hybrids","Acolyte Hybrids with Hand Flamers"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"4",SV:"5+",W:"1",LD:"7+",OC:"2"}],
      weapons:[
        {name:"Hand flamer",kind:"Ranged",range:'12"',A:"D6",skill:"N/A",S:"3",AP:"0",D:"1",keywords:"Torrent, Pistol, Ignores Cover"},
        {name:"Demolition charges",kind:"Ranged",range:'8"',A:"D6",skill:"5+",S:"9",AP:"-2",D:"2",keywords:"Blast, Hazardous, Assault, One Shot"},
        {name:"Cult claws and knife",kind:"Melee",range:"Melee",A:"3",skill:"3+",S:"4",AP:"-1",D:"1",keywords:""},
        {name:"Leader’s bio-weapons",kind:"Melee",range:"Melee",A:"5",skill:"3+",S:"5",AP:"-2",D:"1",keywords:""}
      ],
      factionAbilities:["Cult Ambush"], coreAbilities:["Deep Strike"],
      abilities:[
        {name:"Industrialised Destruction",text:"Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target is within range of an objective marker, you can re-roll the Wound roll."},
        {name:"Cult Icon",text:"In your Command phase, you can return up to D3 destroyed models to the bearer’s unit. If within range of an objective marker you control, return up to 3 instead. Cannot return CHARACTER models in Attached units."}
      ],
      composition:["1 Acolyte Leader","4-9 Acolyte Hybrids"], equipped:["hand flamer; cult claws and knife."],
      options:["One Acolyte Hybrid’s hand flamer can be replaced with 1 cult icon.","For every 5 models, up to 2 Acolyte Hybrids can replace hand flamer with 1 demolition charges.","The Acolyte Leader’s cult claws and knife can be replaced with 1 Leader’s bio-weapons."],
      leads:[]
    },
    {
      id:"iconward", name:"Acolyte Iconward", category:"character", role:"LEADER",
      sizes:[{models:1,label:"1 model",base:50,repeat:50}],
      keywords:["Infantry","Character","Grenades","Great Devourer","Acolyte Iconward"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"4",SV:"5+",W:"3",LD:"6+",OC:"1"}],
      weapons:[
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"3+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Cult claws",kind:"Melee",range:"Melee",A:"4",skill:"3+",S:"4",AP:"-1",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Deep Strike","Leader",'Scouts 6"'],
      abilities:[
        {name:"Nexus of Devotion",text:"While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability. If that unit has the HYBRID METAMORPHS keyword, they have Feel No Pain 4+ instead."},
        {name:"Summon the Cult",text:"Once per battle, when you must remove a Cult Ambush marker because your opponent moved too close, instead place it anywhere within 12\" of a model with this ability and more than 9\" horizontally from all enemy units."}
      ],
      composition:["1 Acolyte Iconward"], equipped:["autopistol; cult claws."],
      leads:["acolyte_auto","acolyte_flamers","metamorphs","neophyte"]
    },
    {
      id:"atalan", name:"Atalan Jackals", category:"mounted", role:"",
      sizes:[{models:5,label:"5 models",base:90,repeat:100},{models:10,label:"10 models",base:160,repeat:170}],
      keywords:["Mounted","Grenades","Great Devourer","Atalan Jackals"], factionKeywords:["Genestealer Cults"],
      stats:[
        {profile:"Atalan Jackal",M:'12"',T:"4",SV:"5+",W:"2",LD:"7+",OC:"1"},
        {profile:"Atalan Wolfquad",M:'12"',T:"4",SV:"5+",W:"4",LD:"7+",OC:"1"}
      ],
      weapons:[
        {name:"Grenade launcher — krak",kind:"Ranged",range:'24"',A:"1",skill:"4+",S:"9",AP:"-2",D:"D3",keywords:""},
        {name:"Grenade launcher — frag",kind:"Ranged",range:'24"',A:"D3",skill:"4+",S:"4",AP:"0",D:"1",keywords:"Blast"},
        {name:"Atalan small arms",kind:"Ranged",range:'12"',A:"2",skill:"4+",S:"4",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Heavy stubber",kind:"Ranged",range:'36"',A:"3",skill:"4+",S:"4",AP:"0",D:"1",keywords:"Rapid Fire 3"},
        {name:"Mining laser",kind:"Ranged",range:'24"',A:"1",skill:"4+",S:"12",AP:"-3",D:"D6+1",keywords:"Assault"},
        {name:"Atalan incinerator",kind:"Ranged",range:'12"',A:"D6",skill:"N/A",S:"5",AP:"-1",D:"1",keywords:"Torrent, Ignores Cover"},
        {name:"Atalan power weapon",kind:"Melee",range:"Melee",A:"2",skill:"4+",S:"4",AP:"-2",D:"1",keywords:""},
        {name:"Close combat weapon",kind:"Melee",range:"Melee",A:"2",skill:"4+",S:"3",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:["Cult Ambush"], coreAbilities:["Stealth",'Scouts 9"'],
      abilities:[
        {name:"Demolition Run",text:"Once per turn, in your Movement phase, when this unit ends a move, select one enemy unit within 6\" and visible, and roll one D6 per ATALAN JACKALS model: each 4+ deals 1 mortal wound (max 6)."},
        {name:"Outrider Gangs",text:"When set up via Cult Ambush, all models must be wholly within 9\" of a battlefield edge and at least one model touching a Cult Ambush marker (then removed). If impossible, it cannot be set back up."}
      ],
      composition:["4-8 Atalan Jackals","1-2 Atalan Wolfquads","Can only contain 2 Wolfquads if it also contains 8 Jackals."],
      equipped:["Jackal: Atalan small arms; close combat weapon.","Wolfquad: Atalan small arms; heavy stubber; close combat weapon."],
      options:["Any Wolfquad can replace heavy stubber with: 1 Atalan incinerator; 1 mining laser","For every 4 Jackals, up to 2 close combat weapons can become 1 Atalan power weapon.","For every 4 Jackals, 1 Atalan small arms can become 1 grenade launcher."],
      leads:[]
    },
    {
      id:"benefictus", name:"Benefictus", category:"character", role:"LEADER",
      sizes:[{models:1,label:"1 model",base:75,repeat:75}],
      keywords:["Infantry","Character","Psyker","Great Devourer","Benefictus"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"3",LD:"7+",OC:"1"}],
      weapons:[
        {name:"Psionic Cascade — witchfire",kind:"Ranged",range:'18"',A:"1",skill:"3+",S:"12",AP:"-3",D:"D6+1",keywords:"Psychic, Ignores Cover"},
        {name:"Psionic Cascade — focused witchfire",kind:"Ranged",range:'18"',A:"2",skill:"3+",S:"12",AP:"-3",D:"D6+1",keywords:"Hazardous, Ignores Cover, Psychic"},
        {name:"Close combat weapon",kind:"Melee",range:"Melee",A:"2",skill:"3+",S:"3",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Leader","Deep Strike"],
      abilities:[
        {name:"Psionic Shield",text:"Once per battle, at the start of any phase, until the end of the phase this model has a 4+ invulnerable save."},
        {name:"Bio-horror Disruption",text:"While this model is leading a unit, ranged weapons equipped by models in that unit have the [LETHAL HITS] ability."}
      ],
      composition:["1 Benefictus"], equipped:["Psionic Cascade; close combat weapon."],
      leads:["acolyte_auto","acolyte_flamers","metamorphs","neophyte"]
    },
    {
      id:"biophagus", name:"Biophagus", category:"character", role:"SUPPORT",
      sizes:[{models:1,label:"1 model",base:50,repeat:50}],
      keywords:["Infantry","Character","Great Devourer","Biophagus"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"3",LD:"7+",OC:"1"}],
      weapons:[
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"3+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Chemical vials",kind:"Ranged",range:'6"',A:"1",skill:"3+",S:"1",AP:"-1",D:"2",keywords:"Anti-infantry 2+"},
        {name:"Injector goad",kind:"Melee",range:"Melee",A:"1",skill:"3+",S:"2",AP:"0",D:"D3",keywords:"Anti-infantry 2+"}
      ],
      factionAbilities:[], coreAbilities:["Leader","Deep Strike"],
      abilities:[
        {name:"Biological Warfare",text:"Once per battle, when this model’s unit is selected to fight, until the end of the phase improve the Attacks and Damage of its injector goad by 3."},
        {name:"Twisted Science",text:"While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability."}
      ],
      wargearAbilities:[{name:"Alchemicus Familiar",text:"Once per battle, when the bearer’s unit is selected to fight, until the end of the phase each time a model in the unit attacks an INFANTRY unit, add 1 to the Wound roll."}],
      composition:["1 Biophagus"], equipped:["autopistol; chemical vials; injector goad; alchemicus familiar."],
      leads:["aberrants","acolyte_auto","acolyte_flamers","metamorphs","neophyte"]
    },
    {
      id:"clamavus", name:"Clamavus", category:"character", role:"SUPPORT",
      sizes:[{models:1,label:"1 model",base:50,repeat:50}],
      keywords:["Infantry","Character","Great Devourer","Clamavus"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"3",LD:"6+",OC:"1"}],
      weapons:[
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"3+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Close combat weapon",kind:"Melee",range:"Melee",A:"2",skill:"3+",S:"3",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Deep Strike","Leader"],
      abilities:[
        {name:"Voice of New Truths",text:"In your Command phase, one model with this ability can select one enemy unit within 18\"; that unit must take a Battle-shock test."},
        {name:"Scrambler Array",text:"Enemy units set up as Reinforcements cannot be set up within 12\" of this model."}
      ],
      composition:["1 Clamavus"], equipped:["autopistol; close combat weapon."],
      leads:["acolyte_auto","acolyte_flamers","metamorphs","neophyte"]
    },
    {
      id:"rockgrinder", name:"Goliath Rockgrinder", category:"vehicle", role:"",
      sizes:[{models:1,label:"1 model",base:120,repeat:130}],
      keywords:["Vehicle","Transport","Great Devourer","Goliath Rockgrinder"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'12"',T:"10",SV:"3+",W:"10",LD:"7+",OC:"3"}],
      weapons:[
        {name:"Demolition charge cache",kind:"Ranged",range:'8"',A:"D6",skill:"5+",S:"9",AP:"-2",D:"2",keywords:"Blast, Hazardous, Assault"},
        {name:"Heavy stubber",kind:"Ranged",range:'36"',A:"3",skill:"4+",S:"4",AP:"0",D:"1",keywords:"Rapid Fire 3"},
        {name:"Heavy seismic cannon",kind:"Ranged",range:'24"',A:"4",skill:"4+",S:"8",AP:"-2",D:"D3",keywords:"Rapid Fire 2"},
        {name:"Clearance incinerator",kind:"Ranged",range:'12"',A:"2D6",skill:"N/A",S:"6",AP:"-1",D:"1",keywords:"Torrent, Ignores Cover"},
        {name:"Heavy mining laser",kind:"Ranged",range:'36"',A:"D3",skill:"4+",S:"12",AP:"-3",D:"D6+1",keywords:"Blast"},
        {name:"Drilldozer blade",kind:"Melee",range:"Melee",A:"8",skill:"3+",S:"10",AP:"-2",D:"2",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Firing Deck 6","Deadly Demise D3"],
      abilities:[
        {name:"Grinding Line-breaker",text:"Each time an enemy unit (excluding MONSTERS and VEHICLES) within Engagement Range Falls Back, all its models must take a Desperate Escape test (-1 if Battle-shocked)."},
        {name:"Transport",text:"Transport capacity of 6 GENESTEALER CULTS INFANTRY models."}
      ],
      composition:["1 Goliath Rockgrinder"], equipped:["heavy mining laser; heavy stubber; drilldozer blade; demolition charge cache."],
      options:["Heavy mining laser can be replaced with: 1 clearance incinerator; 1 heavy seismic cannon"],
      leads:[]
    },
    {
      id:"truck", name:"Goliath Truck", category:"transport", role:"",
      sizes:[{models:1,label:"1 model",base:85,repeat:85}],
      keywords:["Vehicle","Transport","Dedicated Transport","Great Devourer","Goliath Truck"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'12"',T:"9",SV:"3+",W:"10",LD:"7+",OC:"2"}],
      weapons:[
        {name:"Heavy stubber",kind:"Ranged",range:'36"',A:"3",skill:"4+",S:"4",AP:"0",D:"1",keywords:"Rapid Fire 3"},
        {name:"Demolition charge cache",kind:"Ranged",range:'8"',A:"D6",skill:"5+",S:"9",AP:"-2",D:"2",keywords:"Blast, Hazardous, Assault"},
        {name:"Twin autocannon",kind:"Ranged",range:'48"',A:"2",skill:"4+",S:"9",AP:"-1",D:"3",keywords:"Twin-linked"},
        {name:"Armoured hull",kind:"Melee",range:"Melee",A:"3",skill:"4+",S:"6",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Deadly Demise D3","Firing Deck 6"],
      abilities:[
        {name:"Fire Support",text:"In your Shooting phase, after this model has shot, select one enemy unit it hit; until end of phase, friendly models that disembarked from this TRANSPORT this turn can re-roll Wound rolls against it."},
        {name:"Transport",text:"Transport capacity of 12 GENESTEALER CULTS INFANTRY models."}
      ],
      composition:["1 Goliath Truck"], equipped:["heavy stubber; twin autocannon; demolition charge cache; armoured hull."],
      leads:[]
    },
    {
      id:"metamorphs", name:"Hybrid Metamorphs", category:"infantry", role:"",
      sizes:[{models:5,label:"5 models",base:75,repeat:85},{models:10,label:"10 models",base:150,repeat:160}],
      keywords:["Infantry","Grenades","Great Devourer","Hybrid Metamorphs"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"4",SV:"5+",W:"1",LD:"7+",OC:"1"}],
      weapons:[
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"4+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Hand flamer",kind:"Ranged",range:'12"',A:"D6",skill:"N/A",S:"3",AP:"0",D:"1",keywords:"Torrent, Pistol, Ignores Cover"},
        {name:"Metamorph mutations — sweep",kind:"Melee",range:"Melee",A:"5",skill:"3+",S:"4",AP:"-1",D:"1",keywords:""},
        {name:"Metamorph mutations — strike",kind:"Melee",range:"Melee",A:"3",skill:"3+",S:"5",AP:"-1",D:"2",keywords:""},
        {name:"Leader’s cult weapons",kind:"Melee",range:"Melee",A:"5",skill:"3+",S:"5",AP:"-1",D:"2",keywords:""}
      ],
      factionAbilities:["Cult Ambush"], coreAbilities:['Scouts 6"',"Deep Strike","Feel No Pain 5+"],
      abilities:[{name:"Brood Surge",text:"Each time an enemy unit shoots, if any models from this unit were destroyed, it can make a Brood Surge move (roll a D6; move up to that, ending as close as possible to the closest enemy, may end within Engagement Range). If no model in the unit started with a hand flamer, it can move up to 6\" instead. Cannot Brood Surge while Battle-shocked."}],
      wargearAbilities:[{name:"Cult Icon",text:"In your Command phase, return up to D3 destroyed models (3 if within range of an objective you control). Cannot return CHARACTER models in Attached units."}],
      composition:["1 Metamorph Leader","4-9 Hybrid Metamorphs"],
      equipped:["Leader: autopistol; Leader’s cult weapons.","Metamorph: autopistol; Metamorph mutations."],
      options:["Any model can replace autopistol with 1 hand flamer.","One Hybrid Metamorph’s autopistol can be replaced with 1 cult icon."],
      leads:[]
    },
    {
      id:"jackal_alphus", name:"Jackal Alphus", category:"character", role:"LEADER",
      sizes:[{models:1,label:"1 model",base:55,repeat:55}],
      keywords:["Mounted","Character","Grenades","Great Devourer","Jackal Alphus"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'12"',T:"4",SV:"5+",W:"4",LD:"7+",OC:"1"}],
      weapons:[
        {name:"Cult sniper rifle",kind:"Ranged",range:'36"',A:"1",skill:"3+",S:"5",AP:"-2",D:"3",keywords:"Precision, Heavy"},
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"3+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Close combat weapon",kind:"Melee",range:"Melee",A:"3",skill:"3+",S:"3",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Stealth",'Scouts 9"',"Leader"],
      abilities:[
        {name:"Priority Target",text:"After this model’s unit shoots, select one enemy unit hit by a cult sniper rifle; until end of phase friendly GSC models re-roll Hit rolls of 1 against it."},
        {name:"Master Outrider",text:"After this model’s unit shoots, if not in Engagement Range, it can make a 6\" Normal move; if it does it can’t charge this turn."}
      ],
      composition:["1 Jackal Alphus"], equipped:["autopistol; cult sniper rifle; close combat weapon."],
      leads:["atalan"]
    },
    {
      id:"kelermorph", name:"Kelermorph", category:"character", role:"",
      sizes:[{models:1,label:"1 model",base:60,repeat:60}],
      keywords:["Infantry","Character","Great Devourer","Kelermorph"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"3",LD:"7+",OC:"1"}],
      weapons:[
        {name:"Liberator autostubs",kind:"Ranged",range:'12"',A:"6",skill:"2+",S:"6",AP:"-2",D:"1",keywords:"Pistol, Devastating Wounds"},
        {name:"Close combat weapon",kind:"Melee",range:"Melee",A:"3",skill:"3+",S:"3",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Lone Operative","Deep Strike"],
      abilities:[
        {name:"Heroic Fusillade",text:"Once per turn, after a model with this ability shoots, select one INFANTRY unit it hit; that unit must take a Battle-shock test."},
        {name:"Hypersensory Abilities",text:"Once per turn, in your opponent’s Movement phase, when an enemy ends a move within 9\" and this model isn’t in Engagement Range, it can shoot that unit then make a D6\" Normal move."}
      ],
      composition:["1 Kelermorph"], equipped:["liberator autostubs; close combat weapon."], leads:[]
    },
    {
      id:"locus", name:"Locus", category:"character", role:"SUPPORT",
      sizes:[{models:1,label:"1 model",base:35,repeat:35}],
      keywords:["Infantry","Character","Great Devourer","Locus"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"4",SV:"5+",W:"3",LD:"7+",OC:"1"}],
      weapons:[{name:"Locus blades",kind:"Melee",range:"Melee",A:"5",skill:"2+",S:"5",AP:"-2",D:"2",keywords:""}],
      factionAbilities:[], coreAbilities:["Deep Strike","Leader","Fights First"],
      abilities:[
        {name:"Sudden Assault",text:"While this model is leading a unit, models in that unit have the Fights First ability."},
        {name:"Bodyguard",text:"While this model is leading a unit, other CHARACTER models attached to that unit have the Feel No Pain 4+ ability."}
      ],
      composition:["1 Locus"], equipped:["Locus blades."],
      leads:["acolyte_auto","acolyte_flamers","metamorphs","neophyte"]
    },
    {
      id:"magus", name:"Magus", category:"character", role:"LEADER",
      sizes:[{models:1,label:"1 model",base:50,repeat:50}],
      keywords:["Infantry","Character","Psyker","Great Devourer","Magus"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"4",LD:"6+",OC:"1"}],
      weapons:[
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"3+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Force stave",kind:"Melee",range:"Melee",A:"3",skill:"3+",S:"5",AP:"-1",D:"D3",keywords:"Psychic"}
      ],
      factionAbilities:[], coreAbilities:["Leader","Deep Strike"],
      abilities:[
        {name:"Mind Control",text:"At the start of your opponent’s Shooting phase, one PSYKER with this ability selects an enemy unit within 18\" and rolls a D6: 1 = D3 mortal wounds to itself; 2-5 = that enemy -1 to Hit; 6 = that enemy -1 to Hit and -1 to Wound (until end of phase)."},
        {name:"Spiritual Leader",text:"Once per battle, select one friendly Battle-shocked GSC unit within 12\"; it is no longer Battle-shocked."}
      ],
      wargearAbilities:[{name:"Psychic Familiar",text:"Once per battle, at the start of your opponent’s Shooting phase, add 6\" to the range of its Mind Control ability for that phase."}],
      composition:["1 Magus"], equipped:["autopistol; force stave."],
      leads:["acolyte_auto","acolyte_flamers","metamorphs","neophyte"]
    },
    {
      id:"neophyte", name:"Neophyte Hybrids", category:"battleline", role:"",
      sizes:[{models:10,label:"10 models",base:70,repeat:70},{models:20,label:"20 models",base:145,repeat:145}],
      keywords:["Infantry","Battleline","Grenades","Great Devourer","Neophyte Hybrids"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"1",LD:"7+",OC:"2"}],
      weapons:[
        {name:"Hybrid firearm",kind:"Ranged",range:'24"',A:"1",skill:"4+",S:"3",AP:"0",D:"1",keywords:"Rapid Fire 1"},
        {name:"Seismic cannon",kind:"Ranged",range:'24"',A:"2",skill:"5+",S:"6",AP:"-1",D:"D3",keywords:"Heavy, Rapid Fire 2"},
        {name:"Mining laser",kind:"Ranged",range:'24"',A:"1",skill:"5+",S:"10",AP:"-3",D:"D6+1",keywords:"Heavy"},
        {name:"Heavy stubber",kind:"Ranged",range:'36"',A:"3",skill:"4+",S:"4",AP:"0",D:"1",keywords:"Rapid Fire 3"},
        {name:"Grenade launcher — krak",kind:"Ranged",range:'24"',A:"1",skill:"4+",S:"9",AP:"-2",D:"D3",keywords:""},
        {name:"Grenade launcher — frag",kind:"Ranged",range:'24"',A:"D3",skill:"4+",S:"4",AP:"0",D:"1",keywords:"Blast"},
        {name:"Flamer",kind:"Ranged",range:'12"',A:"D6",skill:"N/A",S:"4",AP:"0",D:"1",keywords:"Torrent, Ignores Cover"},
        {name:"Webber",kind:"Ranged",range:'12"',A:"D6",skill:"N/A",S:"2",AP:"0",D:"1",keywords:"Devastating Wounds, Torrent"},
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"4+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Anointed pistol",kind:"Ranged",range:'12"',A:"1",skill:"4+",S:"4",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Power weapon",kind:"Melee",range:"Melee",A:"1",skill:"4+",S:"4",AP:"-2",D:"1",keywords:""},
        {name:"Chainsword",kind:"Melee",range:"Melee",A:"2",skill:"4+",S:"3",AP:"0",D:"1",keywords:""},
        {name:"Close combat weapon",kind:"Melee",range:"Melee",A:"1",skill:"4+",S:"3",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:["Cult Ambush"], coreAbilities:["Deep Strike"],
      abilities:[{name:"A Plan Generations in the Making",text:"At the end of your Command phase, if this unit is within range of an objective you control, it remains under your control until your opponent’s Level of Control is greater at the end of a phase."}],
      wargearAbilities:[{name:"Cult Icon",text:"In your Command phase, return up to 3 destroyed models (D3+3 if within range of an objective you control). Cannot return CHARACTER models in Attached units."}],
      composition:["1 Neophyte Leader","9-19 Neophyte Hybrids"], equipped:["autopistol; Hybrid firearm; close combat weapon."],
      options:["For every 10 models, up to 2 can replace Hybrid firearm with: Heavy stubber*; Mining laser*; Seismic cannon*  (*max 1 each per 10).","One model with a Hybrid firearm can take 1 cult icon.","For every 10 models, up to 2 can replace Hybrid firearm with: Flamer*; Grenade launcher*; Webber*  (*max 1 each per 10).","The Neophyte Leader can take: anointed pistol + chainsword; or anointed pistol + power weapon."],
      leads:[]
    },
    {
      id:"nexos", name:"Nexos", category:"character", role:"SUPPORT",
      sizes:[{models:1,label:"1 model",base:60,repeat:60}],
      keywords:["Infantry","Character","Great Devourer","Nexos"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"3",LD:"7+",OC:"1"}],
      weapons:[
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"3+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Close combat weapon",kind:"Melee",range:"Melee",A:"2",skill:"3+",S:"3",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Leader","Deep Strike"],
      abilities:[
        {name:"Battlefield Analysis",text:"Once per battle round, when this model’s unit is targeted with a Stratagem, reduce that Stratagem’s CP cost by 1CP."},
        {name:"Cult Infiltration",text:"At the start of each player’s Command phase, you can move one of your Cult Ambush markers that hasn’t moved this turn up to 6\"."}
      ],
      composition:["1 Nexos"], equipped:["autopistol; close combat weapon."],
      leads:["acolyte_auto","acolyte_flamers","metamorphs","neophyte"]
    },
    {
      id:"patriarch", name:"Patriarch", category:"character", role:"LEADER",
      sizes:[{models:1,label:"1 model",base:80,repeat:80}],
      keywords:["Infantry","Character","Psyker","Great Devourer","Patriarch"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'8"',T:"5",SV:"4+",W:"6",LD:"6+",OC:"1"}],
      weapons:[{name:"Patriarch’s claws",kind:"Melee",range:"Melee",A:"5",skill:"2+",S:"6",AP:"-2",D:"2",keywords:"Twin-linked, Devastating Wounds"}],
      factionAbilities:[], coreAbilities:["Deep Strike","Infiltrators","Leader"],
      abilities:[
        {name:"Cosmic Horror",text:"At the start of the Fight phase, each enemy unit within 6\" of this model must take a Battle-shock test."},
        {name:"Might From Beyond",text:"While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability."}
      ],
      wargearAbilities:[{name:"Psychic Familiar",text:"Once per battle, at the start of the Fight phase, add 6\" to the range of its Cosmic Horror ability for that phase."}],
      composition:["1 Patriarch"], equipped:["Patriarch’s claws."],
      leads:["purestrain"]
    },
    {
      id:"primus", name:"Primus", category:"character", role:"LEADER",
      sizes:[{models:1,label:"1 model",base:70,repeat:70}],
      keywords:["Infantry","Character","Great Devourer","Primus"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"4",LD:"6+",OC:"1"}],
      weapons:[
        {name:"Scoped needle pistol",kind:"Ranged",range:'18"',A:"1",skill:"2+",S:"1",AP:"0",D:"D3",keywords:"Anti-infantry 2+, Ignores Cover, Pistol"},
        {name:"Toxin injector claw",kind:"Melee",range:"Melee",A:"2",skill:"2+",S:"2",AP:"0",D:"D3",keywords:"Anti-infantry 2+, Extra Attacks"},
        {name:"Cult bonesword",kind:"Melee",range:"Melee",A:"5",skill:"2+",S:"5",AP:"-2",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Deep Strike","Leader"],
      abilities:[
        {name:"Decoys and Misdirection",text:"After both players deploy, select up to three GSC units from your army and redeploy them (can place into Strategic Reserves regardless of how many are already there)."},
        {name:"Cult Demagogue",text:"While this model is leading a unit, each time a model in that unit makes an attack, you can add 1 to the Hit roll."}
      ],
      composition:["1 Primus"], equipped:["scoped needle pistol; cult bonesword; toxin injector claw."],
      leads:["acolyte_auto","acolyte_flamers","metamorphs","neophyte"]
    },
    {
      id:"purestrain", name:"Purestrain Genestealers", category:"infantry", role:"",
      sizes:[{models:5,label:"5 models",base:80,repeat:90},{models:10,label:"10 models",base:140,repeat:150}],
      keywords:["Infantry","Great Devourer","Purestrain Genestealers"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'8"',T:"4",SV:"5+",W:"2",LD:"7+",OC:"1"}],
      weapons:[{name:"Cult claws and talons",kind:"Melee",range:"Melee",A:"4",skill:"2+",S:"4",AP:"-2",D:"1",keywords:""}],
      factionAbilities:["Cult Ambush"], coreAbilities:["Deep Strike","Infiltrators"],
      abilities:[{name:"Swift and Deadly",text:"This unit is eligible to declare a charge in a turn in which it Advanced."}],
      composition:["5-10 Purestrain Genestealers"], equipped:["cult claws and talons."],
      leads:[]
    },
    {
      id:"reductus", name:"Reductus Saboteur", category:"character", role:"",
      sizes:[{models:1,label:"1 model",base:70,repeat:70}],
      keywords:["Infantry","Character","Grenades","Great Devourer","Reductus Saboteur"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"3",LD:"7+",OC:"1"}],
      weapons:[
        {name:"Autopistol",kind:"Ranged",range:'12"',A:"1",skill:"3+",S:"3",AP:"0",D:"1",keywords:"Pistol"},
        {name:"Demolition charges",kind:"Ranged",range:'8"',A:"D6",skill:"3+",S:"9",AP:"-2",D:"2",keywords:"Blast, One Shot, Assault"},
        {name:"Remote explosives",kind:"Ranged",range:'24"',A:"D6+3",skill:"3+",S:"5",AP:"0",D:"1",keywords:"Indirect Fire, Blast"},
        {name:"Close combat weapon",kind:"Melee",range:"Melee",A:"2",skill:"3+",S:"3",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Deep Strike","Stealth","Lone Operative","Infiltrators"],
      abilities:[
        {name:"Planted Explosives",text:"Once per battle, when an enemy unit ends a move within 9\", roll a D6: on 2+ that unit suffers D3+3 mortal wounds. Only one model with this ability per battle round."},
        {name:"Primed and Ready",text:"In your Shooting phase, you can target one model with this ability with the Grenade Stratagem for 0CP (once per phase per model)."}
      ],
      composition:["1 Reductus Saboteur"], equipped:["autopistol; demolition charges; remote explosives; close combat weapon."], leads:[]
    },
    {
      id:"sanctus", name:"Sanctus", category:"character", role:"",
      sizes:[{models:1,label:"1 model",base:65,repeat:65}],
      keywords:["Infantry","Character","Great Devourer","Sanctus"], factionKeywords:["Genestealer Cults"],
      stats:[{profile:"",M:'6"',T:"3",SV:"5+",W:"3",LD:"7+",OC:"1"}],
      weapons:[
        {name:"Cult sniper rifle",kind:"Ranged",range:'36"',A:"1",skill:"3+",S:"7",AP:"-2",D:"3",keywords:"Precision, Anti-psyker 2+, Heavy"},
        {name:"Sanctus bio-dagger",kind:"Melee",range:"Melee",A:"6",skill:"2+",S:"3",AP:"-2",D:"2",keywords:"Precision, Anti-infantry 3+"},
        {name:"Close combat weapon",kind:"Melee",range:"Melee",A:"2",skill:"3+",S:"3",AP:"0",D:"1",keywords:""}
      ],
      factionAbilities:[], coreAbilities:["Lone Operative","Stealth","Deep Strike","Infiltrators"],
      abilities:[
        {name:"Cloaked Assassin",text:"If equipped with a Sanctus bio-dagger, enemy units cannot use Fire Overwatch to shoot at this model."},
        {name:"Psychic Spoor",text:"At the start of the first battle round, select one enemy unit as this model’s prey; re-roll Hit and Wound rolls against it."},
        {name:"Creeping Shadow",text:"If equipped with a cult sniper rifle, once per turn when an enemy ends a move within 9\" and this model isn’t in Engagement Range, it can make a 6\" Normal move."}
      ],
      composition:["1 Sanctus"], equipped:["Sanctus bio-dagger."],
      options:["Sanctus bio-dagger can be replaced with 1 cult sniper rifle and 1 close combat weapon."], leads:[]
    }
  ],

  /* ---- DETACHMENTS -------------------------------------------------------
     dp / mission / unique : from the PDF points pack.
     rule / enhancements text / stratagems : from 39k.pro (6 canonical only).
     The 3 "extra" detachments are PDF-only (rule text & stratagems not available).
     enhancements: [{name, pts, text, only}]
  ------------------------------------------------------------------------- */
  detachments: [
    {
      id:"xenocreed", name:"Xenocreed Congregation", dp:"2DP", mission:"Priority Assets", unique:"", source:"full",
      rule:{name:"", text:"For each ACOLYTE HYBRIDS, HYBRID METAMORPHS and NEOPHYTE HYBRIDS unit from your army, while one or more CHARACTER models are leading that unit, you can re-roll Advance and Charge rolls made for it. If that CHARACTER model is a MAGUS, PRIMUS or ACOLYTE ICONWARD, that model has the Feel No Pain 3+ ability while leading that unit."},
      enhancements:[
        {name:"Gene-sire’s Reliquant",pts:5,only:"Magus, Primus or Acolyte Iconward",text:"You can re-roll Battle-shock tests taken for the bearer’s unit."},
        {name:"Incendiary Inspiration",pts:15,only:"Magus, Primus or Acolyte Iconward",text:"The bearer’s unit is eligible to declare a charge in a turn in which it Advanced."},
        {name:"Denunciator of Tyrants",pts:25,only:"Magus, Primus or Acolyte Iconward",text:"Each time a model in the bearer’s unit makes an attack that targets a CHARACTER unit, add 1 to the Hit roll and add 1 to the Wound roll."},
        {name:"Deeds that Speak to the Masses",pts:25,only:"Magus, Primus or Acolyte Iconward",text:"You start the battle with 2 additional Resurgence points."}
      ],
      stratagems:[
        {name:"Tireless Fervour",cp:"1CP",category:"Strategic Ploy",when:"Your Charge phase.",target:"One ACOLYTE HYBRIDS, HYBRID METAMORPHS or NEOPHYTE HYBRIDS unit that has not declared a charge this phase.",effect:"Until end of phase, your unit can charge after Advancing or Falling Back; if it targets an enemy within Engagement Range of a friendly CHARACTER unit, re-roll the Charge roll."},
        {name:"Transcendent Celerity",cp:"1CP",category:"Strategic Ploy",when:"Your Shooting phase.",target:"One ACOLYTE/HYBRID/NEOPHYTE unit not yet selected to shoot.",effect:"Until end of phase, ranged weapons in your unit have [ASSAULT]."},
        {name:"The Path of Anguish",cp:"1CP",category:"Strategic Ploy",when:"Opponent’s Shooting phase, after an enemy shoots.",target:"One ACOLYTE/NEOPHYTE unit that lost a model to that attack.",effect:"Your unit can move up to D6\", ending as close as possible to the closest enemy (may enter Engagement Range)."},
        {name:"Vengeance for the Martyr!",cp:"1CP",category:"Epic Deed",when:"Opponent’s Shooting/Fight phase, after an enemy destroys a GSC CHARACTER.",target:"One other GSC CHARACTER.",effect:"Until end of battle, friendly ACOLYTE/HYBRID/NEOPHYTE re-roll Hit rolls of 1 vs that enemy (re-roll all Hits if the slain model was a Magus, Primus or Iconward)."},
        {name:"Frenzied Devotion",cp:"1CP",category:"Battle Tactic",when:"Fight phase.",target:"One ACOLYTE/HYBRID/NEOPHYTE unit not yet selected to fight.",effect:"Until end of phase, +1 Attacks and +1 WS to melee weapons of non-CHARACTER models; those weapons gain [HAZARDOUS]."},
        {name:"The Downtrodden Rise",cp:"2CP",category:"Strategic Ploy",when:"End of Reinforcements step of opponent’s Movement phase.",target:"One ACOLYTE/HYBRID/NEOPHYTE unit in Cult Ambush.",effect:"Set your unit up without a Cult Ambush marker, anywhere more than 6\" horizontally from all enemy units."}
      ]
    },
    {
      id:"outlander", name:"Outlander Claw", dp:"2DP", mission:"Reconnaissance", unique:"", source:"full",
      rule:{name:"", text:"While a GENESTEALER CULTS MOUNTED or VEHICLE model is not Battle-shocked, add 1 to its Objective Control. In addition, at the end of your Command phase, if one or more ATALAN JACKALS units are within range of an objective you control, it remains yours until your opponent’s Level of Control is greater at the end of a phase."},
      enhancements:[
        {name:"Starfall Shells",pts:10,only:"GSC Mounted",text:"After the bearer shoots, select an enemy unit hit by a cult sniper rifle; until your next Shooting phase, that unit gets -1 to Hit."},
        {name:"Cartographic Data-leech",pts:10,only:"GSC model",text:"While embarked, each time that TRANSPORT shoots, improve the BS of its Firing Deck weapons by 1."},
        {name:"Serpentine Tactics",pts:10,only:"GSC Mounted",text:"The bearer’s unit is eligible to shoot in a turn in which it Fell Back."},
        {name:"Assault Commando",pts:15,only:"GSC model",text:"Each time a model in the bearer’s unit makes a ranged attack, if it disembarked this turn, re-roll the Hit roll."}
      ],
      stratagems:[
        {name:"Close-range Shoot-out",cp:"1CP",category:"Battle Tactic",when:"Your Shooting phase.",target:"One GSC MOUNTED or VEHICLE unit not yet selected to shoot.",effect:"Until end of phase, ranged weapons have [LETHAL HITS] vs enemies within 18\"."},
        {name:"Deft Manoeuvring",cp:"1CP",category:"Battle Tactic",when:"Opponent’s Shooting phase, after targets selected.",target:"One ACHILLES or ATALAN unit targeted.",effect:"Until end of phase, your unit has a 4+ invulnerable save."},
        {name:"Rapid Feint",cp:"1CP",category:"Strategic Ploy",when:"Opponent’s Movement phase, after an enemy ends a move.",target:"One ACHILLES or ATALAN unit within 9\".",effect:"Your unit can make a 6\" Normal move."},
        {name:"Along Shadowed Trails",cp:"1CP",category:"Strategic Ploy",when:"Any phase, after an enemy ends a move within 9\" of a Cult Ambush marker.",target:"One of those markers.",effect:"Set it up anywhere more than 9\" horizontally from all enemy units."},
        {name:"Encircling the Prey",cp:"1CP",category:"Strategic Ploy",when:"End of opponent’s Fight phase.",target:"One GSC MOUNTED/VEHICLE unit not in Engagement Range and wholly within 9\" of a board edge.",effect:"Remove it and place it into Strategic Reserves."},
        {name:"Devoted Crew",cp:"1CP",category:"Battle Tactic",when:"Opponent’s Shooting/Fight phase, after targets selected.",target:"One GOLIATH ROCKGRINDER or TRUCK targeted.",effect:"Until end of phase, subtract 1 from the Damage of attacks targeting your unit."}
      ]
    },
    {
      id:"host", name:"Host of Ascension", dp:"3DP", mission:"Take and Hold", unique:"Hosts", source:"full",
      rule:{name:"", text:"Each time a GENESTEALER CULTS unit is set up on the battlefield as Reinforcements, until the end of your next Fight phase, weapons equipped by models in that unit have the [SUSTAINED HITS 1] and [IGNORES COVER] abilities."},
      enhancements:[
        {name:"Assassination Edict",pts:15,only:"GSC model",text:"Each time a model in the bearer’s unit attacks a CHARACTER unit, add 1 to the Hit roll."},
        {name:"Prowling Agitant",pts:15,only:"GSC model",text:"Once per turn, when an enemy ends a move within 9\" of the bearer’s unit and it’s not in Engagement Range, it can make a D6\" Normal move."},
        {name:"A Chink In Their Armour",pts:20,only:"GSC model",text:"Each time the bearer arrives as Reinforcements, until your next Fight phase its unit’s ranged weapons have [LETHAL HITS]."},
        {name:"Our Time is Nigh",pts:20,only:"GSC model",text:"Once per battle, when the bearer’s unit declares a charge, add 2 to Charge rolls for it that phase."}
      ],
      stratagems:[
        {name:"Tunnel Crawlers",cp:"1CP",category:"Strategic Ploy",when:"Your Movement phase.",target:"One GSC unit arriving by Deep Strike this phase.",effect:"Set it up anywhere more than 6\" horizontally from all enemy units (it can’t charge this turn)."},
        {name:"Primed and Readied",cp:"2CP",category:"Battle Tactic",when:"Your Shooting or Fight phase.",target:"One GSC unit not yet selected to shoot/fight.",effect:"Until end of phase, Critical Hits score on unmodified 5+."},
        {name:"Coordinated Trap",cp:"2CP",category:"Battle Tactic",when:"Start of your Shooting or Fight phase.",target:"Two GSC units not yet selected.",effect:"Pick one enemy unit (in Fight, within Engagement of both); until end of phase your units can only target it and add 1 to the Wound roll."},
        {name:"Return to the Shadows",cp:"1CP",category:"Strategic Ploy",when:"End of opponent’s Fight phase.",target:"One GSC INFANTRY unit not in Engagement Range.",effect:"Remove it and place it into Strategic Reserves."},
        {name:"A Deadly Snare",cp:"1CP",category:"Strategic Ploy",when:"Opponent’s Charge phase, after an enemy declares a charge.",target:"One GSC INFANTRY unit targeted by that charge.",effect:"Roll a D6: 2-4 = D3 mortal wounds to that enemy; 5+ = 3 mortal wounds."},
        {name:"Lying in Wait",cp:"1CP",category:"Strategic Ploy",when:"Opponent’s Movement phase.",target:"One GSC BATTLELINE unit in Cult Ambush.",effect:"When setting up via a marker, set up wholly within 6\" of it and not in Engagement Range."}
      ]
    },
    {
      id:"finalday", name:"Final Day", dp:"2DP", mission:"Purge the Foe", unique:"", source:"full",
      rule:{name:"Psionic Parasitism", text:"At the end of your Movement phase, for each TYRANIDS SYNAPSE unit, you can select one friendly GSC unit (excluding PURESTRAIN/PATRIARCH) and one friendly TYRANIDS unit within 9\". The GSC unit suffers D3+1 mortal wounds; one model in the TYRANIDS unit regains that many wounds and, until your next Movement phase, adds 1 to Hit rolls. TYRANIDS units gain Catalyst (Aura): while an enemy is within 6\", friendly GSC units add 1 to Hit rolls against it. (Tyranids allies are out of scope in this GSC-only builder.)"},
      enhancements:[
        {name:"Enraptured Damnation",pts:10,only:"GSC model",text:"Enemy units cannot use Fire Overwatch to shoot at the bearer’s unit."},
        {name:"Synaptic Auger",pts:15,only:"Tyranids model",text:"Each time the bearer would regain wounds from Psionic Parasitism, it regains up to twice that many instead."},
        {name:"Inhuman Integration",pts:20,only:"GSC model",text:"Weapons in the bearer’s unit have [SUSTAINED HITS 1] while targeting an enemy within 6\" of a friendly TYRANIDS unit."},
        {name:"Vanguard Tyrant",pts:25,only:"Winged Hive Tyrant",text:"Improve the Strength and AP of melee weapons equipped by the bearer by 1."}
      ],
      stratagems:[
        {name:"Hyperferocity",cp:"1CP",category:"Battle Tactic",when:"Fight phase.",target:"One GSC unit not yet selected to fight.",effect:"Re-roll Wound rolls of 1 (re-roll all Wounds if the enemy is within 6\" of a friendly TYRANIDS unit)."},
        {name:"Psi Surge",cp:"1CP",category:"Strategic Ploy",when:"Start of any phase.",target:"One TYRANIDS unit.",effect:"Increase its Catalyst range by 3 until your next Command phase (can’t reuse until then)."},
        {name:"Resistance Tunnels",cp:"1CP",category:"Strategic Ploy",when:"End of opponent’s Fight phase.",target:"One GSC or TYRANIDS unit not in Engagement Range.",effect:"Remove it and place into Strategic Reserves."},
        {name:"Divine Imperative",cp:"1CP",category:"Battle Tactic",when:"Your Charge phase.",target:"One GSC unit that hasn’t declared a charge.",effect:"Vs an enemy within Engagement of a TYRANIDS unit: add 1 to Charge rolls and re-roll the Charge roll."},
        {name:"Darting Attacks",cp:"1CP",category:"Strategic Ploy",when:"Your Shooting or Charge phase.",target:"One TYRANIDS unit.",effect:"It can shoot and charge in a turn it Fell Back."},
        {name:"Avenge the Star Children",cp:"1CP",category:"Battle Tactic",when:"Opponent’s Shooting/Fight phase, after an enemy destroys a TYRANIDS CHARACTER.",target:"That destroyed CHARACTER.",effect:"Until end of battle, GSC models add 1 to Hit and Wound rolls vs that enemy."}
      ]
    },
    {
      id:"broodbrothers", name:"Brood Brothers Auxilia", dp:"2DP", mission:"Take and Hold", unique:"", source:"full",
      rule:{name:"", text:"You can include ASTRA MILITARUM units in your army (a GSC model must be your WARLORD; AM models lose Voice of Command; several keywords excluded). Each time such an AM unit shoots, you can pick an enemy within 18\" — until end of phase it can only target that unit and that enemy is caught in overlapping fire; while caught, GSC ranged attacks against it add 1 to Hit. (Astra Militarum allies are out of scope in this GSC-only builder.)"},
      enhancements:[
        {name:"Fire-point Commander",pts:10,only:"GSC Infantry",text:"When you target the bearer’s unit with Fire Overwatch, hits score on unmodified 5+."},
        {name:"Adaptive Reprisal",pts:15,only:"GSC Infantry",text:"Once per turn, target a friendly GSC unit within 9\" with the Heroic Intervention Stratagem for 0CP."},
        {name:"The Hero Returned",pts:20,only:"GSC Infantry",text:"Improve the Leadership and Objective Control of models in the bearer’s unit by 1."},
        {name:"Martial Espionage",pts:25,only:"GSC Infantry",text:"Once per turn, when a friendly AM INFANTRY/MOUNTED unit within 9\" shoots, improve its ranged weapons’ AP by 1 for that phase."}
      ],
      stratagems:[
        {name:"A Dark Network",cp:"1CP",category:"Strategic Ploy",when:"Reinforcements step of opponent’s Movement phase.",target:"One AM or GSC unit (no Monsters/Vehicles) within 12\" of the arriving enemy.",effect:"Your unit can make a 6\" Normal move."},
        {name:"Symbiotic Destruction",cp:"1CP",category:"Battle Tactic",when:"Your Shooting phase.",target:"One AM and one GSC unit not yet selected.",effect:"Vs an enemy visible/in range of both: they can only target it and re-roll Wound rolls of 1."},
        {name:"In the Shadow of Iron",cp:"1CP",category:"Strategic Ploy",when:"After an enemy ends a move within 9\" of a marker.",target:"One AM VEHICLE unit.",effect:"Move a Cult Ambush marker anywhere >9\" from enemies and wholly within 6\" of your unit."},
        {name:"Acceptable Losses",cp:"2CP",category:"Strategic Ploy",when:"Your Shooting phase.",target:"One AM unit.",effect:"Vs an enemy in Engagement of a GSC unit: the AM unit can shoot it; then roll a D6 per GSC unit (5+ = D3+1 mortals to it)."},
        {name:"Suppress and Overwhelm",cp:"1CP",category:"Strategic Ploy",when:"Your Shooting phase, after an AM unit shoots.",target:"That AM unit.",effect:"Pick an enemy it hit; until end of turn it can’t be targeted with Fire Overwatch and GSC re-roll Charge rolls vs it."},
        {name:"Regimental Reinforcements",cp:"1CP",category:"Strategic Ploy",when:"After an AM INFANTRY REGIMENT unit is destroyed.",target:"That unit.",effect:"Roll a D6: on 3+ place a Cult Ambush marker >9\" from enemies and return a fresh identical unit in Cult Ambush at full strength (once per battle)."}
      ]
    },
    {
      id:"biosanctic", name:"Biosanctic Broodsurge", dp:"2DP", mission:"Take and Hold", unique:"Purestrain", source:"full",
      rule:{name:"", text:"Add 1 to Charge rolls made for ABERRANTS, BIOPHAGUS and PURESTRAIN GENESTEALERS units. In addition, each time such a unit is selected to fight, if it made a Charge move this turn, until the end of the phase add 1 to the Attacks of melee weapons equipped by models in that unit."},
      enhancements:[
        {name:"Mutagenic Regeneration",pts:10,only:"Abominant, Biophagus or Patriarch",text:"In each Command phase, one model in the bearer’s unit regains 1 lost wound."},
        {name:"Alien Majesty",pts:15,only:"Abominant, Biophagus or Patriarch",text:"While an enemy is within Engagement Range of the bearer’s unit, subtract 1 from the OC of models in that enemy unit (min 1)."},
        {name:"Predatory Instincts",pts:20,only:"Abominant, Biophagus or Patriarch",text:"Models in the bearer’s unit gain Infiltrators; once per battle round, target the unit with Heroic Intervention for 0CP (even if used already)."},
        {name:"Biomorph Adaptation",pts:25,only:"Abominant or Patriarch",text:"Improve the AP and Damage of melee weapons equipped by the bearer by 1."}
      ],
      stratagems:[
        {name:"Saintly Paroxysm",cp:"1CP",category:"Epic Deed",when:"Fight phase, after an enemy destroys a GSC CHARACTER.",target:"That destroyed CHARACTER.",effect:"Roll a D6: 2+ = D3 mortal wounds (2D3 if Abominant/Patriarch) to that enemy."},
        {name:"Evasive Vanguard",cp:"1CP",category:"Strategic Ploy",when:"After an enemy ends a move within 9\" of a marker.",target:"One of those markers.",effect:"Set it up anywhere more than 9\" horizontally from all enemy units."},
        {name:"Bio-horror Revelation",cp:"1CP",category:"Strategic Ploy",when:"Start of opponent’s Shooting phase.",target:"One ABERRANTS, BIOPHAGUS or PURESTRAIN unit.",effect:"Each enemy within 9\" that shoots must take a Leadership test (-1); on a fail it gets -1 to Hit vs your unit."},
        {name:"Hyper-metabolic Vigour",cp:"1CP",category:"Battle Tactic",when:"Fight phase.",target:"One ABERRANTS/BIOPHAGUS/PURESTRAIN unit not yet selected to fight.",effect:"Pile-in and Consolidate up to 6\" instead of 3\"."},
        {name:"Gene-twisted Muscle",cp:"1CP",category:"Battle Tactic",when:"Fight phase.",target:"One ABERRANTS/BIOPHAGUS/PURESTRAIN unit not yet selected to fight.",effect:"Add 1 to Wound rolls vs MONSTERS and VEHICLES."},
        {name:"Stimulated Bio-surge",cp:"1CP",category:"Battle Tactic",when:"Your Charge phase.",target:"One ABERRANTS/BIOPHAGUS/PURESTRAIN unit that hasn’t declared a charge.",effect:"If the closest eligible enemy is a target, add 1 to the Charge roll per selected target (max +3)."}
      ]
    },
    /* ---- The three 1-DP detachments (full rules from the official Faction Pack v1.0) ---- */
    {
      id:"heroes", name:"Heroes of the Uprising", dp:"1DP", mission:"Purge the Foe", unique:"", source:"full",
      rule:{name:"Killer Reputation", text:"Friendly KELERMORPH, LOCUS, REDUCTUS SABOTEUR and SANCTUS models have the KILLER keyword. Friendly KILLER models’ attacks can re-roll Hit rolls of 1 and re-roll Wound rolls of 1."},
      enhancements:[
        {name:"Contraband Munitions",pts:20,only:"Kelermorph or Reductus Saboteur",text:"This unit’s ranged attacks have +2 Strength."},
        {name:"Gene-tailored Toxins",pts:35,only:"Locus or Sanctus",text:"This model’s attacks have +1 Damage."}
      ],
      stratagems:[
        {name:"Living Up to Legend",cp:"1CP",category:"",when:"Your Shooting phase or the Fight phase, when a friendly KILLER unit has attacked, if those attacks destroyed an enemy unit or an enemy CHARACTER model.",target:"That KILLER unit.",effect:"Each visible friendly battle-shocked GENESTEALER CULTS unit within 12\" of your unit is no longer battle-shocked."},
        {name:"Surging Broodworship",cp:"1CP",category:"",when:"Your Shooting phase or the Fight phase, when a friendly KILLER unit is selected to attack.",target:"That KILLER unit.",effect:"Attacks made by KILLER models in your unit have [DEVASTATING WOUNDS]."},
        {name:"Loyal to the End",cp:"1CP",category:"",when:"Fight phase, when an enemy unit targets a friendly KILLER unit.",target:"That KILLER unit.",effect:"When a KILLER model in your unit is destroyed, if your unit has not been selected to fight this phase, roll one D6: on a 1, that enemy unit suffers 1 mortal wound; on a 2+, do not remove that model — when your unit has fought (or at the end of the phase), it is then removed."}
      ]
    },
    {
      id:"purestrainswarm", name:"Purestrain Broodswarm", dp:"1DP", mission:"Priority Assets", unique:"Purestrain", source:"full",
      rule:{name:"Enemy Within", text:"At the end of your opponent’s Fight phase, friendly unengaged PURESTRAIN GENESTEALERS units can be placed in Strategic Reserves. (This detachment has the PURESTRAIN tag and cannot be taken with another PURESTRAIN detachment.)"},
      enhancements:[
        {name:"Talons of the Sire",pts:15,only:"Patriarch",text:"This unit’s attacks can re-roll Wound rolls of 1."},
        {name:"Mark of the Star Children",pts:30,upgrade:true,only:"Purestrain Genestealers unit",text:"Upgrade. This unit has +1 Toughness, a 4+ Save, and its melee attacks have +1 Strength."}
      ],
      stratagems:[
        {name:"Lurk and Strike",cp:"1CP",category:"",when:"Your Movement phase, when a friendly PURESTRAIN GENESTEALERS unit is selected to make a Fall Back move.",target:"That PURESTRAIN GENESTEALERS unit.",effect:"That move does not prevent your unit from being eligible to declare a charge."},
        {name:"Crawling Horror",cp:"1CP",category:"",when:"Start of your opponent’s Movement phase.",target:"One friendly PURESTRAIN GENESTEALERS unit.",effect:"Your unit has -6\" detection range until the end of the turn."},
        {name:"Inhuman Reactions",cp:"1CP",category:"",when:"Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged PURESTRAIN GENESTEALERS unit.",target:"That PURESTRAIN GENESTEALERS unit.",effect:"Your unit can make a Normal move of up to D3+3\"."}
      ]
    },
    {
      id:"xenocult", name:"Xenocult Masses", dp:"1DP", mission:"Disruption", unique:"Hosts", source:"full",
      rule:{name:"Hordes of the Faithful", text:"In your Command phase, if a friendly NEOPHYTE HYBRIDS unit is within a terrain area, that unit heals 3 wounds. (This detachment has the HOSTS tag and cannot be taken with another HOSTS detachment.)"},
      enhancements:[
        {name:"Inspired to Greatness",pts:15,only:"Magus or Primus",text:"This unit’s attacks can re-roll Damage rolls."},
        {name:"Devious Disguises",pts:15,upgrade:true,only:"Neophyte Hybrids unit",text:"Upgrade. This unit has -3\" detection range."}
      ],
      stratagems:[
        {name:"Eyes of the Cult",cp:"1CP",category:"",when:"Start of your Shooting phase.",target:"One friendly NEOPHYTE HYBRIDS unit within a terrain area.",effect:"Enemy units within that terrain area have +6\" detection range."},
        {name:"Fanatical Hail",cp:"1CP",category:"",when:"Your Shooting phase, when a friendly NEOPHYTE HYBRIDS unit is selected to shoot.",target:"That NEOPHYTE HYBRIDS unit.",effect:"Select one enemy unit. Your unit’s ranged attacks that target that enemy unit can re-roll Hit rolls."},
        {name:"Slunk from the Underbelly",cp:"1CP",category:"",when:"Your opponent’s Shooting phase, when an enemy targets a friendly NEOPHYTE HYBRIDS unit with every model within a terrain area.",target:"That NEOPHYTE HYBRIDS unit.",effect:"Ranged attacks that target your unit have -1 AP until that unit has attacked."}
      ]
    }
  ]
};
