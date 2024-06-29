import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from '@mui/system'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  SvgIcon,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import RatingComponent from "../Rating/Rating";
import { filterData } from "./data";

function HouseIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <g clipPath="url(#clip0_7122_119084)">
          <path
            d="M21.75 12.75V21.75C21.75 22.1478 21.592 22.5294 21.3107 22.8107C21.0294 23.092 20.6478 23.25 20.25 23.25H3.75C3.35218 23.25 2.97064 23.092 2.68934 22.8107C2.40804 22.5294 2.25 22.1478 2.25 21.75V12.75"
            stroke="#007191"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 16.5C18.75 15.7044 18.4339 14.9413 17.8713 14.3787C17.3087 13.8161 16.5456 13.5 15.75 13.5C14.9544 13.5 14.1913 13.8161 13.6287 14.3787C13.0661 14.9413 12.75 15.7044 12.75 16.5V23.25H18.75V16.5Z"
            stroke="#007191"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 15.75H6C5.58579 15.75 5.25 16.0858 5.25 16.5V19.5C5.25 19.9142 5.58579 20.25 6 20.25H9C9.41421 20.25 9.75 19.9142 9.75 19.5V16.5C9.75 16.0858 9.41421 15.75 9 15.75Z"
            stroke="#007191"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.125 18.7598C15.9179 18.7598 15.75 18.5919 15.75 18.3848C15.75 18.1777 15.9179 18.0098 16.125 18.0098"
            stroke="#007191"
            strokeWidth="1.5"
          />
          <path
            d="M16.125 18.7598C16.3321 18.7598 16.5 18.5919 16.5 18.3848C16.5 18.1777 16.3321 18.0098 16.125 18.0098"
            stroke="#007191"
            strokeWidth="1.5"
          />
          <path
            d="M0.75 7.5C0.792788 8.21758 1.108 8.89173 1.63121 9.38468C2.15443 9.87762 2.84615 10.1521 3.565 10.1521C4.28385 10.1521 4.97557 9.87762 5.49879 9.38468C6.022 8.89173 6.33721 8.21758 6.38 7.5C6.38 8.24526 6.67605 8.95999 7.20303 9.48697C7.73001 10.0139 8.44474 10.31 9.19 10.31C9.93526 10.31 10.65 10.0139 11.177 9.48697C11.7039 8.95999 12 8.24526 12 7.5C12.0428 8.21758 12.358 8.89173 12.8812 9.38468C13.4044 9.87762 14.0961 10.1521 14.815 10.1521C15.5339 10.1521 16.2256 9.87762 16.7488 9.38468C17.272 8.89173 17.5872 8.21758 17.63 7.5C17.63 8.24526 17.9261 8.95999 18.453 9.48697C18.98 10.0139 19.6947 10.31 20.44 10.31C21.1853 10.31 21.9 10.0139 22.427 9.48697C22.9539 8.95999 23.25 8.24526 23.25 7.5L21.88 1.34C21.8436 1.17328 21.7514 1.02396 21.6187 0.916689C21.486 0.809422 21.3206 0.750622 21.15 0.75H2.85C2.67935 0.750622 2.51402 0.809422 2.3813 0.916689C2.24858 1.02396 2.1564 1.17328 2.12 1.34L0.75 7.5Z"
            stroke="#007191"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7122_119084">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}

// https://mui.com/material-ui/react-accordion/#only-one-expanded-at-a-time
const FilterList = () => {
  const [filters, setFilters] = useState(filterData);
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);

  const MyAccordionSummary = styled(AccordionSummary)(({theme}) => {
    return {
      '&': {
        borderRadius: 6,
        borderLeft: '4px solid transparent',
      },
      '&.Mui-expanded': {
        backgroundColor: '#c8e6f1',
        borderColor: '#007191',
        minHeight: 'auto',
      },
      '& .MuiAccordionSummary-content': {
        alignItems: 'center',
        gap: theme.spacing(1),
      },
      '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: theme.spacing(1.5, 0),
      },
      '& .MuiAccordionSummary-expandIcon.Mui-expanded': {
        transform: 'none',
      },
    }
});

  const handleCheck = (sectionIndex: number, itemIndex: number) => {
    // const updatedFilters = [...filters];
    // updatedFilters[sectionIndex].items[itemIndex].checked =
    //   !updatedFilters[sectionIndex].items[itemIndex].checked;
    // setFilters(updatedFilters);
  };

  const handleAccordionChange = (sectionIndex: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? sectionIndex : null);
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 'bold' }}>Filters ({filters.length})</Typography>
      <Typography color="primary" sx={{ cursor: "pointer", fontSize: 12 }}>
        Clear all filters
      </Typography>

      <Divider sx={{ my: 2 }} />

      {filters.map((section, sectionIndex) => (
        <Accordion
          key={section.title}
          sx={{ boxShadow: 0, borderRadius: 8, margin: 0}}
          expanded={expandedAccordion === sectionIndex}
          onChange={handleAccordionChange(sectionIndex)}
        >
          <MyAccordionSummary expandIcon={expandedAccordion === sectionIndex ? <RemoveIcon sx={{color: '#7dbacd'}} /> : <AddIcon sx={{color: '#7dbacd'}} />}>
            <HouseIcon />
            <Typography>{section.title}</Typography>
          </MyAccordionSummary>
          <AccordionDetails sx={{px:0}}>
            <List sx={{p:0}}>
              {section.items.map((item, itemIndex) => (
                <ListItem key={item} sx={{py:0}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: '#bbbcbc',
                          '&.Mui-checked': { color: '#007191' },
                        }}
                        onChange={() => handleCheck(sectionIndex, itemIndex)}
                      />
                    }
                    label={
                      section.type == "rating" && typeof item === "number" ? (
                        <RatingComponent rating={item} />
                      ) : (
                        item
                      )
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FilterList;
