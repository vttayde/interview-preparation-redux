import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { 
    INTRODUCTION_TABS,
    INTRODUCTION_UI_TEXT, 
    INTRODUCTION_CONTENT 
} from '../../../constants';

const Introduction = () => {
    return (
        <StudyTopicLayout
            tabs={INTRODUCTION_TABS}
            uiText={INTRODUCTION_UI_TEXT}
            content={INTRODUCTION_CONTENT}
            language="javascript"
            terminalTitle="Introduction Terminal"
        />
    );
};

export default Introduction;
