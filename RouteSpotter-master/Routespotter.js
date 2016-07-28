//General functions that apply to all pages:


//load in Nav

//end nav
//page changer
function pageChange(container, content){
    document.getElementById(container).innerHTML = content; 
}
//end Page Changer
function navClick(){    
    if (document.getElementById('navItems').innerHTML.indexOf("br") >-1){        
        document.getElementById('navItems').innerHTML = '&#9776;';       
    }else{
        document.getElementById('navItems').innerHTML = '&#9776;<div class="navContents"></br><a href="index.html">Home</a></br><a href="races.html">Races</a></br><a href="classes.html">Classes</a></br><a href="skills.html">Skills</a></br><a href="abilityScores.html">Ability Scores</a></br><a href="feats.php">Feats</a></br><a href="spells.php">Spells</a></br></div>';        
    }
}
//Cookie manager
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function acceptCurrent(name){
    //get page title, get button id (that should change based on what is to be selected), and 7.
    var t = $(document).find("title").text();
    var n = name
    createCookie(t,n,7);
    console.log(t, n, "and the cookie is: ", readCookie(t));
}





//specific functions that apply to certain pages

//display page
if($(document).find("title").text() === 'Character Sheet'){
    $( document ).ready(function(){

        var curRace = readCookie('Races');
        var curClass= readCookie('Classes');
        console.log(curRace + ' ' + curClass);
        var Speed = "";
        var SizeMod = "";
        var ST, WI, IN, DE, CH, CO = 0;
        var sAbilities = '';
        var wepFam = '';
        var langs = '';
        var pickStat = false;

        //race effects on character sheet
        if (curRace=='dwarf'){
            console.log('entering dwarf');
            Speed = 20;
            SizeMod = 'M';
            ST = 0;
            DE = 0;
            CO = 2;
            IN = 0;
            WI = 2;
            CH = -2;
            pickStat = false;
            sAbilities = '<p>Darkvision: Dwarves can see in the dark up to 60 feet.</p><p>Defensive Training: Dwarves gain a +4 dodge bonus to AC against monsters of the giant subtype.</p><p>Greed: Dwarves gain a +2 racial bonus on Appraise checks made to determine the price of nonmagical goods that contain precious metals or gemstones.</p><p>Hatred: Dwarves gain a +1 racial bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes because of their special training against these hated foes.</p><p>Hardy: Dwarves gain a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.</p><p>Stability: Dwarves gain a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.</p><p>Stonecunning: Dwarves gain a +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.</p>';
            wepFam = 'Weapon Familiarity: Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word "dwarven" in its name as a martial weapon.';
            langs = 'Languages: Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following: Giant, Gnome, Goblin, Orc, Terran, and Undercommon.';
        }else if(curRace == 'elf'){
            console.log('entering elf');
            Speed = 30;
            SizeMod = 'M';
            ST = 0;
            DE = 2;
            CO = -2;
            IN = 2;
            WI = 0;
            CH = 0;
            pickStat = false;
            sAbilities = '<p>Low-Light Vision: Elves can see twice as far as humans in conditions of dim light. See Additional Rules.</p><p>Elven Immunities: Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.</p><p>Elven Magic: Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.</p><p>Keen Senses: Elves receive a +2 racial bonus on Perception skill checks.</p>';
            wepFam = 'Weapon Familiarity: Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word “elven” in its name as a martial weapon.';
            langs = 'Languages: Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.';
        }else if(curRace == 'gnome'){
            console.log('entering gnome');
            Speed = 20;
            SizeMod = 'S';
            ST = -2;
            DE = 0;
            CO = 2;
            IN = 0;
            WI = 0;
            CH = 2;
            pickStat = false;
            sAbilities = '<p>Small: Gnomes are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a –1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.</p><p>Low-Light Vision: Gnomes can see twice as far as humans in conditions of dim light. See Additional Rules.</p><p>Defensive Training: Gnomes get a +4 dodge bonus to AC against monsters of the giant type.</p><p>Gnome Magic: Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with a Charisma of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation, and speak with animals. The caster level for these effects is equal to the gnome`s level. The DC for these spells is equal to 10 + the spell`s level + the gnome`s Charisma modifier.</p><p>Hatred: Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes due to special training against these hated foes.</p><p>Illusion Resistance: Gnomes get a +2 racial saving throw bonus against illusion spells or effects.</p><p>Keen Senses: Gnomes receive a +2 racial bonus on Perception skill checks.</p><p>Obsessive: Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice.</p>';
            wepFam = 'Weapon Familiarity: Gnomes treat any weapon with the word “gnome” in its name as a martial weapon.';
            langs = 'Languages: Gnomes begin play speaking Common, Gnome, and Sylvan. Gnomes with high Intelligence scores can choose from the following: Draconic, Dwarven, Elven, Giant, Goblin, and Orc.';
        }else if(curRace == 'halfElf'){
            console.log('entering HE');
            Speed = 30;
            SizeMod = 'M';
            ST = 0;
            DE = 0;
            CO = 0;
            IN = 0;
            WI = 0;
            CH = 0;
            pickStat = true;
            sAbilities = '<p>Low-Light Vision: Half-elves can see twice as far as humans in conditions of dim light. See Additional Rules.</p><p>Adaptability: Half-elves receive Skill Focus as a bonus feat at 1st level.</p><p>Elf Blood: Half-elves count as both elves and humans for any effect related to race.</p><p>Elven Immunities: Half-elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.</p><p>Keen Senses: Half-elves receive a +2 racial bonus on Perception skill checks.</p>';
            wepFam = '';
            langs = 'Languages: Half-elves begin play speaking Common and Elven. Half-elves with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).';
        }else if(curRace == 'halfOrc'){
            console.log('entering HO');
            Speed = 30;
            SizeMod = 'M';
            ST = 0;
            DE = 0;
            CO = 0;
            IN = 0;
            WI = 0;
            CH = 0;
            pickStat = true;
            sAbilities = '<p>Darkvision: Half-orcs can see in the dark up to 60 feet.</p><p>Intimidating: Half-orcs receive a +2 racial bonus on Intimidate skill checks due to their fearsome nature.</p><p>Orc Blood: Half-orcs count as both humans and orcs for any effect related to race.</p><p>Orc Ferocity: Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his → turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying.</p>';
            wepFam = 'Weapon Familiarity: Half-orcs are proficient with greataxes and falchions and treat any weapon with the word “orc” in its name as a martial weapon.';
            langs = 'Languages: Half-orcs begin play speaking Common and Orc. Half-orcs with high Intelligence scores can choose from the following: Abyssal, Draconic, Giant, Gnoll, and Goblin.';
        }else if(curRace == 'halfling'){
            console.log('entering hling');
            Speed = 20;
            SizeMod = 'S';
            ST = -2;
            DE = 2;
            CO = 0;
            IN = 0;
            WI = 0;
            CH = 2;
            pickStat = false;
            sAbilities = '<p>Small: Halflings are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a –1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.</p><p>Fearless: Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck.</p><p>Halfling Luck: Halflings receive a +1 racial bonus on all saving throws.</p><p>Keen Senses: Halflings receive a +2 racial bonus on Perception skill checks.</p><p>Sure-Footed: Halflings receive a +2 racial bonus on Acrobatics and Climb skill checks.</p>';
            wepFam = 'Weapon Familiarity: Halflings are proficient with slings and treat any weapon with the word “halfling” in its name as a martial weapon.';
            langs = 'Languages: Halflings begin play speaking Common and Halfling. Halflings with high Intelligence scores can choose from the following: Dwarven, Elven, Gnome, and Goblin.';
        }else{
            console.log('entering HU');
            Speed = 30;
            SizeMod = 'M';
            ST = 0;
            DE = 0;
            CO = 0;
            IN = 0;
            WI = 0;
            CH = 0;
            pickStat = true;
            sAbilities = '<p>Skilled: Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.</p>';
            wepFam = '';
            langs = 'Languages: Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).';
        }
        //class effects on character sheet.
        var classAbility = '';
        var bab, fort, ref, will = 0;
        var skillsPerLevel = '';
        var hitDie = 0;
        var spellsKnown = '';
        if (curClass == 'barbarian'){
            spellsKnown = "";
            hitDie = 12;
            Speed += 10;
            skillsPerLevel = " 4 + Int modifier";
            classAbility = "<p>Rage (Ex): A barbarian can call upon inner reserves of strength and ferocity, granting her additional combat prowess. Starting at 1st level, a barbarian can rage for a number of rounds per day equal to 4 + her Constitution modifier. At each level after 1st, she can rage for 2 additional rounds. Temporary increases to Constitution, such as those gained from rage and spells like bear's endurance, do not increase the total number of rounds that a barbarian can rage per day. A barbarian can enter rage as a free action. The total number of rounds of rage per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.</p><p>While in rage, a barbarian gains a +4 morale bonus to her Strength and Constitution, as well as a +2 morale bonus on Will saves. In addition, she takes a –2 penalty to Armor Class. The increase to Constitution grants the barbarian 2 hit points per Hit Dice, but these disappear when the rage ends and are not lost first like temporary hit points. While in rage, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration.</p><p>A barbarian can end her rage as a free action and is fatigued after rage for a number of rounds equal to 2 times the number of rounds spent in the rage. A barbarian cannot enter a new rage while fatigued or exhausted but can otherwise enter rage multiple times during a single encounter or combat. If a barbarian falls unconscious, her rage immediately ends, placing her in peril of death.</p><p>Uncanny Dodge (Ex): At 2nd level, a barbarian gains the ability to react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dexterity bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A barbarian with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her.<br />If a barbarian already has uncanny dodge from a different class, she automatically gains improved uncanny dodge (see below) instead.</p><p>Trap Sense (Ex): At 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses increase by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.</p><p>Improved Uncanny Dodge (Ex): At 5th level and higher, a barbarian can no longer be flanked. This defense denies a rogue the ability to sneak attack the barbarian by flanking her, unless the attacker has at least four more rogue levels than the target has barbarian levels.</p><p>If a character already has uncanny dodge (see above) from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.</p><p>Damage Reduction (Ex): At 7th level, a barbarian gains damage reduction. Subtract 1 from the damage the barbarian takes each time she is dealt damage from a weapon or a natural attack. At 10th level, and every three barbarian levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0.</p><p>Greater Rage (Ex): At 11th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution increases to +6 and the morale bonus on her Will saves increases to +3.</p><p>Indomitable Will (Ex): While in rage, a barbarian of 14th level or higher gains a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves she also receives during her rage.</p><p>Tireless Rage (Ex): Starting at 17th level, a barbarian no longer becomes fatigued at the end of her rage.</p><p>Mighty Rage (Ex): At 20th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution increases to +8 and the morale bonus on her Will saves increases to +4.</p>"
            bab = 1;
            fort = 2;
            ref = 0;
            will = 0;
        }else if(curClass == 'bard'){
            spellsKnown = "<table><caption>Table: Bard Spells Known</caption><tr><th>Level</th><th>0</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th></tr></thead><tr><td>1st</td><td>4</td><td>2</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>2nd</td><td>5</td><td>3</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>3rd</td><td>6</td><td>4</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>4th</td><td>6</td><td>4</td><td>2</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>5th</td><td>6</td><td>4</td><td>3</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>6th</td><td>6</td><td>4</td><td>4</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>7th</td><td>6</td><td>5</td><td>4</td><td>2</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>8th</td><td>6</td><td>5</td><td>4</td><td>3</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>9th</td><td>6</td><td>5</td><td>4</td><td>4</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>10th</td><td>6</td><td>5</td><td>5</td><td>4</td><td>2</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>11th</td><td>6</td><td>6</td><td>5</td><td>4</td><td>3</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>12th</td><td>6</td><td>6</td><td>5</td><td>4</td><td>4</td><td>&mdash;</td><td>&mdash;</td></tr><tr><td>13th</td><td>6</td><td>6</td><td>5</td><td>5</td><td>4</td><td>2</td><td>&mdash;</td></tr><tr><td>14th</td><td>6</td><td>6</td><td>6</td><td>5</td><td>4</td><td>3</td><td>&mdash;</td></tr><tr><td>15th</td><td>6</td><td>6</td><td>6</td><td>5</td><td>4</td><td>4</td><td>&mdash;</td></tr><tr><td>16th</td><td>6</td><td>6</td><td>6</td><td>5</td><td>5</td><td>4</td><td>2</td></tr><tr><td>17th</td><td>6</td><td>6</td><td>6</td><td>6</td><td>5</td><td>4</td><td>3</td></tr><tr><td>18th</td><td>6</td><td>6</td><td>6</td><td>6</td><td>5</td><td>4</td><td>4</td></tr><tr><td>19th</td><td>6</td><td>6</td><td>6</td><td>6</td><td>5</td><td>5</td><td>4</td></tr><tr><td>20th</td><td>6</td><td>6</td><td>6</td><td>6</td><td>6</td><td>5</td><td>5</td></tr></table>";
            hitDie = 8;
            skillsPerLevel = " 6 + Int modifier";
            classAbility = "";//"<p>Spells: A bard casts arcane spells drawn from the bard spell list presented in Spell Lists. He can cast any spell he knows without preparing it ahead of time. Every bard spell has a verbal component (song, recitation, or music). To learn or cast a spell, a bard must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a bard's spell is 10 + the spell level + the bard's Charisma modifier.</p><p>Like other spellcasters, a bard can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: Bard. In addition, he receives bonus spells per day if he has a high Charisma score (see Table: Ability Modifiers and Bonus Spells).</p><p>The bard's selection of spells is extremely limited. A bard begins play knowing four 0-level spells and two 1st-level spells of the bard's choice. At each new bard level, he gains one or more new spells, as indicated on Table: Bard Spells Known. (Unlike spells per day, the number of spells a bard knows is not affected by his Charisma score. The numbers on Table: Bard Spells Known are fixed.)</p><p>Upon reaching 5th level, and at every third bard level after that (8th, 11th, and so on), a bard can choose to learn a new spell in place of one he already knows. In effect, the bard "loses" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level bard spell the bard can cast. A bard may swap only a single spell at any given level and must choose whether or not to swap the spell at the same time that he gains new spells known for the level.</p><p>A bard need not prepare his spells in advance. He can cast any spell he knows at any time, assuming he has not yet used up his allotment of spells per day for the spell's level. </p><p>Bardic Performance: A bard is trained to use the Perform skill to create magical effects on those around him, including himself if desired. He can use this ability for a number of rounds per day equal to 4 + his Charisma modifier. At each level after 1st a bard can use bardic performance for 2 additional rounds per day. Each round, the bard can produce any one of the types of bardic performance that he has mastered, as indicated by his level.</p><p>Starting a bardic performance is a standard action, but it can be maintained each round as a free action. Changing a bardic performance from one effect to another requires the bard to stop the previous performance and start a new one as a standard action. A bardic performance cannot be disrupted, but it ends immediately if the bard is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action to maintain it each round. A bard cannot have more than one bardic performance in effect at one time.</p><p>At 7th level, a bard can start a bardic performance as a move action instead of a standard action. At 13th level, a bard can start a bardic performance as a swift action.</p><p>Each bardic performance has audible components, visual components, or both.</p><p>If a bardic performance has audible components, the targets must be able to hear the bard for the performance to have any effect, and many such performances are language dependent (as noted in the description). A deaf bard has a 20% chance to fail when attempting to use a bardic performance with an audible component. If he fails this check, the attempt still counts against his daily limit. Deaf creatures are immune to bardic performances with audible components.</p><p>If a bardic performance has a visual component, the targets must have line of sight to the bard for the performance to have any effect. A blind bard has a 50% chance to fail when attempting to use a bardic performance with a visual component. If he fails this check, the attempt still counts against his daily limit. Blind creatures are immune to bardic performances with visual components.</p><p>Cantrips: Bards learn a number of cantrips, or 0-level spells, as noted on Table: Bard Spells Known under 'Spells Known.' These spells are cast like any other spell, but they do not consume any slots and may be used again.</p><p>Versatile Performance (Ex): At 2nd level, a bard can choose one type of Perform skill. He can use his bonus in that skill in place of his bonus in associated skills. When substituting in this way, the bard uses his total Perform skill bonus, including class skill bonus, in place of its associated skill's bonus, whether or not he has ranks in that skill or if it is a class skill. At 6th level, and every 4 levels thereafter, the bard can select an additional type of Perform to substitute.</p><p>The types of Perform and their associated skills are: Act (Bluff, Disguise), Comedy (Bluff, Intimidate), Dance (Acrobatics, Fly), Keyboard Instruments (Diplomacy, Intimidate), Oratory (Diplomacy, Sense Motive), Percussion (Handle Animal, Intimidate), Sing (Bluff, Sense Motive), String (Bluff, Diplomacy), and Wind (Diplomacy, Handle Animal).</p><p>Well-Versed (Ex): At 2nd level, the bard becomes resistant to the bardic performance of others, and to sonic effects in general. The bard gains a +4 bonus on saving throws made against bardic performance, sonic, and language-dependent effects.</p><p>Lore Master (Ex): At 5th level, the bard becomes a master of lore and can take 10 on any Knowledge skill check that he has ranks in. A bard can choose not to take 10 and can instead roll normally. In addition, once per day, the bard can take 20 on any Knowledge skill check as a standard action. He can use this ability one additional time per day for every six levels he possesses beyond 5th, to a maximum of three times per day at 17th level.</p><p>Jack-of-All-Trades (Ex): At 10th level, the bard can use any skill, even if the skill normally requires him to be trained. At 16th level, the bard considers all skills to be class skills. At 19th level, the bard can take 10 on any skill check, even if it is not normally allowed.</p>";
            bab = 0;
            fort = 0;
            ref = 2;
            will = 2;
        }else if(curClass == 'cleric'){
            spellsKnown = "";
            hitDie = 8;
            skillsPerLevel = "2 + Int modifier";
            classAbility = "<p>Aura (Ex): A cleric of a chaotic, evil, good, or lawful deity has a particularly powerful aura corresponding to the deity's alignment (see the detect evil spell for details).</p><p>Spells: A cleric casts divine spells which are drawn from the cleric spell list presented in Spell Lists. Her alignment, however, may restrict her from casting certain spells opposed to her moral or ethical beliefs; see chaotic, evil, good, and lawful spells. A cleric must choose and prepare her spells in advance.</p><p>To prepare or cast a spell, a cleric must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a cleric's spell is 10 + the spell level + the cleric's Wisdom modifier.</p><p>Like other spellcasters, a cleric can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Cleric. In addition, she receives bonus spells per day if she has a high Wisdom score (see Table: Ability Modifiers and Bonus Spells).</p><p>Clerics meditate or pray for their spells. Each cleric must choose a time when she must spend 1 hour each day in quiet contemplation or supplication to regain her daily allotment of spells. A cleric may prepare and cast any spell on the cleric spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily meditation.</p><p>Channel Energy (Su): Regardless of alignment, any cleric can release a wave of energy by channeling the power of her faith through her holy (or unholy) symbol. This energy can be used to cause or heal damage, depending on the type of energy channeled and the creatures targeted. </p><p>Domains: A cleric's deity influences her alignment, what magic she can perform, her values, and how others see her. A cleric chooses two domains from among those belonging to her deity. A cleric can select an alignment domain (Chaos, Evil, Good, or Law) only if her alignment matches that domain. If a cleric is not devoted to a particular deity, she still selects two domains to represent her spiritual inclinations and abilities (subject to GM approval). The restriction on alignment domains still applies.</p><p>Each domain grants a number of domain powers, dependent upon the level of the cleric, as well as a number of bonus spells. A cleric gains one domain spell slot for each level of cleric spell she can cast, from 1st on up. Each day, a cleric can prepare one of the spells from her two domains in that slot. If a domain spell is not on the cleric spell list, a cleric can prepare it only in her domain spell slot. Domain spells cannot be used to cast spells spontaneously.</p><p>In addition, a cleric gains the listed powers from both of her domains, if she is of a high enough level. Unless otherwise noted, using a domain power is a standard action. Cleric domains are listed at the end of this class entry.</p><p>Orisons: Clerics can prepare a number of orisons, or 0-level spells, each day, as noted on Table: Cleric under “Spells per Day.” These spells are cast like any other spell, but they are not expended when cast and may be used again.</p><p>Spontaneous Casting: A good cleric (or a neutral cleric of a good deity) can channel stored spell energy into healing spells that she did not prepare ahead of time. The cleric can “lose” any prepared spell that is not an orison or domain spell in order to cast any cure spell of the same spell level or lower (a cure spell is any spell with “cure” in its name).</p><p>An evil cleric (or a neutral cleric who worships an evil deity) can't convert prepared spells to cure spells but can convert them to inflict spells (an inflict spell is one with “inflict” in its name).</p><p>A cleric who is neither good nor evil and whose deity is neither good nor evil can convert spells to either cure spells or inflict spells (player's choice). Once the player makes this choice, it cannot be reversed. This choice also determines whether the cleric channels positive or negative energy (see Channel Energy).</p><p>Chaotic, Evil, Good, and Lawful Spells: A cleric can't cast spells of an alignment opposed to her own or her deity's (if she has one). Spells associated with particular alignments are indicated by the chaotic, evil, good, and lawful descriptors in their spell descriptions.</p><p>Bonus Languages: A cleric's bonus language options include Celestial, Abyssal, and Infernal (the languages of good, chaotic evil, and lawful evil outsiders, respectively). These choices are in addition to the bonus languages available to the character because of her race.</p>";
            bab = 0;
            fort = 2;
            ref = 0;
            will = 2;
        }else if(curClass == 'druid'){
            spellsKnown = "";
            hitDie = 8;
            skillsPerLevel = "4 + Int modifier";
            classAbility = "<p>Nature Bond (Ex): At 1st level, a druid forms a bond with nature. This bond can take one of two forms. The first is a close tie to the natural world, granting the druid one of the following cleric domains: Air, Animal, Earth, Fire, Plant, Water, or Weather. When determining the powers and bonus spells granted by this domain, the druid's effective cleric level is equal to her druid level. A druid that selects this option also receives additional domain spell slots, just like a cleric. She must prepare the spell from her domain in this slot and this spell cannot be used to cast a spell spontaneously.</p><p>The second option is to form a close bond with an animal companion. A druid may begin play with any of the animals listed in Animal Choices. This animal is a loyal companion that accompanies the druid on her adventures.</p><p>Unlike normal animals of its kind, an animal companion's Hit Dice, abilities, skills, and feats advance as the druid advances in level. If a character receives an animal companion from more than one source, her effective druid levels stack for the purposes of determining the statistics and abilities of the companion. Most animal companions increase in size when their druid reaches 4th or 7th level, depending on the companion. If a druid releases her companion from service, she may gain a new one by performing a ceremony requiring 24 uninterrupted hours of prayer in the environment where the new companion typically lives. This ceremony can also replace an animal companion that has perished.</p><p>Weapon and Armor Proficiency: Druids are proficient with the following weapons: club, dagger, dart, quarterstaff, scimitar, scythe, sickle, shortspear, sling, and spear. They are also proficient with all natural attacks (claw, bite, and so forth) of any form they assume with wild shape (see below).</p><p>Druids are proficient with light and medium armor but are prohibited from wearing metal armor; thus, they may wear only padded, leather, or hide armor. A druid may also wear wooden armor that has been altered by the ironwood spell so that it functions as though it were steel. Druids are proficient with shields (except tower shields) but must use only those crafted from wood.</p><p>A druid who wears prohibited armor or uses a prohibited shield is unable to cast druid spells or use any of her supernatural or spell-like class abilities while doing so and for 24 hours thereafter.</p><p>Spells: A druid casts divine spells which are drawn from the druid spell list presented in Spell Lists. Her alignment may restrict her from casting certain spells opposed to her moral or ethical beliefs; see Chaotic, Evil, Good, and Lawful Spells. A druid must choose and prepare her spells in advance.</p><p>To prepare or cast a spell, the druid must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a druid's spell is 10 + the spell level + the druid's Wisdom modifier.</p><p>Like other spellcasters, a druid can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Druid. In addition, she receives bonus spells per day if she has a high Wisdom score (see Table: Ability Modifiers and Bonus Spells).</p><p>A druid must spend 1 hour each day in a trance-like meditation on the mysteries of nature to regain her daily allotment of spells. A druid may prepare and cast any spell on the druid spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily meditation.</p><p>Spontaneous Casting: A druid can channel stored spell energy into summoning spells that she hasn't prepared ahead of time. She can “lose” a prepared spell in order to cast any summon nature's ally spell of the same level or lower.</p><p>Chaotic, Evil, Good, and Lawful Spells: A druid can't cast spells of an alignment opposed to her own or her deity's (if she has one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.</p><p>Orisons: Druids can prepare a number of orisons, or 0-level spells, each day, as noted on Table: Druid under “Spells per Day.” These spells are cast like any other spell, but they are not expended when cast and may be used again.</p><p>Bonus Languages: A druid's bonus language options include Sylvan, the language of woodland creatures. This choice is in addition to the bonus languages available to the character because of her race.</p><p>A druid also knows Druidic, a secret language known only to druids, which she learns upon becoming a 1st-level druid. Druidic is a free language for a druid; that is, she knows it in addition to her regular allotment of languages and it doesn't take up a language slot. Druids are forbidden to teach this language to nondruids.</p><p>Druidic has its own alphabet.</p>";
            bab = 0;
            fort = 2;
            ref = 0;
            will = 2;
        }else if(curClass == 'fighter'){
            spellsKnown = "";
            hitDie = 10;
            skillsPerLevel = "2 + Int modifier";
            classAbility = "";//<p>Weapon and Armor Proficiency: A fighter is proficient with all simple and martial weapons and with all armor (heavy, light, and medium) and shields (including tower shields).</p><p>Bonus Feats: At 1st level, and at every even level thereafter, a fighter gains a bonus feat in addition to those gained from normal advancement (meaning that the fighter gains a feat at every level). These bonus feats must be selected from those listed as combat feats, sometimes also called "fighter bonus feats."</p><p>Upon reaching 4th level, and every four levels thereafter (8th, 12th, and so on), a fighter can choose to learn a new bonus feat in place of a bonus feat he has already learned. In effect, the fighter loses the bonus feat in exchange for the new one. The old feat cannot be one that was used as a prerequisite for another feat, prestige class, or other ability. A fighter can only change one feat at any given level and must choose whether or not to swap the feat at the time he gains a new bonus feat for the level.</p>";
            bab = 1;
            fort = 2;
            ref = 0;
            will = 0;
        }else if(curClass == 'monk'){
            spellsKnown = "";
            hitDie = 8;
            skillsPerLevel = "4 + Int modifier";
            classAbility = "<p>Weapon and Armor Proficiency: Monks are proficient with the club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shortspear, short sword, shuriken, siangham, sling, and spear.</p><p>Monks are not proficient with any armor or shields.</p><p>When wearing armor, using a shield, or carrying a medium or heavy load, a monk loses his AC bonus, as well as his fast movement and flurry of blows abilities.</p><p>AC Bonus (Ex): When unarmored and unencumbered, the monk adds his Wisdom bonus (if any) to his AC and his CMD. In addition, a monk gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter, up to a maximum of +5 at 20th level.</p><p>These bonuses to AC apply even against touch attacks or when the monk is flat-footed. He loses these bonuses when he is immobilized or helpless, when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.</p><p>Flurry of Blows (Ex): Starting at 1st level, a monk can make a flurry of blows as a full-attack action. When doing so, he may make on additional attack, taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat. These attacks can be any combination of unarmed strikes and attacks with a monk special weapon (he does not need to use two weapons to use this ability). For the purpose of these attacks, the monk's base attack bonus from his monk class levels is equal to his monk level. For all other purposes, such as qualifying for a feat or a prestige class, the monk uses his normal base attack bonus.</p><p>At 8th level, the monk can make two additional attacks when he uses flurry of blows, as if using Improved Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).</p><p>At 15th level, the monk can make three additional attacks using flurry of blows, as if using Greater Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).</p><p>A monk applies his full Strength bonus to his damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. A monk may substitute disarm, sunder, and trip combat maneuvers for unarmed attacks as part of a flurry of blows. A monk cannot use any weapon other than an unarmed strike or a special monk weapon as part of a flurry of blows. A monk with natural weapons cannot use such weapons as part of a flurry of blows, nor can he make natural attacks in addition to his flurry of blows attacks.</p><p>Unarmed Strike: At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks may be with fist, elbows, knees, and feet. This means that a monk may make unarmed strikes with his hands full. There is no such thing as an off-hand attack for a monk striking unarmed. A monk may thus apply his full Strength bonus on damage rolls for all his unarmed strikes.</p><p>Usually a monk's unarmed strikes deal lethal damage, but he can choose to deal nonlethal damage instead with no penalty on his attack roll. He has the same choice to deal lethal or nonlethal damage while grappling.</p><p>A monk's unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons.</p>";
            bab = 0;
            fort = 2;
            ref = 2;
            will = 2;
        }else if(curClass == 'paladin'){
            spellsKnown = "";
            hitDie = 0;
            skillsPerLevel = "";
            classAbility = "";
            bab = 0;
            fort = 0;
            ref = 0;
            will = 0;
        }else if(curClass == 'ranger'){
            spellsKnown = "";
            hitDie = 0;
            skillsPerLevel = "";
            classAbility = "";
            bab = 0;
            fort = 0;
            ref = 0;
            will = 0;
        }else if(curClass == 'rogue'){
            spellsKnown = "";
            hitDie = 0;
            skillsPerLevel = "";
            classAbility = "";
            bab = 0;
            fort = 0;
            ref = 0;
            will = 0;
        }else if(curClass == 'sorcerer'){
            spellsKnown = "";
            hitDie = 0;
            skillsPerLevel = "";
            classAbility = "";
            bab = 0;
            fort = 0;
            ref = 0;
            will = 0;
        }else if(curClass == 'wizard'){
            spellsKnown = "";
            hitDie = 0;
            skillsPerLevel = "";
            classAbility = "";
            bab = 0;
            fort = 0;
            ref = 0;
            will = 0;
        }
                        //need SPEED, AC (Touch and Flat footed), Languages, Money, CMB - CMD - BAB, Weight, Spell Resistance, Initiative, Saves (finish with mods)
        pageChange('basicInformation', '<button onClick="bInfoPrompt();">Fill out basic info</button>');
        pageChange('abilityScores', '<table><tr><td>Stat</td><td>Total</td><td>Base</td><td>Racial</td><td>Temp</td><td>Modifier</td></tr><tr><td>STR</td><td>'+(ST+parseInt(readCookie('str')))+'</td><td>'+readCookie('str')+'</td><td>'+ST+'</td><td>____</td><td>'+'!!MOD!!'+'</td></tr><tr><td>DEX</td><td>'+(DE+parseInt(readCookie('dex')))+'</td><td>'+readCookie('dex')+'</td><td>'+DE+'</td><td>____</td><td>'+'!!MOD!!'+'</td></tr><tr><td>CON</td><td>'+(CO+parseInt(readCookie('con')))+'</td><td>'+readCookie('con')+'</td><td>'+CO+'</td><td>____</td><td>'+'!!MOD!!'+'</td></tr><tr><td>INT</td><td>'+(IN+parseInt(readCookie('int')))+'</td><td>'+readCookie('int')+'</td><td>'+IN+'</td><td>____</td><td>'+'!!MOD!!'+'</td></tr><tr><td>WIS</td><td>'+(WI+parseInt(readCookie('wis')))+'</td><td>'+readCookie('wis')+'</td><td>'+WI+'</td><td>____</td><td>'+'!!MOD!!'+'</td></tr><tr><td>CHA</td><td>'+(CH+parseInt(readCookie('cha')))+'</td><td>'+readCookie('cha')+'</td><td>'+CH+'</td><td>____</td><td>'+'!!MOD!!'+'</td></tr></table>')
        pageChange('tempStats', '<table><td><p>Hitdie<br />' + hitDie + '<br />Current HP<br />___/___</p></td><td><p>Temporary Bonuses<br />___________<br />___________<br />___________<br />___________<br />___________<br />___________<br /></p></td>' );
        pageChange('combatStats', '<table><tr><td>Saving Throws:</td><td>Total</td><td>Base Save</td><td>Ability Modifier</td><td>Magic Modifier</td><td>Misc Modifier</td><td>Temp Modifier</td></tr><tr><td>Fortitude</td><td>____</td><td>'+fort+'</td><td></td><td></td><td></td><td></td></tr><tr><td>Reflex</td><td>____</td><td>'+ref+'</td><td></td><td></td><td></td><td></td></tr><tr><td>Will</td><td>____</td><td>'+will+'</td><td></td><td></td><td></td><td></td></tr>');
        pageChange('skills', readCookie('Skills'));
        pageChange('feats', readCookie('Feats'));
        pageChange('weapons', '<table><tr><td>Weapon</td><td>DMG</td><td>Critical</td><td>Range</td><td>Weight</td><td>type</td><td>special</td></tr><tr><td>_______________</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_______________</td></tr><tr><td>_______________</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_______________</td></tr><tr><td>_______________</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_______________</td></tr><tr><td>_______________</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_______________</td></tr>');
        pageChange('armor', '<table><tr><td>Armor</td><td>AC Bonus</td><td>Max Dex</td><td>AC Penalty</td><td>Spell Failure</td><td>Max Speed</td><td>Weight</td></tr><tr><td>_______________</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td></tr><tr><td>_______________</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td></tr><tr><td>_______________</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td></tr><tr><td>_______________</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td><td>_____</td></tr>');
        pageChange('feats', readCookie('Feats'));
        pageChange('class', classAbility);
        pageChange('spells', spellsKnown);
        pageChange('inventory', '<p>Inventory<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________<br />_______________');
        pageChange('specialAbilities', classAbility);
        pageChange('notes', '<p>Notes<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________<br />_______________________________________________');

    });
}
function bInfoPrompt(){

  var name = prompt("Player name", "");
  var cName = prompt("Character name", "");
  var size = prompt("Size (Small, Medium, Large)", "");
  var age = prompt("Age", "");
  var deity = prompt("Deity (Cleric and Paladin have deity spells)", "");
  var gender = prompt("Gender", "");
  var alignment = prompt("Character Alignment (Pick 1 from each list: Good, Neutral, Evil & Lawful, Neutral, Chaotic)", "");
  var description = prompt("Description (Eye color, Hair color, Height, etc.", "");
  pageChange('basicInformation', "<table><tr><td>Player: " + name + "</td><td> Name: " + cName + "</td><td> Alignment: " + alignment + "</td></tr><tr><td>Race: " + readCookie('Races') + "</td><td> Class: " + readCookie('Classes') + "</td><td>Age: " + age + "</td></tr><tr><td> Deity: " + deity + "</td><td> Gender: " + gender + "</td><td> Size: " + size + "</td></tr></table><p>" + description + " </p>");
}

//Race Page
function raceChange(races){
    if (races==='dwarf'){
        pageChange('raceContainer', '<h1><a id="Dwarf" onclick="acceptCurrent(this.id);">Dwarf</a></h1>');
        pageChange('raceImage', '<div class="raceimage"><img src="http://imgur.com/gYya0re.jpg" alt="Dwarf" class="dwarf-race"></div>');
        pageChange('raceDescription', '<section class="description"><p>Dwarves are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the depredations of savage races like orcs and goblins. More than any other race, the dwarves have acquired a reputation as dour and humorless craftsmen of the earth. It could be said that dwarven history shapes the dark disposition of many dwarves, for they reside in high mountains and dangerous realms below the earth, constantly at war with giants, goblins, and other such horrors. </p><br/><p><strong>Physical Description:</strong> Dwarves are a short and stocky race, and stand about a foot shorter than most humans, with wide, compact bodies that account for their burly appearance. Male and female dwarves pride themselves on the length of their hair, and men often decorate their beards with a variety of clasps and intricate braids. A clean-shaven male dwarf is a sure sign of madness, or worse—no one familiar with their race trusts a beardless dwarf.</p><br/><p><strong>Society:</strong> The great distances between their mountain citadels account for many of the cultural differences that exist within dwarven society. Despite these schisms, dwarves throughout the world are characterized by their love of stonework, their passion for stone- and metal-based craftsmanship and architecture, and a fierce hatred of giants, orcs, and goblinoids.</p><br/><p><strong>Relations:</strong> Dwarves and orcs have long dwelt in proximity, theirs a history of violence as old as both their races. Dwarves generally distrust and shun half-orcs. They find halflings, elves, and gnomes to be too frail, flighty, or “pretty” to be worthy of proper respect. It is with humans that dwarves share the strongest link, for humans industrious nature and hearty appetites come closest to matching those of the dwarven ideal. </p><br/><p><strong>Alignment and Religion:</strong>  Dwarves are driven by honor and tradition, and while they are often satirized as standoffish, they have a strong sense of friendship and justice, and those who win their trust understand that, while they work hard, they play even harder—especially when good ale is involved. Most dwarves are lawful good.</p><br/><p><strong>Adventurers:</strong> Although dwarven adventurers are rare compared to humans, they can be found in most regions of the world. Dwarves often leave the confines of their redoubts to seek glory for their clans, to find wealth with which to enrich the fortress-homes of their birth, or to reclaim fallen dwarven citadels from racial enemies. Dwarven warfare is often characterized by tunnel fighting and melee combat, and as such most dwarves tend toward classes such as fighters and barbarians. </p></section>' + '<section class="racial-traits"><br/><p>+2 Dexterity, +2 Intelligence, –2 Constitution: Elves are nimble, both in body and mind, but their form is frail.</p><br/><p>Medium: Elves are Medium creatures and have no bonuses or penalties due to their size.</p><br/><p>Normal Speed: Elves have a base speed of 30 feet.</p><br/><p>Low-Light Vision: Elves can see twice as far as humans in conditions of dim light. See Additional Rules.</p><br/><p>Elven Immunities: Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.</p><br/><p>Elven Magic: Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.</p><br/><p>Keen Senses: Elves receive a +2 racial bonus on Perception skill checks.</p><br/><p>Weapon Familiarity: Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word “elven” in its name as a martial weapon.</p><br/><p>Languages: Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.</p><br/></section>');
        pageChange('chooseRace', '<button id="dwarf" onclick="acceptCurrent(this.id)">Choose This Race</button>');
    }else if( races==='elf'){
        pageChange('raceContainer', '<h1><a id="Elf" onclick="acceptCurrent(this.id);">Elf</a></h1>');
        pageChange('raceImage', '<div class="raceimage"><img src="http://imgur.com/qzCVKpi.jpg" alt="elf" class="elf-race"></div>');
        pageChange('raceDescription', '<section class="description"><p>The long-lived elves are children of the natural world, similar in many superficial ways to fey creatures, yet different as well. Elves value their privacy and traditions, and while they are often slow to make friends, at both the personal and national levels, once an outsider is accepted as a comrade, such alliances can ← for generations. Elves have a curious attachment to their surroundings, perhaps as a result of their incredibly long lifespans or some deeper, more mystical reason. Elves who dwell in a region for long find themselves physically adapting to match their surroundings, most noticeably taking on coloration reflecting the local environment. Those elves that spend their lives among the short-lived races, on the other hand, often develop a skewed perception of mortality and become morose, the result of watching wave after wave of companions age and die before their eyes.</p><p><strong>Physical Description:</strong> Although generally taller than humans, elves possess a graceful, fragile physique that is accentuated by their long, pointed ears. Their eyes are wide and almond-shaped, and filled with large, vibrantly colored pupils. While elven clothing often plays off the beauty of the natural world, those elves that live in cities tend to bedeck themselves in the latest fashion.</p><p><strong>Society:</strong> Many elves feel a bond with nature and strive to live in harmony with the natural world. Most, however, find manipulating earth and stone to be distasteful, and prefer instead to indulge in the finer arts, with their inborn patience making them particularly suited to wizardry.</p><p><strong>Relations:</strong> Elves are prone to dismissing other races, writing them off as rash and impulsive, yet they are excellent judges of character. An elf might not want a dwarf neighbor, but would be the first to acknowledge that dwarf`s skill at smithing. They regard gnomes as strange (and sometimes dangerous) curiosities, and halflings with a measure of pity, for these small folk seem to the elves to be adrift, without a traditional home. Elves are fascinated with humans, as evidenced by the number of half-elves in the world, even if they usually disown such offspring. They regard half-orcs with distrust and suspicion.</p><p><strong>Alignment and Religion:</strong> Elves are emotional and capricious, yet value kindness and beauty. Most elves are chaotic good.</p><p><strong>Adventurers:</strong> Many elves embark on adventures out of a desire to explore the world, leaving their secluded forest realms to reclaim forgotten elven magic or search out lost kingdoms established millennia ago by their forefathers. For those raised among humans, the ephemeral and unfettered life of an adventurer holds natural appeal. Elves generally eschew melee because of their frailty, preferring instead to pursue classes such as wizards and rangers.</p></section>' + '<section class="racial-traits"><p>+2 Dexterity, +2 Intelligence, –2 Constitution: Elves are nimble, both in body and mind, but their form is frail.</p><p>Medium: Elves are Medium creatures and have no bonuses or penalties due to their size.</p><p>Normal Speed: Elves have a base speed of 30 feet.</p><p>Low-Light Vision: Elves can see twice as far as humans in conditions of dim light. See Additional Rules.</p><p>Elven Immunities: Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.</p><p>Elven Magic: Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.</p><p>Keen Senses: Elves receive a +2 racial bonus on Perception skill checks.</p><p>Weapon Familiarity: Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word “elven” in its name as a martial weapon.</p><p>Languages: Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.</p></section>');
        pageChange('chooseRace', '<button id="elf" onclick="acceptCurrent(this.id)">Choose This Race</button>');
    }else if( races==='halfElf'){
        pageChange('raceContainer', '<h1><a id="Half-elf" onclick="acceptCurrent(this.id);">Half-elf</a></h1>');
        pageChange('raceImage', '<div class="raceimage"><img src="http://imgur.com/Mr5ifHN.jpg" alt="Half-elf" class="half-elf-race"></div>');
        pageChange('raceDescription', '<section class="description"><p>Elves have long drawn the covetous gazes of other races. Their generous life spans, magical affinity, and inherent grace each contribute to the admiration or bitter envy of their neighbors. Of all their traits, however, none so entrance their human associates as their beauty. Since the two races first came into contact with each other, the humans have held up elves as models of physical perfection, seeing in the fair folk idealized versions of themselves. For their part, many elves find humans attractive despite their comparatively barbaric ways, drawn to the passion and impetuosity with which members of the younger race play out their brief lives.Sometimes this mutual infatuation leads to romantic relationships. Though usually short-lived, even by human standards, these trysts commonly lead to the birth of half-elves, a race descended of two cultures yet inheritor of neither. Half-elves can breed with one another, but even these “pureblood” half-elves tend to be viewed as bastards by humans and elves alike.</p><p><strong>Physical Description:</strong> Half-elves stand taller than humans but shorter than elves. They inherit the lean build and comely features of their elven lineage, but their skin color is dictated by their human side. While half-elves retain the pointed ears of elves, theirs are more rounded and less pronounced. A half-elf`s human-like eyes tend to range a spectrum of exotic colors running from amber or violet to emerald green and deep blue.</p><p><strong>Society:</strong> The lack of a unified homeland and culture forces half-elves to remain versatile, able to conform to nearly any environment. While often attractive to both races for the same reasons as their parents, half-elves rarely fit in with either humans or elves, as both races see too much evidence of the other in them. This lack of acceptance weighs heavily on many half-elves, yet others are bolstered by their unique status, seeing in their lack of a formalized culture the ultimate freedom. As a result, half-elves are incredibly adaptable, capable of adjusting their mindsets and talents to whatever societies they find themselves in. </p><p><strong>Relations:</strong>  A half-elf understands loneliness, and knows that character is often less a product of race than of life experience. As such, half-elves are often open to friendships and alliances with other races, and less likely to rely on first impressions when forming opinions of new acquaintances.</p><p><strong>Alignment and Religion:</strong>  Half-elves` isolation strongly influences their characters and philosophies. Cruelty does not come naturally to them, nor does blending in and bending to societal convention—as a result, most half-elves are chaotic good. Half-elves` lack of a unified culture makes them less likely to turn to religion, but those who do generally follow the common faiths of their homeland.</p><p><strong>Adventurers:</strong>Half-elves tend to be itinerants, wandering the lands in search of a place they might finally call home. The desire to prove oneself to the community and establish a personal identity—or even a legacy—drives many half-elf adventurers to lives of bravery.</p></section>'+'<section class="racial-traits"><p>+2 to One Ability Score: Half-elf characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.</p><p>Medium: Half-elves are Medium creatures and have no bonuses or penalties due to their size.</p><p>Normal Speed: Half-elves have a base speed of 30 feet.</p><p>Low-Light Vision: Half-elves can see twice as far as humans in conditions of dim light. See Additional Rules.</p><p>Adaptability: Half-elves receive Skill Focus as a bonus feat at 1st level.</p><p>Elf Blood: Half-elves count as both elves and humans for any effect related to race.</p><p>Elven Immunities: Half-elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.</p><p>Keen Senses: Half-elves receive a +2 racial bonus on Perception skill checks.</p><p>Multitalented: Half-elves choose two favored classes at first level and gain +1 hit point or +1 skill point whenever they take a level in either one of those classes. See Classes for more information about favored classes.</p><p>Languages: Half-elves begin play speaking Common and Elven. Half-elves with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).</p></section>');
        pageChange('chooseRace', '<button id="halfElf" onclick="acceptCurrent(this.id)">Choose This Race</button>');
    }else if( races==='halfOrc'){
        pageChange('raceContainer', '<h1><a id="Half-orc" onclick="acceptCurrent(this.id);">Half-orc</a></h1>');
        pageChange('raceImage', '<div class="raceimage"><img src="http://imgur.com/DjAQUu2.jpg" alt="Half-orc" class="half-orc-race"></div>');
        pageChange('raceDescription', '<section class="description"><p>Half-orcs are monstrosities, their tragic births the result of perversion and violence—or at least, that`s how other races see them. It`s true that half-orcs are rarely the result of loving unions, and as such are usually forced to grow up hard and fast, constantly fighting for protection or to make names for themselves. Feared, distrusted, and spat upon, half-orcs still consistently manage to surprise their detractors with great deeds and unexpected wisdom—though sometimes it`s easier just to crack a few skulls.</p><p><strong>Physical Description:</strong> Both genders of half-orc stand between 6 and 7 feet tall, with powerful builds and greenish or grayish skin. Their canines often grow long enough to protrude from their mouths, and these “tusks,” combined with heavy brows and slightly pointed ears, give them their notoriously bestial appearance. While half-orcs may be impressive, few ever describe them as beautiful.</p><p><strong>Society:</strong> Unlike half-elves, where at least part of society`s discrimination is born out of jealousy or attraction, half-orcs get the worst of both worlds: physically weaker than their orc kin, they also tend to be feared or attacked outright by the legions of humans who don`t bother making the distinction between full orcs and halfbloods. Still, while not exactly accepted, half-orcs in civilized societies tend to be valued for their martial prowess, and orc leaders have actually been known to spawn them intentionally, as the halfbreeds regularly make up for their lack of physical strength with increased cunning and aggression, making them natural chieftains and strategic advisors.</p><p><strong>Relations:</strong> A lifetime of persecution leaves the average half-orc wary and quick to anger, yet those who break through his savage exterior might find a well-hidden core of empathy. Elves and dwarves tend to be the least accepting of half-orcs, seeing in them too great a resemblance to their racial enemies, but other races aren`t much more understanding. Human societies with few orc problems tend to be the most accommodating, and there half-orcs make natural mercenaries and enforcers.</p><p><strong>Alignment and Religion:</strong> Forced to live either among brutish orcs or as lonely outcasts in civilized lands, most half-orcs are bitter, violent, and reclusive. Evil comes easily to them, but they are not evil by nature—rather, most half-orcs are chaotic neutral, having been taught by long experience that there`s no point doing anything but that which directly benefits themselves.</p><p><strong>Adventurers:</strong>Staunchly independent, many half-orcs take to lives of adventure out of necessity, seeking to escape their painful pasts or improve their lot through force of arms. Others, more optimistic or desperate for acceptance, take up the mantle of crusaders in order to prove their worth to the world.</p></section>' + '<section class="racial-traits"><p>+2 to One Ability Score: Half-orc characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.</p><p>Medium: Half-orcs are Medium creatures and have no bonuses or penalties due to their size.</p><p>Normal Speed: Half-orcs have a base speed of 30 feet.</p><p>Darkvision: Half-orcs can see in the dark up to 60 feet.</p><p>Intimidating: Half-orcs receive a +2 racial bonus on Intimidate skill checks due to their fearsome nature.</p><p>Orc Blood: Half-orcs count as both humans and orcs for any effect related to race.</p><p>Orc Ferocity: Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his → turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying.</p><p>Weapon Familiarity: Half-orcs are proficient with greataxes and falchions and treat any weapon with the word “orc” in its name as a martial weapon.</p><p>Languages: Half-orcs begin play speaking Common and Orc. Half-orcs with high Intelligence scores can choose from the following: Abyssal, Draconic, Giant, Gnoll, and Goblin.</p></section>');
        pageChange('chooseRace', '<button id="halfOrc" onclick="acceptCurrent(this.id)">Choose This Race</button>');
    }else if( races==='halfling'){
        pageChange('raceContainer', '<h1><a id="Halfling" onclick="acceptCurrent(this.id);">Halfling</a></h1>');
        pageChange('raceImage', '<div class="raceimage"><img src="http://imgur.com/7f6alv3.jpg" alt="Halfling" class="halfling-race"></div>');
        pageChange('raceDescription', '<section class="description"><p>Optimistic and cheerful by nature, blessed with uncanny luck and driven by a powerful wanderlust, halflings make up for their short stature with an abundance of bravado and curiosity. At once excitable and easy-going, halflings like to keep an even temper and a steady eye on opportunity, and are not as prone as some of the more volatile races to violent or emotional outbursts. Even in the jaws of catastrophe, a halfling almost never loses his sense of humor.Halflings are inveterate opportunists. Unable to physically defend themselves from the rigors of the world, they know when to bend with the wind and when to hide away. Yet a halfling`s curiosity often overwhelms his good sense, leading to poor decisions and narrow escapes.Though their curiosity drives them to travel and seek new places and experiences, halflings possess a strong sense of house and home, often spending above their means to enhance the comforts of home life. </p><p><strong>Physical Description:</strong> Halflings rise to a humble height of 3 feet. They prefer to walk barefoot, leading to the bottoms of their feet being roughly calloused. Tufts of thick, curly hair warm the tops of their broad, tanned feet. Their skin tends toward a rich almond color and their hair toward light shades of brown. A halfling`s ears are pointed, but proportionately not much larger than those of a human.</p><p><strong>Society:</strong> Halflings claim no cultural homeland and control no settlements larger than rural assemblies of free towns. Far more often, they dwell at the knees of their human cousins in human cities, eking out livings as they can from the scraps of larger societies. Many halflings lead perfectly fulfilling lives in the shadow of their larger neighbors, while some prefer more nomadic lives on the road, traveling the world and experiencing all it has to offer.</p><p><strong>Relations:</strong>  A typical halfling prides himself on his ability to go unnoticed by other races—it is this trait that allows so many halflings to excel at thievery and trickery. Most halflings, knowing full well the stereotyped view other races take of them as a result, go out of their way to be forthcoming and friendly to the bigger races when they`re not trying to go unnoticed. They get along fairly well with gnomes, although most halflings regard these eccentric creatures with a hefty dose of caution. Halflings coexist well with humans as a general rule, but since some of the more aggressive human societies value halflings as slaves, halflings try not to grow too complacent when dealing with them. Halflings respect elves and dwarves, but these races generally live in remote regions far from the comforts of civilization that halflings enjoy, thus limiting opportunities for interaction. Only half-orcs are generally shunned by halflings, for their great size and violent natures are a bit too intimidating for most halflings to cope with. </p><p><strong>Alignment and Religion:</strong> Halflings are loyal to their friends and families, but since they dwell in a world dominated by races twice as large as themselves, they`ve come to grips with the fact that sometimes they`ll need to scrap and scrounge for survival. Most halflings are neutral as a result.</p><p><strong>Adventurers:</strong>Their inherent luck coupled with their insatiable wanderlust makes halflings ideal for lives of adventure. Other such vagabonds tend to put up with the curious race in hopes that some of their mystical luck will rub off.</p></section>'+'<section class="racial-traits"><p>+2 Dexterity, +2 Charisma, –2 Strength: Halflings are nimble and strong-willed, but their small stature makes them weaker than other races.</p><p>Small: Halflings are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a –1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.</p><p>Slow Speed: Halflings have a base speed of 20 feet.</p><p>Fearless: Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck.</p><p>Halfling Luck: Halflings receive a +1 racial bonus on all saving throws.</p><p>Keen Senses: Halflings receive a +2 racial bonus on Perception skill checks.</p><p>Sure-Footed: Halflings receive a +2 racial bonus on Acrobatics and Climb skill checks.</p><p>Weapon Familiarity: Halflings are proficient with slings and treat any weapon with the word “halfling” in its name as a martial weapon.</p><p>Languages: Halflings begin play speaking Common and Halfling. Halflings with high Intelligence scores can choose from the following: Dwarven, Elven, Gnome, and Goblin.</p></section>');
        pageChange('chooseRace', '<button id="halfling" onclick="acceptCurrent(this.id)">Choose This Race</button>');
    }else if( races==='gnome'){
        pageChange('raceContainer', '<h1><a id="Gnome" onclick="acceptCurrent(this.id);">Gnome</a></h1>');
        pageChange('raceImage', '<div class="raceimage"><img src="http://imgur.com/fxzv0g2.jpg" alt="Gnome" class="gnome-race"></div>');
        pageChange('raceDescription', '<section class="description"><p>Gnomes trace their lineage back to the mysterious realm of the fey, a place where colors are brighter, the wildlands wilder, and emotions more primal. Unknown forces drove the ancient gnomes from that realm long ago, forcing them to seek refuge in this world; despite this, the gnomes have never completely abandoned their fey roots or adapted to mortal culture. As a result, gnomes are widely regarded by the other races as alien and strange.</p><p><strong>Physical Description:</strong> Gnomes are one of the smallest of the common races, generally standing just over 3 feet in height. Their hair tends toward vibrant colors such as the fiery orange of autumn leaves, the verdant green of forests at springtime, or the deep reds and purples of wildflowers in bloom. Similarly, their flesh tones range from earthy browns to floral pinks, frequently with little regard for heredity. Gnomes possess highly mutable facial characteristics, and many have overly large mouths and eyes, an effect which can be both disturbing and stunning, depending on the individual.</p><p><strong>Society:</strong> Unlike most races, gnomes do not generally organize themselves within classic societal structures. Whimsical creatures at heart, they typically travel alone or with temporary companions, ever seeking new and more exciting experiences. They rarely form enduring relationships among themselves or with members of other races, instead pursuing crafts, professions, or collections with a passion that borders on zealotry. Male gnomes have a strange fondness for unusual hats and headgear, while females often proudly wear elaborate and eccentric hairstyles.</p><p><strong>Relations:</strong> Gnomes have difficulty interacting with the other races, on both emotional and physical levels. Gnome humor is hard to translate and often comes across as malicious or senseless to other races, while gnomes in turn tend to think of the taller races as dull and lumbering giants. They get along well with halflings and humans, but are overly fond of playing jokes on dwarves and half-orcs, whom most gnomes feel need to lighten up. They respect elves, but often grow frustrated with the comparatively slow pace at which members of the long-lived race make decisions. To the gnomes, action is always better than inaction, and many gnomes carry several highly involved projects with them at all times to keep themselves entertained during rest periods.</p><p><strong>Alignment and Religion:</strong> Although gnomes are impulsive tricksters, with sometimes inscrutable motives and equally confusing methods, their hearts are generally in the right place. They are prone to powerful fits of emotion, and find themselves most at peace within the natural world.</p><p><strong>Adventurers:</strong>Gnomes propensity for wanderlust makes them natural adventurers. They often become wanderers to experience new aspects of life, for nothing is as novel as the uncounted dangers facing adventurers. Gnomes make up for their weakness with a proclivity for sorcery or bardic music.</p></section>' + '<section class="racial-traits"><p>+2 Constitution, +2 Charisma, –2 Strength: Gnomes are physically weak but surprisingly hardy, and their attitude makes them naturally agreeable.</p><p>Small: Gnomes are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a –1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.</p><p>Slow Speed: Gnomes have a base speed of 20 feet.</p><p>Low-Light Vision: Gnomes can see twice as far as humans in conditions of dim light. See Additional Rules.</p><p>Defensive Training: Gnomes get a +4 dodge bonus to AC against monsters of the giant type.</p><p>Gnome Magic: Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with a Charisma of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation, and speak with animals. The caster level for these effects is equal to the gnome`s level. The DC for these spells is equal to 10 + the spell`s level + the gnome`s Charisma modifier.</p><p>Hatred: Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes due to special training against these hated foes.</p><p>Illusion Resistance: Gnomes get a +2 racial saving throw bonus against illusion spells or effects.</p><p>Keen Senses: Gnomes receive a +2 racial bonus on Perception skill checks.</p><p>Obsessive: Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice.</p><p>Weapon Familiarity: Gnomes treat any weapon with the word “gnome” in its name as a martial weapon.</p><p>Languages: Gnomes begin play speaking Common, Gnome, and Sylvan. Gnomes with high Intelligence scores can choose from the following: Draconic, Dwarven, Elven, Giant, Goblin, and Orc.</p></section>');
        pageChange('chooseRace', '<button id="gnome" onclick="acceptCurrent(this.id)">Choose This Race</button>');
    }else if( races==='human'){
        pageChange('raceContainer', '<h1><a id="Human" onclick="acceptCurrent(this.id);">Human</a></h1>');
        pageChange('raceImage', '<div class="raceimage"><img src="http://imgur.com/rkcY065.jpg" alt="Human" class="human-race"></div>');    
        pageChange('raceDescription', '<section class="description"><p>Humans possess exceptional drive and a great capacity to endure and expand, and as such are currently the dominant race in the world. Their empires and nations are vast, sprawling things, and the citizens of these societies carve names for themselves with the strength of their sword arms and the power of their spells. Humanity is best characterized by its tumultuousness and diversity, and human cultures run the gamut from savage but honorable tribes to decadent, devil-worshiping noble families in the most cosmopolitan cities. Human curiosity and ambition often triumph over their predilection for a sedentary lifestyle, and many leave their homes to explore the innumerable forgotten corners of the world or lead mighty armies to conquer their neighbors, simply because they can.</p><p><strong>Physical Description:</strong> The physical characteristics of humans are as varied as the world`s climes. From the dark-skinned tribesmen of the southern continents to the pale and barbaric raiders of the northern lands, humans possess a wide variety of skin colors, body types, and facial features. Generally speaking, human` skin color assumes a darker hue the closer to the equator they live.</p><p><strong>Society:</strong> Human society comprises a multitude of governments, attitudes, and lifestyles. Though the oldest human cultures trace their histories thousands of years into the past, when compared to the societies of common races like elves and dwarves, human society seems to be in a state of constant flux as empires fragment and new kingdoms subsume the old. In general, humans are known for their flexibility, ingenuity, and ambition.</p><p><strong>Relations:</strong> Humans are fecund, and their drive and numbers often spur them into contact with other races during bouts of territorial expansion and colonization. In many cases, this leads to violence and war, yet humans are also swift to forgive and forge alliances with races who do not try to match or exceed them in violence. Proud, sometimes to the point of arrogance, humans might look upon dwarves as miserly drunkards, elves as flighty fops, halflings as craven thieves, gnomes as twisted maniacs, and half-elves and half-orcs as embarrassments—but the race`s diversity among its own members also makes humans quite adept at accepting others for what they are.</p><p><strong>Alignment and Religion:</strong> Humanity is perhaps the most heterogeneous of all the common races, with a capacity for great evil and boundless good. Some assemble into vast barbaric hordes, while others build sprawling cities that cover miles. Taken as a whole, most humans are neutral, yet they generally tend to congregate in nations and civilizations with specific alignments. Humans also have the widest range in gods and religion, lacking other race` ties to tradition and eager to turn to anyone offering them glory or protection.</p><p><strong>Adventurers:</strong> Ambition alone drives countless humans, and for many, adventuring serves as a means to an end, whether it be wealth, acclaim, social status, or arcane knowledge. A few pursue adventuring careers simply for the thrill of danger. Humans hail from myriad regions and backgrounds, and as such can fill any role within an adventuring party.</p><p><strong>Names:</strong> Unlike other races, who generally cleave to specific traditions and shared histories, humanity`s diversity has resulted in a near-infinite set of names. The humans of a northern barbarian tribe have much different names than those hailing from a subtropical nation of sailors and tradesmen. Throughout most of the world humans speak Common, yet their names are as varied as their beliefs and appearances.</p></section>' + '<section class="racial-traits"><p>+2 to One Ability Score: Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.</p><p>Medium: Humans are Medium creatures and have no bonuses or penalties due to their size.</p><p>Normal Speed: Humans have a base speed of 30 feet.</p><p>Bonus Feat: Humans select one extra feat at 1st level.</p><p>Skilled: Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.</p><p>Languages: Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).</p></section>');  
        pageChange('chooseRace', '<button id="human" onclick="acceptCurrent(this.id)">Choose This Race</button>');
    }
}

function classChange(theClass){
    if (theClass==='barbarian'){
        pageChange('classContainer', '<h1><a id="Barbarian" onclick="acceptCurrent(this.id);">Barbarian</a></h1>');
        pageChange('classImage', ' <div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/0/0b/Amiri.jpg/250px-Amiri.jpg" alt="Barbarian" class="barbarianClass"></div>');
        pageChange('classDescription', '<section class="description"><p>Barbarians use an inborn rage to gain power over their foes. Brutally strong, tough, and resourceful, a barbarian is to be feared in individual combat, even by the most highly trained of warriors.</p></section>');
        pageChange('chooseClass', '<button id="barbarian" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='bard'){
        pageChange('classContainer', '<h1><a id="Bard" onclick="acceptCurrent(this.id);">Bard</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/e/ef/Lem.jpg/250px-Lem.jpg" alt="Bard" class="bardClass"></div>');
        pageChange('classDescription', '<section class="description"><p>The nature of wanderlust can arise in any being, and so bards can be found anywhere, from anywhere. They never seem to escape their upbringing, and a bard usually has some distinctive trait that belies his or her heritage.</p></section>');
        pageChange('chooseClass', '<button id="bard" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='cleric'){
        pageChange('classContainer', '<h1><a id="Cleric" onclick="acceptCurrent(this.id);">Cleric</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/2/23/Kyra.jpg/250px-Kyra.jpg" alt="Cleric" class="clericClass"></div>');
        pageChange('classDescription', '<section class="description"><p>The call of adventure is a good way to spread word of ones faith, but is also a quick path to the grave. Most adventuring clerics are of good or neutral deities, seeking to combat evil or maliciousness wherever it arises. Evil clerics are more rare - a church founded on evil is rarely united, and chaotic evil churches even less so. Nonetheless, evil clerics are particularly feared, if only as portends of the actions of much greater evil.</p></section>');
        pageChange('chooseClass', '<button id="cleric" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='druid'){
        pageChange('classContainer', '<h1><a id="Druid" onclick="acceptCurrent(this.id);">Druid</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/2/21/Elf_druid.jpg/250px-Elf_druid.jpg" alt="Druid" class="druidClass"></div>');
        pageChange('classDescription', '<section class="description"><p>Druids generally are rare. The reclusive nature of most groves, along with the demanding and very introspective nature of their lives means very few beings are suited to the faith. Most druids avoid interaction with things outside of nature - politics, economics, and even organized religion are foreign concepts to most.</p></section>');
        pageChange('chooseClass', '<button id="druid" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='fighter'){
        pageChange('classContainer', '<h1><a id="Fighter" onclick="acceptCurrent(this.id);">Fighter</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/f/f8/Valeros.jpg/250px-Valeros.jpg" alt="Fighter" class="fighterClass"></div>');
        pageChange('classDescription', '<section class="description"><p>the fighter is more than just someone familiar with the arts of war. They are beyond the ken of simple sword-wielding soldiers, often (but not always) having attended military academies or private schools. They are tougher, more skilled, and better prepared to face their foe. Their experience or training makes them excellent commanders on the battlefield and in the garrison. Although the military life is a suitable one, available in all nations of the world, it is not the only one afforded a fighter, nor is it always the most elegant. A fighter might be a mercenary, gang-member, or simply an adventurer.</p></section>');
        pageChange('chooseClass', '<button id="fighter" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='monk'){
        pageChange('classContainer', '<h1><a id="Monk" onclick="acceptCurrent(this.id);">Monk</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/b/bf/Sajan.jpg/250px-Sajan.jpg" alt="Monk" class="monkClass"></div>');
        pageChange('classDescription', '<section class="description"><p>Monks more commonly learn from wandering masters—those who have seceded from their school, or have been sent to spread their teachings to the outside world. Each master carries with them a retinue of loyal apprentices—potential monks that learn habits of body and mind from their elder.</p></section>');
        pageChange('chooseClass', '<button id="monk" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='paladin'){
        pageChange('classContainer', '<h1><a id="Paladin" onclick="acceptCurrent(this.id);">Paladin</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/2/24/Seelah.jpg/250px-Seelah.jpg" alt="Paladin" class="paladinClass"></div>');
        pageChange('classDescription', '<section class="description"><p>A paladin`s primary goal is to convert the wicked—the evil and chaotic forces of the world and their servants. A paladin is bound both to do good and to uphold just law, though if forced into a choice a paladin will likely choose the cause of good. They focus most of their efforts on evil souls, and will attempt to convert before they resort to mortal combat.</p></section>');
        pageChange('chooseClass', '<button id="paladin" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='rogue'){
        pageChange('classContainer', '<h1><a id="Rogue" onclick="acceptCurrent(this.id);">Rogue</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/1/1f/Merisiel.jpg/250px-Merisiel.jpg" alt="Rogue" class="rogueClass"></div>');
        pageChange('classDescription', '<section class="description"><p>Thief, vagabond, scout, con man. These are just some of the terms that might refer to a rogue. They are the clever tricksters of the world, the consummate professional criminals, or even the highly trained informants and spies. Where fighters rely on their martial training, wizards on their mastery of arcane power, and clerics on the grace of their deity, the rogue relies on training of the body and mind to overcome obstacles. They are any combination of athletic, cunning, shifty, convincing, learned, and crafty. They augment their training with a precise working knowledge of anatomy: where to deliver a knock-out blow when the situation requires.</p></section>');
        pageChange('chooseClass', '<button id="rogue" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='ranger'){
        pageChange('classContainer', '<h1><a id="Ranger" onclick="acceptCurrent(this.id);">Ranger</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://cdn.obsidianportal.com/assets/66710/PZO901150_Shalelu.jpg" alt="Ranger" class="rangerClass"></div>');
        pageChange('classDescription', '<section class="description"><p>Rangers walk the line between warrior, hunter, and thief. Like the fighter, the ranger is a highly trained combatant, with skill wielding ranged weapons or using a weapon in each hand. Like the druid, the ranger has strong ties to the natural world, gaining the trust of animals, moving through the wild with ease, and eventually channeling the divine power of nature. Finally, like the rogue, the ranger has some ability in learning the skills necessary to survive in the world.</p></section>');
        pageChange('chooseClass', '<button id="ranger" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='sorcerer'){
        pageChange('classContainer', '<h1><a id="Sorcerer" onclick="acceptCurrent(this.id);">Sorcerer</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/2/2a/Seoni.jpg/250px-Seoni.jpg" alt="Sorcerer" class="sorcererClass"></div>');
        pageChange('classDescription', '<section class="description"><p>Where other arcane spellcasters gain power through study, research, and diligent practice, the sorcerer draws forth her astounding magical prowess from within herself. Regardless of the source of her arcane bloodline—a deity`s special favor, a powerful magical lineage, a celestial or horrifying progenitor, or simply the whim of fate or a quirk in the magical weave—the sorcerer is the product of an innate and unbreakable connection to the arcane that other spellcasters must devote their lives to mastering.</p></section>');
        pageChange('chooseClass', '<button id="sorcerer" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }else if(theClass==='wizard'){
        pageChange('classContainer', '<h1><a id="Wizard" onclick="acceptCurrent(this.id);">Wizard</a></h1>');
        pageChange('classImage', '<div class="classimage"><img src="http://pathfinderwiki.com/mediawiki/images/thumb/8/80/Conjurer.jpg/250px-Conjurer.jpg" alt="Wizard" class="wizardClass"></div>');
        pageChange('classDescription', '<section class="description"><p>Whether poring over arcane tomes in ancient libraries, traveling in search of spells and artifacts, or holed up in fantastical laboratories researching new applications of magical power, wizards are characterized above all by their endless pursuit of ever more—and ever more powerful—magical knowledge. Whether the wizard seeks such knowledge for its own sake, or as a means to greater fame, wealth, or power, the acquisition of new arcana is the wizard`s most compelling goal.</p></section>');
        pageChange('chooseClass', '<button id="wizard" onclick="acceptCurrent(this.id)">Choose This Class</button>')
    }
}
//end Race Page



//roller Page
function isMethod() {
    var threedsix, fourdsix, fivedsix, pointbuy;
    var selMethod = document.getElementById("actualDropMenu");
    var selString = selMethod.options[selMethod.selectedIndex].text;
    if (selString == '3d6') {
        return threedsix;
    }
    else if(selString == 'Best of 4') {
        return fourdsix;
    }
    else if(selString == 'Best of 5') {
        return fivedsix;
    }
    else if(selString == 'Point Buy') {
        return pointbuy;
    }
}

function changeMethod() {
    if (document.getElementById("actualDropMenu").value == "3d6") {
        document.getElementById("rollScoresButton").style.display="";
        document.getElementById("rollScoresButton").onclick = function() {
            rollAbilities3d6();
        };
        $("[id=pbInfo]").hide();
    }
    if (document.getElementById("actualDropMenu").value == "4d6") {
        document.getElementById("rollScoresButton").style.display="";
        document.getElementById("rollScoresButton").onclick = function() {
            rollAbilities4d6();
        };
        $("[id=pbInfo]").hide();
    }
    if (document.getElementById("actualDropMenu").value == "5d6") {
        document.getElementById("rollScoresButton").style.display="";
        document.getElementById("rollScoresButton").onclick = function() {
            rollAbilities5d6();
        };
        $("[id=pbInfo]").hide();
    }
    if (document.getElementById("actualDropMenu").value == "pb") {
        document.getElementById("rollScoresButton").style.display="none";
        $("[id=pbInfo]").show();
    }
}

function rollDice(diceNum, diceVal) {
    rollCount = 0;
    for (i = 0; i < diceNum; i++) {
        roll = Math.floor (diceVal*Math.random() + 1);
        rollCount = rollCount + roll;
    }
    return rollCount;
}

function populateAbilityFields(RT1, RT2, RT3, RT4, RT5, RT6) {
    console.log(RT1, RT2, RT3, RT4, RT5, RT6);
    document.getElementById("strScore").value=RT1;
    document.getElementById("dexScore").value=RT2;
    document.getElementById("conScore").value=RT3;
    document.getElementById("wisScore").value=RT4;
    document.getElementById("intScore").value=RT5;
    document.getElementById("chaScore").value=RT6;
    document.getElementById("strScore2").value=Math.floor((RT1-10)/2);
    document.getElementById("dexScore2").value=Math.floor((RT2-10)/2);
    document.getElementById("conScore2").value=Math.floor((RT3-10)/2);
    document.getElementById("wisScore2").value=Math.floor((RT4-10)/2);
    document.getElementById("intScore2").value=Math.floor((RT5-10)/2);
    document.getElementById("chaScore2").value=Math.floor((RT6-10)/2);
}

function rollAbilities3d6() {
    RT1 = rollDice(3,6);
    RT2 = rollDice(3,6);
    RT3 = rollDice(3,6);
    RT4 = rollDice(3,6);
    RT5 = rollDice(3,6);
    RT6 = rollDice(3,6);
    populateAbilityFields(RT1, RT2, RT3, RT4, RT5, RT6);
    console.log("I rolled 3d6");
}

function rollAbilities4d6() {
    function rollAbilities_4d6drop() {
        d1 = rollDice(1,6);
        d2 = rollDice(1,6);
        d3 = rollDice(1,6);
        d4 = rollDice(1,6);
        if ((d1<=d2) && (d1<=d3) && (d1<= d4)) {
            return d2 + d3 + d4;
        }
        else if ((d2<=d1) && (d2<=d3) && (d2<= d4)) {
            return d1 + d3 + d4;
        }
        else if ((d3<=d1) && (d3<=d2) && (d3<= d4)) {
            return d1 + d2 + d4;
        }
        else {
            return d1 + d2 + d3;
        }
    }
    RT1 = rollAbilities_4d6drop();
    RT2 = rollAbilities_4d6drop();
    RT3 = rollAbilities_4d6drop();
    RT4 = rollAbilities_4d6drop();
    RT5 = rollAbilities_4d6drop();
    RT6 = rollAbilities_4d6drop();
    populateAbilityFields(RT1, RT2, RT3, RT4, RT5, RT6);
    console.log("I rolled 4d6 drop 1");
}

function rollAbilities5d6() {
    function rollAbilities_5d6drop() {
        d1 = rollDice(1,6);
        d2 = rollDice(1,6);
        d3 = rollDice(1,6);
        d4 = rollDice(1,6);
        d5 = rollDice(1,6);
        if (d2>d1){x=d2; d2=d1; d1=x; }
        if (d3>d2){x=d3; d3=d2; d2=x; }
        if (d4>d3){x=d4; d4=d3; d3=x; }
        if (d5>d4){x=d5; d5=d4; d4=x; }
        if (d2>d1){x=d2; d2=d1; d1=x; }
        if (d3>d2){x=d3; d3=d2; d2=x; }
        if (d4>d3){x=d4; d4=d3; d3=x; }
        if (d5>d4){x=d5; d5=d4; d4=x; }
        if (d2>d1){x=d2; d2=d1; d1=x; }
        if (d3>d2){x=d3; d3=d2; d2=x; }
        if (d4>d3){x=d4; d4=d3; d3=x; }
        if (d5>d4){x=d5; d5=d4; d4=x; }
        if (d2>d1){x=d2; d2=d1; d1=x; }
        if (d3>d2){x=d3; d3=d2; d2=x; }
        if (d4>d3){x=d4; d4=d3; d3=x; }
        if (d5>d4){x=d5; d5=d4; d4=x; }

        return d1 + d2 + d3;
    }
    RT1 = rollAbilities_5d6drop();
    RT2 = rollAbilities_5d6drop();
    RT3 = rollAbilities_5d6drop();
    RT4 = rollAbilities_5d6drop();
    RT5 = rollAbilities_5d6drop();
    RT6 = rollAbilities_5d6drop();
    populateAbilityFields(RT1, RT2, RT3, RT4, RT5, RT6);
    console.log("I rolled 5d6 drop 2");            
}

function resetScores() {
    document.getElementById("pbInfo").value=28;
    document.getElementById("strScore").value=10;
    document.getElementById("dexScore").value=10;
    document.getElementById("conScore").value=10;
    document.getElementById("wisScore").value=10;
    document.getElementById("intScore").value=10;
    document.getElementById("chaScore").value=10;
    document.getElementById("strScore2").value=0;
    document.getElementById("dexScore2").value=0;
    document.getElementById("conScore2").value=0;
    document.getElementById("wisScore2").value=0;
    document.getElementById("intScore2").value=0;
    document.getElementById("chaScore2").value=0;
}

function abilityDown(event) {
    id = event.currentTarget.id;
    stat = document.getElementById(id).value;
    stat = stat - 1;
    document.getElementById(id).value=stat;
    
        id = id + 2;
        stat = Math.floor((stat-10)/2);
        document.getElementById(id).value=stat;
    
    if (pointNum = document.getElementById(id).name != "pointField") {
        pointNum = document.getElementById("pbInfo").value;
        pointNum = pointNum - (-1);
        document.getElementById("pbInfo").value = pointNum;
    }
}

function abilityUp(event) {
    id = event.currentTarget.id;
    stat = document.getElementById(id).value;
    var x = -1;
    stat = stat - x;
    document.getElementById(id).value=stat;
    
        id = id + 2;
        stat = Math.floor((stat-10)/2);
        document.getElementById(id).value=stat;
    
    if (pointNum = document.getElementById(id).name != "pointField") {
        pointNum = document.getElementById("pbInfo").value;
        pointNum = pointNum -1;
        document.getElementById("pbInfo").value = pointNum;
    }
}

function saveAbilityCookies() {
    var scoreField1 = document.getElementById("selectScore1").value;
    var scoreField2 = document.getElementById("selectScore2").value;
    var scoreField3 = document.getElementById("selectScore3").value;
    var scoreField4 = document.getElementById("selectScore4").value;
    var scoreField5 = document.getElementById("selectScore5").value;
    var scoreField6 = document.getElementById("selectScore6").value;
    var arr = [scoreField1, scoreField2, scoreField3, scoreField4, scoreField5, scoreField6];
    for (var i = 0; i < arr.length; i++) {
        var a = arr.lastIndexOf(arr[i]);
        if (arr[i] == " ") {
            alert("Error: you are missing an ability score field");
        }
        else if(a != i) {
            alert("Error: you have two " + arr[i] + " score entries");
        }
    }
    var score1 = document.getElementById("strScore").value;
    var score2 = document.getElementById("dexScore").value;
    var score3 = document.getElementById("conScore").value;
    var score4 = document.getElementById("wisScore").value;
    var score5 = document.getElementById("intScore").value;
    var score6 = document.getElementById("chaScore").value;
    createCookie(scoreField1, score1, 7);
    createCookie(scoreField2, score2, 7);
    createCookie(scoreField3, score3, 7);
    createCookie(scoreField4, score4, 7);
    createCookie(scoreField5, score5, 7);
    createCookie(scoreField6, score6, 7);
}
//end Roller Page

//start Skills Page
var skillPoints;
function setMods() {
    dex = readCookie('dex');
    str = readCookie('str');
    intel = readCookie('int');
    wis = readCookie('wis');
    cha = readCookie('cha');
    dex = Math.floor((dex-10)/2);
    str = Math.floor((str-10)/2);
    intel = Math.floor((intel-10)/2);
    wis= Math.floor((wis-10)/2);
    cha = Math.floor((cha-10)/2);
    document.getElementById("skill01"  ).value = 0;
    document.getElementById("skill02"  ).value = 0;
    document.getElementById("skill03"  ).value = 0;
    document.getElementById("skill04"  ).value = 0;
    document.getElementById("skill05"  ).value = 0;
    document.getElementById("skill06"  ).value = 0;
    document.getElementById("skill07"  ).value = 0;
    document.getElementById("skill08"  ).value = 0;
    document.getElementById("skill09"  ).value = 0;
    document.getElementById("skill10"  ).value = 0;
    document.getElementById("skill11"  ).value = 0;
    document.getElementById("skill12" ).value = 0;
    document.getElementById("skill13" ).value = 0;
    document.getElementById("skill14" ).value = 0;
    document.getElementById("skill15" ).value = 0;
    document.getElementById("skill16" ).value = 0;
    document.getElementById("skill17" ).value = 0;
    document.getElementById("skill18" ).value = 0;
    document.getElementById("skill19" ).value = 0;
    document.getElementById("skill20" ).value = 0;
    document.getElementById("skill21" ).value = 0;
    document.getElementById("skill22" ).value = 0;
    document.getElementById("skill23" ).value = 0;
    document.getElementById("skill24" ).value = 0;
    document.getElementById("skill25" ).value = 0;
    document.getElementById("skill26" ).value = 0;
    document.getElementById("skill27" ).value = 0;
    document.getElementById("skill28" ).value = 0;
    document.getElementById("skill29" ).value = 0;
    document.getElementById("skill30" ).value = 0;
    document.getElementById("skill31" ).value = 0;
    document.getElementById("skill32" ).value = 0;
    document.getElementById("skill33" ).value = 0;
    document.getElementById("skill34" ).value = 0;
    document.getElementById("skill35" ).value = 0;
    for(i=0;i<7;i++){
        document.getElementsByClassName("dexMod")[i].innerHTML = dex;
    }
    for(i=0;i<2;i++){
        document.getElementsByClassName("strMod")[i].innerHTML = str;
    }
    for(i=0;i<14;i++){
        document.getElementsByClassName("intMod")[i].innerHTML = intel;
    }
    for(i=0;i<5;i++){
        document.getElementsByClassName("wisMod")[i].innerHTML = wis;
    }
    for(i=0;i<7;i++){
        document.getElementsByClassName("chaMod")[i].innerHTML = cha;
    }
    if (readCookie('Races') == 'dwarf') {
        document.getElementById("skill02Bonus").innerHTML = '2';
        document.getElementById("skill25Bonus").innerHTML = '2';
    }
    if (readCookie('Races') == 'elf') {
        document.getElementById("skill25Bonus").innerHTML = '2';
        document.getElementById("skill31Bonus").innerHTML = '2';
    }
    if (readCookie('Races') == 'gnome') {
        document.getElementById("skill25Bonus").innerHTML = '2';
        document.getElementById("skill05Bonus").innerHTML = '2';
    }
    if (readCookie('Races') == 'halfElf') {
        document.getElementById("skill25Bonus").innerHTML = '2';
    }
    if (readCookie('Races') == 'halfOrc') {
        document.getElementById("skill13Bonus").innerHTML = '2';
    }
    if (readCookie('Races') == 'halfling') {
        document.getElementById("skill01Bonus").innerHTML = '2';
        document.getElementById("skill04Bonus").innerHTML = '2';
    }
    if (readCookie('Classes') == 'barbarian') {
        document.getElementById('ranksPerLevel').innerHTML = '4';
        skillPoints= 4 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill01Box').checked="checked";
        document.getElementById('skill04Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill11Box').checked="checked";
        document.getElementById('skill13Box').checked="checked";
        document.getElementById('skill20Box').checked="checked";
        document.getElementById('skill25Box').checked="checked";
        document.getElementById('skill28Box').checked="checked";
        document.getElementById('skill33Box').checked="checked";
        document.getElementById('skill34Box').checked="checked";
    }
    if (readCookie('Classes') == 'bard') {
        document.getElementById('ranksPerLevel').innerHTML = '6';
        skillPoints= 6 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill01Box').checked="checked";
        document.getElementById('skill02Box').checked="checked";
        document.getElementById('skill03Box').checked="checked";
        document.getElementById('skill04Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill06Box').checked="checked";
        document.getElementById('skill08Box').checked="checked";
        document.getElementById('skill09Box').checked="checked";
        document.getElementById('skill13Box').checked="checked";
        document.getElementById('skill14Box').checked="checked";
        document.getElementById('skill15Box').checked="checked";
        document.getElementById('skill16Box').checked="checked";
        document.getElementById('skill17Box').checked="checked";
        document.getElementById('skill18Box').checked="checked";
        document.getElementById('skill19Box').checked="checked";
        document.getElementById('skill20Box').checked="checked";
        document.getElementById('skill21Box').checked="checked";
        document.getElementById('skill22Box').checked="checked";
        document.getElementById('skill23Box').checked="checked";
        document.getElementById('skill24Box').checked="checked";
        document.getElementById('skill25Box').checked="checked";
        document.getElementById('skill26Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill29Box').checked="checked";
        document.getElementById('skill30Box').checked="checked";
        document.getElementById('skill31Box').checked="checked";
        document.getElementById('skill32Box').checked="checked";
        document.getElementById('skill35Box').checked="checked";
    }
    if (readCookie('Classes') == 'cleric') {
        document.getElementById('ranksPerLevel').innerHTML = '2';
        skillPoints= 2 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill02Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill06Box').checked="checked";
        document.getElementById('skill12Box').checked="checked";
        document.getElementById('skill14Box').checked="checked";
        document.getElementById('skill18Box').checked="checked";
        document.getElementById('skill21Box').checked="checked";
        document.getElementById('skill22Box').checked="checked";
        document.getElementById('skill23Box').checked="checked";
        document.getElementById('skill24Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill29Box').checked="checked";
        document.getElementById('skill31Box').checked="checked";
    }
    if (readCookie('Classes') == 'druid') {
        document.getElementById('ranksPerLevel').innerHTML = '4';
        skillPoints= 4 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill04Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill10Box').checked="checked";
        document.getElementById('skill11Box').checked="checked";
        document.getElementById('skill12Box').checked="checked";
        document.getElementById('skill17Box').checked="checked";
        document.getElementById('skill20Box').checked="checked";
        document.getElementById('skill25Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill28Box').checked="checked";
        document.getElementById('skill31Box').checked="checked";
        document.getElementById('skill33Box').checked="checked";
        document.getElementById('skill34Box').checked="checked";
    }
    if (readCookie('Classes') == 'fighter') {
        document.getElementById('ranksPerLevel').innerHTML = '2';
        skillPoints= 2 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill04Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill11Box').checked="checked";
        document.getElementById('skill13Box').checked="checked";
        document.getElementById('skill15Box').checked="checked";
        document.getElementById('skill16Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill28Box').checked="checked";
        document.getElementById('skill33Box').checked="checked";
        document.getElementById('skill34Box').checked="checked";
    }
    if (readCookie('Classes') == 'monk') {
        document.getElementById('ranksPerLevel').innerHTML = '4';
        skillPoints= 4 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill01Box').checked="checked";
        document.getElementById('skill04Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill09Box').checked="checked";
        document.getElementById('skill13Box').checked="checked";
        document.getElementById('skill18Box').checked="checked";
        document.getElementById('skill23Box').checked="checked";
        document.getElementById('skill25Box').checked="checked";
        document.getElementById('skill26Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill28Box').checked="checked";
        document.getElementById('skill29Box').checked="checked";
        document.getElementById('skill32Box').checked="checked";
        document.getElementById('skill34Box').checked="checked";
    }
    if (readCookie('Classes') == 'paladin') {
        document.getElementById('ranksPerLevel').innerHTML = '2';
        skillPoints= 2 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill06Box').checked="checked";
        document.getElementById('skill11Box').checked="checked";
        document.getElementById('skill12Box').checked="checked";
        document.getElementById('skill21Box').checked="checked";
        document.getElementById('skill23Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill28Box').checked="checked";
        document.getElementById('skill29Box').checked="checked";
        document.getElementById('skill31Box').checked="checked";
    }
    if (readCookie('Classes') == 'ranger') {
        document.getElementById('ranksPerLevel').innerHTML = '6';
        skillPoints= 6 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill04Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill11Box').checked="checked";
        document.getElementById('skill12Box').checked="checked";
        document.getElementById('skill13Box').checked="checked";
        document.getElementById('skill15Box').checked="checked";
        document.getElementById('skill17Box').checked="checked";
        document.getElementById('skill20Box').checked="checked";
        document.getElementById('skill25Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill28Box').checked="checked";
        document.getElementById('skill31Box').checked="checked";
        document.getElementById('skill32Box').checked="checked";
        document.getElementById('skill33Box').checked="checked";
        document.getElementById('skill34Box').checked="checked";
    }
    if (readCookie('Classes') == 'rogue') {
        document.getElementById('ranksPerLevel').innerHTML = '8';
        skillPoints= 8 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill01Box').checked="checked";
        document.getElementById('skill02Box').checked="checked";
        document.getElementById('skill03Box').checked="checked";
        document.getElementById('skill04Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill06Box').checked="checked";
        document.getElementById('skill07Box').checked="checked";
        document.getElementById('skill08Box').checked="checked";
        document.getElementById('skill09Box').checked="checked";
        document.getElementById('skill13Box').checked="checked";
        document.getElementById('skill15Box').checked="checked";
        document.getElementById('skill19Box').checked="checked";
        document.getElementById('skill24Box').checked="checked";
        document.getElementById('skill25Box').checked="checked";
        document.getElementById('skill26Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill29Box').checked="checked";
        document.getElementById('skill30Box').checked="checked";
        document.getElementById('skill32Box').checked="checked";
        document.getElementById('skill34Box').checked="checked";
        document.getElementById('skill35Box').checked="checked";
    }
    if (readCookie('Classes') == 'sorcerer') {
        document.getElementById('ranksPerLevel').innerHTML = '2';
        skillPoints= 2 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill02Box').checked="checked";
        document.getElementById('skill03Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill10Box').checked="checked";
        document.getElementById('skill13Box').checked="checked";
        document.getElementById('skill14Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill31Box').checked="checked";
        document.getElementById('skill35Box').checked="checked";
    }
    if (readCookie('Classes') == 'wizard') {
        document.getElementById('ranksPerLevel').innerHTML = '2';
        skillPoints= 2 + intel;
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        document.getElementById('skill01Box').checked="checked";
        document.getElementById('skill05Box').checked="checked";
        document.getElementById('skill10Box').checked="checked";
        document.getElementById('skill14Box').checked="checked";
        document.getElementById('skill15Box').checked="checked";
        document.getElementById('skill16Box').checked="checked";
        document.getElementById('skill17Box').checked="checked";
        document.getElementById('skill18Box').checked="checked";
        document.getElementById('skill19Box').checked="checked";
        document.getElementById('skill20Box').checked="checked";
        document.getElementById('skill21Box').checked="checked";
        document.getElementById('skill22Box').checked="checked";
        document.getElementById('skill23Box').checked="checked";
        document.getElementById('skill24Box').checked="checked";
        document.getElementById('skill27Box').checked="checked";
        document.getElementById('skill31Box').checked="checked";
    }

    for(i=1;i<=9;i++){
        var totalMod = 0;
        if (document.getElementById('skill0' + i + 'Bonus').innerHTML != '0') {
            miscBonus = document.getElementById('skill0' + i + 'Bonus').innerHTML;
            parseInt(miscBonus);
            totalMod = totalMod - (-miscBonus);
        }
        if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'D') {
            totalMod += dex;
        }
        else if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'I') {
            totalMod += intel;
        }
        else if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'C') {
            totalMod += cha;
        }
        else if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'S') {
            totalMod += str;
        }
        else if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'W') {
            totalMod += wis;
        }
        document.getElementById('skill0' + i + 'Mod').innerHTML = totalMod;
    }
    for(i=10;i<=35;i++){
        var totalMod = 0;
        if (document.getElementById('skill' + i + 'Bonus').innerHTML != '0') {
            miscBonus = document.getElementById('skill' + i + 'Bonus').innerHTML;
            parseInt(miscBonus);
            totalMod = totalMod - (-miscBonus);
        }
        if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'D') {
            totalMod += dex;
        }
        else if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'I') {
            totalMod += intel;
        }
        else if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'C') {
            totalMod += cha;
        }
        else if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'S') {
            totalMod += str;
        }
        else if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'W') {
            totalMod += wis;
        }
        document.getElementById('skill' + i + 'Mod').innerHTML = totalMod;
    }

}

function skillDown(event) {
    dex = readCookie('dex');
    str = readCookie('str');
    intel = readCookie('int');
    wis = readCookie('wis');
    cha = readCookie('cha');
    dex = Math.floor((dex-10)/2);
    str = Math.floor((str-10)/2);
    intel = Math.floor((intel-10)/2);
    wis= Math.floor((wis-10)/2);
    cha = Math.floor((cha-10)/2);

    value = document.getElementById(event.currentTarget.id).value
    value = value - 1;
    if (value < 0) {
        alert("You may not have negative ranks");
    }
    else {
        document.getElementById(event.currentTarget.id).value = value;
        skillPoints = skillPoints - (-1);
        document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
        totalMod = parseInt(document.getElementById(event.currentTarget.id + 'Mod').innerHTML);
        if (document.getElementById(event.currentTarget.id + 'Box').checked) {
            totalMod = totalMod - 3;
        }
        else {
            totalMod = totalMod - 1;
        }
        document.getElementById(event.currentTarget.id + 'Mod').innerHTML=totalMod;
    }
}

function skillUp(event) {
    dex = readCookie('dex');
    str = readCookie('str');
    intel = readCookie('int');
    wis = readCookie('wis');
    cha = readCookie('cha');
    dex = Math.floor((dex-10)/2);
    str = Math.floor((str-10)/2);
    intel = Math.floor((intel-10)/2);
    wis= Math.floor((wis-10)/2);
    cha = Math.floor((cha-10)/2);

    if (skillPoints > 0) {
        value = document.getElementById(event.currentTarget.id).value
        value = value - (-1);
        if (value > 1) {
            alert("You may only have 1 rank in a skill at level 1");
        }
        else {
            document.getElementById(event.currentTarget.id).value = value;
            skillPoints = skillPoints - 1;
            document.getElementById('numberOfSkillPoints').innerHTML = skillPoints;
            totalMod = parseInt(document.getElementById(event.currentTarget.id + 'Mod').innerHTML);
        if (document.getElementById(event.currentTarget.id + 'Box').checked) {
            totalMod = totalMod - (-3);
        }
        else {
            totalMod = totalMod - (-1);
        }
            document.getElementById(event.currentTarget.id + 'Mod').innerHTML=totalMod;
        }
    }
    else {
        alert("You have no remaining skill points");
    }
}

function saveSkillCookies() {
    var skillList = "<table><tr><td>Ability Name</td><td>Rank</td><td>Trained</td><td>Ability Modifier</td><td>Total Modifier</td><td>Temp</td></tr>";
    for (i=1;i<=9;i++) {
        skillList +="<tr>";
        skillName = document.getElementById('skill0' + i + 'Name').innerHTML;
        skillRank = document.getElementById('skill0' + i).value;
        if (document.getElementById('skill0' + i + 'Box').checked) {
            skillTrained = "<input type='checkbox' checked readonly>";
        }
        else {
            skillTrained = "<input type='checkbox' readonly>";
        }
        if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'D') {
            abilityMod = readCookie('dex');
        }
        else if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'I') {
            abilityMod = readCookie('int');
        }
        else if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'C') {
            abilityMod = readCookie('cha');
        }
        else if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'S') {
            abilityMod = readCookie('str');
        }
        else if (document.getElementById('skill0' + i + 'Ability').innerHTML[0] == 'W') {
            abilityMod = readCookie('wis');
        }
        skillMod = document.getElementById('skill0' + i + 'Mod').innerHTML;
        skillList +="<td>" + skillName + "</td><td>" + skillRank + "</td><td>" + skillTrained + "</td><td>" + abilityMod + "</td><td>" + skillMod + "</td><td>____</td></tr>";
    }
    for (i=10;i<=34;i++) {
        skillList +="<tr>";
        skillName = document.getElementById('skill' + i + 'Name').innerHTML;
        skillRank = document.getElementById('skill' + i).value;
        if (document.getElementById('skill' + i + 'Box').checked) {
            skillTrained = "<input type='checkbox' checked readonly>";
        }
        else {
            skillTrained = "<input type='checkbox' readonly>";
        }
        if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'D') {
            abilityMod = readCookie('dex');
        }
        else if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'I') {
            abilityMod = readCookie('int');
        }
        else if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'C') {
            abilityMod = readCookie('cha');
        }
        else if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'S') {
            abilityMod = readCookie('str');
        }
        else if (document.getElementById('skill' + i + 'Ability').innerHTML[0] == 'W') {
            abilityMod = readCookie('wis');
        }
        skillMod = document.getElementById('skill' + i + 'Mod').innerHTML;
        skillList +="<td>" + skillName + "</td><td>" + skillRank + "</td><td>" + skillTrained + "</td><td>" + abilityMod + "</td><td>" + skillMod + "</td><td>____</td></tr>";
    }
    skillList += "</table>";
    console.log(skillList);
    createCookie('Skills', skillList, 7);
}
