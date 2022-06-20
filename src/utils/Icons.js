import React from 'react';
import {FontName} from './Constant';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Icon(props) {
    const BrandedIcon = getType(props.type);
    return <BrandedIcon {...props} />;
}

function getType(type) {
    switch (type) {
        case FontName.FeatherIcon:
            return FeatherIcon;
        case FontName.MaterialIcon:
            return MaterialIcon;
        case FontName.FontAwesome5:
            return FontAwesome5;
        case FontName.FontAwesome:
            return FontAwesome;
        default:
            return;
    }
}
