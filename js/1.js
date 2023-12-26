const setings = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
  const divImgRef = document.querySelectorAll(".div__img");
  
  const callbacks = (entries, observer) => {
    entries.forEach((entrie) => {
      if (entrie.isIntersecting && entrie.target.hasAttribute("data-src")) {
        entrie.target.src = entrie.target.getAttribute("data-src");
        entrie.target.classList.add("newclass");
        divImgRef.forEach((div__img) => {
            div__img.style.display = "none";
        });
      } else if (!entrie.isIntersecting) {
        entrie.target.classList.remove("newclass");
        divImgRef.forEach((div__img) => {
            div__img.style.display = "block";
        });
      }
    });
  };
  
  const observer = new IntersectionObserver(callbacks, setings);
  
  document.querySelectorAll(".img__item img").forEach((img) => {
    observer.observe(img);
  });