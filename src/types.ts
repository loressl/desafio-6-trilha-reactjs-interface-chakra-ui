export interface CountryHome {
    name: string
    description: string
    image: string
    path: string
}

export interface PopularCity {
    city: string
    capital: string
    initials: string
    image: string
}

export interface DataContinent {
    name: string
    description: string
    banner: string
    numberOfCountries: number
    numberOfLanguages: number
    mostVisitedQuantity: number
    mostPopularCities: PopularCity[]
}