import React from "react";
import styled from "styled-components";
import realestate from "../assets/888.png";
import logo from "../assets/logo.png";
import building from "../assets/building.jpg";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Background = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${building});
`;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 10em;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
  border-radius: 7px;
  padding: 1em;
  color: white;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    flex-basis: 45%;
    margin-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  width: 140px;
  height: 140px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    width: 130px;
    height: 130px;
    margin-bottom: 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 2em;
  a {
    color: lightblue;
  }
  a:hover {
    color: #228896;
  }
`;

const FacebookIcon = styled(FaFacebook)`
  margin-right: 1rem;
`;

const InstagramIcon = styled(FaInstagram)`
  margin-right: 1rem;
`;
const TextContainer = styled.div`
  text-align: center;
  h2 {
    padding: 1em 0;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const AboutUs = () => {
  return (
    <Background>
      <AboutUsContainer>
        <SectionContainer>
          <ImageContainer>
            <img src={realestate} alt="Real estate" />
          </ImageContainer>
          <TextContainer>
            <IconContainer>
              <Link to="https://facebook.com" target="_blank">
                <FacebookIcon />
              </Link>
              <Link
                to="https://www.instagram.com/4e_realestate/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </IconContainer>
            <h2>4E Real Estate</h2>
            <p>
              Prezantimi i agjencisë sonë kryesore të pasurive të paluajtshme:
              Çelësi juaj për shtëpitë e ëndrrave! Në [Emri juaj i agjencisë],
              ne krenohemi që jemi partneri juaj i besuar në udhëtimin
              emocionues të blerjes, shitjes ose marrjes me qira të pronave të
              patundshmërive. Me angazhimin tonë të palëkundur ndaj përsosmërisë
              dhe njohurive të gjera të industrisë, ne shkojmë më lart dhe
              përtej për t'ju ndihmuar të gjeni shtëpinë tuaj të përsosur ose
              mundësinë e investimit. Pse të zgjidhni [Emri juaj i agjencisë]?1.
              Shërbimi i personalizuar: Ne besojmë në krijimin e marrëdhënieve
              të forta me klientët tanë. Ekipi ynë i përkushtuar i
              profesionistëve me përvojë të pasurive të paluajtshme merr kohë
              për të kuptuar nevojat, preferencat dhe qëllimet tuaja unike. Nga
              blerësit e shtëpive për herë të parë te investitorët me përvojë,
              ne përshtatim qasjen tonë për të siguruar një përvojë të qetë dhe
              të kënaqshme.2. Portofoli i gjerë i pronave: Me një rrjet të gjerë
              dhe akses në një gamë të gjerë pronash, ne ofrojmë një portofol
              mbresëlënës për t'u kujdesur për buxhete dhe stile jetese të
              ndryshme. Nëse jeni duke kërkuar për një apartament komod, një
              shtëpi familjare periferike ose një pronë luksoze, ne ju presim
              ndeshjen perfekte.3. Ekspertiza e tregut: Tregu i pasurive të
              paluajtshme mund të jetë kompleks dhe vazhdimisht në ndryshim.
            </p>
          </TextContainer>
        </SectionContainer>

        <SectionContainer>
          <ImageContainer>
            <img src={logo} alt="Real estate" />
          </ImageContainer>
          <TextContainer>
            <IconContainer>
              <Link to="https://facebook.com" target="_blank">
                <FacebookIcon />
              </Link>
              <Link
                to="https://www.instagram.com/peci_ing/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </IconContainer>
            <h2>Peci-ing</h2>
            <p>
              Jini të sigurt, ekipi ynë qëndron përpara lojës me njohuri dhe
              tendenca të përditësuara të tregut. Ne ofrojmë udhëzime të
              vlefshme, duke ju ndihmuar të merrni vendime të informuara dhe
              duke maksimizuar potencialin tuaj të investimit.4. Transaksionet
              pa probleme: Lundrimi në dokumentet dhe ligjshmëritë e
              transaksioneve të pasurive të paluajtshme mund të jetë i frikshëm.
              Vëmendja jonë e përpiktë ndaj detajeve siguron një proces të
              pandërprerë nga fillimi në fund. Ne trajtojmë negociatat,
              kontratat dhe ndërlikimet e tjera, duke ju siguruar paqe mendore
              gjatë gjithë kohës.5. Rrjeti i besuar: Gjatë viteve, ne kemi
              ndërtuar marrëdhënie të forta me profesionistë të industrisë, duke
              përfshirë agjentët e hipotekave, inspektorët dhe avokatët. Ne ju
              lidhim me rrjetin tonë të besuar, duke u siguruar që të gjitha
              aspektet e udhëtimit tuaj me pasuri të paluajtshme të trajtohen me
              profesionalizmin maksimal.6. Kënaqësia e klientit: Qëllimi ynë
              përfundimtar është kënaqësia juaj e plotë. Ne matim suksesin tonë
              jo vetëm nga numri i transaksioneve, por edhe nga buzëqeshjet në
              fytyrat e klientëve tanë. Ne jemi të përkushtuar për të tejkaluar
              pritshmëritë tuaja dhe për t'i bërë ëndrrat tuaja të pasurive të
              paluajtshme realitet. Jeni gati për të nisur një udhëtim të
              jashtëzakonshëm të pasurive të paluajtshme? Na kontaktoni në [Emri
              juaj i agjencisë] sot. Le të hapim dyert e shtëpisë tuaj të
              ëndrrave dhe t'ju udhëheqim drejt një të ardhmeje të begatë në
              pasuri të paluajtshme! Mos harroni, në [Emri juaj i agjencisë], ne
              nuk shesim vetëm shtëpi; ne ndërtojmë marrëdhënie dhe i bëjmë
              ëndrrat realitet.
            </p>
          </TextContainer>
        </SectionContainer>
      </AboutUsContainer>
    </Background>
  );
};

export default AboutUs;
