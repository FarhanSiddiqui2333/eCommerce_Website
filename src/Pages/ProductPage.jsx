import React, { useEffect, useState } from 'react'
import CategoryBTN from '../CategoryButton/CategoryBTN'
import Nav from '../NavComponent/Nav'
import FeedBack from '../FeedComponent/FeedBack'
import Footer from '../FooterComponent/Footer'
import { Link } from 'react-router-dom'


const ProductPage = ({ count }) => {
    let APIDATA = [
        {
            "title": "Classic Comfort Fit Joggers",
            "price": 25,
            "description": "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
            "image": "https://i.imgur.com/ZKGofuB.jpeg",
            "category": "Clothes"
        },
        ,
        {
            "title": "Classic Comfort Drawstring Joggers",
            "price": 79,
            "description": "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
            "image": "https://i.imgur.com/mp3rUty.jpeg",
            "category": "Clothes"
        },
        {
            "title": "Classic Navy Blue Baseball Cap",
            "price": 61,
            "description": "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
            "image": "https://i.imgur.com/R3iobJA.jpeg",
            "category": "Clothes"
        },
        {
            "title": "Classic Blue Baseball Cap",
            "price": 86,
            "description": "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.",
            "image": "https://i.imgur.com/wXuQ7bm.jpeg",
            "category": "Clothes"
        },
        {
            "title": "Classic Black Baseball Cap",
            "price": 58,
            "description": "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
            "image": "https://i.imgur.com/KeqG6r4.jpeg",
            "category": "Clothes"
        },
        {
            "title": "Classic Olive Chino Shorts",
            "price": 84,
            "description": "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
            "image": "https://i.imgur.com/UsFIvYs.jpeg",
            "category": "Clothes"
        },
        {
            "title": "Classic High-Waisted Athletic Shorts",
            "price": 43,
            "description": "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
            "image": "https://i.imgur.com/eGOUveI.jpeg",
            "category": "Clothes"
        },
        {
            "title": "Classic White Tee - Timeless Style and Comfort",
            "price": 73,
            "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
            "image": "https://i.imgur.com/Y54Bt8J.jpeg",
            "category": "Clothes"
        },
        {
            "title": "Classic Black T-Shirt",
            "price": 35,
            "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
            "image": "https://i.imgur.com/9DqEOV5.jpeg",
            "category": "Clothes"
        },
        {
            "title": "Sleek White & Orange Wireless Gaming Controller",
            "price": 69,
            "description": "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Sleek Wireless Headphone & Inked Earbud Set",
            "price": 44,
            "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
            "image": "https://i.imgur.com/yVeIeDa.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Sleek Comfort-Fit Over-Ear Headphones",
            "price": 28,
            "description": "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
            "image": "https://i.imgur.com/SolkFEB.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Efficient 2-Slice Toaster",
            "price": 48,
            "description": "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
            "image": "https://i.imgur.com/keVCVIa.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Sleek Wireless Computer Mouse",
            "price": 10,
            "description": "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
            "image": "https://i.imgur.com/w3Y8NwQ.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Sleek Modern Laptop with Ambient Lighting",
            "price": 43,
            "description": "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
            "image": "https://i.imgur.com/OKn1KFI.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Sleek Modern Laptop for Professionals",
            "price": 97,
            "description": "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
            "image": "https://i.imgur.com/ItHcq7o.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Stylish Red & Silver Over-Ear Headphones",
            "price": 39,
            "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
            "image": "https://i.imgur.com/YaSqa06.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Sleek Mirror Finish Phone Case",
            "price": 27,
            "description": "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
            "image": "https://i.imgur.com/yb9UQKL.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Sleek Smartwatch with Vibrant Display",
            "price": 16,
            "description": "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
            "image": "https://i.imgur.com/LGk9Jn2.jpeg",
            "category": "Electronics"
        },
        {
            "title": "Mid-Century Modern Wooden Dining Table",
            "price": 24,
            "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
            "image": "https://i.imgur.com/DMQHGA0.jpeg",
            "category": "furniture"
        },
        {
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            "category": "Electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        },
        {
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "Electronics",
            "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        },
        {
            "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            "price": 114,
            "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            "category": "Electronics",
            "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        },
        {
            "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
            "price": 599,
            "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
            "category": "Electronics",
            "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        },
        {
            "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
            "price": 999.99,
            "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
            "category": "Electronics",
            "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        },
        {
            "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            "price": 56.99,
            "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
            "category": "Clothes",
            "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        },
        {
            "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
            "price": 29.95,
            "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
            "category": "Clothes",
            "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        },
        {
            "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            "price": 39.99,
            "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
            "category": "Clothes",
            "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        },
        {
            "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
            "price": 9.85,
            "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
            "category": "Clothes",
            "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        },
        {
            "title": "Opna Women's Short Sleeve Moisture",
            "price": 7.95,
            "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
            "category": "Clothes",
            "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        },
        {
            "title": "DANVOUY Womens T Shirt Casual Cotton Short",
            "price": 12.99,
            "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
            "category": "Clothes",
            "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        },
        {
            "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
            "price": 773,
            "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
            "brand": "sony",
            "model": "WH-1000XM3",
            "color": "silver",
            "category": "audio"
        },
        {
            "title": "Microsoft Xbox X/S Wireless Controller Robot White",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
            "price": 57,
            "description": "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
            "brand": "microsoft",
            "model": "Xbox X/S",
            "color": "white",
            "category": "gaming"
        },
        {
            "title": "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
            "price": 384,
            "description": "Total freedom with up to 20 m wireless range and LIGHTSPEED wireless audio transmission. Keep playing for up to 29 hours of battery life. 1 Play in stereo on PlayStation(R) 4.\r\nPersonalize your headset lighting across the full spectrum, 16. 8M colors. Play in colors with front-facing, dual-zone LIGHTSYNC RGB lighting and choose from preset animations or create your own with G HUB software.\r\nColorful, reversible suspension headbands are designed for comfort during long play sessions.\r\nAdvanced mic filters that make your voice sound richer, cleaner, and more professional. Customize with G HUB and find your sound.\r\nHear every audio cue with breathtaking clarity and get immerse in your game. PRO-G drivers are designed to significantly reduce distortion and reproduce precise, consistent, rich sound quality.\r\nSoft dual-layer memory foam that conforms to your head and reduces stress points for long-lasting comfort.\r\nG733 weighs only 278 g for long-lasting comfort.",
            "brand": "logitech G",
            "model": "G733 LIGHTSPEED",
            "color": "white",
            "category": "gaming"
        },
        {
            "title": "Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Clear Calling, 30Hr Battery, 3 Min Quick Charge = 3 Hours Playback, Multi Point Connectivity, Alexa-Silver",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
            "price": 362,
            "description": "Industry Leading noise cancellation-two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, noise cancelling is automatically optimized based on your wearing conditions and environment.\r\nIndustry-leading call quality with our Precise Voice Pickup Technology uses four beamforming microphones and an AI-based noise reduction algorithm\r\nMagnificent Sound, engineered to perfection with the new Integrated Processor V1\r\nCrystal clear hands-free calling with 4 beamforming microphones, precise voice pickup, and advanced audio signal processing.",
            "brand": "song",
            "model": "WH1000XM5/SMIN",
            "color": "white",
            "category": "audio"
        },
        {
            "title": "Urbanista Los Angeles Sand Gold - World’s 1st Solar Powered Hybrid Active Noise Cancelling with Mic Premium Wireless Headphones, Unlimited Playtime",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
            "price": 265,
            "description": "Welcome to the dawn of a new era with URBANISTA LOS ANGELES, the world’s first solar-charging premium wireless headphoneS powered by Powerfoyle solar cell material. Using ADVANCED GREEN TECHNOLOGY, Los Angeles converts all light, outdoor and indoor, into energy to deliver virtually infinite playtime. Los Angeles never stops charging when exposed to light, providing you with a nonstop audio experience. With Los Angeles, you’re always in complete control of your audio experience. Just the press of a button activates advanced hybrid Active Noise Cancelling, instantly reducing unwanted background noise, or switches on Ambient Sound Mode so you can stay aware of important surrounding sounds.",
            "brand": "urbanista",
            "model": "Los Angeles",
            "color": "sand gold",
            "category": "audio"
        },
        {
            "title": "Xiaomi Wired in-Ear Earphones with Mic, Ultra Deep Bass & Metal Sound Chamber (Blue)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
            "price": 5,
            "description": "Ergonomically angled to fit perfectly in your ear canal that provides long lasting comfort for every day usage.\r\nFeatures 1.25 meter long cable & L-shaped 3.5mm jack to connect with your phone. Due to the L-shape, the connector will deliver a strong & durable life. Earphones are compatible with Android, iOS & Windows devices with jack.\r\nPowerful 10 mm drivers & aluminum sound chamber for super extra bass and clear sound for the best music & calling experience.\r\nHigh-quality silicone earbuds, which are gentle on skin without compromising the comfortable fit on the ears.\r\nIn-line microphone with a durable multi-function button to play/pause your music, and answer/end your calls, all with just one tap.",
            "brand": "xiaomi",
            "model": "Mi Earphones Basic Blue",
            "color": "Blue",
            "category": "audio"
        },
        {
            "title": "boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0, with Mic (Buoyant Black)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
            "price": 12,
            "description": "Rockerz 370 come equipped with latest Bluetooth v5.0 for instant wireless connectivity\r\nThe powerful 300mAh battery provides up to 8 Hours of audio bliss\r\n40mm Dynamic Drivers supply immersive High Definition sound\r\nThe headset has padded earcups for a comfortable experience\r\nThe headphone has been ergonomically and aesthetically designed for a seamless experience\r\nOne can connect to Rockerz 370 via dual modes for connectivity in the form of Bluetooth and AUX\r\n1 year warranty from the date of purchase.",
            "brand": "boat",
            "model": "Rockerz 370",
            "color": "Black",
            "category": "audio"
        },
        {
            "title": "Amkette EvoFox Elite Ops Wireless Gamepad for Android TV | Google TV | 8+ Hours of Play Time | Zero Lag Connectivity Upto 12 Feets | USB Extender for TV Included | - Dusk Grey",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg",
            "price": 18,
            "description": "The EvoFox Elite Ops Wireless Gamepad with Type C Charging is the ideal Android TV Gamepad. With all Android TVs supporting at least basic Gaming, a Gamepad at home is a must. Use the provided USB Extender Cable on your TV to ensure optimal wireless performance.\r\nThis Wireless Controller also supports Windows with X input and D input modes, and PS3s. It automatically detects and changes the gamepad mode based on your system. Simply Plug and Play!\r\nThe Elite Ops features Digital Triggers (not Analog), Accurate 360 degree concave thumbsticks, a Precise 8 way floating D-Pad. The gamepad also features dual rumble Vibration motors (for PC and PS3 only) and an easy to use Turbo Mode.\r\nThe gamepad comes with a Type C charging port and the 400mAh Rechargeable battery ensures 8 hours of non stop gameplay. The ergonomic and robust design with anti-sweat matte finish makes it easy on your hands, but tough on your enemies.",
            "brand": "Amkette",
            "model": "Woburn II Bluetooth",
            "color": "gray",
            "category": "gaming"
        },
        {
            "title": "Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074519203-galaxy S22 5G.jpg",
            "price": 760,
            "description": "Pro-grade Camera that lets you make your nights epic with Nightography: It’s our brightest innovation yet. The sensor pulls in more light, the Super Clear Glass dials down lens flare, and fast-acting AI delivers near-instant intelligent processing.\r\nVisionBooster outshines the sun: Stunning 120Hz Dynamic AMOLED 2X display is crafted specifically for high outdoor visibility, keeping the view clear in bright daylight.\r\n4nm processor, our fastest chip yet: Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.\r\nSleek design in a range of colors lets you express yourself how you like. The slim bezels flow into a symmetrical polished frame for an expansive, balanced display. Corning Gorilla Glass Victus+ on the screen and back panels.",
            "brand": "samsung",
            "model": "Samsung Galaxy S22 5G",
            "color": "White",
            "category": "mobile"
        },
        {
            "title": "Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) ",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074776147-galaxy S22 ultra 5G.jpg",
            "price": 1147,
            "description": "The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen stroke feel as natural as ink on paper — and you can convert those hastily written ideas into legible text.\r\n5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.\r\nThe Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness.* And the 120Hz adaptive refresh rate keeps the scroll smooth, adjusting to what's on screen for an optimized view.",
            "brand": "samsung",
            "model": "Samsung Galaxy S22 Ultra 5G",
            "color": "Burgundy",
            "category": "mobile",
        },
        {
            "title": "Poco by Xiaomi F1 Steel Blue, 6GB RAM, 64GB Storage",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691078463674-poco f1.jpg",
            "price": 132,
            "description": "2MP+5MP dual camera | 20MP front facing camera\r\n15.69 centimeters (6.18-inch) IPS (in-cell) multi-touch capacitive touchscreen with 2246 x 1080 pixels resolution, 403 ppi pixel density\r\nMemory, Storage & SIM: 6GB RAM, 64GB internal memory expandable up to 128GB | Dual SIM (nano+nano) dual-standby (4G+4G)\r\nAndriod Oreo v8.1 operating system with 2.8GHz Qualcomm Snapdragon 845 octa core processor, 8xKyro cores/10 nm architecture\r\n4000mAH lithium-ion battery with quick charge 3.0 to keep you going all-day long\r\n1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
            "brand": "xiaomi",
            "model": "Poco F1",
            "color": "steel blue",
            "category": "mobile"
        },
        {
            "title": "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB Storage)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075307831-galaxy M14 5G.jpg",
            "price": 187,
            "description": "16.72 centimeters (6.6-inch) LCD, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color\r\n50MP+2MP+2MP Triple camera setup- True 50MP (F1.8) main camera + 2MP (F2.4) + 2MP (F2.4)| 13MP (F2.0) front camera\r\nSuperfast 5G with 13 5G Bands, Powerful Exynos 1330 Octa Core 2.4GH 5nm processor with Letest Android 13,One UI Core 5.0,\r\n6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase\r\nGet up to 2 times of Android Updates & 4 times of Security Updates with Samsung Galaxy M14 5G.",
            "brand": "samsung",
            "model": "Samsung Galaxy M14 5G",
            "color": "Smoky Teal",
            "category": "mobile"
        },
        {
            "title": "Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075831385-iPhone 14 pro max.jpg",
            "price": 1810,
            "description": "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion\r\nDynamic Island, a magical new way to interact with iPhone\r\n48MP Main camera for up to 4x greater resolution\r\nCinematic mode now in 4K Dolby Vision up to 30 fps\r\nAction mode for smooth, steady, handheld videos\r\nAll-day battery life and up to 29 hours of video playback\r\nVital safety technology — Crash Detection can detect a severe car crash and call for help",
            "brand": "apple",
            "model": "iPhone 14 Pro Max",
            "color": "Deep Purple",
            "category": "mobile"
        },
        {
            "title": "Apple iPhone 14 Pro (256 GB) - Gold",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691076020478-iPhone 14 pro.jpg",
            "price": 1546,
            "description": "15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion\r\nDynamic Island, a magical new way to interact with iPhone\r\n48MP Main camera for up to 4x greater resolution\r\nCinematic mode now in 4K Dolby Vision up to 30 fps\r\nAction mode for smooth, steady, handheld videos\r\nAll-day battery life and up to 23 hours of video playback\r\nVital safety technology — Crash Detection calls for help when you can’t",
            "brand": "apple",
            "model": "iPhone 14 Pro",
            "color": "Golden",
            "category": "mobile"
        },
        {
            "title": "Xiaomi 12 Pro | 5G (Noir Black, 8GB RAM, 256GB Storage) | Snapdragon 8 Gen 1 | 50+50+50MP Flagship Cameras (OIS) | 10bit 2K+ Curved AMOLED Display",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691077711136-xiaomi 12 pro 5g.jpg",
            "price": 507,
            "description": "The Pro-grade triple 50MP camera array unleashes the true power of a triple-camera setup. The large 50MP Sony IMX707 captures upto 120% more light. The 50MP Telephoto & 50MP Ultra-wide enable you to enjoy a top-class cinematography experience. The 32MP front facing camera is segment best.\r\nThe 6.73'' WQHD+ 120Hz AMOLED display with AdaptiveSync Pro is a master in clarity, brightness and smoothness. The display is certified A+ by DisplayMate & is Dolby Vision & HDR10+ compliant. It is protected by Corning Gorilla Glass Victus and comes with a In-display fingerprint sensor\r\nThe flagship Snapdragon 8 Gen 1, 4nm processor is designed to provide groundbreaking performance. The super-big 2900mm² vapour chamber, along with three layers of massive graphite sheets provides an advanced cooling system.\r\nThe 120W in-box HyperCharger can fully charge the massive 4600mAh battery in 18 minutes. The device also supports upto 50W of Wireless Turbo charging.",
            "brand": "xiaomi",
            "model": "T21",
            "color": "Noir Black",
            "category": "mobile",
        },
        {
            "title": " Xiaomi 11T Pro 5G Hyperphone (Meteorite Black, 8GB RAM, 256GB Storage) |SD 888|120W HyperCharge|Segment's only Phone with Dolby Vision+Dolby Atmos",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691078241728-xiaomi 11T Pro 5G.jpg",
            "price": 507,
            "description": "The 5G enabled flagship Snapdragon 888 chipset is designed on a 5nm fab process and is paired with LPDDR5 RAM and UFS 3.1 storage to ensure ultra-smooth performance and seamless multitasking experience.\r\nThe 6.67\" FHD+ true 10-bit AMOLED display has a 120 Hz refresh rate along with 480Hz touch sampling rate. This Displaymate A+ certified panel brings vivid picture, smoother and faster touch response. It also comes with Dolby Vision, HDR 10+ certification to ensure unparalled multimedia viewing experience. Also the display is protected by Corning Gorilla Victus glass.\r\nThe flaship 108MP HM2 sensor, 8MP Ultra-Wide sensor and 5MP TeleMacro sensor ensures flawless photography as well as Videography in all scenarios and lighting conditions. The device supports 8K video recording and comes with several easy-to-use photography and videography modes so that everyone can capture proffessional grade images and videos with least effort.",
            "brand": "xiaomi",
            "model": "11T Pro",
            "color": "Meteorite Black",
            "category": "mobile"
        },
        {
            "title": "Samsung Galaxy M13 (Aqua Green, 6GB, 128GB Storage)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075065521-galaxy M13.jpg",
            "price": 140,
            "description": "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase\r\nUpto 12GB RAM with RAM Plus | 128GB internal memory expandable up to 1TB| Dual Sim (Nano)\r\n50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam\r\nAndroid 12,One UI Core 4 with a powerful Octa Core Processor\r\n16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color",
            "brand": "samsung",
            "model": "Samsung Galaxy M13",
            "color": "Aqua Green",
            "category": "mobile"
        },
        {
            "title": "Redmi Note 12 5G Matte Black 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691078965685-redmi note 12 5g.jpg",
            "price": 229,
            "description": "Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate\r\nProcessor: Snapdragon 4 Gen1 6nm Octa-core 5G processor for high performance and efficiency with Adreno 619 GPU; Up to 2.0GHz\r\nCamera: 48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera\r\nBattery: 5000mAh large battery with 33W fast charger in-box and Type-C connectivity\r\nMemory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 1TB | Dual SIM (nano+nano) Dual 5G (5G+5G)",
            "brand": "xiaomi",
            "model": "Redmi Note 12 5G",
            "color": "Matte Black",
            "category": "mobile"
        },
        {
            "title": "Sennheiser HD 400s Wired Over The Ear Headphone with Mic (Black)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691055730759-headphone4.jpg",
            "price": 54,
            "description": "Renowned Sennheiser sound quality for a unique listening experience\r\nBuilt-in microphone and remote for call and music control\r\nClosed-back around-ear headphones reduce unwanted background noise for your comfort\r\nLightweight, foldable headphones for easy on-the-go storage\r\nImpedance: 18 Ω ; Frequency response (Microphone): 100 – 10,000 Hz (-10 dB) ; Frequency response (Headphones): 18–20,000 Hz (-10 dB) ; Jack plug: 3.5mm",
            "brand": "Sennheiser",
            "model": "HD 400s",
            "color": "Black",
            "category": "audio"
        },
        {
            "title": "Ant Esports GP310 Wireless Gamepad, Compatible for PC & Laptop (Windows 10/8 /7, Steam) / PS3 / Android",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255692675-ant sport.jpg",
            "price": 14,
            "description": "Compatibility – PC / Laptop Computer(Windows 10/8/7/XP), Steam, Play Station 3(PS3), Android Mobile Phone*/Tablet*/the device needs support OTG function( * not all Android phones are supported, check your device before purchasing for Android devices, Limited games can play on it which are supported to android games)\r\nExcellent Design – Equipped with 2.4Ghz wireless technology, supports up to 10m range | Wear-resistant Anti-slip Joystick | Cool Appearance | Comfortable Grip\r\nPlug & Play -Only for PC games supporting X input mode, Android mobile games supporting Android mode, Play Station 3. No need to install drivers except for Windows XP\r\nFeature - Multi-mode : X input, D input, Android, PS3 | Vibration Feedback Function",
            "brand": "ant esports",
            "model": "GP310",
            "color": "black",
            "category": "gaming"
        },
        {
            "title": "Logitech G502 Lightspeed Wireless Gaming Mouse, 25K Hero Gaming Sensor, 25600 DPI, RGB, Ultra-Light, 11 Programmable Buttons, Long Life Battery, PowerPlay-Compatible, PC - Black",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257315660-logitech.jpg",
            "price": 19,
            "description": "COLORFUL LIGHTSYNC RGB : Play in colour with our most vibrant LIGHTSYNC RGB featuring colour wave effects that are customisable across 16.8 million colours. 8,000 DPI sensor.\r\nCLASSIC,GAMER TESTED DESIGN : Play comfortably and with total control. The simple 6-button layout and classic gaming shape form a comfortable, time-tested and loved design\r\nMECHANICAL SPRING BUTTON TENSIONING: Primary buttons are mechanical and tensioned with durable metal springs for reliability, performance and an excellent feel\r\nCUSTOMIZABLE SETTINGS : To suit the sensitivity you like with Logitech G HUB gaming software and cycle easily through up to 5 DPI settings; SYSTEM REQUIREMENTS : Windows 7 or later, macOS 10.11 or later, Chrome OSTM, USB port, Internet access for Logitech Gaming Software (optional)\r\nStyle Name: G102 2nd Gen",
            "brand": "logitech G",
            "model": "Logitech G502",
            "color": "black",
            "category": "gaming"
        },
        {
            "title": "Samsung Galaxy S23 5G (Green, 8GB, 128GB Storage)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074179466-galaxy S23 5G.jpg",
            "price": 905,
            "description": "More light for your night - Get ready for a Gallery full of epic night shots everyone will want. Nightography's enhanced AI keeps details clear, so low light photos and videos will be bright and colorful from dusk to dawn and back again.\r\nDesigned with the planet in mind - Unbox the change you want to see in the world. Crafted with recycled glass and PET film and colored with natural dyes, each phone is tucked into a box made of recycled paper and paper-based protective film.\r\nPower for those who don't pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy optimizes and streamlines your device for silky smooth games —without draining the battery.",
            "brand": "samsung",
            "model": "Samsung Galaxy S23",
            "color": "Green",
            "category": "mobile"
        },
        {
            "title": "Handheld Game Console 5.1 inch Pro Retro Games Consoles Built-in Classic Games Rechargeable Battery Portable Style Game Consoles X12",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692458709910-51DkZC39goL._SL1000_.jpg",
            "price": 163,
            "description": "🎮900+ Selected Classic Games: This X12 game console has nostalgic 900 games, unique game file and folder list systematically, find the game you want to play by accurate original English name and number more quickly.\r\n🎮Customized Professional System: Exclusive customization console system, English default setted and Save & Load features, no more lost datas and start again, providing excellent gaming experience.\r\n🎮Quick to Go: The handheld game console with super compact size, easy to carry wherever you go on a business trip, traveling, camping, also equip with bigger battery for long playing.\r\n🎮Multimedia Gaming Device: With multifunction designing, you can reach more entertainment function like playing game, watching movie, music, TXT fiction etc.\r\n🎮Perfect Gifts for Kids & Nostalgia: This mini gaming player is a perfect companion to keep your children occupied and improve their hand-eye coordination.",
            "brand": "CredevZone",
            "model": "X12 Red&blue",
            "category": "gaming"
        },
        {
            "title": "Apple AirPods (3rd Generation) with Lightning Charging Case ​​​​​​​",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691054448465-earbud2.jpg",
            "price": 230,
            "description": "Spatial audio with dynamic head tracking places sound all around you\r\nAdaptive EQ automatically tunes music to your ears\r\nAll-new contoured design",
            "brand": "apple",
            "model": "AirPods 3rd Generation",
            "color": "White",
            "category": "audio"
        },
        {
            "title": "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App Support for Mobile Phones (Blue)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692939683873-headphone1.jpg",
            "price": 60,
            "description": "With up to 50-hour battery life and quick charging, you’ll have enough power for multi-day road trips and long festival weekends.\r\nGreat sound quality customizable to your music preference with EQ Custom on the Sony | Headphones Connect App.\r\nBoost the quality of compressed music files and enjoy streaming music with high quality sound through DSEE.\r\nDesigned to be lightweight and comfortable for all-day use.\r\nCrystal clear hands-free calling with built-in mic.\r\nMultipoint connection allows you to quickly switch between two devices at once.",
            "brand": "sony",
            "model": "WH-CH520",
            "color": "blue",
            "category": "audio"
        },
        {
            "title": "Sony Srs-Xb13 Wireless Extra Bass Portable Compact Bluetooth Speaker with 16 Hours Battery Life, Type-C, Ip67 Waterproof, Dustproof, with Mic, Loud Audio for Phone Calls/Work from Home (Black), Small",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692940742197-speaker1.jpg",
            "price": 42,
            "description": "Waterproof and dustproof with an IP67 rating, this speaker is just as good outside as it is inside.\r\nGet up to 16 hours of battery life to keep the party going.\r\nNeed to make a call? No problem. Whether you’re at home or out and about, the built-in mic lets you enjoy hands-free calling straight through your speaker.\r\nIn one tap, the Sony SRS-XB13 enables quick effortless Bluetooth pairing with you Android devices.\r\nA passive radiator works together with a full-range speaker to enhance low-end tones, giving bass a boost.",
            "brand": "sony",
            "model": "SRS-XB13",
            "color": "black",
            "category": "audio"
        },
        {
            "title": "Panasonic RB-M300B Deep Bass Wireless Bluetooth Immersive Headphones with XBS DEEP and Bass Augmentation (Sand Beige), RB-M300B-C",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056086962-headphone.jpg",
            "price": 289,
            "description": "ULTRA-LOW BASS RESPONSE Enjoy powerful deep bass, without compromising the depth and balance of the track\r\nWIRELESS PERFORMANCE Reliable Bluetooth connectivity with built-in microphone\r\n50 HOURS PLAYBACK On a full four-hour charge, plus quick 15min charge for 3 hours playback\r\nDUO POWER DRIVERS Two 40 mm Neodymium driver units provide deep, yet delicate bass sound\r\nHIGH-COMFORT FIT Soft cushioned headband and earpads fit gently over the ears for hours of anytime anywhere comfort",
            "brand": "panasonic",
            "model": "Panasonic Deep Bass Wireless Bluetooth Immersive",
            "color": "White",
            "category": "audio"
        },
        {
            "title": "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App Support for Mobile Phones (Beige)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941955003-headphone2.jpg",
            "price": 54,
            "description": "With up to 50-hour battery life and quick charging, you’ll have enough power for multi-day road trips and long festival weekends.\r\nGreat sound quality customizable to your music preference with EQ Custom on the Sony | Headphones Connect App.\r\nBoost the quality of compressed music files and enjoy streaming music with high quality sound through DSEE.\r\nDesigned to be lightweight and comfortable for all-day use.",
            "brand": "sony",
            "model": "WH-CH520",
            "color": "Taupe",
            "category": "audio"
        },
        {
            "title": "boAt Stone 180 5W Bluetooth Speaker with Upto 10 Hours Playback, 1.75\" Driver, IPX7 & TWS Feature(Black)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692943845065-71vI6nfLtYL._SL1500_.jpg",
            "price": 13,
            "description": "Stone 180 comes equipped with 1.75\" Dynamic Drivers for powerful immersive sound\r\nIts power packed 800mAh battery ensures extended indulgence in musical bliss with up to 10 hours of play time, Charging Time : 1.5 Hours\r\nThe speaker offers 5W of premium High Definition sound, Frequency Response - 70Hz-70kHz\r\nStone 180 supports instant wireless connectivity with latest Bluetooth v5.0\r\nConnect two Stone 180’s and turn the scene right around with double the volume at the same clarity level, get the party started anywhere, anytime with the boAt Stone 180\r\nIt is IPX7 rated which offers protection against sweat and water.",
            "brand": "boat",
            "model": "Stone 180",
            "color": "black",
            "category": "audio"
        },
        {
            "title": "Mivi Play Bluetooth Speaker with 12 Hours Playtime. Wireless Speaker Made in India with Exceptional Sound Quality, Portable and Built in Mic-Black",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692944238682-61UJnlIHF9S._SL1500_.jpg",
            "price": 10,
            "description": "Studio Grade Sound: The Mivi Play Bluetooth speaker delivers a deep and powerful sound with a solid bass to amplify your beats and make you fall in love with every note.\r\nPlay it non-stop: The Mivi Play wireless speaker packs a battery life of up to 12 long hours on a single charge to keep your party going on and on till the break of dawn.\r\nPremium Brag Worthy Design: The Mivi Play portable wireless speaker comes with a sleek design, that makes it numero uno choice for those who love their music in private or with a couple friends!\r\nConnections made stronger: Nobody likes it when their music gets interrupted. Mivi Play’s latest and advanced Bluetooth 5.0 lets you enjoy seamless wireless connectivity, keeping your connections strong and uninterrupted. Now that’s the next generation of wireless bluetooth speakers!",
            "brand": "mivi",
            "model": "Play",
            "color": "black",
            "category": "audio"
        },
        {
            "title": " JBL Go 2, Wireless Portable Bluetooth Speaker with Mic, JBL Signature Sound, Vibrant Color Options with IPX7 Waterproof & AUX (Blue)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692944486283-8193DNNjZFS._SL1500_.jpg",
            "price": 24,
            "description": "JBL Signature Sound\r\n5 Hours of Playtime under optimum audio settings\r\nWireless Bluetooth Streaming\r\nIPX7 Waterproof design, Battery Type Lithium-ion polymer (3.7V, 730mAh), Charging time (hrs) 2.5\r\nBuilt-in Noise-cancelling Speakerphone\r\nAudio cable input\r\nWhat’s in the box: 1 x JBL GO 2, 1 x Micro USB cable for charging, 1 x Safety Sheet, 1 x Quick Start Guide, 1 x Warranty Card",
            "brand": "JBL",
            "model": "JBLGO2BLU",
            "color": "blue",
            "category": "audio",
        },
        {
            "title": "Mivi Duopods A25 Bluetooth Truly Wireless in Ear Earbuds with Mic with 40Hours Battery, 13Mm Bass Drivers & Made in India. with Immersive Sound Quality, Voice Assistant, Touch Control (White)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692945068061-61yTSVeLebS._SL1500_.jpg",
            "price": 12,
            "description": "Made in India : From design to manufacturing, Mivi DuoPods A25 is proudly made in India. It is built locally to compete globally..Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ears\r\nConcert In Your Ears: Need to get away from the ever noisy city life? Simply tune in to the Mivi DuoPods A25 and immerse yourself in the high-quality sound of these wireless earbuds.\r\nStudio Quality Sound: The Mivi DuoPods A25 has a studio quality sound output which makes it one of the best wireless earbuds in the market or anything youve ever tried.\r\n",
            "brand": "Mivi",
            "model": "Duopods A25",
            "color": "white",
            "category": "audio"
        },
        {
            "title": "soundcore by Anker Space Q45 Adaptive Noise Cancelling Headphones, Reduce Noise by Up to 98%, Ultra Long 50H Playtime, App Customization, Hi-Res Sound with Details, Bluetooth 5.3",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056348236-headphone3.jpg",
            "price": 415,
            "description": "98% Less Noise for Your Journey: The fully-upgraded noise cancelling system targets and blocks out a wider range of noises—from plane engines to crying babies. So wherever you go, you can enjoy your personal space.\r\nMake Every Space Your Own: Whether you're indoors, outdoors, commuting, or on a flight, Space Q45's adaptive noise cancelling will automatically select a suitable level to match your location. Also, use the app to choose 1 of 5 noise cancelling levels.\r\nIdeal for Traveling: 50 hours of playtime in noise cancelling mode will cover an around-the-world flight without needing to recharge. In normal mode, get up to 65 hours of playtime and if you are low on battery, charge for 5 minutes for 4 hours of playtime.",
            "brand": "soundcore",
            "model": "Space Q45",
            "color": "Blue",
            "category": "audio",
        },
        {
            "title": " Marshall Uxbridge Airplay Multi-Room Wireless Speaker with Alexa Built-in - White",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692946110280-81WIcjaGp2L._SL1500_.jpg",
            "price": 266,
            "description": "Loud just got smaller. Uxbridge Voice is engineered to create a thunderous sound from itscompact frame. An advanced setup with high-end components come together to producescreaming highs\r\nConsider this speaker your backstage pass to every song on the planet. Access to the world’s music has never been easier, just ask Alexa to play music.Frequency Range 54-20,000 Hz\r\nFill your home with immersive sound by building a multi-room system with Amazon Echo andother supported Alexa built-in speakers or Airplay 2 enabled speakers.\r\nYou can play music, get answers, manage everyday tasks and easily control smart devicesaround your home – just by using your voice. Alexa can help you listen to your favouritesong, turn up the volume,",
            "brand": "Marshall",
            "model": "Marshall Uxbridge",
            "color": "White",
            "category": "audio"
        },
        {
            "title": " Bang & Olufsen Beosound Balance Wireless Multiroom Speaker, Natural Oak",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692946673658-91xz5VkenTL._SL1500_.jpg",
            "price": 5804,
            "description": "Beosound Balance is a wireless speaker with a cutting-edge audio engine, made to deliver a powerful, dynamic yet sophisticated sound experience for larger living spaces. It is designed for design-conscious consumers preferring a display-friendly interior inspired speaker. One that does not have to take up valuable floor space in the home. Placement up against the wall is ideal for optimal listening, whether from room-filling to focused sound modes. Inspired by interior objects and the use of soft and well-curated materials like natural solid oak wood, seamlessly knitted textile and precision-crafted aluminium components, Beosound Balance is the manifestation of the perfect balance between elegant and approachable beauty and unspoiled, pure sound performance.",
            "brand": "Bang & Olufsen",
            "model": "Beosound Balance",
            "category": "audio"
        },
        {
            "title": "JBL Tune 720BT Wireless Over Ear Headphones with Mic, Pure Bass Sound, Upto 76 Hrs Playtime, Speedcharge, Dual Pairing, Customizable Bass with Headphones App, Lightweight, Bluetooth 5.3 (Blue)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691055458260-headphone.jpg",
            "price": 63,
            "description": "JBL PURE BASS SOUND: The JBL Tune 720BT utilizes the renowned JBL Pure Bass sound, the same technology that powers the most famous venues all around the world.\r\nUP TO 76H BATTERY LIFE: Get the most out of your entertainment with up to 76 hours of wireless listening pleasure, and easily recharge the battery in as little as 2 hours using the convenient Type-C USB cable.\r\nQUICK CHARGE: Running low on battery? With a quick 5-minute recharge, you can get an additional 3 hours of music playback to keep the beats going\r\nJBL HEADPHONES APP: By downloading the JBL Headphones app, you can personalize the sound of your Tune 720BT headphones according to your preferences with ease, using the EQ settings. Moreover, the app offers voice prompts in your desired language to guide you through the different headphone features",
            "brand": "jbl",
            "model": "Tune 720BT",
            "color": "Blue",
            "category": "audio"
        },
        {
            "title": " Sony SA-SW5 300W Wireless Subwoofer for HT-A9 and HT-A7000 - Black",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947684843-61T7iilajhL._SL1200_.jpg",
            "price": 629,
            "description": "Experience powerful, booming sound with the SW5 wireless subwoofer for use with HT-A9 & A7000 soundbars.\r\nDeep bass and further clearness and fidelity\r\nWireless connectivity and quick and easy setup\r\nAdd depth with 300W powerful bass",
            "brand": "sony",
            "model": "SA-SW5",
            "color": "black",
            "category": "audio"
        },
        {
            "title": " DENON Home 350 Wireless Speaker - Powerful Room Filling Sound with Bluetooth, AirPlay 2 and Alexa Built-in - White",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947856684-81xoxBiCcjL._SL1500_.jpg",
            "price": 919,
            "description": "DENON HOME 350 The Denon Home series fills your home with superb wireless sound. The powerful Denon Home 350 with its amazing sound stage takes your music into every corner, even in large rooms. Pair it with another Denon Home 350 for stereo or combine it with other HEOS Built-in products.\r\nUPGRADE TO SUPERB WIRELESS SOUND Enjoy exceptional sound with the Denon Home Series. Stream your favourite music effortlessly and make use of quick pre-selections with just a gentle touch. Experience impressive acoustic performance, based on 110 years of sound innovation.\r\nA MIGHTY PERFORMER. Like every Denon the Denon Home 350 is built to deliver best-in-class audio quality. With advanced acoustic hardware, expertly tuned digital signal processing and premium drivers, the Denon Home 350 delivers the clearest highs and deepest lows. Experience excellence in every beat.",
            "brand": "Denon",
            "model": "DENON HOME 350",
            "color": "white",
            "category": "audio"
        },
        {
            "title": "JBL Wave 200 Wireless Earbuds (TWS) with Mic, 20 Hours Playtime, Deep Bass Sound, Dual Connect Technology, Quick Charge, Comfort Fit Ergonomic Design, Voice Assistant Support for Mobiles (Black)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691055343505-earbud.jpg",
            "price": 24,
            "description": "JBL DEEP BASS SOUND: Feel the sound with the Deep Bass powered by the 8mm Dynamic drivers and add fun to your routine.\r\nUPTO 20 HOURS OF PLAYTIME: With 5 hours in the earbuds and 15 hours in the case, the JBL Wave 200TWS don’t drop until you do.\r\nQUICK CHARGE: Running Low on Charge, worry not. A quick 15min of charge provides you with playtime upto an Hour.\r\nDUAL CONNECT TECHNOLOGY: With the Dual Connect Technology on the Wave 200 TWS, take calls or listen to music with either bud (or both). Choose which one to use and leave the other one in the case to save battery life.",
            "brand": "jbl",
            "model": "JBL",
            "color": "Black",
            "category": "audio"
        },
        {
            "title": "Sony WF-C700N Bluetooth Truly Wireless Lightest Active Noise Cancellation in Ear Earbuds, Multipoint Connection, 10 mins Super Quick Charge, 20hrs Batt, IPX4 Ratings, Fast Pair, App Support-Black",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692939913875-earphone1.jpg",
            "price": 108,
            "description": "Lightest Earbuds : Focus on your music for as long as you like. These small, lightweight earbuds have an ergonomic surface design for all-day comfort, even for smaller ears.\r\nNoise Cancellation: Cancel out background noise with Noise Sensor Technology or use the Ambient Sound Mode to stay connected to your natural surroundings. Headphones Connect app to control your listening experience.\r\nMultipoint connection: For total convenience, these Bluetooth headphones can be paired with two Bluetooth devices at the same time. So when call comes in your headphones know which device is ringing and connects to the right one automatically.\r\nListen all day, charge in minutes: Enjoy up to 15 hours of listening thanks to the handy charging case.",
            "brand": "sony",
            "model": "WF-C700N",
            "color": "black",
            "category": "audio"
        },
        {
            "title": "New Apple AirPods Max - Pink",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691053838595-headphone2.jpg",
            "price": 723,
            "description": "Apple-designed dynamic driver provides high-fidelity audio\r\nActive Noise Cancellation blocks outside noise, so you can immerse yourself in music\r\nTransparency mode for hearing and interacting with the world around you\r\nSpatial audio with dynamic head tracking provides theater-like sound that surrounds you\r\nComputational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough listening experiences\r\nDesigned with a knit-mesh canopy and memory foam ear cushions for an exceptional fit",
            "brand": "apple",
            "model": "New Apple AirPods Max - Pink",
            "color": "Pink",
            "category": "audio",
        },
        {
            "title": "Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV L32R8-FVIN (Black)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694154515879-819Lw2PE8tL._SL1500_.jpg",
            "price": 138,
            "description": "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz | 178 wide viewing angle\r\nConnectivity: Dual Band Wi-Fi (2.4 GHz/ 5 GHz) | 2 HDMI ports to connect set top box, gaming consoles, DVD or Blu-ray Players | 2 USB ports to connect hard drives and other USB devices | ARC | Bluetooth 5.0 | Ethernet | 3.5mm earphone Jack\r\nSound: 20 Watts Output | Dolby Audio | DTS Virtual: X | DTS-HD\r\nSmart TV Features : Fire TV Built-In | Supported Apps: Prime Video | Netflix | Disney+ Hotstar | YouTube | 12000+ apps from App Store | Voice Remote with Alexa | DTH Set-Top Box Integration to switch between DTH TV Channels and OTT apps from home screen | Display Mirroring - Airplay & Miracast | Quad core ARM Cortex-A35 CPU @ 2.0GHz | 1GB RAM + 8GB Internal Storage\r\nDisplay: Metal bezel-less Screen | Vivid Picture Engine\r\nRecommendation: We recommend using 1.5V Alkaline AAA Batteries in your Alexa Voice Remote for a steady performance.",
            "brand": "redmi",
            "model": "L32R8",
            "color": "black",
            "category": "tv",
        },
        {
            "title": "Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA43CUE60AKLXL (Black)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694154827301-81+JXgPUDLL._SL1500_.jpg",
            "price": 396,
            "description": "Smart TV Features : Supported apps: Netflix, Prime Video, YouTube, etc., Screen mirroring, Universal Guide, Media Home, Tap View, Mobile Camera Support, AI Speaker, Easy Setup, App Casting, Wireless DeX, SmartThings, Smart Hub, IoT Sensor, Web Browser",
            "brand": "samsung",
            "model": "UA43CUE60AKLXL",
            "color": "black",
            "category": "tv"
        },
        {
            "title": "Mi 125 cm (50 inches) X Series 4K Ultra HD Smart Android LED TV L50M7-A2IN (Black)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694155239807-81UT46-gwRL._SL1500_.jpg",
            "price": 384,
            "description": "Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 hertz | 178° wide viewing angle\r\nConnectivity: Dual Band Wi-Fi (2.4 GHz/ 5 GHz) | 3 HDMI ports to connect latest gaming consoles, set top box, Blu-ray Players | 2 USB ports to connect hard drives and other USB devices | ALLM | eARC | Bluetooth 5.0 | Optical | Ethernet | 3.5mm earphone Jack\r\nSound: 30 Watts Output | Dolby Audio, DTS Virtual: X, DTS-HD\r\nSmart TV Features : Android TV 10 | PatchWall 4 with IMDb integration | Kids Mode with Parental Lock | 300+ Free Live Channels | Universal search | Language Universe (16+ Languages) | India's Top 10 | Miracast | Supported Apps: Prime Video | Netflix | Disney + Hotstar | YouTube | Apple TV | 10000+ apps from Play Store | Quad core A55 CPU processor | Chromecast built-in | Ok Google | Auto Low Latency Mode | 2GB RAM + 8GB Storage\r\nDisplay: 4K HDR | Metal Bezel-less Design | Dolby Vision | HDR10 | HLG | Reality Flow MEMC | Vivid Picture Engine | DCI-P3 94% Colour Gam",
            "brand": "mi",
            "model": "Xiaomi TV X50",
            "color": "black",
            "category": "tv"
        },
        {
            "title": " Acer 126 cm (50 inches) V Series 4K Ultra HD Smart QLED Google TV AR50GR2851VQD (Black)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694155440745-619--Jabh2L._SL1048_.jpg",
            "price": 444,
            "description": "Resolution: QLED, 4K Ultra HD (3840x2160) | Refresh Rate: 60 Hertz | 178 Degree wide viewing angle\r\nConnectivity: Dual band Wifi | 2 way Bluetooth | HDMI ports 2.1 x 3 (HDMI 1 supports eARC) to connect personal computer, laptop, set top box, Blu-ray speakers or a gaming console | USB ports 2.0 x 1, 3.0 x 1 to connect hard drives or other USB device\r\nSound: 30 Watts Output | High Fidelity Speakers with Dolby Atmos | 5 Sound Modes - Stadium, Standard, Movie, Music, Speech\r\nSmart TV Features: Google TV | Content Recommendations | Watchlist | Personal Profile | Kids Profile | Google Assistant | Built-in Chromecast | Voice enabled Smart Remote | Hotkeys for Quick Access - Netflix, Prime Video, YouTube, Disney+Hotstar | Quad Core Processor 2GB RAM | 16GB Storage",
            "brand": "acer",
            "model": "AR50GR2851VQD",
            "color": "black",
            "category": "tv"
        },
        {
            "title": "LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55BXPTA (Dark Steel Silver)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694156089516-71KVQa4N4zL._SL1500_.jpg",
            "price": 1322,
            "description": "Display backlight technology used by the TV \r\nThe number of display pixels in the TV, usually denoted by the number of horizontal pixels multiplies by number of vertical pixels\r\n",
            "brand": "LG",
            "model": "OLED55BXPTA",
            "color": "dark steel silver",
            "category": "tv"
        },
        {
            "title": "Essence Mascara Lash Princess",
            "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
            "category": "beauty",
            "price": 12.99,
            "image": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
        },
        {
            "title": "Red Nail Polish",
            "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
            "category": "beauty",
            "price": 8.99,
            "image": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
        },
        {
            "title": "Calvin Klein CK One",
            "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
            "category": "fragrances",
            "price": 49.99,
            "image": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
        },
        {
            "title": "Chanel Coco Noir Eau De",
            "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
            "category": "fragrances",
            "price": 129.99,
            "image": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
        },
        {
            "title": "Dior J'adore",
            "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
            "category": "fragrances",
            "price": 89.99,
            "image": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
        },
        {
            "title": "Dolce Shine Eau de",
            "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
            "category": "fragrances",
            "price": 69.99,
            "image": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
        },
        {
            "title": "Gucci Bloom Eau de",
            "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
            "category": "fragrances",
            "price": 79.99,
            "image": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
        },
        {
            "title": "Annibale Colombo Bed",
            "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
            "category": "furniture",
            "price": 1899.99,
            "image": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
        },
        {
            "title": "Annibale Colombo Sofa",
            "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
            "category": "furniture",
            "price": 2499.99,
            "image": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
        },
        {
            "title": "Bedside Table African Cherry",
            "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
            "category": "furniture",
            "price": 299.99,
            "image": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
        },
        {
            "title": "Knoll Saarinen Executive Conference Chair",
            "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
            "category": "furniture",
            "price": 499.99,
            "image": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
        },
        {
            "title": "Wooden Bathroom Sink With Mirror",
            "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
            "category": "furniture",
            "price": 799.99,
            "image": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
        },
        {
            "title": "Apple",
            "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
            "category": "groceries",
            "price": 1.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
        },
        {
            "title": "Beef Steak",
            "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
            "category": "groceries",
            "price": 12.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png",
        },
        {
            "title": "Cat Food",
            "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
            "category": "groceries",
            "price": 8.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
        },
        {
            "title": "Chicken Meat",
            "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
            "category": "groceries",
            "price": 9.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
        },
        {
            "title": "Cooking Oil",
            "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
            "category": "groceries",
            "price": 4.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png",
        },
        {
            "title": "Cucumber",
            "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
            "category": "groceries",
            "price": 1.49,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png",
        },
        {
            "title": "Dog Food",
            "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
            "category": "groceries",
            "price": 10.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
        },
        {
            "title": "Eggs",
            "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
            "category": "groceries",
            "price": 2.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png",
        },
        {
            "title": "Fish Steak",
            "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
            "category": "groceries",
            "price": 14.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png",
        },
        {
            "title": "Green Bell Pepper",
            "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
            "category": "groceries",
            "price": 1.29,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
        },
        {
            "title": "Green Chili Pepper",
            "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
            "category": "groceries",
            "price": 0.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png",
        },
        {
            "title": "Honey Jar",
            "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
            "category": "groceries",
            "price": 6.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
        },
        {
            "title": "Ice Cream",
            "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
            "category": "groceries",
            "price": 5.49,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
        },
        {
            "title": "Juice",
            "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
            "category": "groceries",
            "price": 3.99,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
        },
        {
            "title": "Kiwi",
            "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
            "category": "groceries",
            "price": 2.49,
            "image": "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
        },
        {
            "title": "Essence Mascara Lash Princess",
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "category": "beauty",
            "price": 9.99,
            "image": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
        },
        {
            "title": "Eyeshadow Palette with Mirror",
            "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
            "category": "beauty",
            "price": 19.99,
            "image": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
        },
        {
            "title": "Powder Canister",
            "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
            "category": "beauty",
            "price": 14.99,
            "image": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
        },
        {
            "title": "Red Lipstick",
            "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
            "category": "beauty",
            "price": 12.99,
            "image": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
            "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
        },
        {
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "price": 695,
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        },
        {
            "title": "Solid Gold Petite Micropave ",
            "price": 168,
            "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        },
        {
            "title": "White Gold Plated Princess",
            "price": 9.99,
            "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        },
        {
            "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
            "price": 10.99,
            "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        }
    ]
    const [productData, setProductData] = useState([])
    const [filterData, setFilterData] = useState([])
    const getData = () => {
        try {
            setProductData(APIDATA)
            setFilterData(APIDATA)
            console.log(productData);
        } catch (error) {
            console.log("Api data is not worked correctly");
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const sortData = (category) => {
        if (category === "All") {
            setFilterData(productData)
            console.log(filterData);
        } else {
            let filters = productData.filter((item) => item.category == category)
            setFilterData(filters)
            console.log(filterData);
        }
    }

    const print = (i) => {
        localStorage.setItem("data", i)
    }

    return (
        <>
             <Nav />
            <CategoryBTN sortData={sortData} />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '40px' }}>
                {
                    filterData.map((item, idx) => {
                        return (
                            <div key={idx} style={{ position: 'relative', height: '400px', width: '300px', borderRadius: '8px', backgroundColor: '#f1f2f4', overflow: 'hidden', boxSizing: 'border-box', padding: '10px 10px 20px 10px', color: "white", boxShadow: '0px 5px 10px lightgrey, 0px 5px 10px lightgrey inset', marginBottom: '40px' }}>
                                <p style={{ position: "absolute", top: '18px', left: '10px', backgroundColor: '#0f172a', color: 'white', padding: '2px 10px', borderRadius: '5px', fontWeight: '800' }}>{item.category}</p>
                                <img src={item.image} alt="images" style={{ height: '80%', width: '100%', aspectRatio: '3/4', objectFit: 'contain', mixBlendMode: "multiply", borderRadius: '16px 50px 50px 50px' }} />
                                <h4 className='title' style={{ marginTop: '5px', lineHeight: '17px', padding: "0px 10px", color: '#0f172a' }}>{item.title}</h4>
                                <span style={{ padding: "0px 10px", position: 'absolute', bottom: '10px', color: '#0f172a', fontSize: '14px', fontWeight: '700' }}>{item.price + '$'}</span>
                                <button onClick={(i) => { print(item.title) }} style={{ padding: '5px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#0f172a', color: 'white', position: 'absolute', bottom: '10px', right: '15px', fontWeight: '800' }}><Link to='/cart' style={{ color: 'white' }}>Shop</Link></button>
                            </div>
                        )
                    })
                }
            </div>
            <FeedBack />
            <Footer />
        </>
    )
}


export default ProductPage