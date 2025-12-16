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
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
];
