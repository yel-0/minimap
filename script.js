const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

//get scroll value
lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress });
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let minimap = document.createElement("div");
let minimapSize = document.createElement("div");
let viwer = document.createElement("div");
let minimapContent = document.createElement("iframe");
let scale = 0.1;
let realScale;

minimap.className = "minimapContainer";
minimapSize.className = "minimapSize";
viwer.className = "minimapViwer";
minimapContent.className = "minimapcContent";

minimap.append(minimapSize, viwer, minimapContent);
document.body.appendChild(minimap);
let html = document.documentElement.outerHTML.replace(
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  ""
);
console.log(html);

let iframeDoc = minimapContent.contentWindow.document;

iframeDoc.open();
iframeDoc.write(html);
iframeDoc.close();

function getDimesions() {
  let bodyWidth = document.body.clientWidth;
  let bodyRatio = document.body.clientHeight / bodyWidth;
  let winRatio = window.innerHeight / window.innerWidth;
  minimap.style.width = "15%";
  realScale = minimap.clientWidth / bodyWidth;

  minimapSize.style.paddingTop = `${bodyRatio * 100}%`;
  viwer.style.paddingTop = `${winRatio * 100}%`;

  minimapContent.style.transform = `scale(${realScale})`;
  minimapContent.style.width = `${100 / realScale}%`;
  minimapContent.style.height = `${100 / realScale}%`;
}
function trackSroll() {
  viwer.style.transform = `translateY(${window.scrollY * realScale}px)`;
}
getDimesions();

window.addEventListener("scroll", trackSroll);

gsap.registerPlugin(ScrollTrigger);

const myText = new SplitType(".headerH1One", { types: "words ,lines" });

gsap.from(".word", {
  yPercent: 130,

  ease: "power2.out",
  duration: 1,
  scrollTrigger: {
    trigger: ".headerH1One",
    start: "top 40%",
  },
});
const workingTag = new SplitType(".working", {
  types: "words, lines",
  //   absolute: true,
});

gsap.from(workingTag.words, {
  yPercent: 130,

  ease: "power2.out",
  duration: 1,
  scrollTrigger: {
    trigger: ".working",
    start: "top 80%",
  },
});

// const freelanceTag = new SplitType(".freelance", {
//   types: "words, lines",
//   absolute: true,
// });
// const yearTag = new SplitType(".year", {
//   types: "words, lines",
//   absolute: true,
// });
// const year2Tag = new SplitType(".year2", {
//   types: "words, lines",
//   absolute: true,
// });
// const year3Tag = new SplitType(".year3", {
//   types: "words, lines",
//   absolute: true,
// });
// const year4Tag = new SplitType(".year4", {
//   types: "words, lines",
//   absolute: true,
// });

// const designerTag = new SplitType(".designer", {
//   types: "words, lines",
//   absolute: true,
// });
// const internTag = new SplitType(".intern", {
//   types: "words, lines",
//   absolute: true,
// });
// const awwardsTag = new SplitType(".awwards", {
//   types: "words, lines",
//   absolute: true,
// });
// const silverTag = new SplitType(".silver", {
//   types: "words, lines",
//   absolute: true,
// });
// const silver2Tag = new SplitType(".silver2", {
//   types: "words, lines",
//   absolute: true,
// });
// const silver3Tag = new SplitType(".silver3", {
//   types: "words, lines",
//   absolute: true,
// });

// const samsungTag = new SplitType(".samsung", {
//   types: "words, lines",
//   absolute: true,
// });
// const samsung2Tag = new SplitType(".samsung2", {
//   types: "words, lines",
//   absolute: true,
// });

// const rookieTag = new SplitType(".rookie", {
//   types: "words, lines",
//   absolute: true,
// });
// const akqaTag = new SplitType(".akqa", {
//   types: "words, lines",
//   absolute: true,
// });
// const fwaTag = new SplitType(".fwa", { types: "words, lines", absolute: true });
// const adidasTag = new SplitType(".adidas", {
//   types: "words, lines",
//   absolute: true,
// });
// const greatTag = new SplitType(".great", {
//   types: "words, lines",
//   absolute: true,
// });
// const mygggTag = new SplitType(".myggg", {
//   types: "words, lines",
//   absolute: true,
// });
// const myGGGTag = new SplitType(".myGGG", {
//   types: "words, lines",
//   absolute: true,
// });
// const getTag = new SplitType(".get", { types: "words, lines", absolute: true });
// const creatTag = new SplitType(".creat", {
//   types: "words, lines",
//   absolute: true,
// });
// const aristideTag = new SplitType(".aristide", {
//   types: "words, lines",
//   absolute: true,
// });
// const motionTag = new SplitType(".motion", {
//   types: "words, lines",
//   absolute: true,
// });

// const kimTag = new SplitType(".kim", { types: "words, lines", absolute: true });
// const kim2Tag = new SplitType(".kim2", {
//   types: "words, lines",
//   absolute: true,
// });

// const mySeniorTag = new SplitType(".mySenior", {
//   types: "words, lines",
//   absolute: true,
// });
// // intern
// const myFunction = (par1, par2) => {
//   gsap.from(par1, {
//     yPercent: 130,
//     ease: "power2.out",
//     duration: 1,
//     scrollTrigger: {
//       trigger: par2,
//       start: "top 80%",
//     },
//   });
// };
// myFunction(freelanceTag.words, " .freelance");
// myFunction(yearTag.words, " .year");
// myFunction(year2Tag.words, " .year2");
// myFunction(year3Tag.words, " .year3");
// myFunction(year4Tag.words, " .year4");
// myFunction(designerTag.words, " .designer");
// myFunction(internTag.words, " .intern");
// myFunction(awwardsTag.words, " .awwards");
// myFunction(silverTag.words, " .silver");
// myFunction(silver2Tag.words, " .silver2");
// myFunction(silver3Tag.words, " .silver3");
// myFunction(samsungTag.words, " .samsung");
// myFunction(samsung2Tag.words, " .samsung2");
// myFunction(rookieTag.words, " .rookie");
// myFunction(akqaTag.words, " .akqa");
// myFunction(fwaTag.words, " .fwa");
// myFunction(adidasTag.words, " .adidas");
// myFunction(greatTag.words, " .great");
// myFunction(mygggTag.words, " .myggg");
// myFunction(myGGGTag.words, " .myGGG");
// myFunction(getTag.words, " .get");
// myFunction(creatTag.words, " .creat");
// myFunction(aristideTag.words, " .aristide");
// myFunction(motionTag.words, " .motion");
// myFunction(kimTag.words, " .kim");
// myFunction(kim2Tag.words, " .kim2");
// myFunction(mySeniorTag.words, " .mySenior");
const tags = [
  { selector: ".freelance", variable: "freelanceTag" },
  { selector: ".year", variable: "yearTag" },
  { selector: ".year2", variable: "year2Tag" },
  { selector: ".year3", variable: "year3Tag" },
  { selector: ".year4", variable: "year4Tag" },
  { selector: ".designer", variable: "designerTag" },
  { selector: ".intern", variable: "internTag" },
  { selector: ".awwards", variable: "awwardsTag" },
  { selector: ".silver", variable: "silverTag" },
  { selector: ".silver2", variable: "silver2Tag" },
  { selector: ".silver3", variable: "silver3Tag" },
  { selector: ".samsung", variable: "samsungTag" },
  { selector: ".samsung2", variable: "samsung2Tag" },
  { selector: ".rookie", variable: "rookieTag" },
  { selector: ".akqa", variable: "akqaTag" },
  { selector: ".fwa", variable: "fwaTag" },
  { selector: ".adidas", variable: "adidasTag" },
  { selector: ".great", variable: "greatTag" },
  { selector: ".myggg", variable: "mygggTag" },
  { selector: ".myGGG", variable: "myGGGTag" },
  { selector: ".get", variable: "getTag" },
  { selector: ".creat", variable: "creatTag" },
  { selector: ".aristide", variable: "aristideTag" },
  { selector: ".motion", variable: "motionTag" },
  { selector: ".kim", variable: "kimTag" },
  { selector: ".kim2", variable: "kim2Tag" },
  { selector: ".mySenior", variable: "mySeniorTag" },
];

const myFunction = (par1, par2) => {
  gsap.from(par1, {
    yPercent: 130,
    ease: "power2.out",
    duration: 1,
    scrollTrigger: {
      trigger: par2,
      start: "top 80%",
    },
  });
};

tags.forEach((tag) => {
  const { selector, variable } = tag;
  window[variable] = new SplitType(selector, {
    types: "words, lines",
    // absolute: true,
  });
  myFunction(window[variable].words, selector);
});
