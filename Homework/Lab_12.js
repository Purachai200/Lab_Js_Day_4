let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses',
    'whiskers on kittens',
    'Bright copper kettles',
    'warm woolen mittens',
   ];
   console.log(raindrops); // * 'Raindrops on roses'
   console.log(whiskers); // ** 'whiskers on kittens'
   console.log(aFewOfMyFavoriteThings); // *** ['Bright copper kettles', 'warm woolen mittens']

//    raindrops จะมีค่าเป็น 'Raindrops on roses' เพราะว่ามันเป็นสมาชิกแรกของ Array ที่กำหนด.
//    whiskers จะมีค่าเป็น 'whiskers on kittens' เพราะว่ามันเป็นสมาชิกที่สองของ Array ที่กำหนด.
//    aFewOfMyFavoriteThings จะมีค่าเป็น ['Bright copper kettles', 'warm woolen mittens'] เพราะว่ามันเป็นส่วนที่เหลือของ Array หลังจาก raindrops และ whiskers ถูกดึงออกแล้ว   