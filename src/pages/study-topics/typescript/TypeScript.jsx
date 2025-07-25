import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { TYPESCRIPT_TABS, TYPESCRIPT_UI_TEXT, TYPESCRIPT_CONTENT } from '../../../constants';

const TypeScript = () => {
    return (
        <StudyTopicLayout
            tabs={TYPESCRIPT_TABS}
            uiText={TYPESCRIPT_UI_TEXT}
            content={TYPESCRIPT_CONTENT}
            language="typescript"
            terminalTitle="TypeScript Code Terminal"
        />
    );
};

export default TypeScript;
