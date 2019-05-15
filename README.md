
           
# Ares

Prototype of a blacksmith incremental / clicker / idle game. Craft dozens of different items to become the best blacksmith in the town.

## To-Do list :

This is a non-exhaustive list of all the things that need to be added to the game

### Game

- Create a save / load + destroy save functionality. Buttons will be placed in a "Settings" tab in the main navbar.

- Add a limited vault system that limits ressources quantity. Vault can be upgraded in the "Upgrade Tab" for a starting price of 200. Each upgrade is 1.80 times higher than the previous one.
Capacity is doubled for each upgrade.

```Vault LvL1 (default) : Max capacity of 25 for each resource. 
Vault LvL2 : Max capacity of 50 for each resource. Price 200.
Vault LvL3 : Max capacity of 100 for each resource. Price 360.
[...]
```

- Setup a random quest system : Every random interval, the player receive a quest in the "Quest" tab asking him to craft x item y times.
Quests are unlimited trial, means that they don't have a time limit to be completed.

```
Craft 5 keys
```
- If quest system is added, add a notification top-left "New quest available!" appearing each time a quest is available. Small and minimalist

- Create a simple level system with progress bar, values for each xp gain  and for each level up requirement need to be easily customizable. Exemple :
```
           Crafting Wooden Key -> 5xp
           Crafting Wooden Staff -> 15xp      // Every level up, xp gain is multiplied x2 [e.g At level 2, Chopping wood -> 4xp}
           Chopping wood -> 2xp               // And level up xp requirement is also multiplied x2 [e.g Level2 is 1000xp, Level3 is 2000xp, Level4 is 4000xp ...]
           Gather fibers -> 2xp
           Level 0 -> Level 1 [500xp]
```

- Create an "Age" system based on  the level / experience. Crafting an item, gathering ressources or completing a quest reward player with exp. 
After a certain amount, player level up. Every 10 levels, player access to a new "Age", unlocking new items and ressources.


```
Age 1 : Wooden Age (default age at game ini)
Age 2 : Stone Age 
Age 3 : Iron Age 
Age 4 : Golden Age
Age 5 : Diamond Age
Age 6 : Obsidian Age (final age)
```
- Items that need to be added to complete wooden age and start coding iron age :
```
Wooden sword(Cost 20 wood and 2 fibers, sell for 20$) 
Wooden axe(Cost 13 wood and 5 fibers, sell for 18$)
Wooden pickaxe(Cost 17 wood and 8 fibers, sell for 19$)
Wooden shield (Cost 30 wood and 10 fibers, sell for 35$)
Wooden chest (Cost 80 wood and 30 fibers, sell for $50)
```



