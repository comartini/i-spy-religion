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
        text: "At first glance, you might assume that a newspaper with this name, presented in a venue like this, would be a Christian-focused publication. The word epoch here would often be a clue to suggest that the publication was affiliated with the theology of Evangelical dispensationalism, in which time is divided into distinct epochs in which God exercises a particular plan, with our current epoch being the last before the return of Christ and the apocalypse. Dispensationalism is common among conservative Evangelicals who might be supportive of President Trump. However, The Epoch Times is actually a publication run by Falun Gong, a Chinese new religious movement that has been heavily persecuted in China and which operates several far-right and anti-Communist programs in the United States, like The Epoch Times and the Shen Yun dance troupe. Though not Christian, Falun Gong shares many more cultural positions with American conservative Evangelicals, such as opposition to homosexuality, feminism, and socialism and support for Donald Trump's political movement. For more on American Christian dispensationalism, see Matthew Avery Sutton's American Apocalypse. For more on Falun Gong, particularly its apocalyptic beliefs, see Maria Hsia Chang's Falun Gong: The End of Days. "
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
        text: "In more orthodox Judaism, observers of the weekly Shabbat (Sabbath or Shabbos) are required to abstain from various kinds of work or labor. There has been much debate over what that entails, particularly in our present technological age. Some interpreters of Jewish law have concluded that the use of any electricity violates Shabbat, requiring observers to sometimes find compromises and workarounds to make their observance work in today\'s world. One of those compromises is the Shabbat elevator setting that makes the elevator stop at every floor in a building, allowing observers to use the elevator without actually operating it. This remains a contentious compromise among orthodox rabbis. Still, many public buildings in the United States, particularly hospitals, will enable their elevator\'s Shabbat setting in order to accommodate observers. To learn more, check out Alan Dundes\' book The Shabbat Elevator and Other Sabbath Subterfuges."
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
        text: "Within the word 'honor,' you can see a circle separated into different colored quadrants. This symbol is commonly called the medicine wheel, and it is used in many pan-American Indigenous contexts as a sign of solidarity and a gesture to the thousands of years of Indigenous knowledge about the natural world. However, the symbol itself is not as old as the traditions it represents--it was derived by Charles Storm in 1972 in an attempt to crystallize a number of indigenous religious and spiritual ideas into one image, with the four quadrants representing the cardinal directions, stages of life, seasons, representative or sacred animals, and virtues. The symbol has been heavily criticized by many Indigenous people, who argue that it is a gross simplification of complex traditions and that it has been co-opted for profit by the New Age movement. Still, it is commonly seen as a mark of pan-Indigenous identitiy, and so its presence at a protest against the Dakota Access Pipeline is not surprising, though it is a reminder to us to attend to the histories of symbols when discussing their use. For more on the history of the symbol and its reception, see Christopher Shaw's 2021 article in the New Age Journal titled A Theft of Spirit?. For more on Indigenous religion in protest movements, see Michael McNally's Defend the Sacred: Native American Religious Freedom Beyond the First Amendment."
      },
      {
        x: 10, y: 45,
        label: "Oil as Religion",
        obvious: true,
        text: "The religion of capitalism in the United States has been widely discussed and debated topic in religious studies. When talking about the Industrial and Modern eras, those conversations must include the American devotion to oil and fossil fuels, which arguably consitute part of the civil religion of America itself. Consider the symbol of the personal motor vehicle in American life and the cultural capital derived from things like bigger or faster cars. Consider also the close connection between the oil industry and conservative politicians, many of whom talk about the expanse of the fossil fuel industry and American energy dominance as a good and righteous thing, with 'Drill Baby Drill' being a conservative slogan since Sarah Palin popularized the phrase in the 2008 presidential election. Beyond this specifically Christian/Conservative connection to oil, there is also the fact that oil and fossil fuels represent the often-hidden backbone of modernity, affording things like plastics and air travel that make our world work the way that it does. Even if one were to not advocate for reckless drilling or to support the closure of of the Dakota Access Pipeline, it might be hard to say that anyone living in the modern era is not, in some small way, a devotee of the religion of Big Oil. For more on the explicit connections between American Christianity and the fossil fuel industry, see Darren Dochuck's Annointed with Oil: How Christianity and Crude Made Modern America."
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
        text: "Architect Cass Gilbert deliberately designed the United States Supreme Court building in the likeness of a temple from Greek and Roman antiquity, and it has been nicknamed the 'Temple of Justice.' The columnar facade, with the accomanying frieze above the pediment, evoke famous temples such as the Parthenon, the Hephaisteion, and the Pantheon. Neoclassical architectural stylings are common among American government buildings, creating an aesthetic connection between an antique past, and the origins of democracy and other civic ideals, and the American present. Marking these buildings as such denotes an explicit attempt to assign a sacred character to the workings of American government--as its architectural predecessors were meant to be the home of the gods, buildings like the Supreme Court are meant to be the home of the divine and immortal spirit of the ideals of American justice. Ideals, of course, are very different from reality, and there are many groups throughout history who would disagree that the members of the Supreme Court amounted to a pantheon of perfect justice. For more, see Greek Revival Architecture in America by Talbot Hamlin."
      },
        {
        x: 60.5, y: 35,
        label: "Corinthian Columns",
        obvious: true,
        text: "Columns in antiquity followed three orders, developed in sequence--Doric, Ionic, and Corinthian. These columns are in the Corinthian style, often considered to be the most lavish and opulent of the three columnar orders. Doric and Ionic columns were much more understated, with simple capitals as opposed to the intricate leaf designs on Corinthian columns. The Corintian column was more popular in Roman antiquity, where it was used to mark buildings with imagery that evoked the power and grandeur of the Empire. There is also a subtle Christian signification here--the Roman colony of Corinth, where the column was first discovered, was also the site of one of the earliest Christian communities in the ancient Mediterranean, established by the Apostle Paul."
      },
      {
        x: 81.5, y: 60,
        label: "Authority of Law and Contemplation of Justice",
        obvious: true,
        text: "The entrance to the Supreme Court is flanked by two seated statues, the Authority of Law and the Contemplation of Justice, also done in a Neoclassical style. The two seated statues are evocative of the seated cult statues of the dieties to which a temple in antiquity was devoted, though unlike their anitque counterparts these statues are outside the building rather than inside in a place of significance. Though not depicting gods themselves, the statues, in borrowing from these antique traditions, are done in such a way as to assert a aesthetic authority. Instead of dieties, they depict civic viritues, law and justice, in such a way as to elevate those ideals, and the greater American ideal of which they are a part, to the height of the gods. In many ways, the Supreme Court building is a clear representative of American civil religion, the religion of America itself, enshrined in temples and cult statues like those seen here."
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
        text: "Ritual candles are complex and multifaceted religious objects, particularly in the Latin and Hispanic world. Often, their containers are marked with images of saints, and they are burned as an invocation of the saint for veneration or intercession. However botanicas like this will often also sell candles with dieties or icons from other religions, like Santeria, and these objects represent an opportunity for religious syncretism and mixing, not belonging to any one tradition exclusively. Some candles have a specific devotional purpose directed towards a diety or force, and others have a more practical purpose, calling for good fortune (Suerte y Fortuna), for a man to be repulsed by other women (Aborrecido por Todas), or keeping your mother-in-law away (Aleja Suegras). These candles will be made with certain oils and herbs, and the ways in which they burn can tell the user how and if the candle's devotion or invocation is successful. For more, see Michael Owen Jones' article in the Journal of American Folklore, Herbs and Saints in the City of Angels: Researching Botánicas, Healing, and Power in Southern California."
      },
        {
        x: 65.6, y: 38.5,
        label: "Rosaries",
        obvious: true,
        text: "These small bracelets look like they could be miniature rosary beads, objects called decades on which someone could pray one set of ten Hail Mary prayers. However, if you look closely, they have more than the standard eleven beads a decade would have, and the medallion is not a recognizably Catholic or Marian symbol. At least two sets of beads feature an amulet with a figure carying a scythe, strongly indicating that the beads are amulets of Santa Muerte, a Mexican folk saint who is associated with healing, protection, and safe passage to the afterlife. The Santa Muerte cult is not officially recognizaed by the Catholic Church, yet many Catholics still turn to her for protection, and her appearing in a material context that looks so much like a miniature rosary speaks to the strength of that syncretism. For more, see Kingsbury and Chestnut's article in Religions, Syncretic Santa Muerte: Holy Death and Religious Bricolage."
      },
      {
        x: 54.2, y: 12.9,
        label: "Amulets",
        obvious: true,
        text: ""
      }
        ]
  }
];
