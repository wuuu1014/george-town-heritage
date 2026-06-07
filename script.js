var map = L.map('map').setView([5.4180, 100.3380], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var heritageSites = [
    {
        name: "Fort Cornwallis",
        coords: [5.4215, 100.3441],
        category: "Colonial Military Infrastructure / Historical Landmark",
        description: "The largest surviving British colonial fort in Malaysia. Originally built as a wooden stockade under Francis Light in 1786, it was reconstructed in brick using convict labour in the early nineteenth century, reflecting George Town's early military and strategic trading role.",
        image: "image/fort.jpg", 
        imageCredit: "Graystravels via Wikimedia Commons (Own work)", 
        sourceUrl: "https://en.wikipedia.org/wiki/Fort_Cornwallis" 
    },
    {
        name: "Leong San Tong Khoo Kongsi",
        coords: [5.4147, 100.3372],
        category: "Chinese Clan Architecture / Lineage Heritage",
        description: "A prominent and highly ornamented Chinese clan house complex in Penang, completed in its current form in 1906. It serves as a major material symbol of Hokkien Chinese migration history, lineage organization, and southern Min architectural craftsmanship.",
        image: "image/khoo.jpg",
        imageCredit: "CEphoto, Uwe Aranas via Wikimedia Commons (CC BY-SA 3.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Khoo_Kongsi"
    },
    {
        name: "Kapitan Keling Mosque",
        coords: [5.4167, 100.3364],
        category: "Religious Architecture / South Indian Muslim Heritage",
        description: "A historic mosque founded in 1801 by Chulia (South Indian Muslim) traders. Featuring prominent Mughal-revival domes and minarets added during twentieth-century renovations, it represents the early multicultural and Islamic trading network of George Town.",
        image: "image/mosque.jpg",
        imageCredit: "User:Shoestring / Wikivoyage via Wikimedia Commons (Free license)",
        sourceUrl: "https://en.wikipedia.org/wiki/Kapitan_Keling_Mosque"
    },
    {
        name: "Cheong Fatt Tze Mansion",
        coords: [5.4221, 100.3341],
        category: "Domestic Architecture / Peranakan-Chinese Elite Residence",
        description: "A restored late nineteenth-century heritage residence built by Hakka merchant Cheong Fatt Tze. The mansion features an indigo-blue facade and integrates traditional Chinese courtyard design with imported Western elements like Gothic stained glass.",
        image: "image/blue.jpg",
        imageCredit: "Tony Jones via Wikimedia Commons (Dual license)",
        sourceUrl: "https://en.wikipedia.org/wiki/Cheong_Fatt_Tze_Mansion"
    },
    {
        name: "Armenian Street",
        coords: [5.4145, 100.3379],
        category: "Urban Streetscape / Historic Commercial District",
        description: "A major historic thoroughfare within George Town's UNESCO buffer zone, historically settled by Armenian merchants, Chinese clan associations, and Malay traders. Today, it preserves nineteenth-century shophouse streetscapes and functions as a focal point for living heritage.",
        image: "image/armenian.jpg",
        imageCredit: "RaffiKojian via Wikimedia Commons (Own work)",
        sourceUrl: "https://en.wikipedia.org/wiki/George_Town,_Penang"
    },
    {
        name: "Pinang Peranakan Mansion",
        coords: [5.4179, 100.3411],
        category: "Domestic Architecture / Museum of Peranakan Culture",
        description: "A nineteenth-century mansion that formerly served as the residence and office of Kapitan China Chung Keng Quee. It now functions as a museum housing an extensive collection of antiques, illustrating the syncretic lifestyle of the Straits Chinese (Peranakan) elite.",
        image: "image/peranakan.jpg",
        imageCredit: "C.W. Tan via Wikimedia Commons (CC BY-SA 4.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Pinang_Peranakan_Mansion"
    },
    {
        name: "St. George’s Church",
        coords: [5.4212, 100.3391],
        category: "Religious Architecture / British Colonial Church",
        description: "The oldest purpose-built Anglican church in Southeast Asia, consecrated in 1819. Designed by Captain Robert Smith of the Madras Engineers, the building features a distinct Georgian Neoclassical architectural style, symbolizing early British ecclesiastical authority.",
        image: "image/church.jpg",
        imageCredit: "Commons contributor via Wikimedia Commons (CC BY-SA 3.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/St._George%27s_Church,_George_Town"
    },
    {
        name: "Goddess of Mercy Temple",
        coords: [5.4181, 100.3382],
        category: "Religious Architecture / Chinese Temple",
        description: "Established in 1800 by early Hokkien and Cantonese settlers, this is one of the oldest Chinese temples in George Town. Dedicated to Guan Yin (Bodhisattva of Compassion), the temple serves as a historic institutional center for popular religious practices.",
        image: "image/temple.jpg",
        imageCredit: "Christophe95 via Wikimedia Commons (Own work)",
        sourceUrl: "https://en.wikipedia.org/wiki/Kong_Hock_Keong_Temple"
    },
    {
        name: "Sri Mahamariamman Temple",
        coords: [5.4152, 100.3361],
        category: "Religious Architecture / South Indian Hindu Temple",
        description: "The oldest Hindu temple on Penang Island, established as a shrine in 1801. Located in Little India, it is recognized for its elaborate, colorful Dravidian-style gopuram (gateway tower), serving as the spiritual heart of the South Indian Tamil diaspora.",
        image: "image/hindu.jpg",
        imageCredit: "Christophe95 via Wikimedia Commons (Own work)",
        sourceUrl: "https://en.wikipedia.org/wiki/Sri_Mahamariamman_Temple,_Penang"
    },
    {
        name: "Acheen Street Mosque",
        coords: [5.4138, 100.3369],
        category: "Religious Architecture / Achehnese-Malay Muslim Heritage",
        description: "A historic mosque founded in 1792 by Tengku Syed Hussain Al-Aidid, a wealthy Achehnese merchant. Featuring an Egyptian-influenced octagonal minaret, the complex formed the core of an early Islamic regional Hajj (pilgrimage) hub.",
        image: "image/acheen.jpg",
        imageCredit: "CEphoto, Uwe Aranas via Wikimedia Commons (CC BY-SA 3.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Acheen_Street_Mosque"
    },
    {
        name: "Clan Jetties of Penang",
        coords: [5.4121, 100.3399],
        category: "Maritime Settlement / Vernacular Waterfront Architecture",
        description: "A series of waterfront settlements consisting of houses built on wooden stilts over the sea, established in the late nineteenth century by Chinese maritime labourers. Divided by specific surnames, they represent George Town’s port-related migrant labor.",
        image: "image/jetty.jpg",
        imageCredit: "Lxphotography via Wikimedia Commons (Own work)",
        sourceUrl: "https://en.wikipedia.org/wiki/Clan_Jetties,_George_Town"
    },
    {
        name: "Suffolk House",
        coords: [5.4103, 100.3061],
        category: "Colonial Residential Architecture / Historical Landmark",
        description: "A rare, restored Anglo-Indian garden house built in the early nineteenth century on the estate originally owned by Francis Light. Its Neoclassical double-storey verandah architecture reflects European country house designs adapted to the tropics.",
        image: "image/suffolk.jpg",
        imageCredit: "Cmglee via Wikimedia Commons (CC BY-SA 3.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Suffolk_House,_Penang"
    },
    {
        name: "Sun Yat Sen Museum",
        coords: [5.4144, 100.3375],
        category: "Historic Shophouse / Political Movement Heritage",
        description: "A preserved mid-nineteenth-century residential shophouse that served as the Southeast Asian headquarters of Dr. Sun Yat Sen’s Tongmenghui movement. The site hosted the historic Penang Conference in 1910 to plan the Huanghuagang Uprising.",
        image: "image/sunyatsen.jpg",
        imageCredit: "LEE 003 via Wikimedia Commons (Own work)",
        sourceUrl: "https://en.wikipedia.org/wiki/Sun_Yat-sen_Museum_Penang"
    },
    {
        name: "Penang State Museum and Art Gallery",
        coords: [5.4204, 100.3397],
        category: "Institutional Building / Historical Museum",
        description: "Housed in a portion of the original 1816 building of the Penang Free School on Farquhar Street, this institutional repository preserves archival records and art collections documenting the multicultural socio-political evolution of Penang.",
        image: "image/statemuseum.jpg",
        imageCredit: "Commons contributor via Wikimedia Commons (CC BY-SA 3.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Penang_State_Museum_and_Art_Gallery"
    },
    {
        name: "Dhammikarama Burmese Temple",
        coords: [5.4312, 100.3086],
        category: "Religious Architecture / Burmese Buddhist Temple",
        description: "Founded in 1793 on land granted by the British colonial administration, this is the first and oldest Burmese Buddhist temple in Penang. Featuring traditional multi-tiered roof styling, it highlights historic migratory networks.",
        image: "image/burmese.jpg",
        imageCredit: "CEphoto, Uwe Aranas via Wikimedia Commons (CC BY-SA 3.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Dhammikarama_Burmese_Temple"
    },
    {
        name: "Wat Chaiya Mangalaram",
        coords: [5.4315, 100.3079],
        category: "Religious Architecture / Thai Buddhist Temple",
        description: "A Thai Buddhist temple founded in 1845 on land granted by Queen Victoria to the local Siamese community. It is internationally recognized for housing one of the longest reclining Buddha statues in Southeast Asia.",
        image: "image/watthai.jpg",
        imageCredit: "Flickr contributor via Wikimedia Commons (CC BY 2.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Wat_Chaiyamangkalaram"
    },
    {
        name: "Penang City Hall",
        coords: [5.4218, 100.3413],
        category: "Civic Architecture / Colonial Administrative Building",
        description: "An imposing Edwardian Baroque institutional building completed in 1903 on the Esplanade (Padang). Built to serve as the administrative headquarters of the Municipal Commissioners, it represents British civic governance.",
        image: "image/cityhall.jpg",
        imageCredit: "Cmglee via Wikimedia Commons (Own work)",
        sourceUrl: "https://en.wikipedia.org/wiki/City_Hall,_Penang"
    },
    {
        name: "Penang Town Hall",
        coords: [5.4215, 100.3418],
        category: "Civic Architecture / Colonial Assembly Hall",
        description: "Constructed in 1879 adjacent to the City Hall, this is the oldest municipal building in George Town. Featuring classical Italianate architecture, it functioned as the primary social and cultural hub for the colonial elite.",
        image: "image/townhall.jpg",
        imageCredit: "Commons contributor via Wikimedia Commons (CC BY-SA 4.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Town_Hall,_Penang"
    },
    {
        name: "Han Jiang Ancestral Temple",
        coords: [5.4161, 100.3374],
        category: "Chinese Clan Architecture / Teochew Heritage",
        description: "An ancestral temple constructed in 1893 by the Penang Teochew Association on Chulia Street. Built in the traditional Teochew architectural style with formal courtyards, it reflects the localized clan mutual-aid networks.",
        image: "image/hanjiang.jpg",
        imageCredit: "Christophe95 via Wikimedia Commons (Own work)",
        sourceUrl: "https://commons.wikimedia.org/wiki/Category:Han_Jiang_Ancestral_Temple"
    },
    {
        name: "Khoo Kongsi Cannon Square",
        coords: [5.4144, 100.3371],
        category: "Urban Public Space / Conflict Heritage Site",
        description: "A historic public open square located inside the complex of the Khoo Kongsi. The square was a central site during the tragic 1867 Penang Riots involving fighting between allied Chinese secret societies and Malay groups.",
        image: "image/cannon.jpg",
        imageCredit: "Supanut Arunoprayote via Wikimedia Commons (Attribution requested)",
        sourceUrl: "https://en.wikipedia.org/wiki/Khoo_Kongsi"
    },
    {
        name: "Penang Islamic Museum",
        coords: [5.4142, 100.3359],
        category: "Domestic Architecture / Museum of Islamic History",
        description: "Housed in a beautifully restored mid-nineteenth-century villa that originally belonged to the wealthy Achehnese merchant Syed Mohamed Al-Atas. The museum houses archival records charting the historical spread of Islam.",
        image: "image/islamicmuseum.jpg",
        imageCredit: "Gryffindor via Wikimedia Commons (CC BY 2.5 / CC BY-SA 3.0)",
        sourceUrl: "https://commons.wikimedia.org/wiki/Category:Penang_Islamic_Museum"
    },
    {
        name: "Nagore Square",
        coords: [5.4213, 100.3263],
        category: "Urban Streetscape / Indian Muslim Cultural Enclave",
        description: "A distinct urban cultural enclave centered around Nagore Road, historically linked to Chulia settlers honoring the Sufi saint Shahul Hamid. The area features rows of early twentieth-century eclectic-style terrace shophouses.",
        image: "image/nagore.jpg",
        imageCredit: "CEphoto, Uwe Aranas via Wikimedia Commons (CC BY-SA 3.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Chulia_Street"
    },
    {
        name: "Batu Ferringhi Fishing Village",
        coords: [5.4745, 100.2482],
        category: "Coastal Settlement / Maritime Vernacular Landscape",
        description: "A coastal settlement situated on the northern shore of Penang Island. While surrounded by resort developments, it preserves active artisanal maritime economic practices and traditional fishing vessel moorings.",
        image: "image/fishingvillage.jpg",
        imageCredit: "Gryffindor via Wikimedia Commons (CC BY 2.5 / CC BY-SA 3.0)",
        sourceUrl: "https://en.wikipedia.org/wiki/Batu_Ferringhi"
    },
    {
        name: "Balik Pulau Heritage Town",
        coords: [5.3512, 100.2361],
        category: "Rural Settlement / Historic Agrarian Town",
        description: "A historic market town located in the rural southwestern interior of Penang Island, established in the nineteenth century around clove and nutmeg agricultural booms. It retains early twentieth-century shophouses.",
        image: "image/balikpulau.jpg",
        imageCredit: "Vnonymous via Wikimedia Commons (Own work)",
        sourceUrl: "https://en.wikipedia.org/wiki/Balik_Pulau"
    },
    {
        name: "Snake Temple",
        coords: [5.3142, 100.2853],
        category: "Religious Architecture / Chinese Folk Belief Temple",
        description: "Built in 1850 in Bayan Lepas, this temple is dedicated to the deified healer Chor Soo Kong. It follows classical Chinese temple layouts and is renowned for housing live pit vipers, traditionally believed to be sacred servants.",
        image: "image/snaketemple.jpg",
        imageCredit: "FongChoonLeong via Wikimedia Commons (Own work)",
        sourceUrl: "https://en.wikipedia.org/wiki/Snake_Temple"
    }
];

heritageSites.forEach(function(site) {
    L.marker(site.coords)
    .addTo(map)
    .bindPopup(
        '<div style="width:260px; font-family: Garamond, Georgia, serif; color: #333;">' +
            '<h3 style="margin: 0 0 8px 0; font-size: 16px; border-bottom: 2px solid #007bc4; padding-bottom: 4px;">' + site.name + '</h3>' +
            '<div style="position: relative; margin-bottom: 10px;">' +
                '<img src="' + site.image + '" alt="' + site.name + '" style="width:100%; height:auto; border-radius:6px; box-shadow: 0 2px 4px rgba(0,0,0,0.15); display:block;">' +
                '<div style="font-size: 10px; color: #777; margin-top: 4px; text-align: right; font-style: italic;">Photo: ' + site.imageCredit + '</div>' +
            '</div>' +
            '<p style="margin: 0 0 6px 0; font-size: 12px; line-height: 1.4;"><b>Category:</b> <span style="color:#e67e22; font-weight:bold;">' + site.category + '</span></p>' +
            '<p style="margin: 0 0 8px 0; font-size: 13px; line-height: 1.4; text-align: justify;">' + site.description + '</p>' +
            '<div style="text-align: right; border-top: 1px solid #eee; padding-top: 6px;">' +
            '<a href="' + site.sourceUrl + '" target="_blank" style="color: #007bc4; text-decoration: none; font-size: 12px; font-weight: bold;">Learn More &rarr;</a>' +
            '</div>' +
        '</div>'
    );
});