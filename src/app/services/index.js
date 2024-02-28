import { api_endpoint } from "../constants";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(api_endpoint);

export const queryHomepage = async () => {
  const query = gql`
    query HomepageQuery {
      courses {
        id
        couseName
        courseCategory
        descriptionOfCourse
        courseDuration
        description2
        description3
        description4
        slug
        brochure {
          url
        }
        courseImage {
          url
        }
        buttonText
      }
      upcomingbatches {
        coursename
        startdate
        seatsinbatch
        batchdescription
      }

      placements {
        image {
          url
        }
        description
      }
      highlighters {
        highlighterText
      }
      highlighters {
        highlighterText
      }
      newcourses {
        price
        bestseller
        image {
          url
        }
        coursetitle
        discountedPrice
      }
    }
  `;
  const response = await graphQLClient.request(query);
  return response;
};

export const getSingleCourse = async (slug) => {
  const query = gql`
    query getSingleCourse($slug: String) {
      courses(where: { slug: $slug }) {
        fullDescriptionOfCourse {
          text
          html
          markdown
          raw
        }
        subdescriptionmain
        point1
        point2
        point3
        point4
        pont5
        point6
        point7
        point8
        point9
        point10
        point11
        point12
        point13
        point14
        courseCategorymainpage
        nameOfCoursemainpage
        slug
        courseBanner {
          url
        }
      }
    }
  `;

  const slugName = {
    slug,
  };

  const response = await graphQLClient.request(query, slugName);
  return response;
};
