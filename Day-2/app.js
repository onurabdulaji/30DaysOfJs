
// // Şimdi ilkel ve ilkel olmayan veri türlerinin tam olarak ne anlama geldiğini görelim.
// // İlkel veri türleri değişmez(değiştirilemez) veri türleridir.İlkel bir veri türü oluşturulduktan sonra onu değiştiremeyiz.

// let word = 'JavaScript'

// /*
// word değişkeninde saklanan dizeyi değiştirmeye çalışırsak JavaScript bir hata vermelidir.
//  Tek, çift veya ters tırnak arasındaki herhangi bir veri türü, dize veri türüdür.
// */


// word[0] = 'Y'

// /*
// Bu ifade word değişkeninde saklanan dizeyi değiştirmez. Yani, string'lerin değiştirilemez ya da başka bir deyişle değişmez olduğunu söyleyebiliriz.
// İlkel veri türleri değerlerine göre karşılaştırılır. Farklı veri değerlerini karşılaştıralım. Aşağıdaki örneğe bakın:
// */

// let numOne = 3
// let numTwo = 3

// console.log(numOne == numTwo)  // true ( Burada iki değişkende 3 e eşit olduğu için birbirine eşit olduğu sonucu çıkıyor )

// let js = 'JavaScript'
// let py = 'Python'

// console.log(js == py)             //false  ( Burada iki değişkende farklı olduğu ve eşitlenemedikleri için false yani 0 değeri dönüyor )


// let lightOn = true
// let lightOff = false

// console.log(lightOn == lightOff)  //false  ( Yukarıdaki örnek gibi eeşit olmadıkları için false yani 0 değeri dönüyor )


// // İlkel Olmayan Veri Türleri
// // İlkel olmayan veri türleri düzenlenebilir veya değiştirilebilir.

// let nums = [1, 2, 3]
// nums[0] = 10
// console.log(nums)  // [10, 2, 3] ( nums değişkeninin ilk elemanı yada 0. indeksinin değerini 10 yapmış oldu )

// // Gördüğünüz gibi "DİZİ" ilkel olmayan bir veri türü değişkenidir.
// // İlkel olmayan veri türleri değere göre karşılaştırılamaz.İlkel olmayan veri türleri aynı özelliklere ve değerlere sahip olsa bile, kesinlikle eşit değildirler.

// let nums1 = [1, 2, 3]
// let numbers1 = [1, 2, 3]

// console.log(nums1 == numbers1)  // false

// let userOne = {
//     name: 'Asabeneh',
//     role: 'teaching',
//     country: 'Finland'
// }

// let userTwo = {
//     name: 'Asabeneh',
//     role: 'teaching',
//     country: 'Finland'
// }

// console.log(userOne == userTwo) // false

// /*
// Temel kural, ilkel olmayan veri türlerini karşılaştıramıyoruz.Dizileri(arrays),
// fonksiyonları(functions) veya nesneleri(objects) karşılaştırmayın.
// İlkel olmayan değerler, değer yerine referansla karşılaştırıldıkları için referans türleri olarak adlandırılır.
// İki nesne, yalnızca aynı temel nesneye atıfta bulunuyorlarsa kesinlikle eşittir.
// */

// const PI = Math.PI // Buraya kısa bir açıklama getirelim. Math objesi sayesinde PI sayısının değerini otomatik alıyoruz.
// console.log(PI)                            // 3.141592653589793

// // En yakın sayıya yuvarlama
// // Eğer .5'in altındaysa aşağıya üstündeyse yukarıya yuvarlar. Örn: 3.14 ise 3 yapar 3.51 ise 4 yapar.

// console.log(Math.round(PI))                // 3.14 olduğu için 3 e yuvarlama yapıyor
// console.log(Math.round(9.81))              // Ondası 0.5 üstünde olduğu için 10 yapar
// console.log(Math.floor(PI))                // floor aşağı yuvarlar Bu 3 olur
// console.log(Math.ceil(PI))                 // ceil yukarı yuvarlar Bu 4 olur
// console.log(Math.min(-5, 3, 20, 4, 5, 10)) // En küçük sayıyı bulmaya yaradığı için sonuç -5 döner
// console.log(Math.max(-5, 3, 20, 4, 5, 10)) // En büyük sayıyı bulmaya yaradığı için sonuç 20 döner

// const randNum = Math.random() // 0 ile 0.999999 arasında rastgele bir sayı üretir.
// console.log(randNum)          // 0.4735760703264388

// // 0 ile 10 arasında rastgele bir sayı oluşturalım.

// const num = Math.floor(Math.random() * 11) // 0 ile 10 arasında rastgele sayı oluşturur
// console.log(num)

// //Mutlak değer
// console.log(Math.abs(-10))      // 10

// //Kare kök
// console.log(Math.sqrt(100))     // 10

// console.log(Math.sqrt(2))       // 1.4142135623730951

// // Üs
// console.log(Math.pow(3, 2))     // 9

// console.log(Math.E)             // 2.718

// // Logaritma
// // Returns the natural logarithm with base E of x, Math.log(x)
// console.log(Math.log(2))        // 0.6931471805599453
// console.log(Math.log(10))       // 2.302585092994046

// // Sırasıyla 2 ve 10'un doğal logaritmasını döndürür
// console.log(Math.LN2)           // 0.6931471805599453
// console.log(Math.LN10)          // 2.302585092994046

// // Trigonometri
// Math.sin(0)
// Math.sin(60)

// Math.cos(0)
// Math.cos(60)


// Rastgele Sayı Üretme

// JavaScript'te Math nesnesi random() methodu 0 ile 0,999999999 arasında bir sayı üretir

// let randomNum = Math.random()         // 0 ile 0.999 arasında oluşturur
// let numBtnZeroAndTen = randomNum * 11

// console.log(numBtnZeroAndTen)         // Sonuç : minimum  0 ve maksimum 10.99

// let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen) // yuvarlama yapıyor
// console.log(randomNumRoundToFloor)    // Sonuç 0 ile  10 arasında çıkar



// Strings

// Dizeler tek, çift ve ters tırnak arasındaki metinlerdir.Bir dize bildirmek için değişken adına, atama operatörüne,
// tek tırnak, çift tırnak veya ters tırnak içerisinde bir değere ihtiyacımız var.Bazı dize örnekleri görelim:

// let space = ' '           // boş alan string tek tırnaklı
// let firstName = 'Asabeneh' // tek tırnaklı string
// let lastName = 'Yetayeh' // tek tırnaklı string
// let country = 'Finland' // tek tırnaklı string
// let city = 'Helsinki' // tek tırnaklı string
// let language = 'JavaScript' // tk tırnaklı string
// let job = 'teacher' // tek tırnaklı string
// let quote = "The saying,'Seeing is Believing' is not correct in 2020." // çift tırnaklı string
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.` // ters tırnaklı string (bu karakteri genellikle klavyenizdeki noktalı virgülü kullanarak yaparsınız. Benim klavyemde alt gr + noktalı virgül ve iki kere tıklanınca çıkıyor)

// // String Birleştirme.

// // İki veya daha fazla string'i birbirine bağlama işlemine birleştirme denir. Yukarda bulunan string örneklerini kullanarak:

// let fullName = firstName + space + lastName; // birleştirme, iki string'i bir araya getirme.
// console.log(fullName);

// let fullName = firstName + space + lastName



// Farklı veri türlerini oluşturma
// let space = ' '
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let age = 250


// let fullName = firstName + space + lastName
// let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 toplama operatörü ile değişkenleri birleştiriyor

// console.log(personInfoOne)