const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.listen(port, () => {
    console.log('We live on ' + port);
});

app.post('/', (req, res) => {
    res.send(200, 'We are alive');
});

app.post('/order', (req, res) => {
    console.log('Customer\'s name: ' + req.body.name + '\n' + 'Customer\'s address: ' + req.body.address + '\n' + 'Card Number: ' + req.body.cardNumber);

});

app.get('/products', (req, res) => {
    res.send(200, JSONproducts);
});

const products = [
    {name: 'div', parent: '#categoryWrapper', header: 'iPhone X',
        imgURL: 'https://kaspi.kz/medias/sys_master/images/images/h55/h9e/9741543833630/apple-iphone-x-64gb-space-gray-1003317-4.png',
        text: 'Buy the Best iPhone ever for only 999$', index: 0, price: 'Price: 999$', info:'<p>The display has rounded corners that follow' +
            ' a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular ' +
            'shape, the screen is 5.85 inches (iPhone XS) and 6.46 inches (iPhone XS Max) diagonally. Actual viewable area is less.</p><p>iPhone' +
            ' XS and iPhone XS Max are splash, water, and dust resistant and were tested under controlled laboratory conditions with a rating of ' +
            'IP68 under IEC standard 60529 (maximum depth of 2 meters up to 30 minutes). Splash, water, and dust resistance are not permanent ' +
            'conditions and resistance might decrease as a result of normal wear. Do not attempt to charge a wet iPhone; refer to the user guide' +
            ' for cleaning and drying instructions. Liquid damage not covered under warranty.</p><p>Qi wireless chargers sold separately.\n' +
            'Compared with A11 Bionic.Data plan required. Gigabit-class LTE, LTE Advanced, and LTE are available in select markets and' +
            ' through select carriers. Speeds are based on theoretical throughput and vary based on site conditions and carrier. For details ' +
            'on LTE support, contact your carrier and see www.apple.com/iphone/LTE.</p>'},
    {name: 'div', parent: '#categoryWrapper', header: 'Samsung Galaxy S10',
        imgURL: 'https://webgik.ru/wp-content/uploads/2019/01/d7268df24dfc8fef34fae43d8f1faa31.jpg',
        text: 'Buy an amazing Galaxy S10 for only 1160$', index: 1, price: 'Price: 1160$', info: '<p>The Samsung Galaxy S10 mobile features a 6.1"' +
            ' (15.49 cm) display with a screen resolution of 1440 x 3040 pixels and runs on Android v9.0 (Pie) operating system. The device is' +
            ' powered by Octa core (2.73 GHz, Dual core, M4 Mongoose + 2.31 GHz, Dual core, Cortex A75 + 1.95 GHz, Quad core, Cortex A55) processor ' +
            'paired with 8 GB of RAM. As far as the battery is concerned it has 3400 mAh. Over that, as far as the rear camera is concerned this ' +
            'mobile has a 12MP + 12MP + 16MP camera . Other sensors include Light sensor, Proximity sensor, Accelerometer, Barometer, Compass, ' +
            'Gyroscope. So, does it have a fingerprint sensor? Yes, it does. For graphical performance that can make games run smoothly, this ' +
            'phone has got a Mali-G76 MP12 GPU. On board storage is at 128 GB with the option to expand the memory by Yes Up to 512 GB. Design ' +
            'is one of the most important factors when it comes to mobiles. This phone is 7.8 mm slim and weighs 157 grams. </p>'},
    {name: 'div', parent: '#categoryWrapper', header: 'Google Pixel 3',
        imgURL: 'https://kaspi.kz/medias/sys_master/images/images/hbb/h87/9613139968030/google-pixel-3-64gb-black-1004465-1.png',
        text: 'Buy the android flagship smartphone for only 1000$', index: 2, price: 'Price: 1000$', info: '<p>The Pixel 3 from Google offers ' +
            'a premium build quality thanks to an aluminium frame and a glass back. The smartphone gets Gorilla Glass 5 protection at the front' +
            ' and the back. It has a 5.5-inch FHD+ display with the 18:9 aspect ratio. Powering the phone is a Snapdragon 845 processor. ' +
            'The phone has 4GB of RAM and comes in 64GB and 128GB internal storage options. It is a single-SIM device and has an eSIM. At ' +
            'the back, the Pixel 3 has a single 12.2-megapixel camera along with the LED flash. It sports a dual selfie camera setup at the' +
            ' front consisting of an 8-megapixel wide-angle lens and an 8-megapixel standard lens. It has a 2915mAh non-removable battery ' +
            'and runs on stock Android 9 Pie</p>'},
    {name: 'div', parent: '#categoryWrapper', header: 'Xiaomi Mi 9',
        imgURL: 'https://npvua.com/ru/wp-content/uploads/2018/11/Xiaomi-Mi-9-opublikovany-predpolagaemye-harakteristiki-i-render-gryadushhego-flagmana.jpg',
        text: 'Why overpay if it is Xiaomi Mi 9 for only 450$ ?', index: 3, price: 'Price: 450$', info: '<p>Xiaomi Mi 9 smartphone was launched in February 2019. The phone comes with' +
            ' a 6.39-inch touchscreen display with a resolution of 1080x2340 pixels and an aspect ratio of 19.5:9.\n' +
            '\n' + 'Xiaomi Mi 9 is powered by a 2.84GHz octa-core Qualcomm Snapdragon 855 processor. It comes with 6GB of RAM.\n' +
            '\n' + 'The Xiaomi Mi 9 runs Android 9.0 and is powered by a 3,300mAh battery. The Xiaomi Mi 9 supports wireless charging, as well as proprietary fast charging.\n' + '\n' +
            'As far as the cameras are concerned, the Xiaomi Mi 9 on the rear packs a 48-megapixel primary camera with an f/1.75 aperture and a pixel size of 0.8-micron; a second 12-megapixel ' +
            'camera with an f/2.2 aperture and a pixel size of 1.0-micron and a third 16-megapixel camera with an f/2.2 aperture and a pixel size of 1.0-micron. The rear camera setup has autofocus.' +
            ' It sports a 20-megapixel camera on the front for selfies, with an f/2.0 aperture and a pixel size of 0.9-micron.</p>'},
    {name: 'div', parent: '#categoryWrapper', header: 'Meizu 16',
        imgURL: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/Meizu_16/Meizu_16_L_1.jpg',
        text: 'The most advanced smartphone from Meizu for only 700$', index: 4, price: 'Price: 700$', info: '<p>The Meizu 15 came out in April 2018' +
            ' which makes the Meizu 16th announcement earlier this month a bit unexpected. There is, however, good reason for that. For one, the' +
            ' Meizu 15 comes up short of being labeled as a premium flagship product, especially when it came to the specs – and with the Meizu ' +
            '16th, the company is redoing a lot of things, starting with the name. Yes, that’s “16th”, not “16”, and definitely not “the 16th”.</p>'},


    {name: 'div', parent: '#categoryWrapper', header: 'MacBook Air 2018',
        imgURL: 'https://kaspi.kz/medias/sys_master/images/images/hd1/h2c/9636982456350/apple-macbook-air-13-2018-mre92-256-gb-space-gray-1306316-1.png',
        text: 'Lightness strikes again for only 1200$', index: 5, price: 'Price: 1200$', info: '<p>Apple\'s MacBook Air has gotten a much-needed reboot, keeping the name, but changing ' +
            'just about everything else, both outside and in. That means a new 8th-gen' + ' Intel Core i5 CPU, more RAM and SSD options, a high-res Retina display, and the move to USB-C ' +
            'Thunderbolt 3 ports. And while it\'s still called the MacBook Air, this new ' + 'version might as well be called the "MacBook Pro Lite," because that\'s essentially what it is.' + '\n' +
            'For most of its 10-plus year life, the classic MacBook Air was the ' + 'default laptop for pretty much everyone, from college students to creative types to startup entrepreneurs.' +
            ' For many years, I called it the single most universally useful laptop you could buy.</p>'},
    {name: 'div', parent: '#categoryWrapper', header: 'Dell XPS 15',
        imgURL: 'https://cdn.cnetcontent.com/cf/b4/cfb4fc5a-2ebc-447a-8669-263700be6d57.jpg',
        text: 'A great power of intel Core i7 for only 1000$', index: 6, price: 'Price: 1000$', info:'<p>XPS laptops are designed to be the loudest, clearest and cleanest laptops on the planet. \n' +
            'High-fidelity JBL speakers combined with Waves MaxxAudio® 3 technology produce rich, full sound that delivers booming bass and razor-sharp clarity to your favorite movies, music and games.\n' +
            'Treat your ears with up to 20W of peak audio performance on the XPS 15.Using the same award-winning Waves algorithms heard on hit records, major motion pictures, and popular video games the world ' +
            'over, MaxxAudio is designed to deliver better dynamic range, frequency response, and imaging, with maximum transparency, clarity, and natural sound. Waves® Pro Audio tools are endorsed by many of ' +
            'the biggest names in show business, including twelve-time Grammy® award winner Kanye West.</p>'},
    {name: 'div', parent: '#categoryWrapper', header: 'Xiaomi Mi notebook Air',
        imgURL: 'https://s.4pda.to/seOp0woDq2A86o7eH9X6BicFJZNQdtc3z0uKV.jpg',
        text: 'Why overpay if it is Xiaomi Mi notebook Air for only 450$ ?', index: 7, price: 'Price: 450$', info:'<p>Chinese manufacturing giant, Xiaomi, is one ' +
            'of the fastest growing companies in the world right now. In just 7 years of its existence, it has unveiled products that compete with the likes of ' +
            'Samsung and Apple. This company releases all sorts of products which range from smart TVs to projectors, mopping machine, alarm clocks,  backpacks,' +
            ' shoes, accessories such as Bluetooth mouse, keyboard, and even medical assistants. Manufacturing of notebooks by this company started recently and ' +
            'I can say without prejudice that its notebooks are so far impressive. Following the release of Xiaomi Mi Notebook Air 13.3 (2017) and the Xiaomi Air' +
            ' 12, the Xiaomi Mi Notebook Pro is Xiaomi’s new baby in town. However, I will only give a detailed review of the performance of this laptop and you' +
            ' will be the judge of its abilities. When you take a detailed look at the screen of the Xiaomi Mi Notebook Pro, the first thing that you will identify' +
            ' is probably the ultra-thin 6.52mm side bezels which get thicker at the top and bottom because it sports a 1.0MP front camera and the “MI” logo ' +
            'respectively.  This IPS screen with 1920 x 1080 (FHD) display resolution has an 81.5% screen-to-body ratio which reduces reflection, improves vision' +
            ' and produces an outstanding/delicate color combination with high brightness. Whatever has been said so far about the screen of the Xiaomi Mi Notebook' +
            ' Pro are just words and only a test will truly determine its performance because “all that glitters are not gold”.</p>'},
    {name: 'div', parent: '#categoryWrapper', header: 'Asus Zenbook',
        imgURL: 'https://cdn.cnetcontent.com/eb/8d/eb8d7359-3075-4d94-b2ff-a223b05f2ae3.jpg',
        text: 'A new boring asus for only 1100$', index: 8, price: 'Price: 1100$', info:'<p>Unveiled at IFA 2018, the 13.3-inch ZenBook UX333 is part of Asus’ ' +
            'new narrow-bezel Ultrabook family consisting of the UX333, 14-inch UX433, and 15.6-inch UX533. Unlike competing narrow-bezel laptops, however, these' +
            ' new ZenBooks have narrow bezels on all four sides of the screen instead of just two or three. The screen-to-body ratio is thus one of the highest ' +
            'in the market with a unique hinge design to further distinguish the series from competitorsThe ZenBook UX333 starts at $850 USD with a Whiskey Lake-U ' +
            'Core i5-8265U CPU and 8 GB of RAM or users can configure up to the higher-end Core i7-8565U with 16 GB of RAM and a dedicated GeForce MX150 GPU. The ' +
            '1080p resolution remains fixed across all options. Our test unit today is the lower-end SKU. Direct competitors include the Dell XPS 13, HP Spectre 13,' +
            ' Lenovo Yoga C930, Huawei MateBook X Pro, Acer Swift 7, and the Razer Blade Stealth. The UX333 is a direct successor to the last generation ZenBook ' +
            'UX331 series. We recommend checking out our existing review on the ZenBook UX433 as all models in the UX333/433/533 family share similar designs and features.</p>'},
    {name: 'div', parent: '#categoryWrapper', header: 'Lenovo Yoga',
        imgURL: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Lenovo_Yoga_920/Lenovo_Yoga_920_L_1.jpg',
        text: 'Lenovo Yoga for only 550$', index: 9, price: 'Price: 550$', info:'<p>The Yoga Book, at first glance, looks like every other Lenovo Yoga laptop – only smaller.' +
            ' The impressive, gorgeous watchband hinge first introduced with the Yoga 3 is present and correct, and the insanely thin device is wrapped in a smooth, luxurious ' +
            'magnesium alloy shell like so many Yoga devices before it. The Android edition of the Lenovo Yoga Book, which we’d guess Lenovo expect to sell more, comes in ' +
            'Champagne Gold, Carbon Black and Gunmetal Gray finishes. The Windows 10 edition just comes in Carbon Black – but all of these finishes look fantastic. [Editor’s' +
            ' Note: This review focuses on the Windows 10 version of the Yoga Book, with salient differences in the Android Marshmallow version noted.] A power button and ' +
            'volume rocker on the device’s right side are edged in chrome, and speakers sit behind dotted grilles on either side of the keyboard deck. The speakers pump out' +
            ' suitable range and volume despite their size, thanks to Dolby Atmos technology inside. Another impressive feature about the Yoga Book despite its size is the ' +
            '10.1-inch, 1,920 x 1,200 resolution screen. With 400 nits of brightness and the capability to display a range of 16.7 million colors, HD movies look excellent ' +
            'on the Yoga Book, and in-plane switching (IPS) means wide angles for screen sharing.</p>>'},
];

const JSONproducts = JSON.stringify(products);