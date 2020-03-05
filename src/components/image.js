import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Image = ({
  data,
}) => (
  <Img fixed={data.file.childImageSharp.fixed} />
);
export default Image;
