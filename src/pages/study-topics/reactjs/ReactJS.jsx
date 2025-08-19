import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { REACT_TABS, REACT_UI_TEXT, REACT_CONTENT } from '../../../constants';

const ReactJS = () => {
    return (
        <StudyTopicLayout
            tabs={REACT_TABS}
            uiText={REACT_UI_TEXT}
            content={REACT_CONTENT}
            language="javascript"
            terminalTitle="React.js Code Terminal"
            studyTopicKey="reactjs"
        />
    );
};

export default ReactJS;
