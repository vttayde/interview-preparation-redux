import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { INTRODUCTION_UI_TEXT, INTRODUCTION_CONTENT } from '../../../constants/IntroductionConstant';

const tabs = [
    { id: "default", name: "Introduction", icon: "🌐" },
    { id: "All", name: "Overview", icon: "❓" },
    { id: "basics", name: "Basics", icon: "�" }
];

const Introduction = () => {
    return (
        <StudyTopicLayout
            tabs={tabs}
            uiText={INTRODUCTION_UI_TEXT}
            content={INTRODUCTION_CONTENT}
            language="javascript"
            terminalTitle="Introduction Terminal"
        />
    );
};

export default Introduction;
