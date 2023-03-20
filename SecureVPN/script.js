var countries = [
    {
     name: "Australia",
     flag: "resources/countries/australia.png"   
    },
    {
     name: "Canada",
     flag: "resources/countries/canada.png"   
    },
    {
     name: "France",
     flag: "resources/countries/france.png"   
    },
    {
    name: "Germany",
    flag: "resources/countries/germany.png"   
    },
    {
     name: "Japan",
    flag: "resources/countries/japan.png"   
    },
    {
    name: "USA",
    flag: "resources/countries/usa.png"   
    },
    {
    name: "Singapore",
    flag: "resources/countries/singapore.png"   
    },
    {
    name: "Ireland",
    flag: "resources/countries/ireland.png"   
    },
    {
    name: "India",
    flag: "resources/countries/india.png"   
    },
    {
    name: "South Korea",
    flag: "resources/countries/korea.png"   
    },
    {
    name: "United Kingdom",
    flag: "resources/countries/uk.png"   
    },
    


]
for(var i in countries){
    // console.log(countries[i].flag)
    $("#list-of-countries").append(    '<div class="single-country"> <img src="'+countries[i].flag+'" alt="country flag" style="width: 6rem; height:6rem;border-radius:1.5rem; object-fit:cover;"> <p class="sofiaregular fz-20 white">'+countries[i].name+'</p> </div>'    );
}
