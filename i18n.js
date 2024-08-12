// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            shop: "Shop",
            about: "About",
            contact: "Contact",
          },
          titles: {
            part1: "Our Products",
            part2: "Browse the Range",
            part3: "We treat the skin with care.",
          },
          rooms: {
            dining: "Dining",
            living: "Living",
            bedroom: "Bedroom",
          },
          description: {
            product1: "Stylish cafe chair",
            product2: "Luxury big sofa",
            product3: "Outdoor bar table and stool",
            product4: "Elegant modern armchair",
            product5: "Classic wooden dining table",
            product6: "Comfortable leather sofa",
            product7: "Stylish office desk",
            product8: "Contemporary floor lamp",
          },
          default: {
            description: "No description available",
          },
        },
      },
      es: {
        translation: {
          nav: {
            home: "Inicio",
            shop: "Tienda",
            about: "Acerca de",
            contact: "Contacto",
          },
          titles: {
            part1: "Nuestros productos",
            part2: "Nuestra gama",
            part3: "Tratamos la piel con cuidado.",
          },
          rooms: {
            dining: "Comedor",
            living: "Sala",
            bedroom: "Dormitorio",
          },
          description: {
            product1: "Silla de café con estilo",
            product2: "Sofá grande de lujo",
            product3: "Mesa de bar exterior y taburete",
            product4: "Sillón moderno elegante",
            product5: "Mesa de comedor clásica de madera",
            product6: "Sofá de cuero cómodo",
            product7: "Escritorio de oficina elegante",
            product8: "Lámpara de suelo contemporánea",
          },
          default: {
            description: "Descripción no disponible",
          },
        },
      },
    },
  });

export default i18n;
