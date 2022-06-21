import Store from '../redux/Store';

export const getColorScheme = () => {
    if (Store.getState().commonReducer.colorScheme === 'dark') {
        return darkColors;
    }
    return lightColors;
};


const lightColors = {
    primary: '#ffffff',
    secondary: '#008069',
    textPrimary: '#131b21',
    textSecondary: '#69767e',
    textFocus:'#fdffff',
    textUnFocus:'#b3d9d3',
    icon:'#8596a0',
};

const darkColors = {
    primary:'#111A21',
    secondary:'#1f2c34',
    textPrimary: '#e9edf0',
    textSecondary: '#8595a0',
    textFocus:'#00a884',
    textUnFocus:'#8596a0',
    icon:'#8596a0'
};



