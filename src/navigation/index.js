/**
 * App Navigation
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import AppLaunch from '@containers/launch/LaunchContainer';
import AuthScenes from './auth';
import TabsScenes from './tabs';

/* Routes ==================================================================== */
export default Actions.create(
    <Scene key={'root'} {...AppConfig.navbarProps}>
        <Scene
            hideNavBar
            key={'splash'}
            component={AppLaunch}
            analyticsDesc={'AppLaunch: Launching App'}
        />

        {/* Auth */}
        {AuthScenes}

        {/* Main App */}
        <Scene key={'app'} {...AppConfig.navbarProps} hideNavBar type={ActionConst.RESET}>
            {/* Tabbar */}
            {TabsScenes}
        </Scene>
    </Scene>,
);
