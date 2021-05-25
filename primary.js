let searchBar = document.getElementById("search")
let suggs = document.getElementById("suggestions")
let result = document.getElementById("result")
let searchForm = document.getElementById("searchForm")

searchForm.addEventListener('submit', function(){
	let resultFound = false
	for (let i = 0; i < BDSList.length; i++) {
		if (BDSList[i].toLowerCase() === searchBar.value.toLowerCase()){
			resultFound = true
			result.innerHTML = "<b>" + BDSList[i] + "</b> should be boycotted for supporting Israel."
		}
	}
	if (!resultFound){
		result.innerHTML = "<b>" + searchBar.value + "</b> is either mispelled, not in our database, or it is all clear."
	}
	event.preventDefault()
})

searchBar.addEventListener("input", function(e) {
	let curSearch = this.value;
	if (!curSearch) {return}
	let suggestions = []
	for (let i = 0; i < BDSList.length; i++) {
		if (BDSList[i].substr(0, curSearch.length).toLowerCase() == curSearch.toLowerCase()) {
			suggestions.push(BDSList[i])
		}
	}
	suggs.innerHTML = ""
	for (let i = 0; i < suggestions.length; i++) {
		suggs.innerHTML += suggestions[i] + "?<br>"
	}
});

/*BDSList = {
	// agriculture
	AfiMilk: {},
	"Agro-Shelef": {},
	Allflex: {},
	Algatech: {},
	"Aqua Moaf": {},
	Beeologics: {},
	BioBee: {},
	Evogene: {},
	"Hazera Genetics": {},
	Kaiima: {},
	miRobots: {},
	Monsanto: {},
	Netafim: {},
	Rootility: {},
	"Rosetta Green": {}
}*/

BDSList = ["SodaStream", "Lees Carpets", "Keter Plastics", "Caesaria Carpets", "Mapal Plastics", 
"Carmel Carpets", "Palphot Stationery", "Shaked Carpets", "Brooklinen Bedding", "AMAV toys", "Tiny Love",
"Taf Toys", "Tip Top Toys Star", "Interstar", "Halilit", "Edushape", "Ofrat Baby Toys", "Ahava", "Dead Sea", "-417",
"Vivo", "Nevo", "Sea Spa", "Sea of Spa", "Moroccanoil", "Sabon", "Mogador", "The Body Shop", "L’OREAL",	"Desheli",
"Teva Pharmaceuticals", "Lithotech Medical", "Eden Water", "Osem", "Sabra Dipping Co", "Habait", "Abadi Bakery",
"Adanim Tea Co", "Ahdut Sweets", "Almog Tradex", "Psagot Winery", "Shamir Salads", "Teperberg 1870", 
"Tishbi Estate Winery", "Yarden", "Strauss Group", "Max Brenner", "Carmel Winery", "Barkan Winery", 
"Binyamina Winery", "Golan Heights Winery", "Tempo Beer Industries", "Aroma Nama", "Pastures of Eden Feta",
"B&W Foods", "Tribe Hummus", "Mehadrin", "Carmel-Agrexco", "Tivall", "Arava", "Aluma",
"Ada Fresh", "Arava", "Eitan & Inon Herbs", "Hadiklaim", "Jordan River", "King Solomon", "Morten Export",
"Tamar Hazahad", "Tekoa Mushroom", "Stanley Black & Decker", "Lipski", "Alibert", "Curver", "Jardin",
"Contico", "Zag", "Delta Galil Industries", "Home Skinovations", "Sabon", "Israeli diamonds", "Castro", "Victoria’s Secret",
"MyHeritage.com", "AirBnB", "WIX.com", "DeviantArt", "Viber", "Tescom Software Testing Systems", "AFCON Control & Automation",
"Contel ITS", "Maran Engineering", "Amimon", "Bar Ilan University", "Perion Network", "Conduit", "Discount Bank",
"Arison", "Hamashbir Holdings", "Hapoalim Bank", "Gemini Israel Ventures", "Landmark Ventures", "Leumi Bank",
"Mizrahi Tefahot Bank", "B Gaon Holdings", "Caterpillar", "Barad Co", "DNM Technical", "Yamit ELI Filtration", "Distek",
"Extal", "Nesher", "Automotive Equipment Group", "Readymix Industries", "JCB", "G4S", "El Far Electronic", "Motorola Solutions",
"Shamrad Electronics", "Radwin", "Star Night Tech", "Samy Katsav Group", "ODF Optronics", "Hewlett Packard", "HP", "Rafael Advanced Defense Systems",
"Contact Int’l", "Elbit", "Israel Aerospace Industries", "Israel Military Industries", "Israel Weapon Industries", "Samy Katsav Group",
"Defense Industries Int’l"]