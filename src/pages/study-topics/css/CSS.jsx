import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { CSS_TABS, CSS_UI_TEXT, CSS_CONTENT } from '../../../constants';

const CSS = () => {
    return (
        <StudyTopicLayout
            tabs={CSS_TABS}
            uiText={CSS_UI_TEXT}
            content={CSS_CONTENT}
            language="css"
            terminalTitle="CSS Code Terminal"
            studyTopicKey="css"
        />
    );
};

export default CSS;
