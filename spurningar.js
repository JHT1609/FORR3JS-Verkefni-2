//1.Afhverju er getElementById() fljótleglegasta aðferðin?
//*ID af element mun alltaf vera einstakt. Þú getur alltaf fundið rétta element með gefnu nafni þeirra

//2.Hver er munurinn á static og live NodeList?
//*Live NodeList breytast með dom-inu. Static breytast ekki.

//3.Hver er munurinn á true og false í AddEventListener?
//*True mun aldrei kalla á preventDefault event. False mun kalla á preventDefault og mun bara senda console warning

//4.this vísar í Event listener á html element en ekki á object. Þú getur notað bind() til að breyta því. Leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console “My name is Sam“ en ekki undefined.
var Person = {
    name: 'Sam',
    sayName: function(){   
       console.log('My name is '+ this.name);  
    }
};

var boundSayName = Person.sayName.bind(Person);
console.log(boundSayName());

//