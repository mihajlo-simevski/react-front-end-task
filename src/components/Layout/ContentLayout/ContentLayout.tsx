import { useSelector } from 'react-redux';
import { RootState } from '../../../store/subjectTemplateSlice';
import SubjectCreator from '../../SubjectCreator/SubjectCreator';
import SubjectTemplate from '../../SubjectTemplate/SubjectTemplate';
import './ContentLayout.scss';

export default function ContentLayout() {
  const subjectTemplate = useSelector((state: RootState) => state.subjectTemplate);
  return (
    <main className="ContentLayout">
      {subjectTemplate.map((item) => {
        if (item.template === 'SubjectCreator') {
          return <SubjectCreator key={item.id} data={item} />;
        }
        if (item.template === 'SubjectTemplate') {
          return <SubjectTemplate key={item.id} data={item} />;
        }
        return 0;
      })}
    </main>
  );
}
