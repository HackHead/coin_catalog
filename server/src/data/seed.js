
// Эти данные будут использоваться для заполнения базы данных соотвественными значениями
export default {
    categories: [
        { id: 1, name: "Commemorative", thumbnail: "/img/commemorative_coins_thumbnail.png",},
        { id: 2, name: "Bullion", thumbnail: "/img/bullion_coins_thumbnail.png" },
        { id: 3, name: "Eclusive", thumbnail: "/img/exclusive_coins_thumbnail.png" },
    ],
    metals: [
        {
            id: 1,
            name: 'Silver'   
        },
        {
            id: 2,
            name: 'Gold'   
        },
        {
            id: 3,
            name: 'Nickel'   
        },
        {
            id: 4,
            name: 'Steel'   
        },
    ],
    qualities: [
        {id: 1, name: 'BU'},
    ],
    countries: [
        {
            id: 1,
            name: "Canada",
        },
        {
            id: 2,
            name: "United States of America",
        },
        {
            id: 3,
            name: "the Republic of Vietnam",
        },
        {
            id: 4,
            name: "British South Africa",
        },
        {
            id: 5,
            name: "Estonia",
        },
        {
            id: 6,
            name: "the Belgian Congo",
        },
        {
            id: 7,
            name: "France",
        },
        {
            id: 8,
            name: "Australia",
        },
        {
            id: 9,
            name: "Bolivia",
        },
        {
            id: 10,
            name: "Botswana",
        },
        {
            id: 11,
            name: "British Virgin Islands",
        },
        {
            id: 12,
            name: "Ghana",
        },
        {
            id: 13,
            name: "the Weimar Republic",
        },
        {
            id: 14,
            name: "Egypt",
        },
        {
            id: 15,
            name: "India",
        },
        {
            id: 16,
            name: "Iran",
        },
        {
            id: 17,
            name: "Iceland",
        },
        {
            id: 18,
            name: "Yemen",
        },
        {
            id: 19,
            name: "China",
        },
        {
            id: 20,
            name: "Costa Rica",
        },
        {
            id: 21,
            name: "Portugal",
        },
    ],
    coins: [
        // 0
        {
            name: "Canadian Beaver",
            subtitle: `"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.`,
            description: `
            In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.
            
            In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription "5 cents" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.
            `,
            issuing_country: 1,
            composition: 3,
            quality: 1,
            denomination: "5 cents",
            year: 1965,
            weight: 4.54,
            price: 40,
            category: 1,
            thumbnail_head: "/img/Canadian_Beaver_1.png",
            thumbnail_tail: "/img/Canadian_Beaver_2.png",
        },

        // 1
        {
            name: "Looney",
            subtitle: `"Looney". Unique coin with the image of a goat. Canadian dollar symbol.`,
            description: `
            The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle "Canadian dollar".
            
            The obverse depicts Queen Elizabeth II. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is the year of coinage.
            `,
            issuing_country: 1,
            composition: 2,
            quality: 1,
            denomination: "1 dollar",
            year: 1970,
            weight: 5.4,
            price: 65,
            category: 1,
            thumbnail_head: "/img/Looney_1.png",
            thumbnail_tail: "/img/Looney_2.png",
        },

        // 2
        {
            name: "Jefferson",
            subtitle: `"Looney". Unique coin with the image of a goat. Canadian dollar symbol.`,
            description: `Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents.
    
            The obverse of the coin depicts a bust of the 3rd American president, Thomas Jefferson. The inscription on the right semicircle "IN GOD WE TRUST". Below is the inscription “FREEDOM” and the year of minting. Under the image of Jefferson was a monogram of an engraver. The initials of the engraver FS first appeared on coins in 1966.
            
            The reverse side shows the Jefferson Monticello estate, as well as the inscription: on the top - the motto “E PLURIBUS UNUM”, on the bottom - the inscriptions “MONTICELLO”, “FIVE CENTS” and “UNITED STATES OF AMERICA”.
            `,
            issuing_country: 2,
            composition: 3,
            quality: 1,
            denomination: "5 cents",
            year: 1966,
            weight: 3.54,
            price: 35,
            category: 1,
            thumbnail_head: "/img/Jefferson_1.png",
            thumbnail_tail: "/img/Jefferson_2.png",
        },

        // 3
        {
            name: "Kennedy",
            subtitle: `The unique coin is made in honor of the assassination of the 35th president of Texas.`,
            description: `
            On November 22, 1963, in connection with the assassination of the 35th President John F. Kennedy in Dallas (Texas), it was decided to perpetuate the memory of President Kennedy on a coin.
            
            On the obverse to the right is a portrait of the 35th President of the United States, John F. Kennedy. Captions: FREEDOM / IN GOD WE TRUST / 1993.
            
            The reverse depicts the US state emblem (bald eagle with a shield) in the ring of stars. Captions: UNITED STATES OF AMERICA / E PLURIBUS UNUM / HALF DOLLAR.
            `,
            issuing_country: 2,
            composition: 3,
            quality: 1,
            denomination: "Half Dollar",
            year: 1963,
            weight: 4.3,
            price: 43,
            category: 1,
            thumbnail_head: "/img/Kennedy_1.png",
            thumbnail_tail: "/img/Kennedy_2.png",
        },

        // 4
        {
            name: "Canadian Cent",
            subtitle: `"Canadian cent." A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent.`,
            description: `
            On May 3, 2012, the Department of the Treasury of Canada announced the cessation of production of a 1 cent coin. The latest issues of the famous 1-cent maple leaf were minted in 2012.
            
            On the reverse, in the center of the coin are two maple leaves (the symbol of Canada), the year of issue is 2012 on the left. The upper part of the coin shows the denomination: 1 cent (1 cent), in the lower part of the inscription in a semicircle: CANADA.
            
            On the obverse in the center of the coin on the right is a portrait of Queen Elizabeth II. Along the edge of the coin there is an inscription: Elizabeth II D G REGINA.
            `,
            issuing_country: 1,
            composition: 4,
            quality: 1,
            denomination: "1 cent",
            year: 1965,
            weight: 2.7,
            price: 8,
            category: 1,
            thumbnail_head: "/img/Canadian_Cent_1.png",
            thumbnail_tail: "/img/Canadian_Cent_2.png",
        },

        // 5
        {
            name: "A penny",
            subtitle: `"A penny". A unique coin with a shield image with 13 vertical stripes.`,
            description: `
            Minted from 1793 to the present day.
            
            In 1959, on the 150th anniversary of the birth of Lincoln, the reverse design was changed. Instead of wheat spikelets, the image of the Lincoln Memorial was depicted on the coin. On the surviving copies you can see the image of the statue of the 16th American president between the columns. Coins of this type were minted in multi-billion copies until 2008.
            
            Another round date (200 years since the birth) was marked by the minting of 4 coins, which symbolized the periods of life of Abraham Lincoln.
            
            In 2010, the design of the coin was changed - the reverse depicts a shield with 13 vertical stripes, symbolizing the state and national unity.
            
            `,
            issuing_country: 2,
            composition: 4,
            quality: 1,
            denomination: "1 cent",
            year: 1793,
            weight: 5.1,
            price: 8,
            category: 1,
            thumbnail_head: "/img/A_penny_1.png",
            thumbnail_tail: "/img/A_penny_2.png",
        },

        // 6
        {
            name: "25 cents",
            subtitle: `Unique coin depicting a caribou (reindeer). The face value of the coin is equal to a quarter of the Canadian dollar.`,
            description: `
    
            The obverse depicts Queen Elizabeth II. The caribou (reindeer) is depicted on the reverse.
            
            A modern design (with a deer) has been used since the time of King George VI, when the design of other Canadian coins also changed.
            
            Under previous kings, a different design was used for coins from 5 to 50 cents. On the reverse side was the name of the coin in small letters, framed by maple leaves, with a crown at the top.
            
            Ordinary quarters are minted with a caribou on the back.
            
            In 2004, Memorial Day was released. The reverse shows a poppy flower.
            `,
            issuing_country: 1,
            composition: 3,
            quality: 1,
            denomination: "25 cents",
            year: 1966,
            weight: 5.7,
            price: 80,
            category: 1,
            thumbnail_head: "/img/25_cents_1.png",
            thumbnail_tail: "/img/25_cents_2.png",
        },

        // 7
        {
            name: "Dim Sum",
            subtitle: `Dim Sum is a 10-cent coin of the United States that has been minted from 1946 to the present. This is a unique coin with the image of a torch, oak and olive branches.`,
            description: `
            The obverse of the coin depicts a portrait of the 32nd President of the United States, Franklin D. Roosevelt, and the reverse depicts a torch, oak and olive branches above the motto “E pluribus unum” - “Out of many.”
            
            After the death of Franklin Roosevelt in 1945, it was decided to put his image on a coin to perpetuate his memory. The choice of a coin denomination of 10 cents was due to the fact that in 1938 Roosevelt made a lot of efforts to create the National Fund Fund, which is half joking, and since 1979 it has been officially called the “March of ten cents”.
            `,
            issuing_country: 2,
            composition: 3,
            quality: 1,
            denomination: "10 cents",
            year: 1946,
            weight: 4.25,
            price: 10,
            category: 1,
            thumbnail_head: "/img/Dim_Sum_1.png",
            thumbnail_tail: "/img/Dim_Sum_2.png",
        },

        // 8
        {
            name: "South Vietnamese Dong",
            subtitle: `Currency of the Republic of Vietnam in 1955-1975 Coin with the image of wheat.`,
            description: `
            Currency of the Republic of Vietnam in 1955-1975.
            
            On the front side, we see wheat, and on the back, a unit symbolizing money.
            
            The monetary unit of South Vietnam was originally the Indochinese piastre, issued by the Institute of Emissions of the States of Cambodia, Laos and Vietnam. Banknotes of the graduating institute were issued in three types: Cambodian, Lao and Vietnamese. The inscriptions on the banknotes of all samples were made in four languages: French, Khmer, Lao and Vietnamese. Vietnamese-style banknotes depicted a pattern, as well as the inscription “VIÊN PHÁT-HÀNH”. Piastres previously issued by the French Bank of Indochina were also in circulation.
            `,
            issuing_country: 3,
            composition: 3,
            quality: 1,
            denomination: "1 dong",
            year: 1955,
            weight: 5.05,
            price: 56,
            category: 2,
            thumbnail_head: "/img/South_Vietnamese_Dong_1.png",
            thumbnail_tail: "/img/South_Vietnamese_Dong_2.png",
        },

        // 9
        {
            name: "The British Antelope",
            subtitle: `Unique coin depicting an antelope. British South African gold coin with a face value of 1/2 pound. It has been produced since 1952.`,
            description: `
            On one side of the coin is the head of King George VI, turned to the left. Also at the top in a semicircle is the inscription GEORGIVS SEXTVS REX.
            
            On the other side of the coin is an Antelope. Around it is the inscription SOUTH AFRICA 1952 SUID AFRICA, dotted with dots. Below is the nominal value.
            `,
            issuing_country: 4,
            composition: 2,
            quality: 1,
            denomination: "0.5 pound",
            year: 1952,
            weight: 6.3,
            price: 78,
            category: 2,
            thumbnail_head: "/img/The_British_Antelope_1.png",
            thumbnail_tail: "/img/The_British_Antelope_2.png",
        },

        // 10
        {
            name: "Cron",
            subtitle: `A unique coin depicting a Knorr Viking ship at sea.`,
            description: `
    
            Coin 1 crown was issued from August 1, 1934 to March 25, 1941, during the first period of Estonia’s independence.
            
            On the obverse of the coin in the center is a large state seal, the emblem of Estonia, crowned with an arched text with the inscription “Eesti Vabariik”, and on the lower edge - the year of issue “1934”.
            
            The reverse depicts a Viking ship Knarr in the sea, under which appears the inscription 1 crown.
            
            In 2012, a single crown coin.
            
            1934 was recognized as "the most beautiful coin ever circulated in Estonia."
            `,
            issuing_country: 5,
            composition: 2,
            quality: 1,
            denomination: "0.5 pound",
            year: 1934,
            weight: 5.67,
            price: 79.0,
            category: 2,
            thumbnail_head: "/img/Cron_1.png",
            thumbnail_tail: "/img/Cron_2.png",
        },

        // 11
        {
            name: "Franc",
            subtitle: `Unique coin with the image of a walking elephant. "Frank" of the Belgian Congo.`,
            description: `
    
            On the reverse of the coin in its central part there is an inscription in French: "2 francs" - 2 francs, framed by a five-pointed star. Along the edge from left to right there is an inscription in French and Dutch in two lines: “BANQUE DU CONGO BELGE”, “BANQUE VAN BELGISCH CONGO” - Bank of the Belgian Congo. The edge of the coin is decorated with decorative teeth.
            
            On the reverse of the coin in the central part is a walking elephant. The year of minting is located under it: 1947. The edge is uneven.
            `,
            issuing_country: 6,
            composition: 2,
            quality: 1,
            denomination: "2 francs",
            year: 1947,
            weight: 5.45,
            price: 68.0,
            category: 2,
            thumbnail_head: "/img/Franc_1.png",
            thumbnail_tail: "/img/Franc_2.png",
        },

        // 12
        {
            name: "Stork",
            subtitle: `Unique coin with the image of a flying stork. French coin at 2 two francs 1997.`,
            description: `
    
            Two francs by Georges Gynemer - a commemorative coin of two French francs, issued in 1997 in honor of the famous pilot of the First World War, Georges Gynemer, on the occasion of the 80th anniversary of the officer cross of the Legion of Honor and his death: shot down in flight by a German plane.
            
            They are painted by engravers of the workshop of coins and medals under the direction of the general engraver of coins Pierre Rodier 4.
            
            The obverse depicts a portrait of Georges Gainemer in a flight suit and pilot's glasses, raised to his forehead. The inscription GEORGES GUYNEMER 1894-1917 in a semicircle at the top of the coin. And also the year of release below.
            
            The reverse shows a flying stork. Also below the arc is the inscription LIBERTÉ ÉGALITÉ FRATERNITÉ, separated by dots. And the face value at the top of the coin.
            `,
            issuing_country: 7,
            composition: 4,
            quality: 1,
            denomination: "2 francs",
            year: 1997,
            weight: 6.57,
            price: 54.0,
            category: 2,
            thumbnail_head: "/img/Stork_1.png",
            thumbnail_tail: "/img/Stork_2.png",
        },

        // 13
        {
            name: "Gyeonggi",
            subtitle: `"Gyeonggi". Coin with the image of five kangaroos - symbols of Australia.`,
            description: `
    
            The first Australian coin with a nominal value of 1 dollar was introduced on May 13, 1984 to replace a one-dollar banknote.
            
            The portraits of Elizabeth II on the obverse of the 1984, 1985 and 1988 coins were made by Arnold Machin, and on the 1999 coins by Ian Rank-Broadley.
            
            The reverse of the coin depicts five kangaroos symbolizing Australia. The drawing was designed by Stuart Devlin in 1966.
            
            The first Australian $ 1 coin was introduced on May 13, 1984 to replace a one-dollar bill.
            
            This is currently the most common coin denomination in Australia.
            `,
            issuing_country: 8,
            composition: 2,
            quality: 1,
            denomination: "1 dollar",
            year: 1984,
            weight: 4.76,
            price: 97.0,
            category: 2,
            thumbnail_head: "/img/Gyeonggi_1.png",
            thumbnail_tail: "/img/Gyeonggi_2.png",
        },

        // 14
        {
            name: "Bolivian Peso",
            subtitle: `Boliviano Coin with the image of Bolivia.`,
            description: `
    
            By 1987, the Bolivian peso had completely depreciated and was replaced by a new boliviano during another monetary reform.
            
            Old banknotes were printed and used as a "bargaining chip." And in 1988, they began to mint a real coin.
            
            This currency is still in circulation.
            
            At the top of one of the sides of the coin in a semicircle is the inscription REPUBLICADE BOLIVIA. At the bottom of the coin, an arc depicts 10 stars.
            
            Above, on the other side of the coin, the inscription PESO BOLIVIANO is located in an arc. In the middle is an image of face value. At the bottom of the year, framed on both sides by branches.
            `,
            issuing_country: 9,
            composition: 4,
            quality: 1,
            denomination: "1 Peso",
            year: 1988,
            weight: 3.62,
            price: 54.0,
            category: 2,
            thumbnail_head: "/img/Bolivian_Peso_1.png",
            thumbnail_tail: "/img/Bolivian_Peso_2.png",
        },

        // 15
        {
            name: "Botswana",
            subtitle: `"Botswana". Coin with the image of a bird.`,
            description: `
    
            Coin of state of Botswana 1976.
            
            Translated from Botswana, its name means “let it rain”
            
            After gaining independence from the United Kingdom in 1966, Botswana was a member of currency unions.
            
            In 2005, as a result of inflation, the currency fell by 12%, but it still remains one of the “strong” currencies on the African continent.
            `,
            issuing_country: 10,
            composition: 4,
            quality: 1,
            denomination: "1 thebe",
            year: 1976,
            weight: 4.28,
            price: 62.0,
            category: 2,
            thumbnail_head: "/img/Botswana_1.png",
            thumbnail_tail: "/img/Botswana_2.png",
        },

        // 16
        {
            name: "Virginia",
            subtitle: `Virginia Coin with the image of a seahorse. Coin created during the reign of Elizabeth II.`,
            description: `
    
            The obverse depicts Her Majesty Queen Elizabeth II. At the top of the coin is the inscription British Virgin Islands Queen Elizabeth II 2014.
            
            The reverse depicts a beautiful seahorse with a tail wrapped around a coral.
            
            The choice of seahorse reflects the marine heritage of the British Virgin Islands. The British Virgin Islands, located in the Caribbean Sea and consisting of more than 60 islands, are known for their coral reefs, which are home to a wide variety of animal species, including seahorses.
            
            Seahorse is the name given to 54 species of marine fish in the genus Hippocampus, which comes from the ancient Greek hippos, which means “horse”, and Campos - “sea monster”.
            `,
            issuing_country: 11,
            composition: 3,
            quality: 1,
            denomination: "5 dollars",
            year: 2014,
            weight: 6.98,
            price: 108.0,
            category: 2,
            thumbnail_head: "/img/Virginia_1.png",
            thumbnail_tail: "/img/Virginia_2.png",
        },

        // 17
        {
            name: "Theobroma Cocoa",
            subtitle: `Coin with a lion in the center of the shield. Ghana coin, published in 1967.`,
            description: `
    
            The reverse depicts a runaway lion in the center of a shield divided into four parts, separating the date and the face value. The inscription at the top of the coin is TWENTY
            
            As for the images inside the coat of arms:
            upper left: sword (used by chieftains) and staff (used by a linguist for ceremonial events)
            top right: OSU castle at sea (Presidential Palace),
            bottom left: cocoa tree (agricultural wealth of Ghana).
            Bottom right: a gold mine (rich in industrial minerals and natural resources) in Ghana.
            
            The Golden Lion and George intersect in the center (a permanent connection between Ghana and the Commonwealth of Nations).
            `,
            issuing_country: 12,
            composition: 3,
            quality: 1,
            denomination: "20 pesewas",
            year: 1962,
            weight: 4.76,
            price: 54.0,
            category: 2,
            thumbnail_head: "/img/Theobroma_Cocoa_1.png",
            thumbnail_tail: "/img/Theobroma_Cocoa_2.png",
        },

        // 18
        {
            name: "Coin of the Weimar Republic",
            subtitle: `The Hindenburg Coin with the coat of arms of the Weimar Republic.`,
            description: `
    
            On the obverse, in the center of the coin, at the top is the coat of arms of the Weimar Republic. In the center below is the coat of arms of the Hindenburg family. This is a shield divided into 4 fields - in the upper left and lower right corners there is a head of a bull.
            
            On the reverse side is a portrait of Paul von Hindenburg (1847–1934), Field Marshal, President of the Weimar Republic in 1925–1934 (right). Along the edge of the coin is a semicircle of date: 1847-1927 and the inscription: * * REICHSPRASIDENT * VON * HINDENBURG •. At the bottom left of the portrait is a letter denoting a German mint.
            `,
            issuing_country: 13,
            composition: 1,
            quality: 1,
            denomination: "5 Mark",
            year: 1927,
            weight: 4.76,
            price: 142.0,
            category: 2,
            thumbnail_head: "/img/Coin_of_the_Weimar_Republic_1.png",
            thumbnail_tail: "/img/Coin_of_the_Weimar_Republic_2.png",
        },

        // 19
        {
            name: "Scientist",
            subtitle: `Silver Egyptian coin with the image of the god Thoth. Silver Egyptian coin.`,
            description: `
    
            Face value one pound. It has been produced since 1981.
            
            The coin shows the name of the country and its meaning in Arabic. Also depicted is the Egyptian god Thoth.
            
            On the other side is a travel plate left by a radiant sun gear and splatter.
            
            The Egyptian pound is often shortened as LE or L. E., which means livre égyptienne (French for Egyptian pound).
            `,
            issuing_country: 14,
            composition: 1,
            quality: 1,
            denomination: "1 pound",
            year: 1981,
            weight: 3.95,
            price: 112.0,
            category: 2,
            thumbnail_head: "/img/Scientist_1.png",
            thumbnail_tail: "/img/Scientist_1.png",
        },

        // 20
        {
            name: "Lion sedge",
            subtitle: `Indian coin with the image of a lion Ashoka. Face value 1 one rupee. 1975 edition.`,
            description: `
    
            It depicts the lion Ashok on his pedestal. It is surrounded by the inscription of the name of the country in two languages, meaning and date, surrounded by stylized stalks of grain.
            
            The rupee (from Sanskrit silver) is an Indian historical silver coin, put into circulation in the 15th century, as well as the monetary unit of a number of countries in South Asia.
            
            After the British conquest of Burma in 1852, the Indian rupee became its currency.
            
            In 1938, Burma became an independent British colony.
            
            A year earlier, the release of the Burmese rupee, which lasted until 1952, began.
            
            In 1952, the Burmese rupee was replaced by a kyat.
            
            The rupee remained the currency of Portuguese possessions in India until 1959, when it was replaced by the escudos of Portuguese India.
            `,
            issuing_country: 15,
            composition: 4,
            quality: 1,
            denomination: "1 rupee",
            year: 1975,
            weight: 4.95,
            price: 76.0,
            category: 3,
            thumbnail_head: "/img/Lion_sedge_1.png",
            thumbnail_tail: "/img/Lion_sedge_2.png",
        },

        // 21
        {
            name: "Rial",
            subtitle: `Iranian silver coin with the image of a lion. Face value 5000 five thousand dinars (5 five taps). 1928 year.`,
            description: `
    
            It depicts a bust of Reza Shah, whose head is turned to the right.
            
            On the other side is a lion with a saber in front of the radiant sun. Above it is a crown.
            
            Before the monetary reform of 1932, the currency of Iran was fog. (1 fog = 10 clicks, 1 crane = 1000 dinars.)
            
            Currently, the name "fog" is used to denote the amount of 10 reais.
            `,
            issuing_country: 16,
            composition: 1,
            quality: 1,
            denomination: "5000 dinars",
            year: 1928,
            weight: 6.12,
            price: 98.0,
            category: 3,
            thumbnail_head: "/img/Rial_1.png",
            thumbnail_tail: "/img/Rial_2.png",
        },

        // 22
        {
            name: "ISK",
            subtitle: `Icelandic coin with a picture of a fish. Face value 1 Icelandic krona`,
            description: `
    
            Initially, the krone consisted of 100 Eire (ISL. EYRIR, MN. CH. ISL. Aurar), but since January 1, 1995 Eire has not been used in monetary circulation.
            
            From January 1, 1999, in accordance with Law No. 36 of April 27, 1998, amounts must be rounded to 50 Eire.
            
            Coin minting in Krona began in 1925.
            
            Initially, all coins had a monogram of King Christian X.
            
            Iceland was declared a Republic in 1944, and in 1946 it began to mint coins without royal symbols.
            
            Icelandic coins were minted by the Royal Mint of Denmark, the Royal Mint of Great Britain and a private mint in Birmingham.
            `,
            issuing_country: 17,
            composition: 3,
            quality: 1,
            denomination: "1 Icelandic krona",
            year: 2007,
            weight: 5.42,
            price: 78.0,
            category: 3,
            thumbnail_head: "/img/ISK_1.png",
            thumbnail_tail: "/img/ISK_2.png",
        },

        // 23
        {
            name: "Yemen",
            subtitle: `Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils.`,
            description: `
    
            An octagonal star with dots is depicted on one side of the coin.
            
            On the other side, a sailboat divides bills into English and Arabic.
            
            Until 1951, Indian rupee and East African shilling traded in the British colony of Aden.
            
            In 1951, East African shilling was declared the only legal tender in Aden.
            
            In 1959, the Federation of the United Arab Emirates of the South was formed, which was transformed into the Federation of South Arabia in 1962.
            
            Aden joined the Federation in 1963.
            
            In April 1965, the South Arabian Dinar was issued and published by the South Arabian Monetary Authority.
            
            East African shillings were exchanged for dinars until July 1, 1965 at a ratio of 20 shillings = 1 dinar.
            
            Dinar was equated to pound.
            `,
            issuing_country: 18,
            composition: 3,
            quality: 1,
            denomination: "25 fils",
            year: 1964,
            weight: 5.47,
            price: 69.0,
            category: 3,
            thumbnail_head: "/img/Yemen_1.png",
            thumbnail_tail: "/img/Yemen_2.png",
        },

        // 24
        {
            name: "Woman",
            subtitle: `1 yuan Chinese coin with a picture of a woman. 1986 edition.`,
            description: `
    
            On one side of the coin is a woman sitting on a stone. Doves fly around her
            
            On the other side is a Chinese weapon with stars.
            
            Today, the term "yuan" usually refers to the main unit of account of the renminbi (renminbi), the currency of the People’s Republic of China.
            
            Yuan banknotes start at one yuan and go up to 100 yuan.
            
            The yuan symbol is also used in Chinese to denote the monetary units of Japan (yen) and Korea (won) and is used to convert the currency to the dollar, as well as to some other currencies; for example, the US dollar is called in Chinese meiyuan.
            `,
            issuing_country: 19,
            composition: 3,
            quality: 1,
            denomination: "1 yuan",
            year: 1986,
            weight: 6.02,
            price: 48.0,
            category: 3,
            thumbnail_head: "/img/Woman_1.png",
            thumbnail_tail: "/img/Woman_2.png",
        },

        // 25
        {
            name: "Alligator",
            subtitle: `Chinese coin with the image of an alligator. 5 yuan Chinese coin. 1998 edition.`,
            description: `
    
            It depicts a Chinese alligator on the banks of the river.
            
            On the other side is a Chinese weapon with stars. It is surrounded by hieroglyphs and a coin release date.
            `,
            issuing_country: 19,
            composition: 3,
            quality: 1,
            denomination: "5 yuan",
            year: 1998,
            weight: 7.24,
            price: 78.0,
            category: 3,
            thumbnail_head: "/img/Alligator_1.png",
            thumbnail_tail: "/img/Alligator_2.png",
        },

        // 26
        {
            name: "The Golden Panda",
            subtitle: `Chinese coin with the image of two pandas. 5 yuan Chinese coin. 1993 edition.`,
            description: `
    
            On one side of the coin are two pandas. At the top of the coin are Chinese characters in an arc.
            
            On the other side is a Chinese weapon with stars, surrounded by hieroglyphs. Below is written the year of release.
            
            Chinese Golden Panda, launched in 1982.
            
            Coins (front side) remain unchanged since 1992
            
            There is also a Silver Panda investment coin series, made in a similar design.
            `,
            issuing_country: 19,
            composition: 3,
            quality: 1,
            denomination: "5 yuan",
            year: 1993,
            weight: 7.24,
            price: 82.0,
            category: 3,
            thumbnail_head: "/img/The_Golden_Panda_1.png",
            thumbnail_tail: "/img/The_Golden_Panda_2.png",
        },

        // 27
        {
            name: "Costa Rica",
            subtitle: `Costa - African coin with the image of manatee. Costa Rican coin of 100 columns. It has been produced since 1974.`,
            description: `
    
            On one side of the coin is a shield with a sailing ship in front of the mountains. Below is the release date of the coin.
            
            On the other side of the coin is a manatee among algae.
            
            The Costa Rican coin is the monetary unit of Costa Rica.
            
            Until 2017, the All-Russian classifier of currencies is the "Costa Rican Colony".
            
            `,
            issuing_country: 20,
            composition: 3,
            quality: 1,
            denomination: "100 columns",
            year: 1974,
            weight: 5.24,
            price: 78.0,
            category: 3,
            thumbnail_head: "/img/Costa_Rica_1.png",
            thumbnail_tail: "/img/Costa_Rica_2.png",
        },

        // 28
        {
            name: "Year of the children",
            subtitle: `Costa is an African coin depicting three chicks in a nest. Costa Rican coin of 100 columns. It has been produced since 1979.`,
            description: `
    
            On one side of the coin are 3 chicks in a nest, symbolizing the International Year of Children.
            
            On the other side is a shield with a sailing ship in front of the mountains, the shining sun behind the mountains.
            
            In circulation are banknotes: 1000 columns of series A and B (red, polymer), 2000 columns (blue with a shark of Mauro Fernandez on one side and a bull shark on the back), 5000 columns of series A and B (yellow with Alfredo González Flores) with one side and capuchin monkeys on the back), 10,000 columns (green), 20,000 columns and 50,000 columns.
            
            In the monetary circulation of the country are coins in denominations of 500, 100, 50, 25, 20, 10, 5 and 1 column.
            
            `,
            issuing_country: 20,
            composition: 3,
            quality: 1,
            denomination: "100 columns",
            year: 1979,
            weight: 5.24,
            price: 72.0,
            category: 3,
            thumbnail_head: "/img/Year_of_the_children_1.png",
            thumbnail_tail: "/img/Year_of_the_children_2.png",
        },

        // 29
        {
            name: "Sailboat",
            subtitle: `Portuguese silver coin with the image of a sailing ship. `,
            description: `
    
            Portuguese silver coin in 5 five escudos. It has been produced since 1933.
            On one side of the coin is a sailing ship floating in the sea.
            On the other side of the coin is a shield with smaller shields in front of a stylized globe.
            `,
            issuing_country: 21,
            composition: 1,
            quality: 1,
            denomination: "5 escudos",
            year: 1933,
            weight: 4.4,
            price: 134.0,
            category: 3,
            thumbnail_head: "/img/Sailboat_1.png",
            thumbnail_tail: "/img/Sailboat_2.png",
        },
    ],
};
