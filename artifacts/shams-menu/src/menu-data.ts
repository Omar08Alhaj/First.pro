export type MenuCategory = 'pizza' | 'meals' | 'manaqeesh' | 'sides' | 'drinks';

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  price?: number;
  sizes?: { label: string; price: number }[];
  note?: string;
  review?: boolean;
};

export const categories: { id: MenuCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'كل القائمة' },
  { id: 'pizza', label: 'بيتزا' },
  { id: 'meals', label: 'وجبات' },
  { id: 'manaqeesh', label: 'مناقيش ومعجنات' },
  { id: 'sides', label: 'مقبلات' },
  { id: 'drinks', label: 'مشروبات' },
];

// Transcribed from the printed menu. Rows obscured by glare are intentionally
// omitted rather than given guessed names or prices.
export const menuItems: MenuItem[] = [
  {
    id: 'pizza-margherita',
    name: 'بيتزا مارغريتا',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 17 },
      { label: 'وسط', price: 30 },
      { label: 'كبير', price: 35 },
      { label: 'عائلي', price: 45 },
    ],
  },
  {
    id: 'pizza-sausage-vegetables',
    name: 'بيتزا بالنقانق والخضار',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 20 },
      { label: 'وسط', price: 35 },
      { label: 'كبير', price: 45 },
      { label: 'عائلي', price: 55 },
    ],
  },
  {
    id: 'pizza-pepperoni-vegetables',
    name: 'بيتزا بيروني وخضار',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 22 },
      { label: 'وسط', price: 40 },
      { label: 'كبير', price: 50 },
      { label: 'عائلي', price: 60 },
    ],
  },
  {
    id: 'pizza-four-seasons',
    name: 'بيتزا الفصول الأربعة',
    category: 'pizza',
    sizes: [
      { label: 'وسط', price: 40 },
      { label: 'كبير', price: 50 },
      { label: 'عائلي', price: 60 },
    ],
  },
  {
    id: 'pizza-meat-vegetables',
    name: 'بيتزا باللحمة والخضار',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 25 },
      { label: 'وسط', price: 40 },
      { label: 'كبير', price: 50 },
      { label: 'عائلي', price: 60 },
    ],
  },
  {
    id: 'pizza-tuna-vegetables',
    name: 'بيتزا تونا وخضار',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 25 },
      { label: 'وسط', price: 40 },
      { label: 'كبير', price: 50 },
      { label: 'عائلي', price: 60 },
    ],
  },
  {
    id: 'pizza-chicken-vegetables',
    name: 'بيتزا دجاج وخضار',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 25 },
      { label: 'وسط', price: 40 },
      { label: 'كبير', price: 50 },
      { label: 'عائلي', price: 60 },
    ],
  },
  {
    id: 'pizza-stuffed-crust',
    name: 'بيتزا الشام محشية الأطراف',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 30 },
      { label: 'وسط', price: 45 },
      { label: 'كبير', price: 55 },
      { label: 'عائلي', price: 65 },
    ],
  },
  {
    id: 'pizza-four-cheese',
    name: 'بيتزا الأجبان الأربعة',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 22 },
      { label: 'وسط', price: 35 },
      { label: 'كبير', price: 45 },
      { label: 'عائلي', price: 55 },
    ],
  },
  {
    id: 'pizza-sujuk',
    name: 'بيتزا سجق',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 25 },
      { label: 'وسط', price: 40 },
      { label: 'كبير', price: 50 },
      { label: 'عائلي', price: 60 },
    ],
  },
  {
    id: 'pizza-jalapeno',
    name: 'بيتزا هالبينو مكسيكي',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 25 },
      { label: 'وسط', price: 40 },
      { label: 'كبير', price: 50 },
      { label: 'عائلي', price: 60 },
    ],
  },
  { id: 'pizza-plain-pepper-olive', name: 'بيتزا عادي مع فلفل وزيتون', category: 'pizza', price: 8 },
  { id: 'pizza-arabic-folded', name: 'مطبق بيتزا عربي', category: 'pizza', price: 8 },
  {
    id: 'pizza-vegetables',
    name: 'بيتزا خضار',
    category: 'pizza',
    sizes: [
      { label: 'صغير', price: 20 },
      { label: 'وسط', price: 35 },
      { label: 'كبير', price: 45 },
      { label: 'عائلي', price: 55 },
    ],
  },
  { id: 'potato-small', name: 'بطاطا — حجم صغير', category: 'sides', price: 7 },
  { id: 'potato-large', name: 'بطاطا — حجم كبير', category: 'sides', price: 13 },
  { id: 'garlic-bread', name: 'خبز بالثوم — ٥ قطع', category: 'sides', price: 7 },
  { id: 'cheese-bread', name: 'خبز بالجبنة — ٥ قطع', category: 'sides', price: 10 },
  { id: 'cheese-sticks', name: 'أصابع الجبنة — ٥ قطع', category: 'sides', price: 15 },
  { id: 'chicken-wings', name: 'أجنحة دجاج — ١٠ قطع', category: 'sides', price: 18 },
  { id: 'onion-rings', name: 'حلقات بصل — ٨ قطع', category: 'sides', price: 12 },
  { id: 'chicken-meal', name: 'وجبة دجاج مسحب مع بطاطا', category: 'meals', price: 25 },
  { id: 'italian-chicken-meal', name: 'وجبة مسحب إيطالي مع بطاطا', category: 'meals', price: 25 },
  { id: 'wings-meal', name: 'وجبة أجنحة مع بطاطا', category: 'meals', price: 23 },
  { id: 'chicken-wings-meal', name: 'وجبة أجنحة دجاج مع بطاطا', category: 'meals', price: 23 },
  { id: 'chicken-fingers-meal', name: 'وجبة أصابع دجاج مع بطاطا', category: 'meals', price: 22 },
  { id: 'white-cheese-plain', name: 'جبنة بيضاء سادة', category: 'manaqeesh', price: 8 },
  {
    id: 'white-cheese-green-zaatar',
    name: 'جبنة بيضاء مع زعتر أخضر ورق',
    category: 'manaqeesh',
    price: 8,
  },
  {
    id: 'yellow-cheese-green-olives',
    name: 'جبنة صفراء مع زيتون أخضر',
    category: 'manaqeesh',
    price: 8,
  },
  { id: 'yellow-cheese', name: 'جبنة صفراء سادة', category: 'manaqeesh', price: 8 },
  { id: 'white-cheese-special', name: 'جبنة بيضاء شامية بخلطة سحرية', category: 'manaqeesh', price: 7 },
  { id: 'half-moon-cheese-zaatar', name: 'نصف قمر جبنة بيضاء وزعتر', category: 'manaqeesh', price: 8 },
  { id: 'sausage-yellow-cheese', name: 'نقانق مع جبنة صفراء', category: 'manaqeesh', price: 8 },
  { id: 'sausage-vegetables-olives', name: 'نقانق بالخضار مع زيتون أخضر', category: 'manaqeesh', price: 7 },
  { id: 'plain-sausage', name: 'نقانق سادة', category: 'manaqeesh', price: 7 },
  { id: 'tomato-sfiha', name: 'صفيحة بندورة', category: 'manaqeesh', price: 8 },
  { id: 'tahini-sfiha', name: 'صفيحة طحينية', category: 'manaqeesh', price: 8 },
  { id: 'meat-sambousek', name: 'سمبوسك لحمة', category: 'manaqeesh', price: 3 },
  { id: 'meat-arayes', name: 'عرايس لحمة', category: 'manaqeesh', price: 5 },
  { id: 'shami-cheese-egg', name: 'جبنة شامية مع بيض', category: 'manaqeesh', price: 10 },
  { id: 'spinach', name: 'سبانخ', category: 'manaqeesh', price: 8 },
  { id: 'cheese-pastry', name: 'مناقيش جبنة', category: 'manaqeesh', price: 8 },
  { id: 'spinach-meat', name: 'سبانخ مع لحمة', category: 'manaqeesh', price: 9 },
  { id: 'green-zaatar-plain', name: 'زعتر أخضر ورق سادة', category: 'manaqeesh', price: 5 },
  { id: 'zaatar', name: 'مناقيش زعتر', category: 'manaqeesh', price: 5 },
  { id: 'chicken-cheese', name: 'مسحب دجاج مع جبنة', category: 'manaqeesh', price: 10 },
  { id: 'four-cheese-manaeesh', name: 'مكس الأجبان الأربعة', category: 'manaqeesh', price: 10 },
  { id: 'akkawi-cheese', name: 'جبنة بيضاء عكاوي', category: 'manaqeesh', price: 8 },
  { id: 'musakhan-roll', name: 'رول مسخن', category: 'manaqeesh', price: 9 },
  { id: 'cheese-zaatar-top', name: 'جبنة بيضاء على الوجه زعتر', category: 'manaqeesh', price: 12 },
  { id: 'potato-meat-cheese', name: 'بطاطا مع لحمة وجبنة', category: 'manaqeesh', price: 9 },
  { id: 'potato-meat', name: 'بطاطا مع لحمة', category: 'manaqeesh', price: 8 },
  { id: 'potato-cheese', name: 'بطاطا مع جبنة', category: 'manaqeesh', price: 6 },
  { id: 'egg-plain', name: 'بيض سادة', category: 'manaqeesh', price: 6 },
  { id: 'egg-sujuk', name: 'بيض مع سجق', category: 'manaqeesh', price: 11 },
  { id: 'egg-sausage', name: 'بيض مع نقانق', category: 'manaqeesh', price: 9 },
  { id: 'egg-white-cheese', name: 'بيض مع جبنة بيضاء', category: 'manaqeesh', price: 9 },
  { id: 'egg-yellow-cheese', name: 'بيض مع جبنة صفراء', category: 'manaqeesh', price: 9 },
  { id: 'egg-meat', name: 'بيض مع لحمة', category: 'manaqeesh', price: 10 },
  { id: 'egg-sausage-yellow-cheese', name: 'بيض مع نقانق وجبنة صفراء', category: 'manaqeesh', price: 11 },
  { id: 'egg-salami', name: 'بيض مع سلامي', category: 'manaqeesh', price: 8 },
  { id: 'egg-green-olives', name: 'بيض مع زيتون أخضر', category: 'manaqeesh', price: 7 },
  { id: 'omelet', name: 'عجة بيض', category: 'manaqeesh', price: 7 },
  { id: 'egg-yellow-cheese-triangles', name: 'بيض مع جبنة مثلثات', category: 'manaqeesh', price: 10 },
  { id: 'cola', name: 'كولا', category: 'drinks' },
  { id: 'juice', name: 'عصير', category: 'drinks' },
];