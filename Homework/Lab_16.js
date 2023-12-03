function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // *
getUserData({ firstName: "Melissa" }); // **
getUserData({}); // ***

//    บรรทัดที่ 1 (getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' });): ผลลัพธ์คือ 'Your name is Alejandro and you like purple' เนื่องจาก Object ที่ถูกส่งเข้าไปมี firstName เป็น 'Alejandro' และ favoriteColor เป็น 'purple' (ไม่ใช่ค่า default 'green').

//    บรรทัดที่ 2 (getUserData({ firstName: 'Melissa' });): ผลลัพธ์คือ 'Your name is Melissa and you like green' เนื่องจาก Object ที่ถูกส่งเข้าไปมี firstName เป็น 'Melissa' และ favoriteColor ไม่ได้รับค่าจาก Object ที่ถูกส่งมา จึงใช้ค่า default 'green'.

//    บรรทัดที่ 3 (getUserData({});): ผลลัพธ์คือ 'Your name is undefined and you like green' เนื่องจากไม่มีค่าใน parameter ที่ถูกส่งมา ซึ่งทำให้ firstName มีค่าเป็น undefined และ favoriteColor ใช้ค่า default 'green'
