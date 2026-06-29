# Ayşe Dilara Sal — Kişisel Web Sitesi

Next.js ile yazılmış, Vercel'de barındırılan, kendi içeriğinizi (eğitim,
deneyim, tezler, makaleler, kongreler, projeler) kod bilmeden ekleyip
düzenleyebileceğiniz bir yönetim paneli içeren kişisel web sitesi.

---

## 1) GitHub'a Yükleme

Bu klasörü (zip olarak indirdiyseniz açtıktan sonra) bir GitHub deposuna
yükleyin:

```bash
cd aysedilarasal-next
git init
git add .
git commit -m "İlk sürüm"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/aysedilarasal.git
git push -u origin main
```

> GitHub'da önce boş bir depo oluşturmanız gerekir: GitHub.com → **New
> repository** → bir isim verin (örn. `aysedilarasal`) → **Create
> repository**. README/license eklemeyin, boş bırakın.

---

## 2) Vercel'de Proje Oluşturma

1. [vercel.com](https://vercel.com) → **Add New** → **Project**
2. GitHub hesabınızı bağlayın, az önce oluşturduğunuz depoyu seçin → **Import**
3. Framework otomatik olarak **Next.js** algılanır, ayar değiştirmeden
   **Deploy** demeyin — önce adım 3 ve 4'teki ayarları tamamlayın.

---

## 3) Veritabanını Bağlama (Upstash Redis)

Vercel artık kendi "Vercel KV" ürününü sunmuyor; bunun yerine Marketplace
üzerinden Upstash Redis kullanılıyor (aynı işi görür, kurulumu 1 dakika):

1. Vercel projenizin **Storage** sekmesi → **Marketplace Database
   Providers** → **Upstash** → **Upstash for Redis** seçin
2. Ücretsiz plan ile bir veritabanı oluşturun, projenize bağlayın
3. Vercel bunu yaptığınızda gerekli environment variable'ları
   (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`) otomatik olarak
   projenize ekler — elle bir şey yazmanıza gerek yok.

---

## 4) Ortam Değişkenlerini (Environment Variables) Ekleme

Vercel projenizde **Settings → Environment Variables** kısmına şunları
ekleyin (`.env.example` dosyasında da açıklamalı hâli var):

| Değişken | Değer | Açıklama |
|---|---|---|
| `ADMIN_USERNAME` | `admin` | İlk giriş kullanıcı adınız (istediğiniz gibi değiştirebilirsiniz) |
| `ADMIN_PASSWORD_HASH` | *(aşağıda)* | İlk giriş şifrenizin hash'i |
| `SESSION_SECRET` | *(aşağıda)* | Oturum güvenliği için rastgele anahtar |

**Hızlı başlangıç için hazır değerler** (giriş yaptıktan SONRA mutlaka
"Şifre Değiştir" sayfasından kendi şifrenizi belirleyin):

```
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2b$10$bei.3Ml7X5W.KO2JoIBlC.iXKiRh17K2hS./3FrJBghqmMBC6DsT6
SESSION_SECRET=c28b82d08d200d9c673f81e8b1847f1f2c6e2170af90196f67937fa5df7affe8
```

Yukarıdaki hazır şifre hash'i **`AyseDilara2026!`** şifresine karşılık
gelir. İlk girişte bu şifreyi kullanıp hemen değiştirin.

Kendi şifrenizin hash'ini üretmek isterseniz, bilgisayarınızda Node.js
kuruluysa proje klasöründeyken:

```bash
node -e "console.log(require('bcryptjs').hashSync('SIFRENIZ', 10))"
```

---

## 5) Deploy

Ortam değişkenlerini ekledikten sonra Vercel'de **Deploy** butonuna basın.
Build bitince size bir `https://...vercel.app` adresi verilir.

### Kendi alan adınızı (aysedilarasal.com.tr) bağlamak

Vercel projenizde **Settings → Domains** → alan adınızı yazıp ekleyin.
Vercel size birkaç DNS kaydı (genelde bir `A` kaydı ve/veya `CNAME`)
verecek; bu kayıtları alan adınızı satın aldığınız sağlayıcının (Natro,
Turhost, vb.) DNS yönetim panelinden ekleyin. DNS değişikliklerinin
yayılması birkaç saat sürebilir.

---

## 6) İlk İçeriği Yükleme

1. `https://siteniz.com/admin/login` adresine gidin
2. Kullanıcı adı/şifre ile giriş yapın
3. Panelde "Siteniz henüz boş görünüyor" kutusundaki **Örnek İçeriği
   Yükle** butonuna basın — bu, Hakkımda metni, eğitim/deneyim
   bilgilerinizi ve "Kaybeden & Bulan" projesini otomatik doldurur
4. Ardından her bölümü kendi güncel bilgilerinizle düzenleyin

---

## Yönetim Panelinden Neler Yapılabilir?

- **Hakkımda**: Hero başlığı, hakkımda metni, kariyer hedefi
- **Eğitim / Deneyim**: Ekle, düzenle, sil
- **Tezler**: Yüksek lisans / doktora tezlerinizi ekleyin
- **Makaleler**: Her makale için **Yurt İçi / Yurt Dışı** seçimi yapın;
  site otomatik olarak sekmeler halinde ayırır
- **Kongreler**: Aynı şekilde Yurt İçi / Yurt Dışı ayrımıyla
- **Projeler**: "Kaybeden & Bulan" gibi diğer çalışmalarınız
- **İletişim Bilgileri**: E-posta, telefon, sosyal medya bağlantıları
- **Şifre Değiştir**: Giriş şifrenizi her zaman değiştirebilirsiniz

Tüm değişiklikler anında canlı siteye yansır, yeniden deploy gerekmez.

---

## Yerel Geliştirme (opsiyonel)

```bash
npm install
cp .env.example .env.local   # değerleri doldurun
npm run dev
```

`http://localhost:3000` adresinde site, `http://localhost:3000/admin`
adresinde panel açılır. `.env.local`'de Upstash bilgisi girmezseniz site
geçici bir bellek-içi veri deposuyla çalışır (sayfa yenilenince veri
sıfırlanır) — bu sadece tasarımı önizlemek içindir.

---

## Teknik Yapı

- **Next.js 16** (App Router, Server Actions)
- **Tailwind CSS v4** — tasarım sistemi `app/globals.css` içinde
- **Upstash Redis** — tüm içerik verisi burada saklanır
- **jose + bcryptjs** — oturum yönetimi ve şifre güvenliği
- `lib/` klasörü: veri modelleri, CRUD fonksiyonları, auth mantığı
- `components/site/`: herkese açık sayfa bileşenleri
- `components/admin/`: yönetim paneli bileşenleri
- `app/admin/(protected)/`: giriş yapılmadan erişilemeyen admin sayfaları
  (koruma `proxy.ts` üzerinden sağlanır)
