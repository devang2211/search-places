import axios from 'axios';

export const fetchCities = async (query, limit) => {
  try {
    // const data = {
    //     data: [
    //       {
    //         id: 3350606,
    //         wikiDataId: "Q24668",
    //         type: "CITY",
    //         city: "Aixirivall",
    //         name: "Aixirivall",
    //         country: "Andorra",
    //         countryCode: "AD",
    //         region: "Sant Julià de Lòria",
    //         regionCode: "06",
    //         latitude: 42.46245,
    //         longitude: 1.50209,
    //         population: 0
    //       },
    //       {
    //         id: 3216144,
    //         wikiDataId: "Q24656",
    //         type: "CITY",
    //         city: "Aixovall",
    //         name: "Aixovall",
    //         country: "Andorra",
    //         countryCode: "AD",
    //         region: "Sant Julià de Lòria",
    //         regionCode: "06",
    //         latitude: 42.47635833,
    //         longitude: 1.48949167,
    //         population: 0
    //       },
    //       {
    //         id: 3406038,
    //         wikiDataId: "Q4699394",
    //         type: "CITY",
    //         city: "Aixàs",
    //         name: "Aixàs",
    //         country: "Andorra",
    //         countryCode: "AD",
    //         region: "Sant Julià de Lòria",
    //         regionCode: "06",
    //         latitude: 42.48638889,
    //         longitude: 1.46722222,
    //         population: 0
    //       },
    //       {
    //         id: 397,
    //         wikiDataId: "Q1863",
    //         type: "CITY",
    //         city: "Andorra la Vella",
    //         name: "Andorra la Vella",
    //         country: "Andorra",
    //         countryCode: "AD",
    //         region: "Andorra la Vella",
    //         regionCode: "07",
    //         latitude: 42.5,
    //         longitude: 1.5,
    //         population: 22151
    //       },
    //       {
    //         id: 3360277,
    //         wikiDataId: "Q24475",
    //         type: "CITY",
    //         city: "Ansalonga",
    //         name: "Ansalonga",
    //         country: "Andorra",
    //         countryCode: "AD",
    //         region: "Ordino",
    //         regionCode: "05",
    //         latitude: 42.568443,
    //         longitude: 1.521571,
    //         population: 0
    //       }
    //     ],
    //     links: [
    //       {
    //         rel: "first",
    //         href: "/v1/geo/cities?offset=0&limit=5"
    //       },
    //       {
    //         rel: "next",
    //         href: "/v1/geo/cities?offset=5&limit=5"
    //       },
    //       {
    //         rel: "last",
    //         href: "/v1/geo/cities?offset=543930&limit=5"
    //       }
    //     ],
    //     metadata: {
    //       currentOffset: 0,
    //       totalCount: 543934
    //     }
    //   }


    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}?namePrefix=${query}&limit=${limit}`,
      {
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        },
      }
    );
    return response.data.data;
    //return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
