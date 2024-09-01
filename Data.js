import logoColor from './src/assets/logo-color.png'
import logoBgNo from './src/assets/logo-no-background.png'
import bin_icon from './src/assets/bin_icon.png'
import cart_icon from './src/assets/cart.png'
import dropdown_icon from './src/assets/dropdown_icon.png'
import exchange_icon from './src/assets/exchange_icon.png'
import profile_icon from './src/assets/profile_icon.png'
import quality_icon from './src/assets/quality_icon.png'
import search_icon from './src/assets/search_icon.png'
import star_dull_icon from './src/assets/star_dull_icon.png'
import star_icon from './src/assets/star_icon.png'
import menu_icon from './src/assets/menuIcon.png'
import cross_icon from './src/assets/cross_icon.png'
import arrow from './src/assets/Arrow.png'
import facebookW from './src/assets/white-facebook.png'
import instagramW from './src/assets/white-instagram.png'
import twitterW from './src/assets/white-twitter.png'
import linkedinW from './src/assets/white-linkedin.png'
import whatsapp from './src/assets/whatsapp.png'
import mail from './src/assets/mail.png'
import phone from './src/assets/phone.png'
import location from './src/assets/location.png'

import cement from "./src/assets/cement.jpg"
import pipesMabati from "./src/assets/pipes-mabati.jpg"
import pipesAcc from "./src/assets/pipes-acc.jpg"
import paint from "./src/assets/paints.jpg"
import nails from "./src/assets/Nails.jpg"
import hinges from "./src/assets/hinges.jpg"

import advisory from "./src/assets/advisory.jpg"
import building from "./src/assets/building.jpg"
import welder from "./src/assets/welder.jpg"
import Tools from "./src/assets/Tools.jpg"
import heroPic from "./src/assets/heroPic.jpg"
import workers from "./src/assets/workers.jpg"

import welding from "./src/assets/welding.jpg"
import welding2 from "./src/assets/welding-2.jpg"
import pipes from "./src/assets/pipes.jpg"
import market from "./src/assets/market.jpg"
import hero from "./src/assets/Hero.jpg"
import metalWorks from "./src/assets/metal-works.jpg"
import wheelBarrow from "./src/assets/wheel-barrow.jpg"

import front from "./src/assets/Front.jpg"
import frontLeft from "./src/assets/Front-left.jpg"
import frontRight from "./src/assets/Front-right.jpg"

export const assets = {
    front,
    mail,
    phone,
    location,
    frontLeft,
    frontRight,
    logoColor,
    logoBgNo,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    menu_icon,
    cross_icon,
    facebookW,
    instagramW,
    linkedinW,
    twitterW,
    cart_icon,
    whatsapp,
    metalWorks,
    hero,
    wheelBarrow,
    welding,
    market,
    pipes,
    cement,
    arrow,
    advisory,
    heroPic,
    Tools,
    building,
    welder,
    workers,
    welding2
}

export const products = [
    {
        _id: "aaaaa",
        name: "Cement",
        description: "Used with sand for building purposes",
        price: 820,
        image: [cement],
        category: "Building and Construction",
        subCategory: "",
        type: ["Bamburi, Blue-Triangle , Mombasa, Ndovu"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Pipes",
        description: "Majorly used in plumbing",
        price: 200,
        image: [pipes],
        category: "Plumbing",
        subCategory: "",
        type: ["pvc, ppr"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaac",
        name: "Sockets",
        description: "Used in lighting and internal electric wiring",
        price: 330,
        image: [hinges],
        category: "Electrical Appliances",
        subCategory: "",
        type: [null],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Paints",
        description: "Used to make the outlook of the building more beautifull",
        price: 200,
        image: [paint],
        category: "Design",
        subCategory: "",
        type: ["green" , 'Red', 'Orange', 'White'],
        date: 1716634345448,
        bestseller: true
    },
]