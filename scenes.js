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
        x: 51, y: 11,
        label: "Shabbat Setting",
        obvious: true,
        text: "In more orthodox Judaism, observers of the weekly Shabbat (Sabbath or Shabbos) are required to abstain from various kinds of work or labor. There has been much debate over what that entails, particularly in our present technological age. Some interpreters of Jewish law have concluded that the use of any electricity violates Shabbat, requiring observers to sometimes find compromises and workarounds to make their observance work in today\'s world. One of those compromises is the Shabbat elevator setting that makes the elevator stop at every floor in a building, allowing observers to use the elevator without actually operating it. This remains a contentious compromise among orthodox rabbis. Still, many public buildings in the United States, particularly hospitals, will enable their elevator\'s Shabbat setting in order to accommodate observers. To learn more, check out Alan Dundes\' book The Shabbat Elevator and Other Sabbath Subterfuges."
      }
    ]
  }
];
