import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { JAVASCRIPT_TABS, JAVASCRIPT_UI_TEXT, JAVASCRIPT_CONTENT } from '../../../constants/JavaScriptTabConstant';

const JavaScript = () => {
    return (
        <StudyTopicLayout
            tabs={JAVASCRIPT_TABS}
            uiText={JAVASCRIPT_UI_TEXT}
            content={JAVASCRIPT_CONTENT}
            language="javascript"
            terminalTitle="JavaScript Code Terminal"
        />
    );
};

export default JavaScript;
