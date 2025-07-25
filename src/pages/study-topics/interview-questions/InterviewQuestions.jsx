import StudyTopicLayout from '../../../components/layout/StudyTopicLayout';
import { INTERVIEW_QUESTIONS_TABS, INTERVIEW_QUESTIONS_CONTENT, INTERVIEW_QUESTIONS_UI_TEXT } from '../../../constants';

const InterviewQuestions = () => {
    return (
        <StudyTopicLayout
            tabs={INTERVIEW_QUESTIONS_TABS}
            uiText={INTERVIEW_QUESTIONS_UI_TEXT}
            content={INTERVIEW_QUESTIONS_CONTENT}
            language="javascript"
            terminalTitle="Interview Questions Terminal"
        />
    );
};

export default InterviewQuestions;
