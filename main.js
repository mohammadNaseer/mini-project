 function each(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }
 //mohammad naseer
function makeMovie(name,rating,year,info,duration,imgLink){
	return {
		name : name,
		rating : rating,
		year : year,
		info : info,
		duration : duration,
		imgLink : imgLink
	}
}
var theEqualizer =makeMovie("The Equalizer",7.2,2014,"A man believes he has put his mysterious past behind him and has dedicated himself to beginning a new, quiet life. But when he meets a young girl under the control of ultra-violent Russian gangsters, he can't stand idly by - he has to help her.", 132, "equalizer.jpg" )
var madMax = makeMovie("Mad Max: Fury Road",8.1,2015,"A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.",120,"madmax.jpg")
var dunkirk = makeMovie("Dunkirk",8.5,2017,"Allied soldiers from Belgium, the British Empire and France are surrounded by the German army and evacuated during a fierce battle in World War II. ",106,"dunkirk.jpg")
var logan = makeMovie("Logan",8.2,2017,"In the near future, a weary Logan cares for an ailing Professor X, somewhere on the Mexican border. However, Logan's attempts to hide from the world, and his legacy, are upended when a young mutant arrives, pursued by dark forces.",137,"logan.jpg")
var stepBrothers = makeMovie("Step Brothers",6.9,2008,"Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",98,"stepbrothers.jpg")
var spiderMan = makeMovie("Spider-Man: Homecoming",7.9,2017,"Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in New York City while fighting crime as his superhero alter ego Spider-Man when a new threat emerges.",133,"spiderman.jpg")
var inception = makeMovie("Inception",8.8,2010,"A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",148,"inception.jpg")
var wonderWoman = makeMovie("Wonder Woman",7.9,2017,"Before she was Wonder Woman, she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war, discovering her full powers and true destiny.",141,"wonderwoman.jpg")
var babyDriver = makeMovie("Baby Driver",8.2,2017,"After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail. ",112,"babydriver.jpg")
var atomicBlonde = makeMovie("Atomic Blonde",7.1,2017,"An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.",115,"atomicblonde.jpg")
var rogueOne = makeMovie("Rogue One",7.9,2016,"The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.",133,"rogueone.jpg")
var whiteChicks =makeMovie("White Chicks",5.5,2004,"Two disgraced FBI agents go way undercover in an effort to protect hotel heiresses the Wilson Sisters from a kidnapping plot. ",109,"whitechicks.jpg")
var theHangOver = makeMovie("The Hangover",7.8,2009,"Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",100,"thehangover.jpg")
var horribleBosses = makeMovie("Horrible Bosses",6.9,2011,"Three friends conspire to murder their awful bosses when they realize they are standing in the way of their happiness.",98,"horriblebosses.jpg")
var drillbitTaylor = makeMovie("Drillbit Taylor",5.7,2008,"Three kids hire a low-budget bodyguard to protect them from the playground bully. ",110,"drillbittaylor.jpg")
var weddingCrashers = makeMovie("Wedding Crashers",7,2005,"John Beckwith and Jeremy Grey, a pair of committed womanizers who sneak into weddings to take advantage of the romantic tinge in the air, find themselves at odds with one another when John meets and falls for Claire Cleary.",119,"weddingcrashers.jpg")
var badTeacher = makeMovie("Bad Teacher",5.7,2011,"A lazy, incompetent middle school teacher who hates her job, her students, and her co-workers is forced to return to teaching to make enough money for breast implants after her wealthy fiancé dumps her.",92,"badteacher.jpg")
var theOtherGuys = makeMovie("The Other Guys",6.7,2010,"Two mismatched New York City detectives seize an opportunity to step up like the city's top cops whom they idolize -- only things don't quite go as planned.",107,"theotherguys.jpg")
var dueDate = makeMovie("Due Date",6.6,2010,"High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time.",95,"duedate.jpg")
var taxi = makeMovie("Taxi",4.4,2004,"A mouthy and feisty taxicab driver has hot tips for a green and inept cop set on solving a string of New York City bank robberies committed by a quartet of female Brazilian bank robbers.",97,"taxi.jpg")

var action = [theEqualizer,madMax,dunkirk,logan,spiderMan,inception,wonderWoman,babyDriver,atomicBlonde,rogueOne]
var comedy = [stepBrothers,whiteChicks,theHangOver,horribleBosses,drillbitTaylor,weddingCrashers,badTeacher,theOtherGuys,dueDate,taxi]

