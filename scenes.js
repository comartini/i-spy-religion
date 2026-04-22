// scenes.js
// Each scene has a title, an image URL, and an array of hotspots.
// Hotspot x and y are percentages of image width/height (0–100).
// Replace the placeholder image URLs with your real images when you find them.

const scenes = [
  {
    id: "fourth-of-july",
    title: "Fourth of July Parade",
    image: "images/fourth-of-july.jpg",
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
    id: "roadside-memorial",
    title: "Roadside Memorial",
    image: "images/roadside-memorial.jpg",
    hotspots: [
      {
        x: 50, y: 40,
        label: "Wooden Cross",
        obvious: true,
        text: "The cross is the most legible Christian symbol — but notice that no church authorized this one. It was placed here by grieving individuals. Who has the authority to make a space sacred? Does it require an institution, or can ordinary people consecrate ground?"
      },
      {
        x: 35, y: 65,
        label: "Candles and Flowers",
        obvious: true,
        text: "Leaving candles and flowers at a site of death echoes votive offerings found across Catholic, folk, and Indigenous traditions. Many people who leave them would not describe themselves as religious. What does this tell us about how religion travels — often without its label?"
      },
      {
        x: 65, y: 55,
        label: "Stuffed Animals and Photos",
        obvious: false,
        text: "Objects that belonged to or represented the deceased take on a different quality after death — they become relics. Relic logic (the idea that holiness can inhere in material objects) is usually associated with medieval Catholicism, but it appears here spontaneously. Why do we treat these objects differently from ordinary ones?"
      },
      {
        x: 20, y: 80,
        label: "The Road Itself",
        obvious: false,
        text: "This space was not designed to be sacred. It became sacred because of what happened here. Religious studies scholars call this \"hierophany\" — a breaking-through of the sacred into ordinary space. What makes a place sacred: its design, its history, or the practices people bring to it?"
      }
    ]
  },

  {
    id: "botanica",
    title: "Botanica",
    image: "images/botanica.jpg",
    hotspots: [
      {
        x: 30, y: 40,
        label: "Saint Candles",
        obvious: true,
        text: "Candles bearing images of Catholic saints are sold here alongside products from Afro-Caribbean and Indigenous traditions. This mixing — called syncretism — is often treated as unusual or impure. But all religions are syncretic over time. Why does syncretism make some people uncomfortable?"
      },
      {
        x: 60, y: 35,
        label: "La Santa Muerte",
        obvious: true,
        text: "La Santa Muerte (Holy Death) is venerated by millions but is not recognized by the Roman Catholic Church. Her presence here raises the question: who gets to decide what counts as legitimate religion? What is at stake in that decision?"
      },
      {
        x: 45, y: 65,
        label: "Florida Water and Ritual Cleansing Products",
        obvious: false,
        text: "Florida Water is used in Santería, Espiritismo, hoodoo, and other traditions for spiritual cleansing. It is sold in a commercial bottle like cologne. The line between a product and a sacrament is very thin here. What makes something a religious object rather than just a thing you can buy?"
      },
      {
        x: 75, y: 70,
        label: "The Cash Register",
        obvious: false,
        text: "Religious practice and commercial exchange happen at the same counter here. Scholars like Kathryn Lofton have argued that consumption is itself a religious practice in American life. Does buying a saint candle make the transaction less sacred — or is the market always already part of how religion works?"
      },
      {
        x: 20, y: 75,
        label: "Hand-Lettered Sign in Spanish",
        obvious: false,
        text: "Language, ethnicity, and religion are inseparable in this space. The category \"religion\" was largely defined by Protestant, English-speaking scholars who treated their own tradition as the norm. What gets missed or distorted when we try to fit practices like these into that category?"
      }
    ]
  },

  {
    id: "sports-stadium",
    title: "Sports Stadium",
    image: "images/sports-stadium.jpg",
    hotspots: [
      {
        x: 45, y: 55,
        label: "Player Kneeling in Prayer",
        obvious: true,
        text: "Prayer in the end zone is one of the most publicly debated religious gestures in American life. It sits at the intersection of free exercise, establishment concerns, and celebrity religion. When an athlete prays on national television, is this private devotion or public performance — and does the difference matter?"
      },
      {
        x: 20, y: 60,
        label: "Team Chaplain on the Sideline",
        obvious: false,
        text: "Most professional and college sports teams employ chaplains — clergy who provide pastoral care and lead voluntary chapel services. Institutional religion has followed the game into the locker room. How do we think about religious accommodation in a space that is also a workplace and a broadcast product?"
      },
      {
        x: 70, y: 35,
        label: "Fans with Arms Raised",
        obvious: false,
        text: "Arms raised, eyes closed, voices unified — this posture is identical to charismatic Christian worship. Is this a coincidence? Scholars like Michael Mandelbaum have called sport \"the American religion.\" What would it mean to take that claim seriously rather than metaphorically?"
      },
      {
        x: 80, y: 20,
        label: "Retired Jersey in the Rafters",
        obvious: false,
        text: "Retiring a number removes it from circulation permanently and hangs it above the crowd. This is canonization logic: the exceptional individual is elevated, made permanent, placed beyond ordinary reach. What other figures in American life receive this kind of treatment?"
      },
      {
        x: 50, y: 80,
        label: "The Coin Toss",
        obvious: false,
        text: "Before every game, chance is formally consulted via a ritual with designated officials, a sacred object, and a set script. Structured encounters with randomness and fate appear across religious traditions. What does it mean that we've kept this ritual at the center of a modern secular sport?"
      }
    ]
  },

  {
    id: "wellness-shop",
    title: "Wellness / Metaphysical Shop",
    image: "images/wellness-shop.jpg",
    hotspots: [
      {
        x: 40, y: 45,
        label: "Crystals with Healing Properties Cards",
        obvious: true,
        text: "Each crystal is labeled with properties — protection, clarity, love — that it is said to confer on its owner. This is a system of belief in unseen forces acting through material objects. Most customers would not call this \"religion.\" What does their resistance to that label tell us about how religion is defined in American culture?"
      },
      {
        x: 65, y: 30,
        label: "Astrology Books and Birth Chart Prints",
        obvious: true,
        text: "Astrology offers a cosmology (the stars shape human life), a practice (reading charts), a specialist class (astrologers), and a community. By most social-scientific definitions of religion, it qualifies. Why is it almost never called one — and who benefits from that distinction?"
      },
      {
        x: 25, y: 60,
        label: "White Sage Smudge Sticks",
        obvious: false,
        text: "White sage smudging is a ceremony from specific Indigenous nations, now mass-produced and sold without context. This is religious appropriation: a practice extracted from its community, stripped of its relational obligations, and repackaged as a commodity. What is lost in that translation?"
      },
      {
        x: 55, y: 70,
        label: "Mindfulness Journal",
        obvious: false,
        text: "\"Mindfulness\" is derived from Buddhist meditation practice. In this form it carries no explicitly Buddhist language — no dharma, no sangha, no impermanence. This is what scholars call \"the secular Buddhism effect\": a religious technology exported from its tradition and rebranded as mental health. Does removing the label change what the practice is?"
      },
      {
        x: 80, y: 65,
        label: "Manifestation / Self-Help Books",
        obvious: false,
        text: "Books like *The Secret* teach that focused belief and visualization can materially alter reality. This is a form of magical thinking embedded in therapeutic and entrepreneurial language. It has deep roots in American metaphysical religion — Christian Science, New Thought, positive thinking movements. Why does this tradition keep returning in new clothes?"
      }
    ]
  }
];
