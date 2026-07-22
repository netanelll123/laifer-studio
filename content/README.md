# מדריך עריכת תוכן — לייפר סטודיו

כל התוכן הניתן לעריכה באתר נמצא בתיקייה הזו (`content/`) בלבד. **אין צורך לגעת בקבצי `.tsx`** (קוד הממשק) כדי לשנות טקסט, להוסיף פרויקט, שירות, המלצה או שלב בתהליך — הקומפוננטות רק "מציגות" את מה שכתוב כאן.

> חשוב: קבצי `.json` חייבים להישאר תקינים תחבירית (פסיקים, מרכאות). שגיאת הקלדה קטנה יכולה לשבור את כל האתר. אחרי כל עריכה מומלץ להריץ `npm run build` ולוודא שאין שגיאה, ואז לבדוק ב-`npm run dev` שהעמוד נראה טוב לפני שדוחפים ל-git.

## מבנה התיקייה

```
content/
├── messages/
│   ├── he.json        כל הטקסטים בעברית (ברירת המחדל)
│   └── en.json        כל הטקסטים באנגלית
├── collections/
│   ├── projects.ts     3 הפרויקטים הנבחרים
│   ├── services.ts     6 השירותים
│   ├── process.ts      6 שלבי התהליך היצירתי
│   └── testimonials.ts ההמלצות
├── site.ts             הגדרות אתר: אימייל, סושיאל, קישור לוויקיפדיה, כתובת האתר
└── types.ts            "רשימת השמות" (slugs) המותרים לכל פריט — ראה בהמשך
```

---

## 1. לשנות טקסט קיים (הכי נפוץ)

כל טקסט שמופיע באתר נמצא ב-`content/messages/he.json` (עברית) וב-`content/messages/en.json` (אנגלית). המבנה מאורגן לפי סקשן:

```json
"hero": {
  "title": "כל סרט מתחיל בסיפור",
  "subtitle": "..."
},
```

**כדי לשנות** — פשוט לערוך את הערך (הטקסט בתוך המרכאות) בשתי השפות. לדוגמה, לשינוי כותרת ה-Hero: לפתוח את `content/messages/he.json`, לחפש `"hero"` ואז `"title"`, ולהחליף את הטקסט.

⚠️ **תמיד לעדכן את שתי השפות** (`he.json` וגם `en.json`) — גם אם רק שפה אחת רלוונטית כרגע, כדי ששתי הגרסאות יישארו עקביות.

---

## 2. להוסיף / להסיר פרויקט

יש 3 שלבים (בשלושה קבצים שונים, לא ב-`.tsx`):

**שלב א' — `content/types.ts`:** להוסיף את השם ("slug") החדש לרשימה:
```ts
export type ProjectSlug = "balkan-wedding" | "air-mevorach" | "jerusalem-walls" | "my-new-project";
```

**שלב ב' — `content/collections/projects.ts`:** להוסיף אובייקט לרשימה:
```ts
{
  slug: "my-new-project",
  poster: "/projects/my-new-project.jpg",   // תמונה בתיקייה public/projects/
  video: "/projects/my-new-project.mp4",    // אופציונלי — קליפ ל-hover
  url: "https://youtube.com/watch?v=...",   // אופציונלי — קישור חיצוני
},
```

**שלב ג' — בשני קבצי ה-messages**, תחת `projects.items`, להוסיף:
```json
"my-new-project": {
  "title": "השם שיוצג",
  "category": "וידאו מוזיקלי",
  "description": "משפט או שניים על הפרויקט."
}
```

(לא לשכוח את אותו בלוק גם ב-`en.json`, באנגלית.)

**להסיר פרויקט** — פשוט להפוך את התהליך: למחוק את האובייקט מ-`projects.ts`, את המפתח משני קבצי ה-messages, ואת ה-slug מ-`types.ts`.

**להעלות מדיה** — קבצי תמונה/וידאו נכנסים לתיקיית `public/projects/`. ראו גם `public/README.md`.

---

## 3. להוסיף / לערוך שירות, שלב תהליך, או המלצה

אותה שיטה בדיוק כמו פרויקט, בקבצים המקבילים:

| מה רוצים לערוך | קובץ ה-slug | קובץ הרשימה | מיקום הטקסט ב-messages |
|---|---|---|---|
| שירות | `ServiceSlug` ב-`types.ts` | `collections/services.ts` | `services.items.<slug>` |
| שלב בתהליך | `ProcessSlug` ב-`types.ts` | `collections/process.ts` | `process.steps.<slug>` |
| המלצה | `TestimonialSlug` ב-`types.ts` | `collections/testimonials.ts` | `testimonials.items.<slug>` |

לשירותים ולשלבי תהליך יש גם `icon` — רשימת האייקונים הזמינים נמצאת בספריית [Lucide](https://lucide.dev/icons/) (מחפשים שם, ומייבאים את השם מ-`lucide-react` בראש קובץ ה-collection).

---

## 4. לשנות פרטי קשר, סושיאל, כתובת אתר

הכול ב-`content/site.ts`:

```ts
person: {
  email: "netanelll123@gmail.com",   // מייל ליצירת קשר + JSON-LD (SEO)
  wikipedia: "https://...",           // קישור לערך בוויקיפדיה
},
social: [
  { label: "Instagram", href: "https://instagram.com" },
  // ...
],
```

`url` בראש הקובץ הוא כתובת האתר החיה — משפיע על SEO, שיתוף ברשתות (OG) ו-sitemap.

---

## 5. אחרי כל שינוי

1. **תצוגה מקדימה מקומית:** `npm run dev` ולפתוח `http://localhost:3000`
2. **בדיקת תקינות:** `npm run build` — אם יש שגיאת JSON/TypeScript, היא תופיע כאן
3. **פרסום:** `git add -A && git commit -m "עדכון תוכן"` ואז `git push` — Vercel יעלה את הגרסה החדשה אוטומטית תוך דקה

---

## מה **לא** לגעת בו (קוד ממשק, לא תוכן)

- `components/` — כל קובצי ה-`.tsx`
- `app/` — מבנה הראוטינג
- `lib/motion.ts`, `lib/utils.ts` — לוגיקת אנימציה ועיצוב

אם צריך לשנות משהו שם — זה כבר שינוי עיצוב/פונקציונליות, לא תוכן, ועדיף לבקש עזרה.
