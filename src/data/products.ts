export interface ProductColor {
  name: string;
  hex: string;
  images: string[];
  availableSizes?: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  description: string;
  colors: ProductColor[];
}

export const products: Product[] = [
  {
    id: "willa-combo-blouse",
    name: "Willa Combo Blouse",
    price: 350,
    description: "A classic button-down with a twist. The Willa Combo Blouse features a contrasting collar and cuffs for a sophisticated look. Perfect for the office or a night out.",
    colors: [
      {
        name: "Midnight Blue/Black",
        hex: "#191970",
        images: [
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw881c78f8/hi-res/CC511A87002I401_01.jpg?sw=550&sh=736&q=95",
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw463a71b4/hi-res/CC511A87002I401_02.jpg?sw=700&sh=937&q=100",
        ],
        availableSizes: ['XS', 'L', 'XL'],
      },
      {
        name: "shakespeare's letter vanilla",
        hex: "#F3E5AB",
        images: [
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw76913be9/large/CC509P17018D954_01.jpg?sw=700&sh=937&q=100",
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dwcffe8912/hi-res/CC509P17018D954_02.jpg?sw=700&sh=937&q=100",
        ],
        availableSizes: ['XS', 'S', 'M', 'L'],
      },
    ],
  },
  {
    id: "willa-silk-blouse",
    name: "Willa Silk Blouse",
    price: 395,
    discountedPrice: 237,
    description: "The Willa: our signature, best-selling blouse body that everyone loves--for good reason. This season's update is crafted in a sheer viscose georgette with a contrasting velvet collar and cuffs. Finished with a hidden placket for a clean look, it's polished enough for dinners out and easygoing enough for daytime strolls. Wear it tucked into denim or layered under a tonal blazer--it's the kind of top that can do it all.",
    colors: [
      {
        name: "Perfect Ruby",
        hex: "#E0115F",
        images: [
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dwacd5238a/hi-res/CC508078044O624_01.jpg?sw=550&sh=736&q=95",
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dweaf13a7d/hi-res/CC508078044O624_02.jpg?sw=700&sh=937&q=100",
        ],
        availableSizes: ['XS', 'S', 'L', 'XL'],
      },
      {
        name: "Midnight Blue/Black",
        hex: "#191970",
        images: [
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw881c78f8/hi-res/CC511A87002I401_01.jpg?sw=550&sh=736&q=95",
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw463a71b4/hi-res/CC511A87002I401_02.jpg?sw=700&sh=937&q=100",
        ],
        availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
      },
    ],
  },
  {
    id: "turner-button-down",
    name: "Turner button down",
    price: 350,
    description: "Romantic, fluid, and unapologetically feminine--the Turner olive button down shirt embodies ease and sophistication. Made from sheer viscose georgette, it drapes beautifully with an airy, light-as-a-whisper feel. The tie-neck detail adds versatility: bow it for polish, leave it open for something more undone and French. Full-length sleeves and a hidden placket create a sense of quiet refinement, perfect for pairing with tailored pants or jeans. It’s that timeless, “effortless but intentional” piece every wardrobe needs.",
    colors: [
      {
        name: "Dark Olive",
        hex: "#556B2F",
        images: [
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw34b564a9/large/CC511A87008A307_01.jpg?sw=700&sh=937&q=100",
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw2bfaa243/hi-res/CC511A87008A307_02.jpg?sw=700&sh=937&q=100",
        ],
        availableSizes: ['XS', 'S', 'L', 'XL'],
      }
    ],
  },
  {
    id: "thayer-tie-neck-blouse",
    name: "THAYER TIE NECK BLOUSE",
    price: 350,
    description: "Romantic, fluid, and unapologetically feminine--the Thayer tie-neck blouse embodies ease and sophistication. Made from sheer viscose georgette, it drapes beautifully with an airy, light-as-a-whisper feel. The tie-front detail adds versatility: bow it for polish, leave it open for something more undone and French. Full-length sleeves and a hidden placket create a sense of quiet refinement, perfect for pairing with tailored pants or jeans. It’s that timeless, “effortless but intentional” piece every wardrobe needs.",
    colors: [
      {
            name: "Butter",
            hex: "#dd975e",
            images: [
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dwf4cc13ad/large/CC511A87004F732_01.jpg?sw=700&sh=937&q=100",
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw83dc7a29/hi-res/CC511A87004F732_02.jpg?sw=700&sh=937&q=100"
            ],
            availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
        },
    ],
    },
    {
    id: "josephine-blouse",
    name: "JOSEPHINE BLOUSE",
    price: 395,
    description: "Super ethereal and romantic, this floral flowy blouse is the height of feminine sophistication. Its viscose body is cut into a beautifully billowy and floaty shape. A split neck, smocked cuffs, and blouson sleeves add to its bohemian aura.",
    colors: [
      {
            name: "flourish sm",
            hex: "#dd975e",
            images: [
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw0f0492ff/large/CC511P90026H439_01.jpg?sw=700&sh=937&q=100",
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dwa108a8ed/hi-res/CC511P90026H439_02.jpg?sw=700&sh=937&q=100"
            ],
            availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
        },
        ],
    },
    {
    id: "a-o-x-grateful-dead-willa-blouse",
    name: "A+O X GRATEFUL DEAD WILLA BLOUSE",
    price: 395,
    description: "Introducing A+O x Grateful Dead, a reimagination of the free-spirited energy and artistry of the Grateful Dead. The Willa reworks the silk button down with rainbow piping and custom dancing bear buttons. Luxe but playful, it’s a shirt that captures the spirit of the capsule: whimsical details on timeless tailoring.",
    colors: [
      {
            name: "black/multi",
            hex: "#000",
            images: [
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw08c45159/large/CV511P76068C019_01.jpg?sw=700&sh=937&q=100",
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw468c73e5/hi-res/CV511P76068C019_02.jpg?sw=700&sh=937&q=100"
            ],
            availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
        },
        ],
    },
    {
    id: "brentley-blouse",
    name: "BRENTLEY BLOUSE",
    price: 350,
    discountedPrice: 255,
    description: "She’s polished, she’s floaty, and she’s about to be your favorite top. Our Brentley tie neck blouse is semi-sheer, lightweight and ethereal. Romantic puff sleeves further the vibe, and a concealed button placket gives it a polished finish. Add tailored trousers or vintage denim and you've got instant chic.",
    colors: [
      {
        name: "Black",
        hex: "#000",
        images: [
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw41ca9093/large/CL000A87017A001_01.jpg?sw=700&sh=937&q=100",
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dwef59537f/hi-res/CL000A87017A001_02.jpg?sw=700&sh=937&q=100"
        ],
        availableSizes: ['XS', 'M', 'L'],
      },
    {
            name: "Off white",
            hex: "#ffffe4",
            images: [
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw8123214a/large/CL000A87017A127_01.jpg?sw=700&sh=937&q=100",
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw36c2b2c5/hi-res/CL000A87017A127_02.jpg?sw=700&sh=937&q=100"
            ],
            availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
        },
        ],
    },
    {
    id: "claudia-lace-slip-top",
    name: "CLAUDIA LACE SLIP TOP",
    price: 350,
    description: "Delicate, daring, and endlessly wearable, our Claudia is the top you didn’t know you needed. This lace slip-style top features a deep V neckline, open back, and crisscross straps that frame your silhouette. Lace trims add texture and dimension, giving it that lingerie-meets-ready-to-wear vibe. Layer it under a blazer for contrast or wear it solo for a night out.",
    colors: [
      {
            name: "Black",
            hex: "#000",
            images: [
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw090be9fd/large/CC509A43014Z032_01.jpg?sw=700&sh=937&q=100",
            "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dwdefd21be/hi-res/CC509A43014Z032_02.jpg?sw=700&sh=937&q=100"
            ],
            availableSizes: ['XS', 'S', 'L', 'XL'],
        },
        {
        name: "green mystique/black",
        hex: "#000",
        images: [
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw4409b166/large/CC509A43014C335_01.jpg?sw=700&sh=937&q=100",
          "https://www.aliceandolivia.com/dw/image/v2/BFBS_PRD/on/demandware.static/-/Sites-masterCatalog_aando/default/dw0ee444c9/hi-res/CC509A43014C335_02.jpg?sw=700&sh=937&q=100"
        ],
        availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
      },
    ],
  },
];
