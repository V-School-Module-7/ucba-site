import React from 'react';
import {
    TextContainer,
    TextHeader,
    FlexContainer,
    ParagraphText,
    ParagraphTextBottomMargin,
} from "../../styles/babstyles.js"

const LawsAndLicenses = () => {
    return (
        <TextContainer id="laws-and-licenses">
            <FlexContainer>
                <TextHeader>Laws & Licenses</TextHeader>
            </FlexContainer>
            <ParagraphTextBottomMargin>
                There are laws and licensure requirements for 
                the state of Utah if you want to keep bees. Below 
                is a SUMMARY of these laws/rules. If you want to 
                read the laws/rules, you can follow the links in 
                this section.
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>
                Utah Department of Agriculture and Food License - 
                Utah Rule R68-1 requires that each person keeping 
                bees register and obtain a license from the Utah 
                Department of Agriculture and Food. This same 
                requirement is repeated in Utah Title 4 Regulations. 
                The license required costs $10.00 per year.
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>
                Utah Title 4 Regulation - this title gives the Utah 
                Department of Agriculture and Food the right to make 
                and enforce rules as they deem necessary. Some of 
                the items covered under this rule are:
            </ParagraphTextBottomMargin>
            <ParagraphText>Registration of beekeeper</ParagraphText>
            <ParagraphText>Appointment of a County Inspector</ParagraphText>
            <ParagraphText>Requirement of hives to have removable frames</ParagraphText>
            <ParagraphText>Duties of the appointed County Inspector</ParagraphText>
            <ParagraphText>
                Requirement of the Inspector to completely disinfect 
                tools and equipment before leaving any apiary (to 
                prevent the possible transmission of diseases)
            </ParagraphText>
            <ParagraphText>Queen raising specific information</ParagraphText>
            <ParagraphText>
                Authorization of County Inspectors to visit properties 
                where hives are kept and provision for obtaining warrants 
                should inspection be refused
            </ParagraphText>
            <ParagraphText>
                Importation requirements - bees and equipment are 
                required to be inspected before being allowed entry 
                to the state
                </ParagraphText>
            <ParagraphText>Authorization for quarantine against infectious disease</ParagraphText>
            <ParagraphText>Unlawful acts are specified</ParagraphText>
            <ParagraphText>Maintenance of abandoned apiary equipment to prevent nuisance</ParagraphText>
            <ParagraphTextBottomMargin>
                Wax salvage operations and county inspector supervisor 
                for compliance
            </ParagraphTextBottomMargin>
            <ParagraphText>Utah Rule 68-1- this is the rule that is known as the bee inspection act.</ParagraphText>
            <ParagraphText>It governs the following key items:</ParagraphText>
            <ParagraphText>Reinforcement of the need for registration as specified in title 4.</ParagraphText>
            <ParagraphText>
                Requirement of beekeepers to identify their hives which 
                must include the owner's licence number on at least one 
                of the hives in the apiary and must be in letters no less 
                than 1 inch high.
            </ParagraphText>
            <ParagraphText>Assistance to County Inspector in locating hives.</ParagraphText>
            <ParagraphTextBottomMargin>
                Salvage of diseased equipment and wax - procedures 
                identified.
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>
                Food Handlers Permits - it is recommended that if 
                you intend to process your honey for sale,that you 
                obtain a food handlers permit from your local county 
                health department (or similar government body having 
                jurisdiction).
            </ParagraphTextBottomMargin>
            <ParagraphText>
                Pesticide Control - Utah rule 68-7 contains the following 
                information which will be useful to you as a beekeeper 
                should someone near your hives apply pesticides. From Utah 
                rule 68-7-11 "Unlawful Acts". Any person who commits the 
                following is in violation of the act.
            </ParagraphText>
            <ParagraphText>
                "(16) Applied pesticides known to be harmful to honeybees 
                on crops which bees are foraging during the period between 
                two hours after sunrise and two hours before sunset; except, 
                on property owned or operated by the applicator."
            </ParagraphText>
        </TextContainer>
    );
};

export default LawsAndLicenses;