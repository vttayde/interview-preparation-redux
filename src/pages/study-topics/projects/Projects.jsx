import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { PROJECTS_TABS, PROJECTS_UI_TEXT, PROJECTS_CONTENT } from '../../../constants/ProjectsTabConstant';

const Projects = () => {
    return (
        <StudyTopicLayout
            tabs={PROJECTS_TABS}
            uiText={PROJECTS_UI_TEXT}
            content={PROJECTS_CONTENT}
            language="javascript"
            terminalTitle="Projects Code Terminal"
        />
    );
};

export default Projects;
