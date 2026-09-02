/* Project data — add new projects here as new folders are delivered */
const PROJECTS = [
  {
    id: "1",
    title: "Royal Meadows Villa",
    location: "Sheikh Zayed, Giza",
    type: "Twin house — full finishing",
    area: "270 m²",
    year: "2026",
    cover: "../assets/projects/project-1/01.jpg",
    tags: ["Villa", "High-end finishing", "Compound"],
    facts: [
      { label: "Location", value: "Royal Meadows, Sheikh Zayed" },
      { label: "Built-up area", value: "270 m²" },
      { label: "Unit type", value: "Twin house" },
      { label: "Layout", value: "Reception, 3 en-suite bedrooms, master suite with dressing room" },
      { label: "Materials", value: "Predominantly Egyptian raw materials, selective imports" }
    ],
    description: "A twin house inside Royal Meadows, Sheikh Zayed, finished from shell to handover across 270 square meters. The plan holds a reception, three bedrooms each with its own bathroom, and a master suite complete with a dressing room and private bathroom. Materials lean on high-grade Egyptian marble, wood and stone, with imported pieces used only where they earn their place. The brief throughout was simple: exploit every space for comfort and quiet, and let the finishing carry a high-end, unmistakably luxury character.",
    images: Array.from({length: 30}, (_, i) => `../assets/projects/project-1/${String(i+1).padStart(2,'0')}.jpg`)
  },
  {
    id: "2",
    title: "SIAC Headquarters",
    location: "Sheikh Zayed, Giza",
    type: "Administrative office — full finishing",
    area: "350 m²",
    year: "2026",
    cover: "../assets/projects/project-2/01.jpg",
    tags: ["Office", "Corporate", "High-end finishing"],
    facts: [
      { label: "Location", value: "Sheikh Zayed, Giza" },
      { label: "Built-up area", value: "350 m²" },
      { label: "Unit type", value: "Administrative office" },
      { label: "Layout", value: "Employee rooms, manager rooms, meeting room and CEO office" },
      { label: "Client", value: "SIAC" }
    ],
    description: "A 350 square meter administrative headquarters for SIAC in Sheikh Zayed, finished from shell to handover. The layout separates employee workstations, individual manager rooms, a boardroom-style meeting room and a dedicated CEO office with its own seating area. Walnut wood paneling, brass detailing and stone flooring carry the material language through reception and circulation, while each office keeps its own character without breaking from the overall standard.",
    images: Array.from({length: 21}, (_, i) => `../assets/projects/project-2/${String(i+1).padStart(2,'0')}.jpg`)
  }
];

function getProject(id){
  return PROJECTS.find(p => p.id === String(id));
}
