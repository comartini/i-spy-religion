// scenes.js
// Each scene has a title, an image URL, and an array of hotspots.
// Hotspot x and y are percentages of image width/height (0–100).
// Replace the placeholder image URLs with your real images when you find them.

const scenes = [
  {
    id: "MAGA-rally",
    title: "Rally",
    image: "images/MAGA-rally.jpg",
    hotspots: [
      {
        x: 35, y: 40,
        label: "The Epoch Times",
        obvious: true,
        text: "At first glance, you might assume that a newspaper with this name, presented in a venue like this, would be a Christian-focused publication. The word \"epoch\" here would often be a clue to suggest that the publication was affiliated with the theology of Evangelical dispensationalism, in which time is divided into distinct epochs in which God exercises a particular plan, with our current epoch being the last before the return of Christ and the apocalypse. Dispensationalism is common among conservative Evangelicals who might be supportive of President Trump. However, <em>The Epoch Times</em> is actually a publication run by Falun Gong, a Chinese new religious movement that has been heavily persecuted in China and which operates several far-right and anti-Communist programs in the United States, like <em>The Epoch Times</em> and the Shen Yun dance troupe. Though not Christian, Falun Gong shares many more cultural positions with American conservative Evangelicals, such as opposition to homosexuality, feminism, and socialism, and support for Donald Trump's political movement. For more on American Christian dispensationalism, see Matthew Avery Sutton's <a href=\"https://www.hup.harvard.edu/books/9780674975439\" target=\"_blank\"> <em>American Apocalypse</em></a>. For more on Falun Gong, particularly its apocalyptic beliefs, see Maria Hsia Chang's <a href=\"https://yalebooks.yale.edu/book/9780300133172/falun-gong/\" target=\"_blank\"> <em>Falun Gong: The End of Days</em></a>."
      },
      ]
      },
  {
    id: "sabbath-elevator",
    title: "Shabbat Elevator",
    image: "images/Sabbath_elevator.jpg",
    hotspots: [
      {
        x: 51, y: 11,
        label: "Shabbat Setting",
        obvious: true,
        text: "In more orthodox Judaism, observers of the weekly Shabbat (Sabbath or Shabbos) are required to abstain from various kinds of \"work\". There has been much debate over what that entails, particularly in our present technological age. Some interpreters of Jewish law have concluded that the use of any electricity violates Shabbat, requiring observers to sometimes find compromises and workarounds to make their observance work in today's world. One of those compromises is the Shabbat elevator setting, which makes the elevator stop at every floor in a building, allowing observers to use the elevator without actually operating it. This remains a contentious compromise among orthodox rabbis. Still, many public buildings in the United States, particularly hospitals, will enable their elevators' Shabbat setting in order to accommodate observers. To learn more, check out Alan Dundes's book <a href=\"https://www.bloomsbury.com/us/shabbat-elevator-and-other-sabbath-subterfuges-9780742516717/\" target=\"blank\"> <em>The Shabbat Elevator and Other Sabbath Subterfuges</em></a>."
      }
    ]
  },
    {
    id: "DAPL",
    title: "DAPL Protest",
    image: "images/DAPL.jpg",
    hotspots: [
      {
        x: 31.5, y: 84,
        label: "Medicine Wheel",
        obvious: true,
        text: "Within the word \"honor,\" you can see a circle separated into different colored quadrants. This symbol is commonly called the medicine wheel, and it is used in many pan-American Indigenous contexts as a sign of solidarity and a gesture to the thousands of years of Indigenous knowledge about the natural world. However, the symbol itself is not as old as the traditions it represents--it was derived by Charles Storm in 1972 in an attempt to crystallize several indigenous religious and spiritual ideas into one image, with the four quadrants representing the cardinal directions, stages of life, seasons, representative or sacred animals, and virtues. The symbol has been heavily criticized by many Indigenous groups, who argue that it is a gross simplification of complex traditions and that it has been co-opted for profit by the New Age movement. Still, it is commonly seen as a mark of pan-Indigenous identity, and so its presence at a protest against the Dakota Access Pipeline is not surprising, though it is a reminder to us to attend to the histories of symbols when discussing their use. For more on the history of the symbol and its reception, see Christopher Shaw's essay <a href=\"https://thetrackingproject.org/a-theft-of-spirit/\" target=\"blank\"> \"A Theft of Spirit?\"</a>. For more on Indigenous religion in protest movements, see Michael McNally's <a href=\"https://press.princeton.edu/books/hardcover/9780691190891/defend-the-sacred?srsltid=AfmBOoqi1mTkyqVbjPVRnDMNN5fyUm7Qgw6ch9rrqknOnxx7z4mXROg9\" target=\"blank\"> <em>Defend the Sacred: Native American Religious Freedom Beyond the First Amendment</em></a>."
      },
      {
        x: 10, y: 45,
        label: "Oil as Religion",
        obvious: true,
        text: "The religion of capitalism in the United States has been a widely discussed and debated topic in religious studies. When talking about the Industrial and Modern eras, those conversations must include the American devotion to oil and fossil fuels, which arguably constitute part of the civil religion of America itself. Consider the symbol of the personal motor vehicle in American life and the cultural capital derived from things like bigger or faster cars. Consider also the close connection between the oil industry and conservative politicians, many of whom talk about the expanse of the fossil fuel industry and American energy dominance as a good and righteous thing, with \"Drill Baby Drill\" being a conservative slogan since Sarah Palin popularized the phrase in the 2008 presidential election. Beyond this specifically Christian and Conservative connection to oil, there is also the fact that oil and fossil fuels represent the often-hidden backbone of modernity, affording things like plastics and air travel that make our world work the way that it does. Even if one were not to advocate for reckless drilling or to support the closure of the Dakota Access Pipeline, it might be hard to say that anyone living in the modern era is not, in some small way, a devotee of the religion of Big Oil. For more on the explicit connections between American Christianity and the fossil fuel industry, see Darren Dochuck's <a href=\"https://www.hachettebookgroup.com/titles/darren-dochuk/anointed-with-oil/9781541673946/?lens=basic-books\" target=\"blank\"> <em>Anointed with Oil: How Christianity and Crude Made Modern America</em></a>."
      }
    ]
  },
    {
    id: "In-N-Out",
    title: "In-N-Out",
    image: "images/in-n-out.jpg",
    hotspots: [
      {
        x: 45, y: 92,
        label: "John 3:16",
        obvious: true,
        text: "Many businesses in the United States sneak a bit of religion into their branding. The fast-food chain In-N-Out Burger has, printed on the inside of the rim of the bottom of their drink cups, 'JOHN 3:16': 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' The clothing retailer Forever 21 also has John 3:16 printed on the bottom of their iconic yellow bags."
      }
    ]
  },
  {
    id: "Supreme Court",
    title: "Supreme Court",
    image: "images/supreme-court.jpg",
    hotspots: [
      {
        x: 49.5, y: 20,
        label: "Temple of Justice",
        obvious: true,
        text: "Architect Cass Gilbert deliberately designed the United States Supreme Court building in the likeness of a temple from Greek and Roman antiquity, and it has been nicknamed the \"Temple of Justice.\" The columnar facade, with the accompanying frieze above the pediment, evokes famous temples such as the Parthenon, the Hephaisteion, and the Pantheon. Neoclassical architectural stylings are common among American government buildings, creating an aesthetic connection between an antique past, the origins of democracy and other civic ideals, and the American present. Marking these buildings as such denotes an explicit attempt to assign a sacred character to the workings of American government--as its architectural predecessors were meant to be the home of the gods, buildings like the Supreme Court are meant to be the home of the divine and immortal spirit of the ideals of American justice. Ideals, of course, are very different from reality, and there are many groups throughout history who would disagree that the members of the Supreme Court amounted to a pantheon of perfect justice. For more, see <a href=\"https://archive.org/details/greekrevivalarch0000haml_w5p6\" target=\"blank\"> <em>Greek Revival Architecture in America</em></a> by Talbot Hamlin."
      },
        {
        x: 60.5, y: 35,
        label: "Corinthian Columns",
        obvious: true,
        text: "Columns in antiquity followed three orders, developed in sequence--Doric, Ionic, and Corinthian. These columns are in the Corinthian style, often considered to be the most lavish and opulent of the three columnar orders. Doric and Ionic columns were much more understated, with simple capitals as opposed to the intricate leaf designs on Corinthian columns. The Corinthian column was more popular in Roman antiquity, where it was used to mark buildings with imagery that evoked the power and grandeur of the Empire. There is also a subtle Christian signification here--the Roman colony of Corinth, where the column was first discovered, was also the site of one of the earliest Christian communities in the ancient Mediterranean, established by the Apostle Paul."
      },
      {
        x: 81.5, y: 60,
        label: "Authority of Law and Contemplation of Justice",
        obvious: true,
        text: "The entrance to the Supreme Court is flanked by two seated statues, the Authority of Law and the Contemplation of Justice, also done in a Neoclassical style. The two seated statues are evocative of the seated cult statues of the deities to which a temple in antiquity was devoted, though unlike their antique counterparts, these statues are outside the building rather than inside in a place of significance. Though not depicting gods themselves, the statues, in borrowing from these antique traditions, are done in such a way as to assert an aesthetic authority. Instead of deities, they depict civic virtues, law and justice, in such a way as to elevate those ideals, and the greater American ideal of which they are a part, to the height of the gods. In many ways, the Supreme Court building is a clear representative of American civil religion, the religion of America itself, enshrined in temples and cult statues like those seen here. For more on the design of Roman temples, see <a href=\"https://assets.cambridge.org/97805218/10685/sample/9780521810685ws.pdf\" target=\"blank\"> <em>The Architecture of Roman Temples</em></a> by John Stamper."
      }
    ]
  },
  {
    id: "Botanica",
    title: "Botanica",
    image: "images/botanica.jpg",
    hotspots: [
      {
        x: 48.2, y: 72.7,
        label: "Veladoras",
        obvious: true,
        text: "Ritual candles are complex and multifaceted religious objects, particularly in the Latin and Hispanic world. Often, their containers are marked with images of saints, and they are burned as an invocation of the saint for veneration or intercession. However, botanicas like this will often also sell candles with deities or icons from other religions, like Santeria, and these objects represent an opportunity for religious syncretism and mixing, not belonging to any one tradition exclusively. Some candles have a specific devotional purpose directed towards a deity or force, and others have a more practical purpose, calling for good fortune (Suerte y Fortuna), for a man to be repulsed by other women (Aborrecido por Todas), or keeping your mother-in-law away (Aleja Suegras). These candles will be made with certain oils and herbs, and the ways in which they burn can tell the user how and if the candle's devotion or invocation is successful. For more, see Michael Owen Jones's article <a href=\"https://muse.jhu.edu/pub/25/article/745703\" target=\"blank\"> \"Herbs and Saints in the City of Angels: Researching Botánicas, Healing, and Power in Southern California.\"</a>"
      },
        {
        x: 65.6, y: 38.5,
        label: "Rosaries",
        obvious: true,
        text: "These small bracelets look like they could be miniature rosary beads, objects called decades on which someone could pray one set of ten Hail Mary prayers. However, if you look closely, they have more than the standard eleven beads a decade would have, and the medallion is not a recognizably Catholic or Marian symbol. At least two sets of beads feature an amulet with a figure carrying a scythe, strongly indicating that the beads are amulets of Santa Muerte, a Mexican folk saint who is associated with healing, protection, and safe passage to the afterlife. The Santa Muerte cult is not officially recognized by the Catholic Church, yet many Catholics still turn to her for protection, and her appearance in a material context that looks so much like a miniature rosary speaks to the strength of that syncretism. For more, see Kingsbury and Chestnut's article <a href=\"https://www.mdpi.com/2077-1444/12/3/220\" target=\"blank\"> \"Syncretic Santa Muerte: Holy Death and Religious Bricolage.\"</a>"
      },
      {
        x: 54.2, y: 12.9,
        label: "Mojo Bags",
        obvious: true,
        text: "These hanging items are mojo bags--small, fabric or leather pouches packed with botanical, mineral, and curio items, meant to offer protection, good fortune, or to help the user accomplish a specific goal. Rooted in West African spiritual traditions, they form a cornerstone of African, Caribbean, and Latin American folk magic sold in traditional neighborhood or online botanicas. The bag itself originated in West African practice of making and carrying gris-gris bags, which served a similar protective function, and was brought to the Americas through the slave trade. Once in the Americas, the practice fused with indigenous herbal and medical practices, resulting in the bags on sale here. For more see Danielle Clausnitzer's article <a href=\"https://www.mdpi.com/2077-1444/8/10/213\" target=\"blank\"> \"Adorned by Power: The Individualized Experience of the Mojo Bag.\"</a>"
      }
        ]
  },
    {
    id: "Hotel",
    title: "Hotel",
    image: "images/hotel-room.jpg",
    hotspots: [
      {
        x: 19, y: 62,
        label: "The Gideon Bible",
        obvious: true,
        text: "In most American hotel rooms, there is a copy of the Bible in the nightstand. Beginning in 1908, The Gideons International organization began distributing Bibles to places of lodging, meant to give travelers a source of comfort and spiritual guidance on their journeys. The Gideons International organization is, of course, an evangelical missionary group, engaging in the longstanding practice of distributing Bibles widely, a practice which began in the early 1800s with the British and Foreign Bible Society and the American Bible Society. As many evangelicals believe that the Bible is the highest form of spiritual authority, the act of receiving or encountering a bible could have a real effect on one's potential for salvation, and The Gideons International saw hotel guests as a prime subject for their proselytization efforts. This practice is slowly declining, with more hotel chains opting not to include a Bible in their rooms. The Marriott chain of hotels includes both a Gideon Bible and a Book of Mormon in their nightstands. For more, see Daniel Vaca's <a href=\"https://www.hup.harvard.edu/books/9780674980112\" target=\"blank\"> <em>Evangelicals Incorporated: Books and the Business of Religion in America</em></a> and Mark Noll's <a href=\"https://global.oup.com/academic/product/americas-book-9780197623466?cc=us&lang=en&\" target=\"blank\" <em>America's Book: The Rise and Decline of a Bible Civilization, 1794-1911</em></a>."
        }
        ]
  },
   {
    id: "Dollar Bill",
    title: "Dollar Bill",
    image: "images/dollar.jpg",
    hotspots: [
      {
        x: 49.5, y: 65.2,
        label: "The Missing Motto",
        obvious: true,
        text: "This is an example of a place where we might expect to find religion, but it is curiously absent. Most of us are probably used to the phrase \"In God We Trust\" appearing on American currency. Though the phrase appears in many contexts since the Revolutionary period, it did not appear on any American currency until the Civil War, where it adorned the two-cent piece. At the time, the phrase was meant to be an explicit affirmation of the Christian God's favor of the Union and in the need for an anxious public to put their faith in God's Providence. In the decades following the war, the phrase began to be referred to as the nation's motto, even by non-Christians, and it appeared on several other denominations of coinage, until President Theodore Roosevelt, contentiously, had it removed in 1905, only to be restored to coins two years later. However, the phrase did not appear on paper currency until 1955, and it was not designated the national motto by Congress until 1956. The push to adopt the motto and print it on currency, in addition to federal postage, came amid the Cold War-era existential anxieties about the future of the nation, and was furthered by a broad coalition of faith-based advocates from many traditions and denominations. This bill, however, is from 1935, printed before the effort to have the motto on paper currency. For more, see Michael Lienesch's article <a href=\"https://www.mdpi.com/2077-1444/10/5/340\" target=\"blank\"> \"In God We Trust\": The National Motto and the Contested Concept of Civil Religion\"</a>."
        },
      {
        x: 22.2, y: 68.9,
        label: "The All-Seeing Eye",
        obvious: true,
        text: "The Eye of Providence is a common symbol in American life, appearing on the reverse of the Great Seal of the United States since its adoption in 1782. Providence, in many Christian contexts, refers to God's continued intervention in the world, establishing a sacred, natural order of things in line with his goals and intentions. The Eye of Providence's adoption into American life, in many contexts beyond its appearance on the dollar bill beginning in 1935, is meant to align the American future and the American destiny with the unfolding of God's plan for creation. American culture and government are thus explicitly sacralized in a Christian context, asserting that there is no distinction between God's plan and America's plan. If this was not explicit enough, the Eye of Providence appears beneath the Latin phrase \"Annuit Coeptis\", meaning \"He has favored our undertakings.\" The symbol also appears in the iconography of the Freemasons, which has begat endless conspiracy theories, though its use in the Freemasons began after the adoption of the Great Seal. For more on the broader project of sacralizing the American project, see Robert Bellah's famous article <a href=\"https://watermark02.silverchair.com/001152605774431464.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAA0kwggNFBgkqhkiG9w0BBwagggM2MIIDMgIBADCCAysGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQM68sHEWO8NpzHBUifAgEQgIIC_HjOhmH-Iaz1REvuRnYHQzelGLoRR_ELKAM26upFdc_yB57qp_pJYaI_EZI6baIf9hWzApjkrzsmaTHvN_yI7dDw2IW3GFsSOJlOY3GkZfYQxrxqdVcrFjFm9fbpsEjnYHhC2w8cxyg2Ykt89v50FF8hEzqJPc6o4UGOm763S88AdLhIzuUgKuFU0gZZ4WkrGXnjKCnY9gKULwA5xIv-FZzPIwaxGT9mtOW1fbrSx70UyHy-Njl5H1HWtB98C0Yfpe2iHVRI_Q8yWHo9vYOqczyTyT6AMef_-jsLhjfve7qWpvdQ1DfutYSzL0yHgNIr9BhD4cFFrCXsBNqBfmaD7IFlsX7DkrshqcIQvi8jf5mgNHIONTWlNCAeiNaaBFJWznpqnmZom98oWem7QOHYrXvRDlu5VNAJ71g053dFvQnrKkb6L1ehb36H5qenEdZax7rA5DVTkWpFQB3ephiDpNWS_oghJZI0PzcpBauTYuzBTEa6ZDZsAN_299uSGA71qjsYaFS6MDcQyPYMpRe5Kwjqp-4dLsQiu8cm09PWjAKCrYGF4KxCHHS5aLQj8ETXAYgVUROoRyeHGNCKN51OIn5rXbMHZe8DuGPGKcF93bpIakHHTbZDHwxsLR63ewJmaExVUIbTwS949p8g2SpmCGZ0Rxxc3AXQr1XjmZuT48W2cCU6rbJy57FFP65q4JpPQ4WFEnCAB9MLubFUR37sYr0TMyACYZMPlQDmBbMGXo5Yxay5zGaCrDnGdBtTbzEP1hDHqsDs_vGcc5dILbfyBi-NKL_LxvDqqcLjUK6xIIWEnYVFN8b82xFL2mrQ-vuA7rHO273ynLB2_wJtctjDJG7HqrzCIBFHjbGt8xU4TYjJ4gO99B0L0PMpMd4qF7F4T2_N--lZBBd4HEiAvVMI6Iwtt4blEr_O4MrtA1NiJpt-F5el3fiIBv4bAqRwTuosg1BoqG60l53NOwIeJni0-lox45eNX97fVsi6EV2s5JQ-odusi6h8S0NxOSOs\" target=\"blank\"> \"Civil Religion in America\"</a>."
        },
      {
        x: 49.8, y: 45.0,
        label: "Faith in Funds",
        obvious: true,
        text: "For most of American history, paper currency was backed by a physical commodity, gold or silver, and bills like this one were legally redeemable for their equivalent weight in precious metal. This bill, a Silver Certificate, still carries that promise in plain text at the bottom of the front--\"One Dollar in Silver Payable to the Bearer on Demand\". In 1964, that promise was quietly retired. Since then, the dollar has been what economists call \"fiat currency,\"its value guaranteed not by any physical substance but by \"the full faith and credit of the United States.\" The word faith is right there in the official language. Fiat currency works similarly to religious belief and practice, insofar as a dollar is worth a dollar because a community of people collectively agrees that it is, and for no other reason. When that collective agreement collapses, as it did in Weimar Germany in the 1920s or Zimbabwe in the 2000s, the currency becomes worthless overnight. Some scholars have pushed this argument further, arguing that capitalism itself functions as a religion, with its own vision of salvation, its own priesthood, and its own sacred texts and rituals. For more, see Eugene McCarraher's <a href=\"https://www.hup.harvard.edu/books/9780674984301\" target=\"blank\"> <em>The Enchantments of Mammon: How Capitalism Became the Religion of Modernity</em></a>."
        }
        ]
  },
  {
    id: "Washington",
    title: "Washington",
    image: "images/washington.jpg",
    hotspots: [
      {
        x: 50.4, y: 54.1,
        label: "Obelisk",
        obvious: true,
        text: "While much of the architecture of United States government buildings and facilities deliberately evokes ancient Greek and Roman styles, the Washington Monument stands out as an example of ancient Egypt's more contemporary influence. In ancient Egypt, the obelisk, or elongated columnar pyramid, was used to adorn temples, typically in pairs, and was associated with the sun god Ra, one of the most important figures in the Egyptian pantheon. After the Romans took control of Egypt, the obelisk form migrated to Western Europe, and later the Americas. In the case of the Washington Monument, the obelisk form was chosen for its evocation of permanence and stability, and, at the time of its completion in 1885, was briefly the tallest structure in the world. According to the DC building codes, no future buildings can surpass its 555 feet. Now, the monument stands as a tribute to a figure who occupies a similar central point in the American historical pantheon as the sun god for whom the obelisk form was first implemented. For more on the national monuments and the sacred landscape of Washington, DC, see Kirk Savage's <a href=\"https://www.ucpress.edu/books/monument-wars/paper\" target=\"blank\"> <em>Monument Wars: Washington D.C., the National Mall, and the Transformation of the Memorial Landscape</em?</a>."
      },
       {
        x: 50.4, y: 22.5,
        label: "Capstone",
        obvious: true,
        text: "At the very top of the monument is a small, 9-inch capstone made of aluminum. Aluminum was an extremely rare resource, and the choice to adorn the monumnent with an aluminum piece that was, in 1884, the largest single piece of aluminum on Earth, represents a display of American wealth and industry. Inscribed on the capstone is the Latin phrase \"Laus Deo\", or \"Praise be to God.\" There is very little historical evidence to indicate how and why that inscription was chosen, besides it being a product of either the Army Corps of Engineers or William Frishmuth, the metallurgist who cast the capstone, which suggests that the choice to invoke God in this quiet, unremarked upon manner, speaks to the uncontroversial prominence of the Christian God in American public life. The phrase has sat at the top of the capital since 1884, invisible from the ground and unknown to most visitors, which may be the most telling detail."
      },
        {
        x: 50.4, y: 81.6,
        label: "Tourism",
        obvious: true,
        text: "The National Mall functions as one of America's most important pilgrimage sites, just as Washington DC is one of its most sacred cities. The monuments, memorials, and reflecting pools do not just exist for historical edification, they are designed to produce a particular kind of experience in the visitor, an encounter with something larger than the self and an America that transcends time and space, that shapes the visitor into a kind of political and religious subject. The tour narrative itself functions as a kind of liturgy, shaping what visitors feel, what they remember, and who they understand themselves to be in relation to the national story. And such visitations and pilgrimages are not just about the sites shaping subjects, as visitors can also claim and project significance onto sacred sites through the rituals of visitation, as White evangelicals have often done with the National Mall. For more on this, see Lauren Kerby's <a href=\"https://uncpress.org/book/9781469661476/saving-history/\"><em>Saving History: How White Evangelicals Tour the Nation's Capital and Claim It as Their Own</em></a>."
      }
      ]
      },
    {
    id: "Grand Central",
    title: "Grand Central",
    image: "images/grand-central.jpg",
    hotspots: [
      {
        x: 65.6, y: 31.1,
        label: "Zodiac Ceiling",
        obvious: true,
        text: "The ceiling of the main concourse of New York City's Grand Central Station features a painted representation of the zodiacal constellations of Aquarius, Pisces, Aries, Taurus, Gemini, and Cancer. Starscapes on ceilings is a relatively common visual motif, meant to give the viewer a sense of the grandeur and infinity of the heavens. Starscapes are present in religious buildings across different traditions, from the vaulted ceiling of the Sainte-Chapelle in France, the Alhambra palace compelx in Spain, and in the excavated synagogues of ancient Palestine. One could argue that the mural at Grand Central is a kind of secular interpretation of these historical aesthetic precedents, but like many things that appear secular, it helps to question what makes something so secular. Here, the presence of the zodiacal constellations, though not meant to be a kind of explicit religious statement, nevertheless gestures to the astrological culture at the time of the mural's creation in 1912, particularly in New York City. In the decades before and after, Evangeline Adams was becoming America's \"first astrological superstar,\" publishing books on astrological prediction and offering readings out of her office in Carnegie Hall to the city's social and economic elites. Adams was famously aquitted in a 1914 criminal trial for fortune-telling, an illegal practice at the time, after she read the judge's birth chart and convinced him of the legitimacy of astrology as a predictive practice. For more on the Grand Central ceiling, see <a href=\"https://blogs.library.columbia.edu/rbml/2021/03/02/jacoby-and-grand-central/\" target=\"blank\"> \"Harold Jacoby and the Stars above Grand Central.\"</a>. For more on Evangeline Adams, see Brian Diemert's article <a href=\"https://www.jstor.org/stable/3831758\" target=\"blank\"> \"The Trials of Astrology in T.S. Eliot's \"The Waste Land\": A Gloss on Lines 57-59.\"</a>"
      },
         {
    id: "Supermarket",
    title: "Supermarket",
    image: "images/aisle.jpg",
    hotspots: [
      {
        x: 65.6, y: 31.1,
        label: "Aisle",
        obvious: true,
        text: ""
      }
      ]
      }
]
