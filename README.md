# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot.jpeg)

### Links

- Solution URL: [Github](https://github.com/Leroynnalue/rest-countries-api-with-color-theme-switcher-master)
- Live Site URL: [Netlify](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- CSS custom properties
- Javascript
- Desktop-first workflow
- [Tailwind](https://tailwind.com/docs) - CSS Framework
- [AngularJS](https://reactjs.org/) - JS Framework

### What I learned
While building this project, I learnt how to utilize an API and manipulate the data received. Below are some code snippets I'm proud of:

```html
<div class="flex flex-col pb-6 bg-white shadow-md z-10 dark:bg-db-blue cursor-pointer {{country.region}}"
                    ng-repeat="country in countries | filter:userInput"
                    ng-click="generateCountryDetails(country.flags.svg,country.name.common,country.name.official,country.population,country.region,country.subregion,country.capital,country.tld,country.currencies,country.languages,country.borders,country)"
                    country>
                    <!-- Country Flag -->
                    <img class="object-cover lg:h-[150px]" src="{{country.flags.png}}" alt="Flag Image">

                    <!-- Country Details -->
                    <div class="p-4 flex flex-col">
                        <!-- Name -->
                        <h1 class="font-[800] text-lg">{{country.name.common}}</h1>
                        <!-- Population -->
                        <span class="flex">
                            <span class="font-[600] mr-2">Population:</span>
                            <span class="font-[300]">{{country.population}}</span>
                        </span>

                        <!-- Region -->
                        <span class="flex">
                            <span class="font-[600] mr-2">Region:</span>
                            <span class="font-[300]">{{country.region}}</span>
                        </span>

                        <!-- Capital -->
                        <span class="flex">
                            <span class="font-[600] mr-2">Capital:</span>
                            <span class="font-[300]" ng-repeat="index in country.capital">{{index}}</span>
                        </span>
                    </div>
                </div>
```
```
```
```js
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
```


### Continued development
I intend on learning a new framework, reactJS.

### Useful resources

- [Stack Overflow](https://stackoverflow.com/)

## Author

- Website - [ALIENXR](https://somtodev.netlify.app/)
- Frontend Mentor - [@Leroynnalue](https://www.frontendmentor.io/profile/Leroynnalue)
- Twitter - [@yourusername](https://www.twitter.com/leroydev_)


## Acknowledgments
**_AngularJS FOUNDER_**