function hoverTab() {
  const tabHoverBackground = document.querySelector(".js-tab-hover-background");
  const tabs = document.querySelectorAll(".js-tab");
  const tabsContainer = document.querySelector(".js-tabs-container");
  if (tabHoverBackground) {
    let hoveredTab;
    let firstMousePosition = { x: 0, y: 0 };
    tabs?.length > 0 &&
      tabs.forEach((tab, index) => {
        tab.addEventListener("mouseenter", (e) => {
            tabsContainer.style.overflow = 'visible';

          hoveredTab = index;
          tab.classList.add("js-tabHovered");
          const tabRect = tab.getBoundingClientRect();
          tabHoverBackground.style.height = `${tabRect.height}px`;
          tabHoverBackground.style.top = `${hoveredTab * tabRect.height}px`;

          firstMousePosition = { x: e.clientX, y: e.clientY };
        });

        tab.addEventListener("mousemove", (e) => {
          const hoveredElem = document.querySelector(".js-tabHovered");
          const eventPicContainer = hoveredElem?.querySelector(".js-tab-img");
          if (!eventPicContainer) {
            return;
          }

          const deltaY = firstMousePosition.y - e.clientY;
          const deltaX = firstMousePosition.x - e.clientX;

          if (deltaX < 600 && deltaX > -600) {
            eventPicContainer.style.transform = `translateX(${
              -deltaX * 0.3
            }px) translateY(${-deltaY}px)`;
          }
        });
        tab.addEventListener("mouseleave", (e) => {
          const hoveredElem = document.querySelector(".js-tabHovered");
          const eventPicContainer = hoveredElem?.querySelector(".js-tab-img");
          if (!eventPicContainer) {
            return;
          }
          eventPicContainer.style.transform = `translateX(0px) translateY(0px)`;
          tab.classList.remove("js-tabHovered");
          hoveredTab = null;
          firstMousePosition = { x: 0, y: 0 };

        });

        if (tabsContainer) {
          tabsContainer.addEventListener("mouseleave", (event) => {
            if (!event.target.closest(".js-tab")) {
              hoveredTabIndex = null;
              const containerRect = tabsContainer.getBoundingClientRect();
              const mouseY = event.clientY;

              if (mouseY < containerRect.top) {
                  const tabHoverBackgroundRect =
                  tabHoverBackground.getBoundingClientRect();
                  // tabHoverBackground.style.top = `-${
                    //   1 * tabHoverBackgroundRect.height
                    // }px`;
                    tabHoverBackground.style.height = `-${
                        0
                    }px`;
                    
                } else if (mouseY > containerRect.bottom) {
                    const tabHoverBackgroundRect =
                    tabHoverBackground.getBoundingClientRect();
                    tabHoverBackground.style.top = `${
                        tabs?.length * tabHoverBackgroundRect.height
                    }px`;
                    tabsContainer.style.overflow = 'hidden';
                    
                }
                firstMousePosition = { x: 0, y: 0 };
            }
          });
        }
      });
  }
}

window.addEventListener("resize", () => {
  hoverTab();
});

// function eventMouseMove(e) {
//   const hoveredElem = document.querySelector(".js-eventHovered");
//   const eventPicContainer = hoveredElem?.querySelector(".js-eventPicContainer");
//     console
//   if (!eventPicContainer) {
//     return;
//   }

//   const deltaY = firstMousePosition.y - e.clientY;
//   const deltaX = firstMousePosition.x - e.clientX;

//   if (
//     deltaX * 0.4 < 300 &&
//     deltaX * 0.4 > -300 &&
//     deltaY * 0.4 < 300 &&
//     deltaY * 0.4 > -300
//   ) {
//     eventPicContainer.style.transform = `translateX(${
//       -deltaX * 0.2
//     }px) translateY(${-deltaY * 0.6}px)`;
//   }
// }

//   {events.slice(0, offset).map((event, ind) => {
//     return (
//       <Link
//         href={event?.ctaLinkItem?.url ?? ''}
//         className={`${styles.eventsWrapper} container sec-padded ${
//           eventHovered === ind ? `${styles.eventHovered} js-eventHovered` : ''
//         }`}
//         // target={event?.ctaLinkItem?.linkType == 'external' ? '_blank' : undefined}
//         key={ind}
//         onMouseEnter={(e) => {
//   setEventHovered(ind);
//   setFirstMousePosition({ x: e.clientX, y: e.clientY });
//         }}
//         onMouseLeave={() => {
//           const hoveredElem = document.querySelector('.js-eventHovered');
//           const eventPicContainer: HTMLElement | null | undefined =
//             hoveredElem?.querySelector('.js-eventPicContainer');

//           if (!eventPicContainer) {
//             return; // Exit the function if eventPicContainer is not found
//           }

//   eventPicContainer.style.transform = `translateX(0px) translateY(0px)`;
//   setEventHovered(null);
//         }}
//         onMouseMove={(e) => eventMouseMove(e)}
hoverTab();
