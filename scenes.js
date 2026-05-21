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
        x: 31, y: 84,
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
    id: "In-n-Out",
    title: "In-n-Out",
    image: "images/in-n-out.jpg",
    hotspots: [
      {
        x: 51, y: 11,
        label: "Shabbat Setting",
        obvious: true,
        text: "In more orthodox Judaism, observers of the weekly Shabbat (Sabbath or Shabbos) are required to abstain from various kinds of work or labor. There has been much debate over what that entails, particularly in our present technological age. Some interpreters of Jewish law have concluded that the use of any electricity violates Shabbat, requiring observers to sometimes find compromises and workarounds to make their observance work in today\'s world. One of those compromises is the Shabbat elevator setting that makes the elevator stop at every floor in a building, allowing observers to use the elevator without actually operating it. This remains a contentious compromise among orthodox rabbis. Still, many public buildings in the United States, particularly hospitals, will enable their elevator\'s Shabbat setting in order to accommodate observers. To learn more, check out Alan Dundes\' book The Shabbat Elevator and Other Sabbath Subterfuges."
      }
    ]
  }
];
