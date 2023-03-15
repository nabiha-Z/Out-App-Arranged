import { tabsData } from "../dummyData/data";

export const changeActive = ({
  item,
  categories,
  setCategories,
  setContent,
}) => {
  console.log("title: ", item.title);

  const newData = categories.map((element) => {
    if (item.title === element.title) {
      return {
        ...element,
        active: true,
      };
    } else {
      return {
        ...element,
        active: false,
      };
    }
  });

  setCategories(newData);

  // console.log("item.title: ", item.title);
  // console.log("item.key: ", item.key);
  // console.log("tabsData[item]: ", tabsData[item.key]);
  // console.log("tabsData[item]: ", typeof tabsData[item.key]);

  console.log("tabs[item.title]: ", Object.values(tabsData[item.key])[0]);

  setContent(Object.values(tabsData[item.key])[0]);
  // if (item.title === "All") {
  //   setContent(tabsData.all);
  // } else {
  //   const data = [];
  //   setContent(data);
  // }
};
