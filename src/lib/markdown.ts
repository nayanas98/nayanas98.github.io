import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface BioData {
  title: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  content: string;
}

export async function getBioData(): Promise<BioData> {
  const filePath = path.join(contentDirectory, 'bio.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = await marked(content);

  return {
    ...data,
    content: htmlContent,
  } as BioData;
}

export function getSkillsData() {
  const filePath = path.join(contentDirectory, 'skills.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  
  return data.categories;
}

export async function getProjectsData() {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const filenames = fs.readdirSync(projectsDirectory);
  
  const projects = await Promise.all(filenames.map(async (filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = await marked(content);
    
    return {
      id: filename.replace('.md', ''),
      ...data,
      content: htmlContent,
    } as any;
  }));

  return projects.sort((a, b) => a.order - b.order);
}
