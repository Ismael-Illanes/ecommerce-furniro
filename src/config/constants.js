import roomImages from "../helpers/roomImages";
import headerImages from "../helpers/bannerImages";

/* APP CONSTS */

export const lngs = {
  en: { nativeName: "English" },
  es: { nativeName: "Spanish" },
};

export const rooms = [
  { imgSrc: roomImages.dinningRoom, text: "rooms.dining" },
  { imgSrc: roomImages.livingRoom, text: "rooms.living" },
  { imgSrc: roomImages.bedRoom, text: "rooms.bedroom" },
];

/* HEADER CONSTS */

export const iconLinks = [
  { src: headerImages.alertsIcon, alt: "Alerts", href: "#" },
  { src: headerImages.searchIcon, alt: "Search", href: "#" },
  { src: headerImages.heartIcon, alt: "Heart", href: "#" },
  { src: headerImages.cartIcon, alt: "Cart", href: "#" },
];

export const navLinks = [
  { key: "nav.home", defaultText: "Home", href: "#" },
  { key: "nav.shop", defaultText: "Shop", href: "#" },
  { key: "nav.about", defaultText: "About", href: "#" },
  { key: "nav.contact", defaultText: "Contact", href: "#" },
];