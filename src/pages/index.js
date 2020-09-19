import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
// import IOExample from 'components/io-example';
// import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      {/* <Modal>
         <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        /> 
        <h2>Word lid</h2>
      </Modal> */}
    </Box>
    <p className="explanation">
      Thai-box is een intensieve sport, het belangrijkste is dat je er plezier aan beleeft.  Silent Force Gym vindt dat naast de fysieke inspanningen ook respect, doorzettingsvermogen en discipline belangrijk zijn. Een work-out zal bestaan uit een goede warming-up waarbij gedacht moet worden aan touwtje springen, rennen,... 
    </p>
    <p className="explanation">
    Daarnaast zal er gewerkt worden aan de boks- en verdedigingstechnieken, push-ups, pull ups, sit ups en conditietraining. Onze trainers zijn allemaal sport technisch opgeleid en beschikken over de juiste diploma&apos;s (vts) en vaardigheden. Wil je zelf eens ervaren hoe het is, kom dan langs voor een gratis proefles.
    </p>
    <h2 className="gallery-title">Trainers</h2>
    <Gallery items={data.homeJson.gallery} />
    <div className="prijslijst-div">
      <Title as="h2" size="large">Prijslijst</Title> 
      <Title as="h3" size="medium">Jeugd</Title>
      <table>
        <tr>
          <td>3 maand</td>
          <td> 6 maand</td>
          <td>1 jaar</td>
        </tr>
        <tr>
          <td>60 euro</td>
          <td>110 euro</td>
          <td>170 euro</td>
        </tr>
        <tr>
          <td>Zonder verzekering</td>
          <td>Zonder verzekering</td>
          <td>Zonder verzekering</td>
        </tr>
      </table>
      <Title as="h3" size="medium">Volwassen</Title>
      <table>
        <tr>
          <td>3 maand</td>
          <td> 6 maand</td>
          <td>1 jaar</td>
        </tr>
        <tr>
          <td>75 euro</td>
          <td>140 euro</td>
          <td>210 euro</td>
        </tr>
        <tr>
          <td>Zonder verzekering</td>
          <td>Zonder verzekering</td>
          <td>Zonder verzekering</td>
        </tr>
      </table>
      <p>Een 10-beurtenkaart is 40 euro exclusief verzekering.</p>
      <p>De jaarlijkse verzekering kost 40 euro.</p>
      <p>
        <b>Een basis pakket materiaal bestaat uit een trainingszak, bokshandschoenen, beenbescherming, bandage, mondbescherming en kruisbescherming. Dit pakket kost minstens 85 euro. Er zijn verschillende kwaliteiten van materiaal dus de prijs kan varieren.</b>
      </p>
    </div>
    {/* <IOExample /> */}
    <div className="trainingsuren">
      <h2 className="trainingsuren-title">Trainingsuren</h2>
      <div className="trainingsuren-subcontainer">
        <Title as="h3" size="medium">Kinderen (6-12 jaar)</Title>
        <p>Maandag: 18u30-19u30</p>
        <p>Donderdag: 17u30-18u30</p>
        <p>Zaterdag: 16u-17u</p>
      </div>
      <div className="trainingsuren-subcontainer">
        <Title as="h3" size="medium">Volwassenen (13-60 jaar)</Title>
        <p>Maandag: 19u30-20u30</p>
        <p>Donderdag: 18u30-20u00</p>
        <p>Zaterdag: 17u30-19u</p>
      </div>
    </div>
    <footer>
      <div>
      <Title as="h3" size="large">Adresgegevens</Title> 
        <p>Buurtsport IGLO</p>
        <p>Louis Paul Boonstraat 41</p>
        <p>2050 Antwerpen (Linkeroever)</p>
      </div>
      <div>
        <Title as="h3" size="large">Contact</Title> 
        <p>silentforcegym@hotmail.com</p>
        <p>+32488/43.95.75</p>
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
      }
    }
  }
`;
