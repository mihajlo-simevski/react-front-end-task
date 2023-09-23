import SubjectCreator from '../../SubjectCreator/SubjectCreator';
import SubjectTemplate from '../../SubjectTemplate/SubjectTemplate';
import './ContentLayout.scss';

export default function ContentLayout() {
  return (
    <main className="ContentLayout">
      <SubjectCreator />
      <SubjectTemplate />
    </main>
  );
}
