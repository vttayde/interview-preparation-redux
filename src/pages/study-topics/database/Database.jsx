import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { DATABASE_TABS, DATABASE_UI_TEXT, DATABASE_CONTENT } from '../../../constants/DatabaseTabConstant';

const Database = () => {
    return (
        <StudyTopicLayout
            tabs={DATABASE_TABS}
            uiText={DATABASE_UI_TEXT}
            content={DATABASE_CONTENT}
            language="sql"
            terminalTitle="Database Code Terminal"
        />
    );
};

export default Database;
