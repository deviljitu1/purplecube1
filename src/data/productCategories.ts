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
        "label": "Name Keyrings",
        "image": "/images/collection-keychains.webp",
        "designs": [
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
        ]
      },
      {
        "id": "photo-frames",
        "label": "Photo Frames",
        "image": "/images/collection-photo-frames.webp",
        "designs": [
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
        ]
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
        "image": "/images/collection-nameplates.webp",
        "designs": [
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
        ]
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
        "image": "/images/ganpati-thumb.webp",
        "designs": [
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
        ]
      },
      {
        "id": "shiva",
        "label": "Shiva",
        "image": "/images/collection-shiva.webp",
        "designs": [
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
        ]
      },
      {
        "id": "krishna",
        "label": "Krishna",
        "image": "/images/collection-krishna.webp",
        "designs": [
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
        ]
      },
      {
        "id": "buddha",
        "label": "Buddha",
        "image": "/images/collection-buddha.webp",
        "designs": [
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
        ]
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
        "label": "Marvel & Comic Heroes",
        "image": "/images/design-marvel-doom.webp",
        "designs": [
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
        "label": "Gaming",
        "image": "/images/collection-gaming.webp",
        "designs": [
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
        "label": "Vases & Decor",
        "image": "/images/spiral-vase-thumb.webp",
        "designs": [
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
        ]
      },
      {
        "id": "organisers",
        "label": "Desk Organisers",
        "image": "/images/desk-organizer-thumb.webp",
        "designs": [
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
        ]
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
        "image": "/images/collection-lamps.webp",
        "designs": [
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
        ]
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
        "image": "/images/gyro-fidget-thumb.webp",
        "designs": [
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
        ]
      },
      {
        "id": "articulated",
        "label": "Articulated Toys",
        "image": "/images/collection-articulated.webp",
        "designs": [
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
        ]
      },
      {
        "id": "puzzles",
        "label": "Puzzles",
        "image": "/images/collection-puzzles.webp",
        "designs": [
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
        ]
      },
      {
        "id": "vehicles",
        "label": "Toy Vehicles",
        "image": "/images/collection-vehicles.webp",
        "designs": [
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
        ]
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
