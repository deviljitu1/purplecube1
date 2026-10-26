export interface CollectionDesign {
  id: string;
  name: string;
  image: string;
  imageFit?: 'contain';
  productId?: string;
}

export interface ProductCollection {
  id: string;
  label: string;
  image: string;
  imageFit?: 'contain';
  designs: CollectionDesign[];
}

export interface ProductCategory {
  id: string;
  label: string;
  image: string;
  imageFit?: 'contain';
  subcategories: ProductCollection[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    "id": "gifts",
    "label": "Personalised Gifts",
    "image": "/images/collection-keychains.webp",
    "subcategories": [
      {
        "id": "keychains",
        "label": "Name Keyrings & NFC",
        "image": "/images/studio-floral-name-keyring-set.webp",
        "designs": [
          {
            "id": "studio-floral-name-keyring-set",
            "name": "Floral Name Keyring Set",
            "image": "/images/studio-floral-name-keyring-set.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-purple-nfc-keyrings",
            "name": "Purple NFC Keyrings",
            "image": "/images/studio-purple-nfc-keyrings.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-camera-keyrings",
            "name": "Camera Keyrings",
            "image": "/images/studio-camera-keyrings.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-superhero-symbol-keyrings",
            "name": "Superhero Symbol Keyrings",
            "image": "/images/studio-superhero-symbol-keyrings.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spider-man-name-keyring",
            "name": "Spider-Man Name Keyring",
            "image": "/images/studio-spider-man-name-keyring.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spider-symbol-keyring",
            "name": "Spider Symbol Keyring",
            "image": "/images/studio-spider-symbol-keyring.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-comic-pattern-bookmarks",
            "name": "Comic Pattern Bookmarks",
            "image": "/images/studio-comic-pattern-bookmarks.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-emergency-contact-nfc-tag",
            "name": "Emergency Contact NFC Tag",
            "image": "/images/studio-emergency-contact-nfc-tag.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-nfc-display-stand",
            "name": "NFC Display Stand",
            "image": "/images/studio-nfc-display-stand.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-social-media-keyring-set",
            "name": "Social Media Keyring Set",
            "image": "/images/studio-social-media-keyring-set.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-icon-nfc-tags",
            "name": "Icon NFC Tags",
            "image": "/images/studio-icon-nfc-tags.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-round-nfc-keyrings",
            "name": "Round NFC Keyrings",
            "image": "/images/studio-round-nfc-keyrings.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-medical-information-tag",
            "name": "Medical Information Tag",
            "image": "/images/studio-medical-information-tag.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-sunflower-keyring",
            "name": "Sunflower Keyring",
            "image": "/images/studio-sunflower-keyring.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-wi-fi-nfc-sign",
            "name": "Wi-Fi NFC Sign",
            "image": "/images/studio-wi-fi-nfc-sign.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-diamond-keyring",
            "name": "Diamond Keyring",
            "image": "/images/studio-diamond-keyring.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-miffy-rabbit-keyring",
            "name": "Miffy Rabbit Keyring",
            "image": "/images/studio-miffy-rabbit-keyring.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-logo-keyring-set",
            "name": "Logo Keyring Set",
            "image": "/images/studio-logo-keyring-set.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-miniature-hand-keyring",
            "name": "Miniature Hand Keyring",
            "image": "/images/studio-miniature-hand-keyring.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-mini-claw-machine-keyring",
            "name": "Mini Claw Machine Keyring",
            "image": "/images/studio-mini-claw-machine-keyring.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-quote-keyring",
            "name": "Quote Keyring",
            "image": "/images/studio-quote-keyring.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-corporate-logo-name-keyrings",
            "name": "Corporate Logo Name Keyrings",
            "image": "/images/studio-corporate-logo-name-keyrings.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-custom-brand-keyrings",
            "name": "Custom Brand Keyrings",
            "image": "/images/studio-custom-brand-keyrings.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-business-logo-keyring-collection",
            "name": "Business Logo Keyring Collection",
            "image": "/images/studio-business-logo-keyring-collection.webp",
            "imageFit": "contain"
          },
          {
            "id": "keychains-01",
            "name": "Geometric Name Keyring",
            "image": "/images/collection-keychains.webp"
          },
          {
            "id": "keychains-02",
            "name": "Floral Name Keyring",
            "image": "/images/design-keychain-name.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "photo-frames",
        "label": "Photo Gifts & Miniatures",
        "image": "/images/studio-personalised-family-miniatures.webp",
        "designs": [
          {
            "id": "studio-personalised-family-miniatures",
            "name": "Personalised Family Miniatures",
            "image": "/images/studio-personalised-family-miniatures.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-heart-lithophane-keepsake",
            "name": "Heart Lithophane Keepsake",
            "image": "/images/studio-heart-lithophane-keepsake.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-personalised-portrait-bust",
            "name": "Personalised Portrait Bust",
            "image": "/images/studio-personalised-portrait-bust.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-photo-portrait-keyring",
            "name": "Photo Portrait Keyring",
            "image": "/images/studio-photo-portrait-keyring.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-personalised-couple-busts",
            "name": "Personalised Couple Busts",
            "image": "/images/studio-personalised-couple-busts.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-couple-figurines",
            "name": "Couple Figurines",
            "image": "/images/studio-couple-figurines.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-traditional-portrait-bust",
            "name": "Traditional Portrait Bust",
            "image": "/images/studio-traditional-portrait-bust.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-photo-to-couple-miniatures",
            "name": "Photo to Couple Miniatures",
            "image": "/images/studio-photo-to-couple-miniatures.webp",
            "imageFit": "contain"
          },
          {
            "id": "photo-frames-01",
            "name": "Lithophane Photo Frame",
            "image": "/images/collection-photo-frames.webp"
          },
          {
            "id": "photo-frames-02",
            "name": "Heart Photo Frame",
            "image": "/images/design-frame-heart.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "trophies",
        "label": "Trophies & Awards",
        "image": "/images/collection-trophies.webp",
        "designs": [
          {
            "id": "trophies-01",
            "name": "Spiral Achievement Award",
            "image": "/images/collection-trophies.webp"
          },
          {
            "id": "trophies-02",
            "name": "Star Recognition Award",
            "image": "/images/design-award-star.webp"
          }
        ]
      },
      {
        "id": "nameplates",
        "label": "Nameplates",
        "image": "/images/studio-butterfly-name-sign.webp",
        "designs": [
          {
            "id": "studio-welcome-home-wall-sign",
            "name": "Welcome Home Wall Sign",
            "image": "/images/studio-welcome-home-wall-sign.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-butterfly-name-sign",
            "name": "Butterfly Name Sign",
            "image": "/images/studio-butterfly-name-sign.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-floral-letter-name-sign",
            "name": "Floral Letter Name Sign",
            "image": "/images/studio-floral-letter-name-sign.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-wedding-couple-name-sign",
            "name": "Wedding Couple Name Sign",
            "image": "/images/studio-wedding-couple-name-sign.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-initial-name-display",
            "name": "Initial Name Display",
            "image": "/images/studio-initial-name-display.webp",
            "imageFit": "contain"
          },
          {
            "id": "nameplates-01",
            "name": "Arched Desk Nameplate",
            "image": "/images/collection-nameplates.webp"
          },
          {
            "id": "nameplates-02",
            "name": "Cloud Name Sign",
            "image": "/images/design-nameplate-cloud.webp"
          }
        ],
        "imageFit": "contain"
      }
    ]
  },
  {
    "id": "idols",
    "label": "Idols & Spiritual",
    "image": "/images/ganpati-thumb.webp",
    "subcategories": [
      {
        "id": "ganesha",
        "label": "Ganesha",
        "image": "/images/studio-seated-ganesha.webp",
        "designs": [
          {
            "id": "studio-lotus-ganesha",
            "name": "Lotus Ganesha",
            "image": "/images/studio-lotus-ganesha.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-seated-ganesha",
            "name": "Seated Ganesha",
            "image": "/images/studio-seated-ganesha.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-classic-ganesha",
            "name": "Classic Ganesha",
            "image": "/images/studio-classic-ganesha.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-minimal-ganesha-pair",
            "name": "Minimal Ganesha Pair",
            "image": "/images/studio-minimal-ganesha-pair.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-ganesha-lotus-relief",
            "name": "Ganesha Lotus Relief",
            "image": "/images/studio-ganesha-lotus-relief.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-ganesha-round-wall-panel",
            "name": "Ganesha Round Wall Panel",
            "image": "/images/studio-ganesha-round-wall-panel.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-baby-ganesha-with-flute",
            "name": "Baby Ganesha with Flute",
            "image": "/images/studio-baby-ganesha-with-flute.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-ornate-ganesha-throne",
            "name": "Ornate Ganesha Throne",
            "image": "/images/studio-ornate-ganesha-throne.webp",
            "imageFit": "contain"
          },
          {
            "id": "ganesha-01",
            "name": "Artisan Vinayaka Idol",
            "image": "/images/ganpati-thumb.webp",
            "productId": "ganpati-silk-gold"
          },
          {
            "id": "ganesha-02",
            "name": "Minimal Ganesha",
            "image": "/images/design-ganesha-minimal.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "shiva",
        "label": "Shiva",
        "image": "/images/studio-adiyogi-bust.webp",
        "designs": [
          {
            "id": "studio-meditating-shiva-in-black",
            "name": "Meditating Shiva in Black",
            "image": "/images/studio-meditating-shiva-in-black.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-adiyogi-bust",
            "name": "Adiyogi Bust",
            "image": "/images/studio-adiyogi-bust.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-shiva-dynamic-sculpture",
            "name": "Shiva Dynamic Sculpture",
            "image": "/images/studio-shiva-dynamic-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-shiva-wall-relief",
            "name": "Shiva Wall Relief",
            "image": "/images/studio-shiva-wall-relief.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-shiva-family",
            "name": "Shiva Family",
            "image": "/images/studio-shiva-family.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-shiva-with-nandi",
            "name": "Shiva with Nandi",
            "image": "/images/studio-shiva-with-nandi.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-shiva-beneath-serpent-canopy",
            "name": "Shiva beneath Serpent Canopy",
            "image": "/images/studio-shiva-beneath-serpent-canopy.webp",
            "imageFit": "contain"
          },
          {
            "id": "shiva-01",
            "name": "Meditating Shiva",
            "image": "/images/collection-shiva.webp"
          },
          {
            "id": "shiva-02",
            "name": "Adiyogi Bust",
            "image": "/images/design-shiva-bust.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "krishna",
        "label": "Krishna & Other Deities",
        "image": "/images/studio-radha-krishna-pair.webp",
        "designs": [
          {
            "id": "studio-sacred-deities-relief",
            "name": "Sacred Deities Relief",
            "image": "/images/studio-sacred-deities-relief.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-venkateswara-bust",
            "name": "Venkateswara Bust",
            "image": "/images/studio-venkateswara-bust.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-devotional-incense-holder",
            "name": "Devotional Incense Holder",
            "image": "/images/studio-devotional-incense-holder.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-radha-krishna-pair",
            "name": "Radha Krishna Pair",
            "image": "/images/studio-radha-krishna-pair.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-devotional-mouse-pair",
            "name": "Devotional Mouse Pair",
            "image": "/images/studio-devotional-mouse-pair.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-durga-on-lion",
            "name": "Durga on Lion",
            "image": "/images/studio-durga-on-lion.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-meditating-hanuman",
            "name": "Meditating Hanuman",
            "image": "/images/studio-meditating-hanuman.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-baby-krishna",
            "name": "Baby Krishna",
            "image": "/images/studio-baby-krishna.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-rama-temple-arch",
            "name": "Rama Temple Arch",
            "image": "/images/studio-rama-temple-arch.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-ornamental-krishna",
            "name": "Ornamental Krishna",
            "image": "/images/studio-ornamental-krishna.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-krishna-with-flute",
            "name": "Krishna with Flute",
            "image": "/images/studio-krishna-with-flute.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-lakshmi-on-lotus",
            "name": "Lakshmi on Lotus",
            "image": "/images/studio-lakshmi-on-lotus.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-surya-chariot",
            "name": "Surya Chariot",
            "image": "/images/studio-surya-chariot.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-sacred-cow-and-calf",
            "name": "Sacred Cow and Calf",
            "image": "/images/studio-sacred-cow-and-calf.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-simhavahini-durga",
            "name": "Simhavahini Durga",
            "image": "/images/studio-simhavahini-durga.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-jagannath-balabhadra-subhadra",
            "name": "Jagannath Balabhadra Subhadra",
            "image": "/images/studio-jagannath-balabhadra-subhadra.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-kneeling-hanuman",
            "name": "Kneeling Hanuman",
            "image": "/images/studio-kneeling-hanuman.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-baby-krishna-with-calf",
            "name": "Baby Krishna with Calf",
            "image": "/images/studio-baby-krishna-with-calf.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-traditional-devotional-figure",
            "name": "Traditional Devotional Figure",
            "image": "/images/studio-traditional-devotional-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-flowing-krishna-sculpture",
            "name": "Flowing Krishna Sculpture",
            "image": "/images/studio-flowing-krishna-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-standing-rama",
            "name": "Standing Rama",
            "image": "/images/studio-standing-rama.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-radha-krishna-sculpture",
            "name": "Radha Krishna Sculpture",
            "image": "/images/studio-radha-krishna-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-ayyappa",
            "name": "Ayyappa",
            "image": "/images/studio-ayyappa.webp",
            "imageFit": "contain"
          },
          {
            "id": "krishna-01",
            "name": "Flute Krishna",
            "image": "/images/collection-krishna.webp"
          },
          {
            "id": "krishna-02",
            "name": "Child Krishna",
            "image": "/images/design-krishna-child.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "buddha",
        "label": "Buddha & Sacred Decor",
        "image": "/images/studio-garden-buddha.webp",
        "designs": [
          {
            "id": "studio-buddha-halo-sculpture",
            "name": "Buddha Halo Sculpture",
            "image": "/images/studio-buddha-halo-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-angel-decor-pair",
            "name": "Angel Decor Pair",
            "image": "/images/studio-angel-decor-pair.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-resting-monk",
            "name": "Resting Monk",
            "image": "/images/studio-resting-monk.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-om-wall-decor",
            "name": "Om Wall Decor",
            "image": "/images/studio-om-wall-decor.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-lotus-om-medallion",
            "name": "Lotus Om Medallion",
            "image": "/images/studio-lotus-om-medallion.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-temple-mandap-model",
            "name": "Temple Mandap Model",
            "image": "/images/studio-temple-mandap-model.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-sai-baba",
            "name": "Sai Baba",
            "image": "/images/studio-sai-baba.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-garden-buddha",
            "name": "Garden Buddha",
            "image": "/images/studio-garden-buddha.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-reclining-buddha",
            "name": "Reclining Buddha",
            "image": "/images/studio-reclining-buddha.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-virgin-mary-statue",
            "name": "Virgin Mary Statue",
            "image": "/images/studio-virgin-mary-statue.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-calligraphy-desk-sculpture",
            "name": "Calligraphy Desk Sculpture",
            "image": "/images/studio-calligraphy-desk-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "buddha-01",
            "name": "Lotus Buddha",
            "image": "/images/collection-buddha.webp"
          },
          {
            "id": "buddha-02",
            "name": "Reclining Buddha",
            "image": "/images/design-buddha-reclining.webp"
          }
        ],
        "imageFit": "contain"
      }
    ]
  },
  {
    "id": "miniatures",
    "label": "Miniatures",
    "image": "/images/collection-anime.webp",
    "subcategories": [
      {
        "id": "marvel",
        "label": "Marvel, Comics & Film",
        "image": "/images/studio-deadpool-shelf-sitter.webp",
        "designs": [
          {
            "id": "studio-batman-shelf-sitter",
            "name": "Batman Shelf Sitter",
            "image": "/images/studio-batman-shelf-sitter.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-deadpool-shelf-sitter",
            "name": "Deadpool Shelf Sitter",
            "image": "/images/studio-deadpool-shelf-sitter.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-thanos-figure",
            "name": "Thanos Figure",
            "image": "/images/studio-thanos-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-joker-shelf-sitter",
            "name": "Joker Shelf Sitter",
            "image": "/images/studio-joker-shelf-sitter.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-batman-armoured-shelf-sitter",
            "name": "Batman Armoured Shelf Sitter",
            "image": "/images/studio-batman-armoured-shelf-sitter.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-armoured-hero-shelf-sitter",
            "name": "Armoured Hero Shelf Sitter",
            "image": "/images/studio-armoured-hero-shelf-sitter.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-iron-man-shelf-sitter",
            "name": "Iron Man Shelf Sitter",
            "image": "/images/studio-iron-man-shelf-sitter.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-comic-heroes-wall-panels",
            "name": "Comic Heroes Wall Panels",
            "image": "/images/studio-comic-heroes-wall-panels.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-venom-wall-sculpture",
            "name": "Venom Wall Sculpture",
            "image": "/images/studio-venom-wall-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-hulk-action-figure",
            "name": "Hulk Action Figure",
            "image": "/images/studio-hulk-action-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-tactical-vigilante-figure",
            "name": "Tactical Vigilante Figure",
            "image": "/images/studio-tactical-vigilante-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spider-man-in-a-suit",
            "name": "Spider-Man in a Suit",
            "image": "/images/studio-spider-man-in-a-suit.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spider-gwen-figure",
            "name": "Spider-Gwen Figure",
            "image": "/images/studio-spider-gwen-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-thanos-bust",
            "name": "Thanos Bust",
            "image": "/images/studio-thanos-bust.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-hulk-bust",
            "name": "Hulk Bust",
            "image": "/images/studio-hulk-bust.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-moon-knight-in-a-suit",
            "name": "Moon Knight in a Suit",
            "image": "/images/studio-moon-knight-in-a-suit.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-hulk-display-figure",
            "name": "Hulk Display Figure",
            "image": "/images/studio-hulk-display-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-urban-wolverine",
            "name": "Urban Wolverine",
            "image": "/images/studio-urban-wolverine.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-armoured-duck-hero",
            "name": "Armoured Duck Hero",
            "image": "/images/studio-armoured-duck-hero.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spider-man-beach-figure",
            "name": "Spider-Man Beach Figure",
            "image": "/images/studio-spider-man-beach-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-the-thing-figure",
            "name": "The Thing Figure",
            "image": "/images/studio-the-thing-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-groot-figures",
            "name": "Groot Figures",
            "image": "/images/studio-groot-figures.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-black-widow-bust",
            "name": "Black Widow Bust",
            "image": "/images/studio-black-widow-bust.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-black-panther-chibi-figure",
            "name": "Black Panther Chibi Figure",
            "image": "/images/studio-black-panther-chibi-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-upside-down-spider-man",
            "name": "Upside-Down Spider-Man",
            "image": "/images/studio-upside-down-spider-man.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-darth-vader-tactical-figure",
            "name": "Darth Vader Tactical Figure",
            "image": "/images/studio-darth-vader-tactical-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "design-comic-batman",
            "name": "Batman (DC)",
            "image": "/images/design-comic-batman.webp",
            "imageFit": "contain"
          },
          {
            "id": "design-marvel-doom",
            "name": "Doctor Doom",
            "image": "/images/design-marvel-doom.webp",
            "imageFit": "contain"
          },
          {
            "id": "design-comic-hellboy",
            "name": "Hellboy (Dark Horse)",
            "image": "/images/design-comic-hellboy.webp",
            "imageFit": "contain"
          },
          {
            "id": "design-marvel-spiderman",
            "name": "Superior Spider-Man",
            "image": "/images/design-marvel-spiderman.webp",
            "imageFit": "contain"
          },
          {
            "id": "design-marvel-ironman",
            "name": "Iron Man",
            "image": "/images/design-marvel-ironman.webp",
            "imageFit": "contain"
          },
          {
            "id": "design-marvel-wanda-vision",
            "name": "Scarlet Witch & Vision",
            "image": "/images/design-marvel-wanda-vision.webp",
            "imageFit": "contain"
          },
          {
            "id": "design-marvel-deadpool",
            "name": "Deadpool",
            "image": "/images/design-marvel-deadpool.webp",
            "imageFit": "contain"
          },
          {
            "id": "design-marvel-scarlet-witch",
            "name": "Scarlet Witch",
            "image": "/images/design-marvel-scarlet-witch.webp",
            "imageFit": "contain"
          },
          {
            "id": "design-marvel-moon-knight",
            "name": "Moon Knight",
            "image": "/images/design-marvel-moon-knight.webp",
            "imageFit": "contain"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "anime",
        "label": "Anime",
        "image": "/images/collection-anime.webp",
        "designs": [
          {
            "id": "anime-01",
            "name": "Storm Warrior",
            "image": "/images/collection-anime.webp"
          },
          {
            "id": "anime-02",
            "name": "Samurai Miniature Bust",
            "image": "/images/miniature-bust-thumb.webp",
            "productId": "cyber-miniature-bust"
          }
        ]
      },
      {
        "id": "cartoons",
        "label": "Cartoons",
        "image": "/images/collection-cartoons.webp",
        "designs": [
          {
            "id": "studio-pikachu-iron-man-crossover",
            "name": "Pikachu Iron Man Crossover",
            "image": "/images/studio-pikachu-iron-man-crossover.webp",
            "imageFit": "contain"
          },
          {
            "id": "cartoons-01",
            "name": "Woodland Fox",
            "image": "/images/collection-cartoons.webp"
          },
          {
            "id": "cartoons-02",
            "name": "Panda Keepsake",
            "image": "/images/design-cartoon-panda.webp"
          }
        ]
      },
      {
        "id": "gaming",
        "label": "Gaming & Fantasy",
        "image": "/images/collection-gaming.webp",
        "designs": [
          {
            "id": "studio-animatronic-rabbit-figure",
            "name": "Animatronic Rabbit Figure",
            "image": "/images/studio-animatronic-rabbit-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-fantasy-wizard-on-throne",
            "name": "Fantasy Wizard on Throne",
            "image": "/images/studio-fantasy-wizard-on-throne.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-fantasy-ranger-figure",
            "name": "Fantasy Ranger Figure",
            "image": "/images/studio-fantasy-ranger-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "gaming-01",
            "name": "Space Explorer",
            "image": "/images/collection-gaming.webp"
          },
          {
            "id": "gaming-02",
            "name": "Retro Robot",
            "image": "/images/design-gaming-robot.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "home",
    "label": "Home & Desk",
    "image": "/images/spiral-vase-thumb.webp",
    "subcategories": [
      {
        "id": "decor",
        "label": "Vases & Sculptures",
        "image": "/images/studio-ribbed-vase-set.webp",
        "designs": [
          {
            "id": "studio-ribbed-vase-set",
            "name": "Ribbed Vase Set",
            "image": "/images/studio-ribbed-vase-set.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-flowing-horse-sculpture",
            "name": "Flowing Horse Sculpture",
            "image": "/images/studio-flowing-horse-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-face-planter",
            "name": "Face Planter",
            "image": "/images/studio-face-planter.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-ornate-iron-man-mask",
            "name": "Ornate Iron Man Mask",
            "image": "/images/studio-ornate-iron-man-mask.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-green-goblin-mask",
            "name": "Green Goblin Mask",
            "image": "/images/studio-green-goblin-mask.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spider-man-layered-wall-art",
            "name": "Spider-Man Layered Wall Art",
            "image": "/images/studio-spider-man-layered-wall-art.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-iron-man-wall-art",
            "name": "Iron Man Wall Art",
            "image": "/images/studio-iron-man-wall-art.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spider-man-comic-panel",
            "name": "Spider-Man Comic Panel",
            "image": "/images/studio-spider-man-comic-panel.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-captain-america-wall-art",
            "name": "Captain America Wall Art",
            "image": "/images/studio-captain-america-wall-art.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spider-man-framed-art",
            "name": "Spider-Man Framed Art",
            "image": "/images/studio-spider-man-framed-art.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-anime-silhouette-wall-art",
            "name": "Anime Silhouette Wall Art",
            "image": "/images/studio-anime-silhouette-wall-art.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-iron-man-repulsor-wall-art",
            "name": "Iron Man Repulsor Wall Art",
            "image": "/images/studio-iron-man-repulsor-wall-art.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-horror-clown-mask",
            "name": "Horror Clown Mask",
            "image": "/images/studio-horror-clown-mask.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-tulip-bouquet-sculpture",
            "name": "Tulip Bouquet Sculpture",
            "image": "/images/studio-tulip-bouquet-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-poodle-sculpture",
            "name": "Poodle Sculpture",
            "image": "/images/studio-poodle-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-flower-pot-collection",
            "name": "Flower Pot Collection",
            "image": "/images/studio-flower-pot-collection.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-crescent-moon-planter",
            "name": "Crescent Moon Planter",
            "image": "/images/studio-crescent-moon-planter.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-cherry-blossom-bonsai",
            "name": "Cherry Blossom Bonsai",
            "image": "/images/studio-cherry-blossom-bonsai.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-expressive-face-planters",
            "name": "Expressive Face Planters",
            "image": "/images/studio-expressive-face-planters.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-abstract-ribbon-sculpture",
            "name": "Abstract Ribbon Sculpture",
            "image": "/images/studio-abstract-ribbon-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spiral-cat-sculpture",
            "name": "Spiral Cat Sculpture",
            "image": "/images/studio-spiral-cat-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-sheep-decor-trio",
            "name": "Sheep Decor Trio",
            "image": "/images/studio-sheep-decor-trio.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-ornamental-elephant",
            "name": "Ornamental Elephant",
            "image": "/images/studio-ornamental-elephant.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-geometric-anubis",
            "name": "Geometric Anubis",
            "image": "/images/studio-geometric-anubis.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-nutcracker-sculptures",
            "name": "Nutcracker Sculptures",
            "image": "/images/studio-nutcracker-sculptures.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-low-poly-horse",
            "name": "Low-Poly Horse",
            "image": "/images/studio-low-poly-horse.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-deer-pair",
            "name": "Deer Pair",
            "image": "/images/studio-deer-pair.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-abstract-swan",
            "name": "Abstract Swan",
            "image": "/images/studio-abstract-swan.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-low-poly-tortoise",
            "name": "Low-Poly Tortoise",
            "image": "/images/studio-low-poly-tortoise.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-lion-on-rock",
            "name": "Lion on Rock",
            "image": "/images/studio-lion-on-rock.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-elephant-pair",
            "name": "Elephant Pair",
            "image": "/images/studio-elephant-pair.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-minimal-horse",
            "name": "Minimal Horse",
            "image": "/images/studio-minimal-horse.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-unicorn-figure",
            "name": "Unicorn Figure",
            "image": "/images/studio-unicorn-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-meditation-loop-sculpture",
            "name": "Meditation Loop Sculpture",
            "image": "/images/studio-meditation-loop-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-pastel-elephant-pair",
            "name": "Pastel Elephant Pair",
            "image": "/images/studio-pastel-elephant-pair.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-lion-in-a-suit",
            "name": "Lion in a Suit",
            "image": "/images/studio-lion-in-a-suit.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-heart-hands-sculpture",
            "name": "Heart Hands Sculpture",
            "image": "/images/studio-heart-hands-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-knitted-texture-vase",
            "name": "Knitted Texture Vase",
            "image": "/images/studio-knitted-texture-vase.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-peacock-sculpture",
            "name": "Peacock Sculpture",
            "image": "/images/studio-peacock-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-astronaut-moon-sculpture",
            "name": "Astronaut Moon Sculpture",
            "image": "/images/studio-astronaut-moon-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-musical-instrument-sculpture",
            "name": "Musical Instrument Sculpture",
            "image": "/images/studio-musical-instrument-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-ornamental-horse",
            "name": "Ornamental Horse",
            "image": "/images/studio-ornamental-horse.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-minimal-elephant-family",
            "name": "Minimal Elephant Family",
            "image": "/images/studio-minimal-elephant-family.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-abstract-owl",
            "name": "Abstract Owl",
            "image": "/images/studio-abstract-owl.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-ornamental-lion",
            "name": "Ornamental Lion",
            "image": "/images/studio-ornamental-lion.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-geometric-dog-collection",
            "name": "Geometric Dog Collection",
            "image": "/images/studio-geometric-dog-collection.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-minimal-cat",
            "name": "Minimal Cat",
            "image": "/images/studio-minimal-cat.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-fragmented-face-sculpture",
            "name": "Fragmented Face Sculpture",
            "image": "/images/studio-fragmented-face-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-rose-keepsake-figure",
            "name": "Rose Keepsake Figure",
            "image": "/images/studio-rose-keepsake-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-golden-geometric-bear",
            "name": "Golden Geometric Bear",
            "image": "/images/studio-golden-geometric-bear.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spartan-warrior",
            "name": "Spartan Warrior",
            "image": "/images/studio-spartan-warrior.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-embrace-face-sculpture",
            "name": "Embrace Face Sculpture",
            "image": "/images/studio-embrace-face-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-charging-bull",
            "name": "Charging Bull",
            "image": "/images/studio-charging-bull.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-sitting-piglet",
            "name": "Sitting Piglet",
            "image": "/images/studio-sitting-piglet.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-owl-pair",
            "name": "Owl Pair",
            "image": "/images/studio-owl-pair.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-abstract-leaf-sculpture",
            "name": "Abstract Leaf Sculpture",
            "image": "/images/studio-abstract-leaf-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-three-wise-owls",
            "name": "Three Wise Owls",
            "image": "/images/studio-three-wise-owls.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-geometric-bull-pair",
            "name": "Geometric Bull Pair",
            "image": "/images/studio-geometric-bull-pair.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-samurai-warrior",
            "name": "Samurai Warrior",
            "image": "/images/studio-samurai-warrior.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-highland-cow-family",
            "name": "Highland Cow Family",
            "image": "/images/studio-highland-cow-family.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-reading-dog-sculpture",
            "name": "Reading Dog Sculpture",
            "image": "/images/studio-reading-dog-sculpture.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-monk-monitor-figure",
            "name": "Monk Monitor Figure",
            "image": "/images/studio-monk-monitor-figure.webp",
            "imageFit": "contain"
          },
          {
            "id": "decor-01",
            "name": "Spiral Vase",
            "image": "/images/spiral-vase-thumb.webp",
            "productId": "voronoi-spiral-vase"
          },
          {
            "id": "decor-02",
            "name": "Ribbed Arch Vase",
            "image": "/images/design-vase-arch.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "organisers",
        "label": "Desk Organisers",
        "image": "/images/studio-phone-and-pen-organiser.webp",
        "designs": [
          {
            "id": "studio-spider-man-pencil-holder",
            "name": "Spider-Man Pencil Holder",
            "image": "/images/studio-spider-man-pencil-holder.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-owl-drawer-organiser",
            "name": "Owl Drawer Organiser",
            "image": "/images/studio-owl-drawer-organiser.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-doctor-name-pen-holder",
            "name": "Doctor Name Pen Holder",
            "image": "/images/studio-doctor-name-pen-holder.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-tooth-business-card-holder",
            "name": "Tooth Business Card Holder",
            "image": "/images/studio-tooth-business-card-holder.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-phone-and-pen-organiser",
            "name": "Phone and Pen Organiser",
            "image": "/images/studio-phone-and-pen-organiser.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-personalised-name-organiser",
            "name": "Personalised Name Organiser",
            "image": "/images/studio-personalised-name-organiser.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-paper-bag-pencil-pot",
            "name": "Paper Bag Pencil Pot",
            "image": "/images/studio-paper-bag-pencil-pot.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-puffer-jacket-pen-holders",
            "name": "Puffer Jacket Pen Holders",
            "image": "/images/studio-puffer-jacket-pen-holders.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-panda-pencil-holder",
            "name": "Panda Pencil Holder",
            "image": "/images/studio-panda-pencil-holder.webp",
            "imageFit": "contain"
          },
          {
            "id": "organisers-01",
            "name": "Hex Desk Organiser",
            "image": "/images/desk-organizer-thumb.webp",
            "productId": "hex-desk-organizer"
          },
          {
            "id": "organisers-02",
            "name": "Wave Desk Organiser",
            "image": "/images/design-organiser-wave.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "device-stands",
        "label": "Device Stands",
        "image": "/images/collection-device-stands.webp",
        "designs": [
          {
            "id": "device-stands-01",
            "name": "Headphone & Phone Stand",
            "image": "/images/collection-device-stands.webp"
          },
          {
            "id": "device-stands-02",
            "name": "Elephant Phone Stand",
            "image": "/images/design-stand-elephant.webp"
          }
        ]
      },
      {
        "id": "lamps",
        "label": "Decorative Lamps",
        "image": "/images/studio-twist-table-lamp.webp",
        "designs": [
          {
            "id": "studio-geometric-cube-lamp",
            "name": "Geometric Cube Lamp",
            "image": "/images/studio-geometric-cube-lamp.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-dog-bulb-lamp",
            "name": "Dog Bulb Lamp",
            "image": "/images/studio-dog-bulb-lamp.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-articulated-desk-lamp",
            "name": "Articulated Desk Lamp",
            "image": "/images/studio-articulated-desk-lamp.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-layered-leaf-pendant-lamp",
            "name": "Layered Leaf Pendant Lamp",
            "image": "/images/studio-layered-leaf-pendant-lamp.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-lotus-table-lamp",
            "name": "Lotus Table Lamp",
            "image": "/images/studio-lotus-table-lamp.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-twist-table-lamp",
            "name": "Twist Table Lamp",
            "image": "/images/studio-twist-table-lamp.webp",
            "imageFit": "contain"
          },
          {
            "id": "lamps-01",
            "name": "Moonlight Globe",
            "image": "/images/collection-lamps.webp"
          },
          {
            "id": "lamps-02",
            "name": "Mushroom Glow Lamp",
            "image": "/images/design-lamp-mushroom.webp"
          }
        ],
        "imageFit": "contain"
      }
    ]
  },
  {
    "id": "fidgets",
    "label": "Toys & Fidgets",
    "image": "/images/gyro-fidget-thumb.webp",
    "subcategories": [
      {
        "id": "kinetic",
        "label": "Kinetic Fidgets",
        "image": "/images/studio-spiral-square-fidget.webp",
        "designs": [
          {
            "id": "studio-spiral-square-fidget",
            "name": "Spiral Square Fidget",
            "image": "/images/studio-spiral-square-fidget.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spiral-fidget-collection",
            "name": "Spiral Fidget Collection",
            "image": "/images/studio-spiral-fidget-collection.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-spiral-cylinder-fidget",
            "name": "Spiral Cylinder Fidget",
            "image": "/images/studio-spiral-cylinder-fidget.webp",
            "imageFit": "contain"
          },
          {
            "id": "kinetic-01",
            "name": "Gyroscope Fidget",
            "image": "/images/gyro-fidget-thumb.webp",
            "productId": "kinetic-gyro-fidget"
          },
          {
            "id": "kinetic-02",
            "name": "Infinity Cube",
            "image": "/images/design-fidget-infinity.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "articulated",
        "label": "Articulated Toys",
        "image": "/images/studio-articulated-dragon-collection.webp",
        "designs": [
          {
            "id": "studio-articulated-ghost-figures",
            "name": "Articulated Ghost Figures",
            "image": "/images/studio-articulated-ghost-figures.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-articulated-dragon-collection",
            "name": "Articulated Dragon Collection",
            "image": "/images/studio-articulated-dragon-collection.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-penguin-toy",
            "name": "Penguin Toy",
            "image": "/images/studio-penguin-toy.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-duck-toy-collection",
            "name": "Duck Toy Collection",
            "image": "/images/studio-duck-toy-collection.webp",
            "imageFit": "contain"
          },
          {
            "id": "articulated-01",
            "name": "Flexi Dragon",
            "image": "/images/collection-articulated.webp"
          },
          {
            "id": "articulated-02",
            "name": "Flexi Octopus",
            "image": "/images/design-articulated-octopus.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "puzzles",
        "label": "Puzzles",
        "image": "/images/studio-apple-sorting-puzzle.webp",
        "designs": [
          {
            "id": "studio-apple-sorting-puzzle",
            "name": "Apple Sorting Puzzle",
            "image": "/images/studio-apple-sorting-puzzle.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-colour-sorting-learning-toy",
            "name": "Colour Sorting Learning Toy",
            "image": "/images/studio-colour-sorting-learning-toy.webp",
            "imageFit": "contain"
          },
          {
            "id": "puzzles-01",
            "name": "Interlocking Burr Puzzle",
            "image": "/images/collection-puzzles.webp"
          },
          {
            "id": "puzzles-02",
            "name": "Sliding Tile Puzzle",
            "image": "/images/design-puzzle-slider.webp"
          }
        ],
        "imageFit": "contain"
      },
      {
        "id": "vehicles",
        "label": "Toy Vehicles",
        "image": "/images/studio-toy-off-road-jeep.webp",
        "designs": [
          {
            "id": "studio-pull-cord-flying-toy",
            "name": "Pull-Cord Flying Toy",
            "image": "/images/studio-pull-cord-flying-toy.webp",
            "imageFit": "contain"
          },
          {
            "id": "studio-toy-off-road-jeep",
            "name": "Toy Off-Road Jeep",
            "image": "/images/studio-toy-off-road-jeep.webp",
            "imageFit": "contain"
          },
          {
            "id": "vehicles-01",
            "name": "Racing Car",
            "image": "/images/collection-vehicles.webp"
          },
          {
            "id": "vehicles-02",
            "name": "Vintage Toy Car",
            "image": "/images/design-vehicle-vintage.webp"
          }
        ],
        "imageFit": "contain"
      }
    ]
  },
  {
    "id": "models",
    "label": "Models & Parts",
    "image": "/images/villa-model-thumb.webp",
    "subcategories": [
      {
        "id": "architecture",
        "label": "Architectural Models",
        "image": "/images/villa-model-thumb.webp",
        "designs": [
          {
            "id": "studio-fantasy-citadel-model",
            "name": "Fantasy Citadel Model",
            "image": "/images/studio-fantasy-citadel-model.webp",
            "imageFit": "contain"
          },
          {
            "id": "architecture-01",
            "name": "Modern Villa Model",
            "image": "/images/villa-model-thumb.webp",
            "productId": "modern-villa-model"
          },
          {
            "id": "architecture-02",
            "name": "Courtyard House Model",
            "image": "/images/design-architecture-courtyard.webp"
          }
        ]
      },
      {
        "id": "functional-parts",
        "label": "Functional Parts",
        "image": "/images/collection-functional-parts.webp",
        "designs": [
          {
            "id": "functional-parts-01",
            "name": "Mounting Bracket Set",
            "image": "/images/collection-functional-parts.webp"
          },
          {
            "id": "functional-parts-02",
            "name": "Desk Cable Clamp",
            "image": "/images/design-part-cable-clamp.webp"
          }
        ]
      },
      {
        "id": "mechanisms",
        "label": "Mechanical Assemblies",
        "image": "/images/gear-prototype-thumb.webp",
        "designs": [
          {
            "id": "mechanisms-01",
            "name": "Print-in-Place Gear Assembly",
            "image": "/images/gear-prototype-thumb.webp"
          },
          {
            "id": "mechanisms-02",
            "name": "Planetary Gear Mechanism",
            "image": "/images/design-mechanism-planetary.webp"
          }
        ]
      },
      {
        "id": "prototypes",
        "label": "Product Prototypes",
        "image": "/images/collection-prototypes.webp",
        "designs": [
          {
            "id": "studio-anatomical-skull-and-brain-model",
            "name": "Anatomical Skull and Brain Model",
            "image": "/images/studio-anatomical-skull-and-brain-model.webp",
            "imageFit": "contain"
          },
          {
            "id": "prototypes-01",
            "name": "Electronics Enclosure",
            "image": "/images/collection-prototypes.webp"
          },
          {
            "id": "prototypes-02",
            "name": "Ergonomic Controller Prototype",
            "image": "/images/design-prototype-controller.webp"
          }
        ]
      }
    ]
  }
];

export type ProductCategoryId = 'idols' | 'miniatures' | 'gifts' | 'home' | 'fidgets' | 'models';
