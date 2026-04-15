var config = {
    accessToken: 'pk.eyJ1IjoieW9va2FoIiwiYSI6ImNtbnk3azFrbjBhZnkyd3B6bGgzcW9pcngifQ.OYf6UH1LvD0IGM5uIgD-iA',
    style: 'mapbox://styles/mapbox/light-v11',
    theme: 'light',
    use3dTerrain: false,
    title: 'Landscapes in Tension, Stories in Transition',
    subtitle: 'Bamen in Practice',
    byline: `<p style="margin-bottom: 1.6em;">Tucked between the hills of Yokosuka are the yato — residential alcoves that were, until recently, only reachable through a single entrance, their interiors hidden from the street. Built as the Naval Arsenal expanded through the Taishō and early Shōwa periods, these valleys are filled with the density of workers' lives: houses pressed deep into the hillside, neighbourhoods that faced inward by necessity. Yato are frequently cited as a symptomatic landscape of Japan's depopulation — places where decline has gone furthest and become most visible at once. In some areas, nearly 20% of houses stand empty: doors sealed, gardens returned to brush, houses stranded at the end of paths that no longer lead anywhere.</p>
        <p style="margin-bottom: 1.6em;">But this framing misses something structurally significant. The terrain of yato was already part of the trade and political routes connecting the coast to Edo, and the yato communities that took shape later grew alongside the Naval Arsenal that drew workers, soldiers, and merchants from across the country. These histories did not arrive continuously. But they do not disappear either — they are inscribed into the soil, the topography, the materials of the landscape itself.</p>
        <p style="margin-bottom: 1.6em;">Project Yato begins from a premise that the geographical conditions of these alcoves are not a problem to be diagnosed, but a set of tensions to be read. It is an exercise in turning geography into historiography — in finding new ways to record the past so that Yokosuka becomes more than a naval port, and its story more than the navy curry, the warships in the harbour, and the memorial plaques that mark official grief at official sites. To do that, this project puts the theory of bamen (場面) into cartographical practice: using visual and map-based storytelling to reveal the invisible structures of historical tension that the landscape carries, and to document how residents work on and with their environment — or how, in their absence, nature quietly reclaims what presence once organised.</p>`,
    footer: '',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Yato, Caught in Bamen',
            description: 'The locations marked here do not tell a single story. They are places where different epochs have inscribed themselves onto the same land — sometimes in sequence, sometimes after a long hiatus, and sometimes simultaneously — leaving a terrain that cannot be read from one vantage point alone. The tension is not incidental. It is structural: what a place meant to one era does not disappear when the next era decides to change it completely. These stories are offered in that spirit — not as conclusions, but as first approaches. They are here to make the tension visible, in the hope that something more fully formed will grow from the attempt to bring them into view.',
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
            title: 'A Name Without a Bridge, a River Without Fish',
            description: `A record from 1875 describes a bridge here, spanning the Hemi Yato River at the point where it opened into the sea. A resident born in 1892 remembered the river as abundant: loach, eel, crucian carp, freshwater crab (City of Yokosuka 1981, 8). Today, the Migiwa bridge is gone, and its name lives on only as a bus stop. Down the road toward JR Taura Station, the Yoshikura Tunnel — bored through the bluff in 1891 — spared travelers the punishing climb over the headland and gave them faster access to Yoshikura, where boats ran to and from Enokido. That connection mattered: Enokido, now Uragō-chō, had been a key node in the fresh fish trade since the mid-1700s, channeling catch from the Miura Peninsula up to the tables of Edo (Asaka 1955).`,
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
