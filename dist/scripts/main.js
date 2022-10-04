window.onload = function() {setTimeout(function(){document.body.style.opacity="100";},500);};
let app = angular.module('Countries',[]);

app.controller('main',($http,$scope) => {
    $scope.url = "https://restcountries.com/v3.1/all"
    $http.get($scope.url)
    .then((response) => {
        $scope.countries = response.data
        
        $scope.shuffle = (input) => {
            let countries = angular.element(document.querySelectorAll(`[country]`))
            let selectedCountries = document.querySelectorAll(`.${input}`)

            for(let outer = 0; outer < $scope.countries.length; outer++){
                countries[outer].classList.add('hidden')

                for(let inner = 0; inner < selectedCountries.length; inner++){
                    selectedCountries[inner].classList.remove('hidden')
                }
            }
        }
        
        $scope.generateCountryDetails = (flag,name,official,population,region,subRegion,capital,tld,currencies,languages,borders,moreDetails) => {
            $scope.generatedData = {
                flag:flag,
                name:name,
                official:official,
                population:population,
                region:region,
                subRegion:subRegion,
                capital:capital,
                topLevelDomain:tld,
                currencies:currencies,
                languages:languages,
                borders:borders
            }


            let mainContainer = angular.element(document.querySelectorAll(`[countries]`))
            let countryDetails = angular.element(document.querySelectorAll(`[details]`))

            for(let size = 0; size < 1; size++){
                mainContainer[size].classList.add('hidden')
                countryDetails[size].classList.remove('hidden')
            }
        }

        $scope.generateBorderDetails = (border) => {
            $scope.countries.forEach((country) => {
                if(country.cca3 == border){
                    $scope.generateCountryDetails(country.flags.svg,country.name.common,country.name.official,country.population,country.region,country.subregion,country.capital,country.tld,country.currencies,country.languages,country.borders,country)
                }
            })
        }

        $scope.displayNone = (input) => {
            let container = angular.element(document.querySelectorAll(`[${input}]`))
            let countryDetails = angular.element(document.querySelectorAll(`[details]`))

            for(let size = 0; size < 1; size++){
                countryDetails[size].classList.add('hidden')
                container[size].classList.remove('hidden')
            }
        }
    })
})