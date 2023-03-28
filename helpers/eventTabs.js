export const changeActive = ({
  currentTab,
  tabs,
  setTabs,
  setCurrentContent,
}) => {
  const updatedTabs = tabs.map((element) => {
    if (currentTab.title === element.title) {
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

  setTabs(updatedTabs);
  setCurrentContent(currentTab.content);
};
