import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<ProjectsPage />} />
                <Route path="/skills" element={<SkillsPage/>}/>
                <Route path="/experience" element={<ExperiencePage/>}/>
            </Route>
        </Routes>
    )
}