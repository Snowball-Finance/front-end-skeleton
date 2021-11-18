/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { HomePageReducer, sliceKey } from './slice';
import { homePageSaga } from './saga';
import { FullWidthWrapper } from "app/components/wrappers/fullWidth";
import { styled } from "@mui/material";
import { ContainedButton } from "app/components/common/buttons/containedButton";
import { OutlinedButton } from "app/components/common/buttons/outlinedButton";

interface Props { }

export const HomePage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: HomePageReducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });
  // const homePage = useSelector(selectHomePage);
  // const { t, i18n } = useTranslation();

  return (
    <div >
      <StyledFullWidthWrapper>
        <Title>
          some content
        </Title>
        <Title as={ContainedButton}>
          some content
        </Title>
      </StyledFullWidthWrapper>
      <StyledFullWidthWrapper as={OutlinedButton}> fullButton</StyledFullWidthWrapper>
    </div>
  );
});
const Title = styled('p')(({ theme }) => ({
  color: theme.palette.primary.dark
}))


const StyledFullWidthWrapper = styled(FullWidthWrapper)`
border-radius: 12px;
background-color:lightblue;
height: 100px;
color:black;
&:hover { 
  background:lightblue;
  
  }
`