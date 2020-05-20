import React from "react"
import styled from "styled-components"

const FactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: Work Sans;
    padding: 5% 12%;
    @media (max-width: 900px){
        align-items: center;
    }
`

const TextContainer = styled.div`
  position: relative;
  height: auto;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 4%;
  margin-bottom: 6%;

  border: 6px solid #63966a;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 500px;
    margin-top: 32px;
  }

  @media (max-width: 550px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
`
const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 38px;
  margin: 30px;

  @media (max-width: 900px) {
      font-size: 24px;
  }
`
const HeaderParagraph = styled.p`
margin-bottom: 0;
font-size: 18px;
line-height: 24px;

  @media(max-width: 500px) {
      font-size: 12px;
  }
`

const BeeHeader = styled.h1`
  border-bottom: 6px solid #63966a;
  padding-bottom: 4px;
  margin: 16px 0;
  font-size: 36px;
  line-height: 42px;
  color: #000000;

  @media (max-width: 900px){
      font-size: 18px;
      align-self: flex-start;
      padding-bottom: 0;
  }
`

const Paragraph = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin: 2% 0 4% 0;

  @media (max-width: 900px) {
      width: 100%;
      overflow-x:hidden;
    font-size: 16px;
    margin: 2px;
    line-height: 24px;
}
`

const Indent = styled.div`
    padding-left: 10%;
    line-height: 28px;
`

const HoneyInfo = () => {
    return (
        <FactsContainer>
            <TextContainer>
                <Title>Honey Information</Title>
                <HeaderParagraph>Liquid honey does not spoil. Because of its high sugar concentration, it kills most bacteria by crenation. Natural airborne yeasts cannot become active in it because the moisture content is too low. Natural, raw honey varies from 14% to 18% moisture content. As long as the moisture content remains under 18%, virtually no organism can successfully multiply to significant amounts in honey, though, importantly, enough bacteria survive to make honey dangerous for infants (especially Clostridium botulinum).</HeaderParagraph>
            </TextContainer>
            <BeeHeader>Nutrition Information</BeeHeader>
            <Paragraph>Generalized nutrition information for honey based upon a 1 tablespoon serving size and a 2,000 calorie diet.</Paragraph>
            <Indent>

                <br></br>
                <Paragraph>
                    Amount Per Serving <br></br>
                    Calories: 60 <br></br><br></br>
                    % Daily Value: <br></br>
                    Total Fat: 0 grams, 0% <br></br>
                    Sodium: 0 grams, 0% <br></br>
                    Protein: 0 grams, 0% <br></br>
                    Sugars: 16 grams <br></br>
                    Total Carbohydrates: 17 grams, 6%
                <br></br><br></br><br></br>
                </Paragraph>

            </Indent>
            <BeeHeader>Honey Content</BeeHeader>
            <Paragraph> Honey is a mixture of sugars and other compounds. The specific composition of any batch of honey will depend largely on the mix of flowers consumed by the bees that produced the honey. Honey has a density of about 1500 kg/m3 (50% denser than water), which means about 12.5 pounds per US gallon.</Paragraph>
            <Paragraph>Honey is a great source of antioxidants, potassium, calcium, minerals and 22 amino acids. Honey also has a much lower Glycemic Index than sugar and is more easily digested, letting your body absorb the nutrients. Unlike refined sugar or high-fructose corn syrup (HFCS), honey possesses 181 different molecules that possess the biological capacity to fight free radicals, bacteria, and inflammation. Table sugar has little value other than as a sweetener. When sugar cane is processed to become the white table sugar we all know and love, all of the inherent nutrition is stripped away. The sugar loses all of those vitamins, proteins and good-for-you enzymes. Since there is no processing of raw honey, it retains all of that. While honey has more calories per tablespoon (64) than the sugar (46), it is naturally more sweet than sugar - so you end up needing less. </Paragraph>
            <Paragraph>Typical Raw Honey Contents:<br></br> Water 17%, Natural Sugars 79.5% , Fructose 38%, Dextrose (Glucose) 31%, Maltose 7.3%, Sucrose 1.3%, Other Sugars 1.5%.</Paragraph>
            <Paragraph>Vitamins: A, Beta carotene, B1 Thiamin, B2 Riboflavin, B3 Niacin, B5 Pantothenic acid, B6 Pyridoxine, B8 Biotin, B9 Folate, C, D, E, K.</Paragraph>
            <Paragraph>Minerals: Calcium, Copper, Iodine, Iron, Magnesium, Manganese, Potassium, Sodium, Sulfur, Phosphorous, Zinc.</Paragraph>
            <Paragraph>Amino Acids: Tryptophan, Leucine, Lysine, Isoleucine, Methionine, Cystiene, Thresonine, Arginine, Phenylalanine, Histidine, Valine, Glutamic acid, Tyrosine, Glycine, Serine, Proline, Alanine, Aspartic acid, Hydroxyproline, Butyric acid.</Paragraph>
            <BeeHeader>What's in Your Honey? </BeeHeader>
            <Paragraph> Do you know where your honey comes from? It's something you might want to think about. Food Safety News, a site set up by food safety lawyer Bill Marler, reports that lab tests show that most honey sold on supermarket and drug store shelves today isn't really honey according to international quality standards, or safety requirements set by the Food and Drug Administration. <br>
            </br>Pollen is a key ingredient in real honey. Without it, honey can't be traced to its country of origin. According to FSN, you won't find much pollen in American store-bought honey because it's been so ultra-filtered (mostly from China and India) that it's largely pollen-free. Know your honey source. Imported honey may be from bees forced fed a high frutose corn syrup diet, impure, loaded with antibiotics, and include questionable additives. <br></br>http://www.foodsafetynews.com/2011/11/tests-show-most-store-honey-isnt-honey/#.UE8XC65618E</Paragraph>
            <BeeHeader>Crystallization of Honey</BeeHeader>
            <Paragraph> All honey will crystallize over time; this is a natural function of the sugars present in the honey. To slow the crystallization process, store honey in a cool, dark location; do not refrigerate. Freezing is the best way to keep honey long term. If your honey does crystallize, gently warm the SEALED honey container in a sink or pan of hot-to-the-touch water. NEVER microwave your honey as this destroys the beneficial enzymes present. NEVER place your honey container in the oven as most containers are plastic and will melt (big mess!). Another idea is to put your honey in the car on a warm sunny day (anytime of the year) and the heat will help it re-liquify.</Paragraph>
            <BeeHeader>Commercially Processed Honey</BeeHeader>
            <Paragraph>Commercially Processed Honey Commercially processed honey is heated for a couple of reasons. It gives it long shelf life and kills the botulism spores that are in it naturally. While heating honey to 150 degrees tends to stall crystallization, heating honey up to 98 degrees causes loss of nearly 200 compounds. Heating to 104 degrees destroys invertase, the bee enzyme that converts nectar to honey. Pasteurized honey is heated to 170 degrees and held there for four to five minutes, essentially destroying the nutrition. Heating honey to high temperatures causes it to burn, changes the flavor and destroys the compounds that have health benefits.</Paragraph>
            <Paragraph>If you're looking for real honey with its pollen content intact, make sure it says raw honey. For the best honey, you should buy unprocessed, minimumly filtered (to remove wax particles and bee parts) honey locally at farmer's markets or directly from the beekeeper. Note: while the botulism spores in raw honey do not affect most, they can harm babies. Do not feed raw honey to infants under one year of age. Because their immature digestive systems, they can end up in the hospital with life threatening consquences.</Paragraph>
            <BeeHeader>Diabetics and Honey</BeeHeader>
            <Paragraph>Diabetics should carefully watch their consumption of honey just like any other sugary food. Honey does contain more carbohydrates and calories than granulated sugar so be sure to include that in your meal planning.</Paragraph>
            <BeeHeader>Other Uses for Honey</BeeHeader>
            <Paragraph>As a wound dressing - honey has natural antibacterial properties and may help reduce or prevent scarring. <br></br>
            For allergies - raw honey contains pollen grains which, when ingested, may help your body overcome its allergic reaction to those pollens. The key is to obtain raw and local honey; local should be within 50 miles or less of your home. <br></br>
            In cosmetics - honey is a great moisturizer and may help reduce blemishes. </Paragraph>
            <BeeHeader>Honey Substitution</BeeHeader>
            <Paragraph>Honey can be substituted for sugar, and sugar substituted for honey. However, since honey is ounce for ounce sweeter than sugar, you need to use less of it in most recipes. Coat the inside of the measuring cup with a thin film of vegetable oil and the honey will slide out easily and mess-free.</Paragraph>
            <Paragraph>Sugar Substitution: 1 1/4 cup sugar + 1/4 cup water = 1 cup honey</Paragraph>
            <Paragraph>Honey Substitution: <br></br>
                1 C. sugar = 3/4 C. honey minus 1/4 C. liquid or plus 4 Tbs. flour plus 1/4 tsp. baking soda<br></br> 
                1/2 C. sugar = 6 Tbs. honey minus 2 Tbs. liquid or plus 2 Tbs. flour plus 1/8 tsp. baking soda <br></br>
                1/3 C. sugar = 1/4 C. honey minus 1 1/2 Tbs. liquid or plus 1 1/2 Tbs. flour plus 1 1/2 tsp. baking soda <br></br>
                1/4 C. sugar = 3 Tbs. honey minus 1 Tbs. liquid or plus 1 Tbs. flour plus 1/16 tsp. baking soda </Paragraph>
                <br></br><br></br>
            <Paragraph>Bake cakes, and other goods made with honey, 25° lower to prevent overbrowning. Honey softens cookie batters. For crisper variety of cookies, add 4 Tbs. flour for each 3/4 cup honey used if necessary.</Paragraph>
            


        </FactsContainer >

    )
}

export default HoneyInfo