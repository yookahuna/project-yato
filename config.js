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
            title: 'Yato (谷戸): the door to enter a valley',
            markerColor: '#C05A40', 
            description: `<p style="margin-bottom: 1.5em;">Augustine Berque, a geographer and philosopher of Eastern thought, describes the valley as a woman's womb where life emerges through her labor by citing a poem from the Confucian scholar Laozi (2013, 19).</p> 
                          <blockquote>
                          <p style="margin-bottom: 1em;">谷神不死 <em>Gu shen bu shi</em> (The genie of the valley does not die)</p>
                          <p style="margin-bottom: 1em;">是謂玄牝 <em>Shi wei Xuanpin</em> (It is called the obscure female)</p>
                          <p style="margin-bottom: 1em;">玄牝之門 <em>Xuanpin zhi men</em> (The door of the obscure female)</p>
                          <p style="margin-bottom: 1em;">是謂天地根 <em>Shi wei tian di gen</em> (Is called the root of heaven and earth)</p>
                          <p style="margin-bottom: 1em;">綿綿若存 <em>Mianmian ruo cun</em> (She lasts like an unfolding thread)</p>
                          <p style="margin-bottom: 1em;">用之不勤 <Yong zhi bu jin</em> (Which does not run out when it is used)</p>
                          </blockquote>
                          <p style="margin-bottom: 1.5em;">Like the poem, my project is to weave an unfolding thread of bamen onto the yato topography to reveal its rich history and beautiful landscape obscured by the hills that surround it.</p>
                          <p style="margin-bottom: 1.5em;">These bamen introduce places where different epochs have inscribed themselves onto the same land — sometimes in sequence, sometimes after a long hiatus, and sometimes simultaneously — that require multiple perspectives from which to be read.</p>
                          <p style="margin-bottom: 1.5em;">This tension carries the risk of history becoming lost and forgotten because it resists being told in a narrative structure based on a single and linear timeline.</p>
                          <p style="margin-bottom: 1.5em;">Bamen, by showing tensions from the sedimented layers of history that a single location holds, offers an alternative model that can generate new ways to perceive and relate to the place in question.</p>
                          <p style="margin-bottom: 1.5em;">The collection of bamen here is offered in that spirit, as a catalyst for you - the users of this map - to find new ways of seeing and relating to Yokosuka.</p>`
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
        }
    ]
};
