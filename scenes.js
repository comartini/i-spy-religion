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
        x: 50, y: 30,
        label: "\"God Bless America\" Banner",
        obvious: true,
        text: "Civil religion speaks openly here. The phrase asks a deity to favor a nation — treating America as a chosen or specially blessed people. What theology is embedded in this familiar phrase? Who is included in its \"America\"?"
      },
      {
        x: 25, y: 60,
        label: "Local Church Float",
        obvious: true,
        text: "A congregation has chosen to participate in a civic celebration rather than — or in addition to — a worship service. What does it mean for a church to march in a parade? What does the church gain, and what does it risk?"
      },
      {
        x: 70, y: 50,
        label: "Veteran in Uniform",
        obvious: false,
        text: "Robert Bellah argued that America has its own civil religion complete with martyrs and saints. The veteran in uniform occupies a quasi-sacred role in this system. What rituals, symbols, and narratives make military service feel religious even to secular Americans?"
      },
      {
        x: 40, y: 75,
        label: "Child with Hand Over Heart",
        obvious: false,
        text: "This gesture is learned young, repeated often, and rarely questioned. Sociologists of religion call this kind of bodily practice \"catechesis\" — the transmission of belief through the body before it is understood by the mind. What else does this child learn by doing this?"
      },
      {
        x: 85, y: 40,
        label: "American Flag",
        obvious: false,
        text: "Émile Durkheim argued that the totem — a sacred object that represents the community to itself — is the real object of religious devotion. Is the flag a totem? What behaviors (folding, burning, kneeling near it) are treated as sacred transgressions?"
      }
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
        text: "text: 'In more orthodox Judaism, observers of the weekly Shabbat (Sabbath or Shabbos) are required to abstain from various kinds of work or labor. There has been much debate over what that entails, particularly in our present technological age. Some interpreters of Jewish law have concluded that the use of any electricity violates Shabbat, requiring observers to sometimes find compromises and workarounds to make their observance work in today\'s world. One of those compromises is the Shabbat elevator setting that makes the elevator stop at every floor in a building, allowing observers to use the elevator without actually operating it. This remains a contentious compromise among orthodox rabbis. Still, many public buildings in the United States, particularly hospitals, will enable their elevator\'s Shabbat setting in order to accommodate observers. To learn more, check out Alan Dundes\' book The Shabbat Elevator and Other Sabbath Subterfuges.',"
      }
    ]
  }
];
