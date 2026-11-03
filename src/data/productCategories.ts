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
          },
          {
            "id": "studio-purple-nfc-keyrings",
            "name": "Purple NFC Keyrings",
            "image": "/images/studio-purple-nfc-keyrings.webp",
          },
          {
            "id": "studio-camera-keyrings",
            "name": "Camera Keyrings",
            "image": "/images/studio-camera-keyrings.webp",
          },
          {
            "id": "studio-superhero-symbol-keyrings",
            "name": "Superhero Symbol Keyrings",
            "image": "/images/studio-superhero-symbol-keyrings.webp",
          },
          {
            "id": "studio-spider-man-name-keyring",
            "name": "Spider-Man Name Keyring",
            "image": "/images/studio-spider-man-name-keyring.webp",
          },
          {
            "id": "studio-spider-symbol-keyring",
            "name": "Spider Symbol Keyring",
            "image": "/images/studio-spider-symbol-keyring.webp",
          },
          {
            "id": "studio-comic-pattern-bookmarks",
            "name": "Comic Pattern Bookmarks",
            "image": "/images/studio-comic-pattern-bookmarks.webp",
          },
          {
            "id": "studio-emergency-contact-nfc-tag",
            "name": "Emergency Contact NFC Tag",
            "image": "/images/studio-emergency-contact-nfc-tag.webp",
          },
          {
            "id": "studio-nfc-display-stand",
            "name": "NFC Display Stand",
            "image": "/images/studio-nfc-display-stand.webp",
          },
          {
            "id": "studio-social-media-keyring-set",
            "name": "Social Media Keyring Set",
            "image": "/images/studio-social-media-keyring-set.webp",
          },
          {
            "id": "studio-icon-nfc-tags",
            "name": "Icon NFC Tags",
            "image": "/images/studio-icon-nfc-tags.webp",
          },
          {
            "id": "studio-round-nfc-keyrings",
            "name": "Round NFC Keyrings",
            "image": "/images/studio-round-nfc-keyrings.webp",
          },
          {
            "id": "studio-medical-information-tag",
            "name": "Medical Information Tag",
            "image": "/images/studio-medical-information-tag.webp",
          },
          {
            "id": "studio-sunflower-keyring",
            "name": "Sunflower Keyring",
            "image": "/images/studio-sunflower-keyring.webp",
          },
          {
            "id": "studio-wi-fi-nfc-sign",
            "name": "Wi-Fi NFC Sign",
            "image": "/images/studio-wi-fi-nfc-sign.webp",
          },
          {
            "id": "studio-diamond-keyring",
            "name": "Diamond Keyring",
            "image": "/images/studio-diamond-keyring.webp",
          },
          {
            "id": "studio-miffy-rabbit-keyring",
            "name": "Miffy Rabbit Keyring",
            "image": "/images/studio-miffy-rabbit-keyring.webp",
          },
          {
            "id": "studio-logo-keyring-set",
            "name": "Logo Keyring Set",
            "image": "/images/studio-logo-keyring-set.webp",
          },
          {
            "id": "studio-miniature-hand-keyring",
            "name": "Miniature Hand Keyring",
            "image": "/images/studio-miniature-hand-keyring.webp",
          },
          {
            "id": "studio-mini-claw-machine-keyring",
            "name": "Mini Claw Machine Keyring",
            "image": "/images/studio-mini-claw-machine-keyring.webp",
          },
          {
            "id": "studio-quote-keyring",
            "name": "Quote Keyring",
            "image": "/images/studio-quote-keyring.webp",
          },
          {
            "id": "studio-corporate-logo-name-keyrings",
            "name": "Corporate Logo Name Keyrings",
            "image": "/images/studio-corporate-logo-name-keyrings.webp",
          },
          {
            "id": "studio-custom-brand-keyrings",
            "name": "Custom Brand Keyrings",
            "image": "/images/studio-custom-brand-keyrings.webp",
          },
          {
            "id": "studio-business-logo-keyring-collection",
            "name": "Business Logo Keyring Collection",
            "image": "/images/studio-business-logo-keyring-collection.webp",
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
          },
          {
            "id": "studio-heart-lithophane-keepsake",
            "name": "Heart Lithophane Keepsake",
            "image": "/images/studio-heart-lithophane-keepsake.webp",
          },
          {
            "id": "studio-personalised-portrait-bust",
            "name": "Personalised Portrait Bust",
            "image": "/images/studio-personalised-portrait-bust.webp",
          },
          {
            "id": "studio-photo-portrait-keyring",
            "name": "Photo Portrait Keyring",
            "image": "/images/studio-photo-portrait-keyring.webp",
          },
          {
            "id": "studio-personalised-couple-busts",
            "name": "Personalised Couple Busts",
            "image": "/images/studio-personalised-couple-busts.webp",
          },
          {
            "id": "studio-couple-figurines",
            "name": "Couple Figurines",
            "image": "/images/studio-couple-figurines.webp",
          },
          {
            "id": "studio-traditional-portrait-bust",
            "name": "Traditional Portrait Bust",
            "image": "/images/studio-traditional-portrait-bust.webp",
          },
          {
            "id": "studio-photo-to-couple-miniatures",
            "name": "Photo to Couple Miniatures",
            "image": "/images/studio-photo-to-couple-miniatures.webp",
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
          },
          {
            "id": "studio-butterfly-name-sign",
            "name": "Butterfly Name Sign",
            "image": "/images/studio-butterfly-name-sign.webp",
          },
          {
            "id": "studio-floral-letter-name-sign",
            "name": "Floral Letter Name Sign",
            "image": "/images/studio-floral-letter-name-sign.webp",
          },
          {
            "id": "studio-wedding-couple-name-sign",
            "name": "Wedding Couple Name Sign",
            "image": "/images/studio-wedding-couple-name-sign.webp",
          },
          {
            "id": "studio-initial-name-display",
            "name": "Initial Name Display",
            "image": "/images/studio-initial-name-display.webp",
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
          },
          {
            "id": "studio-seated-ganesha",
            "name": "Seated Ganesha",
            "image": "/images/studio-seated-ganesha.webp",
          },
          {
            "id": "studio-classic-ganesha",
            "name": "Classic Ganesha",
            "image": "/images/studio-classic-ganesha.webp",
          },
          {
            "id": "studio-minimal-ganesha-pair",
            "name": "Minimal Ganesha Pair",
            "image": "/images/studio-minimal-ganesha-pair.webp",
          },
          {
            "id": "studio-ganesha-lotus-relief",
            "name": "Ganesha Lotus Relief",
            "image": "/images/studio-ganesha-lotus-relief.webp",
          },
          {
            "id": "studio-ganesha-round-wall-panel",
            "name": "Ganesha Round Wall Panel",
            "image": "/images/studio-ganesha-round-wall-panel.webp",
          },
          {
            "id": "studio-baby-ganesha-with-flute",
            "name": "Baby Ganesha with Flute",
            "image": "/images/studio-baby-ganesha-with-flute.webp",
          },
          {
            "id": "studio-ornate-ganesha-throne",
            "name": "Ornate Ganesha Throne",
            "image": "/images/studio-ornate-ganesha-throne.webp",
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
          },
          {
            "id": "studio-adiyogi-bust",
            "name": "Adiyogi Bust",
            "image": "/images/studio-adiyogi-bust.webp",
          },
          {
            "id": "studio-shiva-dynamic-sculpture",
            "name": "Shiva Dynamic Sculpture",
            "image": "/images/studio-shiva-dynamic-sculpture.webp",
          },
          {
            "id": "studio-shiva-wall-relief",
            "name": "Shiva Wall Relief",
            "image": "/images/studio-shiva-wall-relief.webp",
          },
          {
            "id": "studio-shiva-family",
            "name": "Shiva Family",
            "image": "/images/studio-shiva-family.webp",
          },
          {
            "id": "studio-shiva-with-nandi",
            "name": "Shiva with Nandi",
            "image": "/images/studio-shiva-with-nandi.webp",
          },
          {
            "id": "studio-shiva-beneath-serpent-canopy",
            "name": "Shiva beneath Serpent Canopy",
            "image": "/images/studio-shiva-beneath-serpent-canopy.webp",
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
          },
          {
            "id": "studio-venkateswara-bust",
            "name": "Venkateswara Bust",
            "image": "/images/studio-venkateswara-bust.webp",
          },
          {
            "id": "studio-devotional-incense-holder",
            "name": "Devotional Incense Holder",
            "image": "/images/studio-devotional-incense-holder.webp",
          },
          {
            "id": "studio-radha-krishna-pair",
            "name": "Radha Krishna Pair",
            "image": "/images/studio-radha-krishna-pair.webp",
          },
          {
            "id": "studio-devotional-mouse-pair",
            "name": "Devotional Mouse Pair",
            "image": "/images/studio-devotional-mouse-pair.webp",
          },
          {
            "id": "studio-durga-on-lion",
            "name": "Durga on Lion",
            "image": "/images/studio-durga-on-lion.webp",
          },
          {
            "id": "studio-meditating-hanuman",
            "name": "Meditating Hanuman",
            "image": "/images/studio-meditating-hanuman.webp",
          },
          {
            "id": "studio-baby-krishna",
            "name": "Baby Krishna",
            "image": "/images/studio-baby-krishna.webp",
          },
          {
            "id": "studio-rama-temple-arch",
            "name": "Rama Temple Arch",
            "image": "/images/studio-rama-temple-arch.webp",
          },
          {
            "id": "studio-ornamental-krishna",
            "name": "Ornamental Krishna",
            "image": "/images/studio-ornamental-krishna.webp",
          },
          {
            "id": "studio-krishna-with-flute",
            "name": "Krishna with Flute",
            "image": "/images/studio-krishna-with-flute.webp",
          },
          {
            "id": "studio-lakshmi-on-lotus",
            "name": "Lakshmi on Lotus",
            "image": "/images/studio-lakshmi-on-lotus.webp",
          },
          {
            "id": "studio-surya-chariot",
            "name": "Surya Chariot",
            "image": "/images/studio-surya-chariot.webp",
          },
          {
            "id": "studio-sacred-cow-and-calf",
            "name": "Sacred Cow and Calf",
            "image": "/images/studio-sacred-cow-and-calf.webp",
          },
          {
            "id": "studio-simhavahini-durga",
            "name": "Simhavahini Durga",
            "image": "/images/studio-simhavahini-durga.webp",
          },
          {
            "id": "studio-jagannath-balabhadra-subhadra",
            "name": "Jagannath Balabhadra Subhadra",
            "image": "/images/studio-jagannath-balabhadra-subhadra.webp",
          },
          {
            "id": "studio-kneeling-hanuman",
            "name": "Kneeling Hanuman",
            "image": "/images/studio-kneeling-hanuman.webp",
          },
          {
            "id": "studio-baby-krishna-with-calf",
            "name": "Baby Krishna with Calf",
            "image": "/images/studio-baby-krishna-with-calf.webp",
          },
          {
            "id": "studio-traditional-devotional-figure",
            "name": "Traditional Devotional Figure",
            "image": "/images/studio-traditional-devotional-figure.webp",
          },
          {
            "id": "studio-flowing-krishna-sculpture",
            "name": "Flowing Krishna Sculpture",
            "image": "/images/studio-flowing-krishna-sculpture.webp",
          },
          {
            "id": "studio-standing-rama",
            "name": "Standing Rama",
            "image": "/images/studio-standing-rama.webp",
          },
          {
            "id": "studio-radha-krishna-sculpture",
            "name": "Radha Krishna Sculpture",
            "image": "/images/studio-radha-krishna-sculpture.webp",
          },
          {
            "id": "studio-ayyappa",
            "name": "Ayyappa",
            "image": "/images/studio-ayyappa.webp",
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
          },
          {
            "id": "studio-angel-decor-pair",
            "name": "Angel Decor Pair",
            "image": "/images/studio-angel-decor-pair.webp",
          },
          {
            "id": "studio-resting-monk",
            "name": "Resting Monk",
            "image": "/images/studio-resting-monk.webp",
          },
          {
            "id": "studio-om-wall-decor",
            "name": "Om Wall Decor",
            "image": "/images/studio-om-wall-decor.webp",
          },
          {
            "id": "studio-lotus-om-medallion",
            "name": "Lotus Om Medallion",
            "image": "/images/studio-lotus-om-medallion.webp",
          },
          {
            "id": "studio-temple-mandap-model",
            "name": "Temple Mandap Model",
            "image": "/images/studio-temple-mandap-model.webp",
          },
          {
            "id": "studio-sai-baba",
            "name": "Sai Baba",
            "image": "/images/studio-sai-baba.webp",
          },
          {
            "id": "studio-garden-buddha",
            "name": "Garden Buddha",
            "image": "/images/studio-garden-buddha.webp",
          },
          {
            "id": "studio-reclining-buddha",
            "name": "Reclining Buddha",
            "image": "/images/studio-reclining-buddha.webp",
          },
          {
            "id": "studio-virgin-mary-statue",
            "name": "Virgin Mary Statue",
            "image": "/images/studio-virgin-mary-statue.webp",
          },
          {
            "id": "studio-calligraphy-desk-sculpture",
            "name": "Calligraphy Desk Sculpture",
            "image": "/images/studio-calligraphy-desk-sculpture.webp",
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
          },
          {
            "id": "studio-deadpool-shelf-sitter",
            "name": "Deadpool Shelf Sitter",
            "image": "/images/studio-deadpool-shelf-sitter.webp",
          },
          {
            "id": "studio-thanos-figure",
            "name": "Thanos Figure",
            "image": "/images/studio-thanos-figure.webp",
          },
          {
            "id": "studio-joker-shelf-sitter",
            "name": "Joker Shelf Sitter",
            "image": "/images/studio-joker-shelf-sitter.webp",
          },
          {
            "id": "studio-batman-armoured-shelf-sitter",
            "name": "Batman Armoured Shelf Sitter",
            "image": "/images/studio-batman-armoured-shelf-sitter.webp",
          },
          {
            "id": "studio-armoured-hero-shelf-sitter",
            "name": "Armoured Hero Shelf Sitter",
            "image": "/images/studio-armoured-hero-shelf-sitter.webp",
          },
          {
            "id": "studio-iron-man-shelf-sitter",
            "name": "Iron Man Shelf Sitter",
            "image": "/images/studio-iron-man-shelf-sitter.webp",
          },
          {
            "id": "studio-comic-heroes-wall-panels",
            "name": "Comic Heroes Wall Panels",
            "image": "/images/studio-comic-heroes-wall-panels.webp",
          },
          {
            "id": "studio-venom-wall-sculpture",
            "name": "Venom Wall Sculpture",
            "image": "/images/studio-venom-wall-sculpture.webp",
          },
          {
            "id": "studio-hulk-action-figure",
            "name": "Hulk Action Figure",
            "image": "/images/studio-hulk-action-figure.webp",
          },
          {
            "id": "studio-tactical-vigilante-figure",
            "name": "Tactical Vigilante Figure",
            "image": "/images/studio-tactical-vigilante-figure.webp",
          },
          {
            "id": "studio-spider-man-in-a-suit",
            "name": "Spider-Man in a Suit",
            "image": "/images/studio-spider-man-in-a-suit.webp",
          },
          {
            "id": "studio-spider-gwen-figure",
            "name": "Spider-Gwen Figure",
            "image": "/images/studio-spider-gwen-figure.webp",
          },
          {
            "id": "studio-thanos-bust",
            "name": "Thanos Bust",
            "image": "/images/studio-thanos-bust.webp",
          },
          {
            "id": "studio-hulk-bust",
            "name": "Hulk Bust",
            "image": "/images/studio-hulk-bust.webp",
          },
          {
            "id": "studio-moon-knight-in-a-suit",
            "name": "Moon Knight in a Suit",
            "image": "/images/studio-moon-knight-in-a-suit.webp",
          },
          {
            "id": "studio-hulk-display-figure",
            "name": "Hulk Display Figure",
            "image": "/images/studio-hulk-display-figure.webp",
          },
          {
            "id": "studio-urban-wolverine",
            "name": "Urban Wolverine",
            "image": "/images/studio-urban-wolverine.webp",
          },
          {
            "id": "studio-armoured-duck-hero",
            "name": "Armoured Duck Hero",
            "image": "/images/studio-armoured-duck-hero.webp",
          },
          {
            "id": "studio-spider-man-beach-figure",
            "name": "Spider-Man Beach Figure",
            "image": "/images/studio-spider-man-beach-figure.webp",
          },
          {
            "id": "studio-the-thing-figure",
            "name": "The Thing Figure",
            "image": "/images/studio-the-thing-figure.webp",
          },
          {
            "id": "studio-groot-figures",
            "name": "Groot Figures",
            "image": "/images/studio-groot-figures.webp",
          },
          {
            "id": "studio-black-widow-bust",
            "name": "Black Widow Bust",
            "image": "/images/studio-black-widow-bust.webp",
          },
          {
            "id": "studio-black-panther-chibi-figure",
            "name": "Black Panther Chibi Figure",
            "image": "/images/studio-black-panther-chibi-figure.webp",
          },
          {
            "id": "studio-upside-down-spider-man",
            "name": "Upside-Down Spider-Man",
            "image": "/images/studio-upside-down-spider-man.webp",
          },
          {
            "id": "studio-darth-vader-tactical-figure",
            "name": "Darth Vader Tactical Figure",
            "image": "/images/studio-darth-vader-tactical-figure.webp",
          },
          {
            "id": "design-comic-batman",
            "name": "Batman (DC)",
            "image": "/images/design-comic-batman.webp",
          },
          {
            "id": "design-marvel-doom",
            "name": "Doctor Doom",
            "image": "/images/design-marvel-doom.webp",
          },
          {
            "id": "design-comic-hellboy",
            "name": "Hellboy (Dark Horse)",
            "image": "/images/design-comic-hellboy.webp",
          },
          {
            "id": "design-marvel-spiderman",
            "name": "Superior Spider-Man",
            "image": "/images/design-marvel-spiderman.webp",
          },
          {
            "id": "design-marvel-ironman",
            "name": "Iron Man",
            "image": "/images/design-marvel-ironman.webp",
          },
          {
            "id": "design-marvel-wanda-vision",
            "name": "Scarlet Witch & Vision",
            "image": "/images/design-marvel-wanda-vision.webp",
          },
          {
            "id": "design-marvel-deadpool",
            "name": "Deadpool",
            "image": "/images/design-marvel-deadpool.webp",
          },
          {
            "id": "design-marvel-scarlet-witch",
            "name": "Scarlet Witch",
            "image": "/images/design-marvel-scarlet-witch.webp",
          },
          {
            "id": "design-marvel-moon-knight",
            "name": "Moon Knight",
            "image": "/images/design-marvel-moon-knight.webp",
          }
        ],
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
          },
          {
            "id": "studio-fantasy-wizard-on-throne",
            "name": "Fantasy Wizard on Throne",
            "image": "/images/studio-fantasy-wizard-on-throne.webp",
          },
          {
            "id": "studio-fantasy-ranger-figure",
            "name": "Fantasy Ranger Figure",
            "image": "/images/studio-fantasy-ranger-figure.webp",
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
          },
          {
            "id": "studio-flowing-horse-sculpture",
            "name": "Flowing Horse Sculpture",
            "image": "/images/studio-flowing-horse-sculpture.webp",
          },
          {
            "id": "studio-face-planter",
            "name": "Face Planter",
            "image": "/images/studio-face-planter.webp",
          },
          {
            "id": "studio-ornate-iron-man-mask",
            "name": "Ornate Iron Man Mask",
            "image": "/images/studio-ornate-iron-man-mask.webp",
          },
          {
            "id": "studio-green-goblin-mask",
            "name": "Green Goblin Mask",
            "image": "/images/studio-green-goblin-mask.webp",
          },
          {
            "id": "studio-spider-man-layered-wall-art",
            "name": "Spider-Man Layered Wall Art",
            "image": "/images/studio-spider-man-layered-wall-art.webp",
          },
          {
            "id": "studio-iron-man-wall-art",
            "name": "Iron Man Wall Art",
            "image": "/images/studio-iron-man-wall-art.webp",
          },
          {
            "id": "studio-spider-man-comic-panel",
            "name": "Spider-Man Comic Panel",
            "image": "/images/studio-spider-man-comic-panel.webp",
          },
          {
            "id": "studio-captain-america-wall-art",
            "name": "Captain America Wall Art",
            "image": "/images/studio-captain-america-wall-art.webp",
          },
          {
            "id": "studio-spider-man-framed-art",
            "name": "Spider-Man Framed Art",
            "image": "/images/studio-spider-man-framed-art.webp",
          },
          {
            "id": "studio-anime-silhouette-wall-art",
            "name": "Anime Silhouette Wall Art",
            "image": "/images/studio-anime-silhouette-wall-art.webp",
          },
          {
            "id": "studio-iron-man-repulsor-wall-art",
            "name": "Iron Man Repulsor Wall Art",
            "image": "/images/studio-iron-man-repulsor-wall-art.webp",
          },
          {
            "id": "studio-horror-clown-mask",
            "name": "Horror Clown Mask",
            "image": "/images/studio-horror-clown-mask.webp",
          },
          {
            "id": "studio-tulip-bouquet-sculpture",
            "name": "Tulip Bouquet Sculpture",
            "image": "/images/studio-tulip-bouquet-sculpture.webp",
          },
          {
            "id": "studio-poodle-sculpture",
            "name": "Poodle Sculpture",
            "image": "/images/studio-poodle-sculpture.webp",
          },
          {
            "id": "studio-flower-pot-collection",
            "name": "Flower Pot Collection",
            "image": "/images/studio-flower-pot-collection.webp",
          },
          {
            "id": "studio-crescent-moon-planter",
            "name": "Crescent Moon Planter",
            "image": "/images/studio-crescent-moon-planter.webp",
          },
          {
            "id": "studio-cherry-blossom-bonsai",
            "name": "Cherry Blossom Bonsai",
            "image": "/images/studio-cherry-blossom-bonsai.webp",
          },
          {
            "id": "studio-expressive-face-planters",
            "name": "Expressive Face Planters",
            "image": "/images/studio-expressive-face-planters.webp",
          },
          {
            "id": "studio-abstract-ribbon-sculpture",
            "name": "Abstract Ribbon Sculpture",
            "image": "/images/studio-abstract-ribbon-sculpture.webp",
          },
          {
            "id": "studio-spiral-cat-sculpture",
            "name": "Spiral Cat Sculpture",
            "image": "/images/studio-spiral-cat-sculpture.webp",
          },
          {
            "id": "studio-sheep-decor-trio",
            "name": "Sheep Decor Trio",
            "image": "/images/studio-sheep-decor-trio.webp",
          },
          {
            "id": "studio-ornamental-elephant",
            "name": "Ornamental Elephant",
            "image": "/images/studio-ornamental-elephant.webp",
          },
          {
            "id": "studio-geometric-anubis",
            "name": "Geometric Anubis",
            "image": "/images/studio-geometric-anubis.webp",
          },
          {
            "id": "studio-nutcracker-sculptures",
            "name": "Nutcracker Sculptures",
            "image": "/images/studio-nutcracker-sculptures.webp",
          },
          {
            "id": "studio-low-poly-horse",
            "name": "Low-Poly Horse",
            "image": "/images/studio-low-poly-horse.webp",
          },
          {
            "id": "studio-deer-pair",
            "name": "Deer Pair",
            "image": "/images/studio-deer-pair.webp",
          },
          {
            "id": "studio-abstract-swan",
            "name": "Abstract Swan",
            "image": "/images/studio-abstract-swan.webp",
          },
          {
            "id": "studio-low-poly-tortoise",
            "name": "Low-Poly Tortoise",
            "image": "/images/studio-low-poly-tortoise.webp",
          },
          {
            "id": "studio-lion-on-rock",
            "name": "Lion on Rock",
            "image": "/images/studio-lion-on-rock.webp",
          },
          {
            "id": "studio-elephant-pair",
            "name": "Elephant Pair",
            "image": "/images/studio-elephant-pair.webp",
          },
          {
            "id": "studio-minimal-horse",
            "name": "Minimal Horse",
            "image": "/images/studio-minimal-horse.webp",
          },
          {
            "id": "studio-unicorn-figure",
            "name": "Unicorn Figure",
            "image": "/images/studio-unicorn-figure.webp",
          },
          {
            "id": "studio-meditation-loop-sculpture",
            "name": "Meditation Loop Sculpture",
            "image": "/images/studio-meditation-loop-sculpture.webp",
          },
          {
            "id": "studio-pastel-elephant-pair",
            "name": "Pastel Elephant Pair",
            "image": "/images/studio-pastel-elephant-pair.webp",
          },
          {
            "id": "studio-lion-in-a-suit",
            "name": "Lion in a Suit",
            "image": "/images/studio-lion-in-a-suit.webp",
          },
          {
            "id": "studio-heart-hands-sculpture",
            "name": "Heart Hands Sculpture",
            "image": "/images/studio-heart-hands-sculpture.webp",
          },
          {
            "id": "studio-knitted-texture-vase",
            "name": "Knitted Texture Vase",
            "image": "/images/studio-knitted-texture-vase.webp",
          },
          {
            "id": "studio-peacock-sculpture",
            "name": "Peacock Sculpture",
            "image": "/images/studio-peacock-sculpture.webp",
          },
          {
            "id": "studio-astronaut-moon-sculpture",
            "name": "Astronaut Moon Sculpture",
            "image": "/images/studio-astronaut-moon-sculpture.webp",
          },
          {
            "id": "studio-musical-instrument-sculpture",
            "name": "Musical Instrument Sculpture",
            "image": "/images/studio-musical-instrument-sculpture.webp",
          },
          {
            "id": "studio-ornamental-horse",
            "name": "Ornamental Horse",
            "image": "/images/studio-ornamental-horse.webp",
          },
          {
            "id": "studio-minimal-elephant-family",
            "name": "Minimal Elephant Family",
            "image": "/images/studio-minimal-elephant-family.webp",
          },
          {
            "id": "studio-abstract-owl",
            "name": "Abstract Owl",
            "image": "/images/studio-abstract-owl.webp",
          },
          {
            "id": "studio-ornamental-lion",
            "name": "Ornamental Lion",
            "image": "/images/studio-ornamental-lion.webp",
          },
          {
            "id": "studio-geometric-dog-collection",
            "name": "Geometric Dog Collection",
            "image": "/images/studio-geometric-dog-collection.webp",
          },
          {
            "id": "studio-minimal-cat",
            "name": "Minimal Cat",
            "image": "/images/studio-minimal-cat.webp",
          },
          {
            "id": "studio-fragmented-face-sculpture",
            "name": "Fragmented Face Sculpture",
            "image": "/images/studio-fragmented-face-sculpture.webp",
          },
          {
            "id": "studio-rose-keepsake-figure",
            "name": "Rose Keepsake Figure",
            "image": "/images/studio-rose-keepsake-figure.webp",
          },
          {
            "id": "studio-golden-geometric-bear",
            "name": "Golden Geometric Bear",
            "image": "/images/studio-golden-geometric-bear.webp",
          },
          {
            "id": "studio-spartan-warrior",
            "name": "Spartan Warrior",
            "image": "/images/studio-spartan-warrior.webp",
          },
          {
            "id": "studio-embrace-face-sculpture",
            "name": "Embrace Face Sculpture",
            "image": "/images/studio-embrace-face-sculpture.webp",
          },
          {
            "id": "studio-charging-bull",
            "name": "Charging Bull",
            "image": "/images/studio-charging-bull.webp",
          },
          {
            "id": "studio-sitting-piglet",
            "name": "Sitting Piglet",
            "image": "/images/studio-sitting-piglet.webp",
          },
          {
            "id": "studio-owl-pair",
            "name": "Owl Pair",
            "image": "/images/studio-owl-pair.webp",
          },
          {
            "id": "studio-abstract-leaf-sculpture",
            "name": "Abstract Leaf Sculpture",
            "image": "/images/studio-abstract-leaf-sculpture.webp",
          },
          {
            "id": "studio-three-wise-owls",
            "name": "Three Wise Owls",
            "image": "/images/studio-three-wise-owls.webp",
          },
          {
            "id": "studio-geometric-bull-pair",
            "name": "Geometric Bull Pair",
            "image": "/images/studio-geometric-bull-pair.webp",
          },
          {
            "id": "studio-samurai-warrior",
            "name": "Samurai Warrior",
            "image": "/images/studio-samurai-warrior.webp",
          },
          {
            "id": "studio-highland-cow-family",
            "name": "Highland Cow Family",
            "image": "/images/studio-highland-cow-family.webp",
          },
          {
            "id": "studio-reading-dog-sculpture",
            "name": "Reading Dog Sculpture",
            "image": "/images/studio-reading-dog-sculpture.webp",
          },
          {
            "id": "studio-monk-monitor-figure",
            "name": "Monk Monitor Figure",
            "image": "/images/studio-monk-monitor-figure.webp",
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
          },
          {
            "id": "studio-owl-drawer-organiser",
            "name": "Owl Drawer Organiser",
            "image": "/images/studio-owl-drawer-organiser.webp",
          },
          {
            "id": "studio-doctor-name-pen-holder",
            "name": "Doctor Name Pen Holder",
            "image": "/images/studio-doctor-name-pen-holder.webp",
          },
          {
            "id": "studio-tooth-business-card-holder",
            "name": "Tooth Business Card Holder",
            "image": "/images/studio-tooth-business-card-holder.webp",
          },
          {
            "id": "studio-phone-and-pen-organiser",
            "name": "Phone and Pen Organiser",
            "image": "/images/studio-phone-and-pen-organiser.webp",
          },
          {
            "id": "studio-personalised-name-organiser",
            "name": "Personalised Name Organiser",
            "image": "/images/studio-personalised-name-organiser.webp",
          },
          {
            "id": "studio-paper-bag-pencil-pot",
            "name": "Paper Bag Pencil Pot",
            "image": "/images/studio-paper-bag-pencil-pot.webp",
          },
          {
            "id": "studio-puffer-jacket-pen-holders",
            "name": "Puffer Jacket Pen Holders",
            "image": "/images/studio-puffer-jacket-pen-holders.webp",
          },
          {
            "id": "studio-panda-pencil-holder",
            "name": "Panda Pencil Holder",
            "image": "/images/studio-panda-pencil-holder.webp",
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
          },
          {
            "id": "studio-dog-bulb-lamp",
            "name": "Dog Bulb Lamp",
            "image": "/images/studio-dog-bulb-lamp.webp",
          },
          {
            "id": "studio-articulated-desk-lamp",
            "name": "Articulated Desk Lamp",
            "image": "/images/studio-articulated-desk-lamp.webp",
          },
          {
            "id": "studio-layered-leaf-pendant-lamp",
            "name": "Layered Leaf Pendant Lamp",
            "image": "/images/studio-layered-leaf-pendant-lamp.webp",
          },
          {
            "id": "studio-lotus-table-lamp",
            "name": "Lotus Table Lamp",
            "image": "/images/studio-lotus-table-lamp.webp",
          },
          {
            "id": "studio-twist-table-lamp",
            "name": "Twist Table Lamp",
            "image": "/images/studio-twist-table-lamp.webp",
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
          },
          {
            "id": "studio-spiral-fidget-collection",
            "name": "Spiral Fidget Collection",
            "image": "/images/studio-spiral-fidget-collection.webp",
          },
          {
            "id": "studio-spiral-cylinder-fidget",
            "name": "Spiral Cylinder Fidget",
            "image": "/images/studio-spiral-cylinder-fidget.webp",
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
          },
          {
            "id": "studio-articulated-dragon-collection",
            "name": "Articulated Dragon Collection",
            "image": "/images/studio-articulated-dragon-collection.webp",
          },
          {
            "id": "studio-penguin-toy",
            "name": "Penguin Toy",
            "image": "/images/studio-penguin-toy.webp",
          },
          {
            "id": "studio-duck-toy-collection",
            "name": "Duck Toy Collection",
            "image": "/images/studio-duck-toy-collection.webp",
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
          },
          {
            "id": "studio-colour-sorting-learning-toy",
            "name": "Colour Sorting Learning Toy",
            "image": "/images/studio-colour-sorting-learning-toy.webp",
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
          },
          {
            "id": "studio-toy-off-road-jeep",
            "name": "Toy Off-Road Jeep",
            "image": "/images/studio-toy-off-road-jeep.webp",
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
