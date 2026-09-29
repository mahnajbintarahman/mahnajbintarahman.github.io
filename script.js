/* ============ EDIT ONLY THIS PART ============ */
const SITE = {
  name: "Mahnaj Binta Rahman",
  role: "CSE student · ML/AI and cybersecurity",
  lead: "I study Computer Science & Engineering at United International University in Dhaka, and I build software for rovers, health tools, and machine learning.",
  photo: "images/profile.jpg",           // put your photo at this path
  about: [
    "I'm a CSE student at UIU. I'm on the UIU Mars Rover Team, working with both the Science team and the Software and Autonomous team.",
    "I'm preparing for graduate studies in ML/AI and cybersecurity. Add a sentence here about what you're working on right now."
  ],
  projects: [
    {
      title: "mediConnect",
      desc: "Describe what it does, who it helps, and what you built.",
      image: "images/mediconnect.png",   // screenshot path
      tags: ["Add", "your", "tech"],
      github: "https://github.com/mahnajbintarahman/REPO-NAME",
      demo: ""                            // live link, or leave empty
    },
    {
      title: "CGPA Calculator",
      desc: "Describe what it does, who it helps, and what you built.",
      image: "images/cgpa.png",
      tags: ["Add", "your", "tech"],
      github: "https://github.com/mahnajbintarahman/REPO-NAME",
      demo: ""
    },
    {
      title: "UIU Mars Rover Team",
      desc: "Describe your role on the Science and Software/Autonomous teams.",
      image: "images/rover.png",
      tags: ["Rover", "Autonomy"],
      github: "",
      demo: ""
    }
  ],
  skills: {
    "Languages": ["Python", "C++", "JavaScript"],
    "ML / AI": ["Add yours"],
    "Tools": ["Git", "GitHub", "Linux"]
  },
  contactText: "Open to research collaborations, team projects, and conversations about ML and security.",
  links: [
    { label: "GitHub", url: "https://github.com/mahnajbintarahman" },
    { label: "Email", url: "mailto:your@email.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" }
  ]
};
/* ============ END OF EDIT AREA ============ */

const $ = id => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };
const initials = SITE.name.split(" ").map(w => w[0]).slice(0, 2).join("");

function image(src, fallbackText) {
  const img = new Image();
  img.alt = ""; img.loading = "lazy"; img.src = src;
  img.onerror = () => img.replaceWith(document.createTextNode(fallbackText));
  return img;
}

document.title = SITE.name;
$("brand").textContent = SITE.name.split(" ")[0];
$("name").textContent = SITE.name;
$("role").textContent = SITE.role;
$("lead").textContent = SITE.lead;
const photoImg = image(SITE.photo, initials); photoImg.alt = "Portrait of " + SITE.name;
$("photo").appendChild(photoImg);
SITE.about.forEach(t => $("about-text").appendChild(el("p", "", t)));

SITE.projects.forEach(p => {
  const card = el("article", "card");
  const shot = el("div", "shot");
  const img = image(p.image, p.title); img.alt = p.title + " screenshot";
  shot.appendChild(img);
  const body = el("div", "body");
  body.appendChild(el("h3", "", p.title));
  body.appendChild(el("p", "", p.desc));
  const links = el("div", "links");
  [["Code", p.github], ["Live demo", p.demo]].forEach(([label, url]) => {
    if (!url) return;
    const a = el("a", "", label); a.href = url; a.target = "_blank"; a.rel = "noopener";
    links.appendChild(a);
  });
  if (links.children.length) body.appendChild(links);
  const tags = el("div", "tags");
  p.tags.forEach(t => tags.appendChild(el("span", "tag", t)));
  body.appendChild(tags);
  card.append(shot, body);
  $("projects-grid").appendChild(card);
});

Object.entries(SITE.skills).forEach(([group, items]) => {
  const box = el("div"); box.appendChild(el("h3", "", group));
  const tags = el("div", "tags");
  items.forEach(i => tags.appendChild(el("span", "tag", i)));
  box.appendChild(tags); $("skills-grid").appendChild(box);
});

$("contact-text").textContent = SITE.contactText;
SITE.links.forEach((l, i) => {
  const a = el("a", "btn" + (i === 0 ? " primary" : ""), l.label); a.href = l.url;
  if (!l.url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
  $("contact-links").appendChild(a);
});
$("footer").textContent = "© " + new Date().getFullYear() + " " + SITE.name;