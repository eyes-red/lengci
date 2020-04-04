
   currentWindow:true
}, tabs => {
  resolve(tabs);
  });
})
chrome.commands.onCommand.addListener(async command => {
   let option = {};

switch(command) {
   case 'split-screen-left':
     option = {
        width: 800,
         left: 0,
         height: 860
      };
       break;
       case 'split-screen-right':
     option = {
        width: 800,
         left: 800,
         height: 860
      };
       break;
     default:
        option = {
        width: 1600,
         left: 0,
         height: 860
      };
   }

const tabs = await getActiveTabs();

 chrome.windows.create({
    tabId: tabs[0].id,
    ...option
  });
 });
