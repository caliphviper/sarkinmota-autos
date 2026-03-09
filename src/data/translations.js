// ============================================================
// SARKINMOTA AUTOS — TRANSLATIONS (English & Hausa)
// ============================================================

export const translations = {
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            cars: 'Cars',
            bookViewing: 'Book a Viewing',
            contact: 'Contact',
        },

        // Hero Section
        hero: {
            title: 'Sarkin Motochin Kasar Hausa',
            tagline: 'My bratha,',
            subtitle: "Nigeria's Leading Luxury Auto Dealership",
            ctaBook: 'Book a Viewing',
            ctaView: 'View Cars',
        },

        // Stats
        stats: {
            tiktokFollowers: 'TikTok Followers',
            tiktokLikes: 'TikTok Likes',
            instaFollowers: 'Instagram Followers',
            fbLikes: 'Facebook Likes',
        },

        // About
        about: {
            label: 'About Sarkin Mota',
            title: 'Who Is Sarkin Mota?',
            p1: 'I am Aliyu Mohammad — known across Nigeria as Sarkin Motochin Kasar Hausa (King of Cars of Hausaland). Based in Abuja, I have built Nigeria\'s most trusted luxury auto dealership from the ground up through hard work, honesty, and a genuine love for premium automobiles.',
            p2: 'At Sarkinmota Autos, we believe every Nigerian deserves to drive their dream car. That\'s why we offer flexible 40% initial deposit plans, extended repayment schedules, manufacturer warranties, and unmatched after-sales service.',
            p3: 'We are more than a dealership — we are a lifestyle brand built on trust, excellence, and prestige.',
            quote: '"I sell clean cars for everyone — CEO or civil servant. My word is my Bond."',
            badge: '✓ Verified Dealer',
            experience: 'Years Experience',
            happyClients: 'Happy Clients',
            carsDelivered: 'Cars Delivered',
        },

        // Cars
        cars: {
            label: 'Car Showcase',
            title: 'Our Cars',
            inquire: 'Inquire on WhatsApp',
            conditionNew: 'Brand New',
            conditionUsed: 'Foreign Used',
            sold: 'SOLD',
            whatsappMsg: (carName) => `Hi Sarkin Mota, I'm interested in ${carName}. Please send me more details.`,
        },

        // Book a Viewing
        book: {
            label: 'Schedule a Visit',
            title: 'Book a Viewing',
            namePlaceholder: 'Full Name',
            carPlaceholder: 'Car Interested In',
            datePlaceholder: 'Preferred Date',
            timePlaceholder: 'Preferred Time',
            budgetPlaceholder: 'Your Budget (Optional)',
            tradeInLabel: 'Interested in Trade-in?',
            tradeInYes: 'Yes, I want to swap',
            tradeInNo: 'No, direct purchase',
            discoveryLabel: 'How did you hear about us?',
            discoveryOptions: {
                tiktok: 'TikTok',
                instagram: 'Instagram',
                whatsapp: 'WhatsApp Status',
                friend: 'Friend/Family',
                other: 'Other'
            },
            submit: 'Book via WhatsApp',
            required: 'All fields are required before booking.',
            whatsappMsg: (name, car, date, time, budget, tradeIn, discovery) =>
                `Hi Sarkin Mota, my name is ${name}. I'd like to book a viewing for a ${car} on ${date} at ${time}. \n\n` +
                `💰 Budget: ${budget || 'Not specified'}\n` +
                `🚗 Trade-in: ${tradeIn}\n` +
                `📱 Found via: ${discovery}`,
        },

        // Inspection Checklist
        checklist: {
            label: 'Inspection Guide',
            title: 'Car Inspection Checklist',
            download: 'Download Checklist',
            subtitle: 'Before buying any car — always verify these 10 key points.',
        },

        // Video Gallery
        videos: {
            label: 'Content',
            title: 'Watch Sarkin Mota',
            subtitle: 'Follow @alamin_sarkinmota on TikTok & @sarkinmota_cars on Instagram',
        },

        // Testimonials
        testimonials: {
            label: 'Reviews',
            title: 'What People Say',
            items: [
                {
                    name: 'Ahmed Musa',
                    location: 'Abuja',
                    quote: 'Got my dream Mercedes at a great price. Sarkin Mota never disappoints!',
                },
                {
                    name: 'Fatima Bello',
                    location: 'Kaduna',
                    quote: 'The 40% deposit plan made it so easy. Highly recommended to everyone.',
                },
                {
                    name: 'Ibrahim Usman',
                    location: 'Kano',
                    quote: 'Most trusted car dealer in Abuja. My bratha for life! Zero wahala.',
                },
                {
                    name: 'Zainab Aliyu',
                    location: 'Lagos',
                    quote: 'Clean cars, honest prices. No stress at all. Delivered to my doorstep!',
                },
            ],
        },

        // Contact
        contact: {
            label: 'Find Us',
            title: 'Get In Touch',
            address: 'Plot 108B off Muhammadu Buhari Way, Central Business District, Abuja',
            phone: '070 1513 6111',
            email: 'alaminsarkinmota@gmail.com',
            hours: 'Open 24 Hours',
            hoursStatus: 'Always Available',
            social: 'Follow Us',
        },

        // Footer
        footer: {
            tagline: 'My bratha, | Sarkin Motochin Kasar Hausa',
            copy: '© 2025 Sarkinmota Autos. All Rights Reserved.',
            quickLinks: 'Quick Links',
            followUs: 'Follow Us',
            contact: 'Contact',
            disclaimer: 'Nigeria\'s #1 Luxury Car Dealership',
        },
    },

    ha: {
        // Navigation (Hausa)
        nav: {
            home: 'Gida',
            about: 'Game Da Mu',
            cars: 'Motoci',
            bookViewing: 'Yi Rijista',
            contact: 'Tuntuɓe Mu',
        },

        // Hero
        hero: {
            title: 'Sarkin Motochin Kasar Hausa',
            tagline: 'My bratha,',
            subtitle: 'Mafi Shahararren Siyar Da Motoci A Nijeriya',
            ctaBook: 'Yi Rijista Don Duba',
            ctaView: 'Duba Motocin',
        },

        // Stats
        stats: {
            tiktokFollowers: 'Mabiya TikTok',
            tiktokLikes: 'Sha\'anin TikTok',
            instaFollowers: 'Mabiya Instagram',
            fbLikes: 'Sha\'anin Facebook',
        },

        // About
        about: {
            label: 'Game Da Sarkin Mota',
            title: 'Wane Ne Sarkin Mota?',
            p1: 'Ni ne Aliyu Mohammad — wanda ake sani a kokakon Nijeriya da Sarkin Motochin Kasar Hausa. Ina zaune a Abuja, kuma na gina mafi amintaccen kasuwancin motoci na alatu a Nijeriya ta hanyar aiki tuƙuru, aminci, da ƙaunar motoci.',
            p2: 'A Sarkinmota Autos, muna gaskata cewa kowane ɗan Nijeriya ya cancanci tukin motar da yake so. Saboda haka muna ba da shirin ajiyar kuɗi na kashi 40% tare da tsarin biyan kuɗi mai sauƙi, garantin masana, da hidima mai kyau bayan siyarwa.',
            p3: 'Mu ne fiye da wani wuri na siyar da motoci — mu ne alamar rayuwa mai inganci wanda aka gina akan aminci, kyawawa, da ɗaukaka.',
            quote: '"Ina sayar da motoci masu tsabta ga kowa — manaja ko ma\'aikacin gwamnati. Magana ta Aliyu ita ce alkawari."',
            badge: '✓ Mai Siyarwa Na Aminci',
            experience: 'Shekaru Na Kwarewa',
            happyClients: 'Abokan Ciniki Masu Farin Ciki',
            carsDelivered: 'Motoci Da Aka Kai',
        },

        // Cars
        cars: {
            label: 'Nunin Motoci',
            title: 'Motocin Mu',
            inquire: 'Tambaya ta WhatsApp',
            conditionNew: 'Sabuwa Daga Turai',
            conditionUsed: 'An Yi Amfani Da Ita Waje',
            sold: 'AN SAYAR',
            whatsappMsg: (carName) => `Sannu Sarkin Mota, ina son in tambaya game da ${carName}. Don Allah aika mani ƙarin bayani.`,
        },

        // Book a Viewing
        book: {
            label: 'Shirya Ziyara',
            title: 'Yi Rijista Don Duba Mota',
            namePlaceholder: 'Suna',
            carPlaceholder: 'Irin Mota Da Kake So',
            datePlaceholder: 'Ranar Da Kake So',
            timePlaceholder: 'Lokacin Da Kake So',
            budgetPlaceholder: 'Adadin Kuɗin Da Kake Da Shi (Idan Akwai)',
            tradeInLabel: 'Ina Son Canjin Mota (Trade-in)?',
            tradeInYes: 'Eh, ina son canjin mota',
            tradeInNo: 'A\'a, sayen kai tsaye',
            discoveryLabel: 'Yaya aka yi ka ji labarinmu?',
            discoveryOptions: {
                tiktok: 'TikTok',
                instagram: 'Instagram',
                whatsapp: 'WhatsApp Status',
                friend: 'Aboki/Dangi',
                other: 'Wani Waje'
            },
            submit: 'Yi Rijista ta WhatsApp',
            required: 'Dole ne ka cika duk filayen kafin ka yi rijista.',
            whatsappMsg: (name, car, date, time, budget, tradeIn, discovery) =>
                `Sannu Sarkin Mota, sunana ${name}. Ina son in zo in duba ${car} ranar ${date} da karfe ${time}. \n\n` +
                `💰 Budget: ${budget || 'Ba a sani ba'}\n` +
                `🚗 Trade-in: ${tradeIn}\n` +
                `📱 Found via: ${discovery}`,
        },

        // Inspection Checklist
        checklist: {
            label: 'Jagorar Dubawa',
            title: 'Jerin Duba Mota',
            download: 'Zazzage Jerin',
            subtitle: 'Kafin ka saya kowane mota — duba waɗannan muhimman abubuwa goma.',
        },

        // Video Gallery
        videos: {
            label: 'Abun Kallo',
            title: 'Duba Bidiyon Sarkin Mota',
            subtitle: 'Bi @alamin_sarkinmota a TikTok & @sarkinmota_cars a Instagram',
        },

        // Testimonials
        testimonials: {
            label: 'Fitattun Ra\'ayoyi',
            title: 'Abin Da Mutane Ke Cewa',
            items: [
                {
                    name: 'Ahmed Musa',
                    location: 'Abuja',
                    quote: 'Na sami Benz din da nake so da farashi mai kyau. Sarkin Mota bai taɓa taɓarɓarewa ba!',
                },
                {
                    name: 'Fatima Bello',
                    location: 'Kaduna',
                    quote: 'Shirin ajiyar kuɗi kashi 40% ya sauƙaƙa mini komai. Ina ba da shawarar sosai.',
                },
                {
                    name: 'Ibrahim Usman',
                    location: 'Kano',
                    quote: 'Mafi amintaccen mai siyar da motoci a Abuja. My bratha har abada! Babu matsala.',
                },
                {
                    name: 'Zainab Aliyu',
                    location: 'Lagos',
                    quote: 'Motoci masu tsabta, farashi na gaskiya. Babu matsala kwata-kwata. An kai mota gida!',
                },
            ],
        },

        // Contact
        contact: {
            label: 'Inda Muke',
            title: 'Tuntuɓe Mu',
            address: 'Plot 108B kusa da Hanyar Muhammadu Buhari, Bakin Birnin Kasuwanci, Abuja',
            phone: '070 1513 6111',
            email: 'alaminsarkinmota@gmail.com',
            hours: 'Buɗe Sa\'o\'i 24',
            hoursStatus: 'Koyaushe A Shirye',
            social: 'Bi Mu',
        },

        // Footer
        footer: {
            tagline: 'My bratha, | Sarkin Motochin Kasar Hausa',
            copy: '© 2025 Sarkinmota Autos. Haƙƙi Kiyaye.',
            quickLinks: 'Hanyoyi Masu Sauƙi',
            followUs: 'Bi Mu',
            contact: 'Tuntuɓe Mu',
            disclaimer: 'Mafi Shahararren Kasuwancin Motoci A Nijeriya',
        },
    },
};
