import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      capital
      name
      continent {
        name
        code
      }
    }
  }
`;

// export const GET_COUNTRIES_BY_NAME = gql`
// query GetCountriesByName($name: String!) {
//   countries(filter: { name: { eq: $name } }) {
//     name
//     code
//     continent {
//       name
//     }
//   }
// }
// `;

export const GET_COUNTRY_DETAILS = gql`
query GetCountriesByName($name: String!) {
    countries(filter: { name: { eq: $name } }) {
      name
      code
      capital
      languages {
        name
      }
      continent {
        name
        code
      }
      states {
        name
      }
      currencies
    }
  }
`;
