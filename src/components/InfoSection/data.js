import updateProfile from '../../images/updateProfile.png'
import phoneOptions from '../../images/phoneHold.jpg'
import secureInfo from '../../images/secureInfo.png'

export const homeObjectOne = {
    id: 'profile',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Service',
    headline: 'Create the perfect portfolio',
    description: 'Gain access to an advanced set of tools and tips'
     + ' to fully maximize the success of your portfolio.',
    buttonLabel: 'Get Started',
    imgStart: false,
    infoImage: updateProfile,
    alt: 'Updating Portfolio',
    dark: false,
    primary: false,
    darkText: true,
}

export const homeObjectTwo = {
    id: 'contacts',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Service',
    headline: 'Manage Contacts On The Go',
    description: 'Instant messaging for both Android and IOS'
     + '. Allowing you to connect anytime, anywhere.',
    buttonLabel: 'Get Started',
    imgStart: false,
    infoImage: phoneOptions,
    alt: 'Updating Portfolio',
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjectThree = {
    id: 'security',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Service',
    headline: 'Secure Information',
    description: 'Modern encryption ensuring'
     + ' that your information is 100% safe.',
    buttonLabel: 'Get Started',
    imgStart: false,
    infoImage: secureInfo,
    alt: 'Updating Portfolio',
    dark: false,
    primary: false,
    darkText: true,
}

