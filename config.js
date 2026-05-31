var config = {
    accessToken: 'pk.eyJ1IjoieW9va2FoIiwiYSI6ImNtbnk3azFrbjBhZnkyd3B6bGgzcW9pcngifQ.OYf6UH1LvD0IGM5uIgD-iA',
    style: 'mapbox://styles/mapbox/light-v11',
    theme: 'light',
    use3dTerrain: false,
    title: 'Weaving Bamen onto the Folds of Yato',
    subtitle: 'a guide for walking Yokosuka across history',
    byline: `<p style="margin-bottom: 1.6em;">Tucked between the hills of Yokosuka are the yato — residential alcoves that were, until recently, only reachable through a single entrance, their interiors hidden from the street. Built as the Naval Arsenal expanded through the Taishō and early Shōwa periods, these valleys are filled with the density of workers' lives: houses pressed deep into the hillside, neighbourhoods that faced inward by necessity. Yato are frequently cited as a symptomatic landscape of Japan's depopulation — places where decline has gone furthest and become most visible at once. In some areas, nearly 20% of houses stand empty: doors sealed, gardens returned to bush, houses stranded at the end of paths that no longer lead anywhere.</p>
        <p style="margin-bottom: 1.6em;">But this framing misses something structurally significant. The terrain of yato has a longer history, belonging to the trade and political routes connecting the coast to Edo. The yato communities took shape later, alongside the Naval Arsenal that drew workers, soldiers, and merchants from across the country. These histories did not arrive continuously, but they do not disappear either — their traces are inscribed onto the soil, the topography, and the landscape itself. Nor does the framing do justice to the parts of yato's neighborhoods and streets that are carefully tended and maintained. What makes yato so irresistibly enchanting is the sedimented overlay of history, memory, and ongoing change that intertwine with its topography.</p>
        <p style="margin-bottom: 1.6em;">The collection of bamen departs from the premise that the yato areas are not a problem to be diagnosed, but a set of connections between sedimented stories of the past to be read. It is an exercise in historiography that reveals the folds of Yokosuka, tracing a rich history beyond the development of a naval port and weaving stories that are more than the navy curry, the warships in the harbour, and the countless sites commemorating the lives lost in wars fought by and for the modern Japanese empire and state. To do that, this project puts the theory of bamen (場面) into cartographic practice: using map-based storytelling to connect fragments of history, memory, and story recorded in books, memoirs, and local archives with physical locations in yato, while introducing the creative initiatives already underway — or, where those are absent, the way nature quietly reclaims what human presence once organised.</p>`,
    footer: '',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Yato (谷戸): an entrance into a valley',
            markerColor: '#C05A40', 
description: `<p style="margin-bottom: 1.5em;">The yato valleys of Yokosuka hold more than their terrain suggests. Tucked between hills, these residential alcoves carry layers of history and memory held together by the ecological signature of satoyama — a mosaic of secondary forests, farmlands, irrigation ponds, and grasslands interwoven with human settlement — that gives those layers their socio-spatial form and keeps them mutually entangled. Each bamen collected here marks a site where different epochs have inscribed themselves onto the same land, their inscriptions remaining mutually load-bearing within a shared satoyama mosaic. To read a bamen is to hold multiple temporal registers at once — and to recognize that yato's biodiversity is sustained not only by how the land is used, but by the accumulated history of how people and land have shaped each other.</p>
              <p style="margin-bottom: 1.5em;">Augustine Berque, writing on the valley as a form, finds in a verse from Laozi an image that speaks to this condition:</p>
              <blockquote style="margin-top: 4px; margin-bottom: 4px; padding-left: 1.2em; border-left: 3px solid #C05A40; font-style: italic;">
              谷神不死 <em>Gu shen bu shi</em><br>
              (The genie of the valley does not die)<br>
              是謂玄牝 <em>Shi wei Xuanpin</em><br>
              (It is called the obscure female)<br>
              玄牝之門 <em>Xuanpin zhi men</em><br>
              (The door of the obscure female)<br>
              是謂天地根 <em>Shi wei tian di gen</em><br>
              (Is called the root of heaven and earth)<br>
              綿綿若存 <em>Mianmian ruo cun</em><br>
              (She lasts like an unfolding thread)<br>
              用之不勤 <em>Yong zhi bu qin</em><br>
              (Which does not run out when it is used)<br>
              </blockquote>
              <p style="margin-bottom: 1.5em;">The valley does not exhaust itself. What is folded inside it continues to generate. The bamen offered here are an invitation to discover what that means, on the ground, in Yokosuka's yato.</p>`,
            location: {
                center: [139.650, 35.285],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'forgotten-forge',
            alignment: 'left',
            hidden: false,
            title: 'The Forgotten Forge',
            markerColor: '#C05A40', 
            description: `In 1865, as the Shogunate broke ground on the Yokosuka Iron Works — the seed of what would become the Naval Arsenal — this plot of land served as a halfway house for ex-convicts recruited into the construction workforce (Ishii 1987a, 16). Many of them never left. A collective memorial erected in 1922 still stands at the corner of Fujimi Park, quietly marking their deaths. The halfway house itself lasted only four years, and by 1902 the site had been claimed by a new institution: the Imperial Navy's Enlisted Officers' Club. After Japan's defeat in World War II, U.S. forces occupied the building — the latest in a long succession of powers to stake a claim here — until it was finally demolished in 1990, leaving little trace of everything that had stood before.`,
            location: {
                center: [139.66177, 35.28141],
                zoom: 16,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'name-without-bridge',
            alignment: 'right',
            hidden: false,
            title: 'A Name Without a Bridge',
            markerColor: '#C05A40', 
            description: `A record from 1875 describes a bridge here, spanning the Hemi Yato River at the point where it opened into the sea. A resident born in 1892 remembered the river as abundant with loach, eel, crucian carp, and freshwater crab (City of Yokosuka 1981, 8). Today, the Migiwa bridge (now called Nagisa bridge) is gone, and its name lives on only as a bus stop. Down the road toward JR Taura Station, the Yoshikura Tunnel — bored through the bluff in 1891 — spared travelers the punishing climb over the headland and gave them faster access to Yoshikura, where boats ran to and from Enokido. That connection mattered: Enokido, now Uragō-chō, had been a key node in the fresh fish trade since the mid-1700s, channeling catch from the Miura Peninsula up to the tables of Edo (Asaka 1955).`,
            location: {
                center: [139.65199, 35.28358],
                zoom: 16,
                pitch: 40,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterExit: [],
            onChapterEnter: []
        },
        {
            id: 'circling-timeline',
            alignment: 'left',
            hidden: false,
            title: 'A Circling Timeline',
            markerColor: '#C05A40', 
            description: `Uraga Road was laid in 1720 to connect the capital Edo with its satellite customs office in Uraga, which regulated the movement of vessels in and out of Tokyo Bay. One stretch of the road proved notoriously hard to climb: a winding, switchback ascent that locals named Nono-ji ('double no') Slope, after the cursive shape of the Japanese character の — a spiral, doubled back on itself. In 1912, the Imperial Navy began constructing a waterway to carry water from the Hanbara reservoir near Aikawa Park; completed in 1918, it ran just to the north of Uraga Road along what is now National Highway 16. The wedge of land between that highway and the Nono-ji Slope is Shitkama Yato, one of the many residential alcoves built during the Meiji and Taisho expansion that are quietly falling into ruin.`,
            location: {
                center: [139.63633, 35.28879],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bricks-blossoms',
            alignment: 'left',
            hidden: false,
            title: 'Bricks and Blossoms',
            markerColor: '#C05A40', 
            description: `The name Yasaka is written with the kanji for eight — a figure for the twin hills that climb from Shioiri toward the ridge. At the junction where the two paths converge stood a place known as Kappa Mountain: not for the water spirit of Japanese legend, but for the kappa, the raincoat, and the military facility here that serviced the heavy-duty gear of the regiment stationed on these slopes. The Heavy Artillery Regiment planted cherry trees on the grounds. The red brick gate at the regimental entrance still stands as the entrance to Sakura Elementary School, which takes its name from the blossoms that the regiment planted (City of Yokosuka, 1981, 34-7).`,
            location: {
                center: [139.65711, 35.27337],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cannons-calvary-children',
            alignment: 'left',
            hidden: false,
            title: 'Cannons, Cavalry, and Children',
            markerColor: '#C05A40', 
            description: `Around 1880, the Imperial Army requisitioned farmland and flattened the surrounding slopes to clear a drill ground for the Heavy Artillery Regiment. Cannons were installed; cavalry stables followed. Children caught tadpoles, crabs, and shrimps in the small river that ran through the grounds. By the 1910s, weekends had been quietly reclaimed — the drill ground became a baseball field, eventually formalized where Tsurukubo Elementary School now stands (Ishii 1987b, 84). The sport arrived with its English terminology intact: strike, safe, out. The children had less than a decade with those words. When wartime language policy reached the baseball diamond, the terms were reversed into Japanese — seikyū, anzen, hike — and the foreign syllables disappeared from the field along with everything else that had briefly seemed ordinary.`,
            location: {
                center: [139.66571, 35.26835],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
