export default function tabAnchors() {
  const anchors = document.querySelectorAll("a[href*='?tab']");

  if (anchors.length) {
    anchors.forEach((anchor) => {
      const arrHref = anchor.href.split("?");
      const params = new URLSearchParams(anchor.href.split("?")[1]);
      anchor.href = arrHref[0];

      anchor.addEventListener("click", () => {
        const tabBtn = document.querySelector(
          `[data-tab-btn="${params.get("tab")}"]`,
        );

        if (tabBtn) tabBtn.click();
      });
    });
  }

  const url = window.location.href;
  if (url.includes("?tab")) {
    const string = url.substring(url.indexOf("#"));

    const arrHref = string.split("?");
    const params = new URLSearchParams(arrHref[1]);
    const link = document.querySelector(`a[href*="${arrHref[0]}"]`);
    const tabBtn = document.querySelector(
      `[data-tab-btn="${params.get("tab")}"]`,
    );

    console.log(link)

    if (link) link.click();
    if (tabBtn) tabBtn.click();
  }
}
