import { tabsData } from "../dummyData/data";

export const changeActive = ({
  item,
  categories,
  setCategories,
  setContent,
}) => {
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
  setContent(Object.values(tabsData[item.key])[0]);
};
