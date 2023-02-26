import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import CountdownTimer from "./CountdownTimer";

const theme = {
    colors: {
        primary: '#BEB8EB',
        secondary: '#C5DCA0',
        tertiary: '#8DB0A5',
        text: '#292929',
        background: '#F5F5F5',
    },
};

const AppContainer = styled.div`
  margin-top: 50px;
  align-items: center;
  height: 100vh;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <CountdownTimer />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;





