import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        {/* <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        /> */}
        <h2>Word lid</h2>
      </Modal>
    </Box>
    <h2 className="gallery-title">Trainers</h2>
    <Gallery items={data.homeJson.gallery} />
    <div>
      <Title as="h2" size="large">Prijslijst</Title>
    </div>
    <IOExample />
    <footer>
      <div>
        <h2>Adresgegevens</h2>
        <p>Buurtsport IGLO</p>
        <p>Louis Paul Boonstraat 41</p>
        <p>2050 Antwerpen (Linkeroever)</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>silentforcegym@hotmail.com</p>
        <p>GSM:+32485/81.57.61</p>
        <p>+32486/88.29.51</p>
      </div>
    </footer>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
