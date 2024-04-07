# 1. Query ข้อมูลจาก DB แล้วจัดให้อยู่ในรูปแบบที่กำหนด
### 1.1 Query ข้อมูลจาก collections navigation พร้อมจัดให้อยู่ในรูปแบบให้เหมือนตัวอย่าง ตัวอย่างรูปแบบข้อมูลที่ถูกจัดให้อยู่ในรูปแบบ [navigation.json](./navigation.json)
#### Navigation Schema Type
collections name: navigations
```js
id: Number
key: String
name: String
type: String
icon: String
navigation_id: Number //  relationship with id in navigations // null is root
comment: String
sequence: Number
active: Boolean
```

### 1.2 Query ข้อมูลจาก collections web_categories พร้อมจัดให้อยู่ในรูปแบบให้เหมือนตัวอย่าง ตัวอย่างรูปแบบข้อมูลที่ถูกจัดให้อยู่ในรูปแบบ [web_categories.json](./web_categories.json)
#### WebCategories Schema Type
collections base name: web_categories
```js
id: Number
title_th: String
title_en: String
parent_id: Number //  relationship with id in web_categories // null is root
link: String
image: String
status: String
sequence: Number
```


## License
[LEDONHOME](https://www.ledonhome.com)
