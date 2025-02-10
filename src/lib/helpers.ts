export function scroll(id: string) {
    const section = document.querySelector(id);
    console.log(section);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
}
