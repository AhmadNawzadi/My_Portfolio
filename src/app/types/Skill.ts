type Project = { [projectName: string]: string };

interface Skill {
    id: number;
    name: string;
    introduction: string[];
    img?: string;
    level?: string;
    experiance: string;
    projects: { [key: string]: string }[]
}

export default Skill;