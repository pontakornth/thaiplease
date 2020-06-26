const dictionary = new Map([
  [/\s?approach\s?/gi, 'วิธีการ'],
  [/\s?machine learning\s?/gi, 'การเรียนรู้ของเครื่อง'],
  [/\s?big data\s?/gi, 'ข้อมูลมหัต'],
  [/\s?coding\s?/gi, 'การกำหนดรหัส'],
  [/\s?joystick\s?/gi, 'แท่งหรรษา'],
  [/\s?subscriber\s?/gi, 'ผู้รับบริการ'],
  [/\s?flash mob\s?/gi, 'ม็อบฉับพลัน'],
  [/\s?red ocean\s?/gi, 'มหาสมุทรสีชาด'],
  [/\s?blue ocean\s?/gi, 'มหาสมุทรสีคราม'],
  [/\s?communicate\s?/gi, 'สื่อสาร'],
  [/\s?computer\s?/gi, 'คณิตกรณ์'],
  [/\s?subscriber\s?/gi, 'ผู้รับบริการ'],
  [/\s?vlog\s?/gi, 'วล็อก'],
  [/\s?mindset\s?/gi, 'กรอบคิดติดยึด'],
  [/\s?system analysis\s?/gi, 'การวิเคราะห์ระบบ'],
  [/\s?input\s?/gi, 'ปัจจัยป้อนเข้า'],
  [/\s?goal\s?/gi, 'เป้าประสงค์'],
  [/\s?aim\s?/gi, 'จุดหมาย'],
  [/\s?conflict of interest\s?/gi, 'การขัดกันแห่งผลประโยชน์'],
  [/\s?strengths analysis\s?/gi, 'การวิเคราะห์จุดแข็ง'],
  [/\s?weaknesses analysis\s?/gi, 'การวิเคราะห์จุดอ่อน'],
  [/\s?inequality\s?/gi, 'ความเหลื่อมล้ำ'],
  [/\s?cheat day\s?/gi, 'วันตามใจปาก'],
  [/\s?breaking news\s?/gi, 'ข่าวแทรก'],
  [/\s?flash news\s?/gi, 'ข่าวด่วน'],
  [/\s?artificial intelligence\s?/gi, 'ปัญญาประดิษฐ์'],
  [/\s?AI\s?/gi, 'ปัญญาประดิษฐ์'],
  [/\s?limit\s?/gi, 'ขอบเขต'],
  [/\s?side effect\s?/gi, 'ผลข้างเคียง'],
  [/\s?e-banking\s?/gi, 'ธนาคารอิเล็กทรอนิกส์'],
  [/\s?academic integrity\s?/gi, 'ความซื่อตรงทางวิชาการ'],
  [/\s?coaching\s?/gi, 'การชี้แนะ'],
  [/\s?coding\s?/gi, 'การลงรหัส'],
  [/\s?media platform\s?/gi, 'ฐานช่องทางสื่อ'],
  [/\s?blog\s?/gi, 'บล็อก'],
  [/\s?dominate\s?/gi, 'การฝึกหัด'],
  [/\s?introvert\s?/gi, 'คนเก็บตัว'],
  [/\s?extrovert\s?/gi, 'คนพาหิรวัฒน์'],
  [/\s?handle\s?/gi, 'รับ'],
  [/\s?group influence\s?/gi, ''],
  [/\s?counter example\s?/gi, 'ตัวอย่างค้าน'],
  [/\s?deep learning\s?/gi, 'การเรียนรู้เชิงลึก'],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
   [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
   [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
  [/\s?\s?/gi, ''],
]);

export default dictionary;
