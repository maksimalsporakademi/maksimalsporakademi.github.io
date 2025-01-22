# Proje Adı

Bu proje, modern bir HTML tabanlı web sitesi geliştirmek için oluşturulmuş bir yapıdır. Aşağıda, projenin yapısı ve içeriği hakkında detaylı bilgi bulunmaktadır.

## Proje Yapısı

```
-.git
-assets/
  -images/
    -gallery/
       -photos/
         -image1.jpg
         -image2.jpg
       -thumbnails/
         -image1_thumbnail.jpg
         -image2_thumbnail.jpg
    -logo/
       -logo.svg
    -slider/
       -gorsel1.webp
       -gorsel2.webp
       -gorsel3.webp
       -gorsel4.webp
  -json/
    -gallery-images.json
    -slider-images.json
-css/
  -slider.css
  -style.css
-dist
-js/
  -script.js
-pages/
  -about.html
  -contact.html
  -educations.html
  -gallery.html
  -home.html
  -instructors.html
-.gitignore
-index.html
```

## Dosya ve Klasörler

### Ana Klasörler

- **assets/**: Projede kullanılan görseller, JSON dosyaları ve diğer medya dosyalarını içerir.
  - **images/**: Görsellerin kategorilere ayrıldığı bir yapı.
    - **gallery/**: Galeri görselleri ve küçük önizleme (thumbnail) görselleri.
    - **logo/**: Projede kullanılan logo dosyası.
    - **slider/**: Kaydırıcı (slider) görselleri.
  - **json/**: Görsel ve kaydırıcı verilerini içeren JSON dosyaları.

- **css/**: Stil dosyalarını içerir.
  - **slider.css**: Kaydırıcıya özel stiller.
  - **style.css**: Genel stil dosyası.

- **js/**: JavaScript dosyalarını içerir.
  - **script.js**: Projenin ana JavaScript dosyası.

- **pages/**: Projenin farklı sayfalarını içerir.
  - **about.html**: Hakkımızda sayfası.
  - **contact.html**: İletişim sayfası.
  - **educations.html**: Eğitimler sayfası.
  - **gallery.html**: Galeri sayfası.
  - **home.html**: Ana sayfa.
  - **instructors.html**: Eğitmenler sayfası.

- **dist/**: Derlenmiş ve yayınlanmaya hazır dosyalar.

### Ana Dosyalar

- **index.html**: Web sitesinin ana sayfası.
- **.gitignore**: Git için yoksayılan dosya ve klasörler.

## Kurulum

1. Bu repoyu klonlayın:
   ```bash
   git clone <repo-link>
   ```
2. Gerekli bağımlılıkları yükleyin (eğer varsa).
3. Projeyi bir tarayıcıda görüntülemek için `index.html` dosyasını açın.

## Kullanım

Bu proje, HTML, CSS ve JavaScript ile modern ve esnek bir web sitesi oluşturmak için tasarlanmıştır. İlgili dosyaları düzenleyerek kendi içeriğinizi ekleyebilirsiniz.

## Katkıda Bulunma

1. Projeyi forklayın.
2. Yeni bir dal oluşturun:
   ```bash
   git checkout -b yeni-ozellik
   ```
3. Değişikliklerinizi yapın ve commit edin:
   ```bash
   git commit -m "Yeni özellik ekle"
   ```
4. Değişiklikleri iterek bir pull request oluşturun:
   ```bash
   git push origin yeni-ozellik
   ```

## Lisans

Bu proje [Lisans Adı] lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına göz atın.
