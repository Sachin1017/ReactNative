import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Figma-task-1/Navigation/stackNavigator';
import VisionCamera from './Figma-task-1/visionCamera/camera';

function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // <VisionCamera />
  );
}

export default App;
