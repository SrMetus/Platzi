//methods that modify the original array (mutability).

//push add item to array

const countries = ['USA', 'Canada', 'UK']
const newCountries = countries.push('Italy', 'Chile')

console.log(countries)
console.log(newCountries)

//pop remove the last item to array

const removedCountry = countries.pop()

console.log(countries)
console.log(removedCountry)