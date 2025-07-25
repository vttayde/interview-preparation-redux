import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { NODEJS_TABS, NODEJS_UI_TEXT, NODEJS_CONTENT } from '../../../constants';

const NodeJS = () => {
    return (
        <StudyTopicLayout
            tabs={NODEJS_TABS}
            uiText={NODEJS_UI_TEXT}
            content={NODEJS_CONTENT}
            language="javascript"
            terminalTitle="Node.js Code Terminal"
        />
    );
};

export default NodeJS;
