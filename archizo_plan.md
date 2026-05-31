# Archizo Design Studio — Website Projesi

## Ne yapıyoruz?
Archizo Design Studio adlı bir mimarlık firması için tek sayfalık bir website geliştiriyoruz.
Tasarım referansı olarak archizo_tasarim1.html dosyası mevcut — bu dosyadaki görsel yapıyı,
renk paletini ve layout'u React'a taşıyacağız.

## Çalışma şeklimiz
- Kodu birlikte adım adım yazıyoruz
- Ben (Mustafa) projenin içindeyim — her adımda onayım olmadan hiçbir dosyada değişiklik yapma
- Şu an sadece plan aşamasındayız — henüz kod yazma, dosyalara dokunma
- Bir adımı bitirmeden bir sonrakine geçme
- Her adımda ne yapacağını önce bana söyle, onayladıktan sonra uygula

## Mevcut durum
- archizo_tasarim1.html → tasarım referansı (HTML/CSS ile yazılmış prototip)
- archizio-react → hedef React projesi (buraya taşıyacağız)

## Renk paleti ve kimlik
- Krem: #F5F0E8 | Antrasit: #1A1A1A | Bej: #EDE6D6 | Sand: #D4C9B5
- Font: Cormorant Garamond (serif, başlıklar) + Jost (sans, gövde)
- Logo: ARC|HIZO — dikey çizgiyle bölünmüş

## Sayfa yapısı (sırasıyla)
1. Nav — logo sol, linkler orta/sağ, TR/EN dil seçici
2. Hero — büyük görsel + krem metin kutusu + slogan + CTA butonu
3. Alıntı şeridi — koyu arka plan, italik motto
4. Hizmetler — 5 kart (Mimari, İç Mimari, Peyzaj, Konsept, Uygulama)
5. Projeler — asimetrik grid, tıklanınca modal açılır
6. İletişim — form (isim, e-posta, mesaj)
7. Instagram Feed — son gönderiler
8. Footer

## Teknik kararlar
- React (functional components + hooks)
- CSS Modules veya styled-components — hangisi projede kuruluysa onu kullan
- TR/EN dil seçici için useState ile basit i18n
- Smooth scroll navigasyon
- Fade-in animasyonları (Intersection Observer)
- Proje görselleri şimdilik placeholder — ilerleyen aşamada gerçek fotoğraflar gelecek

## Öncelik sırası
Şu an sadece şunları yap:
1. archizo_tasarim1.html dosyasını oku ve anla
2. archizio-react projesinin mevcut yapısına bak (package.json, src klasörü)
3. Komponent ağacını ve klasör yapısını öner
4. Planı bana sun — onayladıktan sonra bir sonraki adıma geç
