type Project = { [projectName: string]: string };

interface Skill {
    id: number;
    name: string;
    description: string[];
    img?: string;
    details?: string;
    projects: { [key: string]: string }[]
}

export default Skill;