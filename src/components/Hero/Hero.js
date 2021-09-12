import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
//import {pdfFile} from "../Hero/Venditti.pdf";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          While I keep busy studying and working on personal projects, I still
          take interviews in search of a great team and projects that interest
          me.
        </SectionText>

        <Button onClick={() => (window.location = "mailto:15gv1@queensu.ca")}>
          Request Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

//<Button onClick={props.handleClick}>Learn More</Button>
//<a href="Venditti.pdf">Learn More</a>
//<Button onClick={() => window.open(pdfFile)}>Learn More</Button>
//<Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
