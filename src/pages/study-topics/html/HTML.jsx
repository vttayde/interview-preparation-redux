import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { HTML_TABS, HTML_UI_TEXT, HTML_CONTENT } from '../../../constants';

const HTML = () => {
    return (
        <StudyTopicLayout
            tabs={HTML_TABS}
            uiText={HTML_UI_TEXT}
            content={HTML_CONTENT}
            language="html"
            terminalTitle="HTML Code Terminal"
        />
    );
};

export default HTML;
