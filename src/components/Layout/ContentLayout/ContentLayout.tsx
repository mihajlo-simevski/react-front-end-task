import SubjectCreator from '../../SubjectCreator/SubjectCreator';
import SubjectTemplate from '../../SubjectTemplate/SubjectTemplate';
import './ContentLayout.scss';

const dataList = [
  {
    id: 1,
    template: 'SubjectCreator',
    startTime: '7:00',
    endTime: '8:30',
  },
  {
    id: 2,
    template: 'SubjectTemplate',
    startTime: '8:30',
    endTime: '10:15',
    requiredAttendance: false,
    subjectTitle: 'Some subject title',
    description: 'Lorem Ipsum',
    speakers: [
      {
        name: 'Anna Smith',
        url: '/images/anna-smith_avatar.png',
      },
    ],
  },
  {
    id: 3,
    template: 'SubjectCreator',
    startTime: '10:15',
    endTime: '12:00',
  },
  {
    id: 4,
    template: 'SubjectTemplate',
    startTime: '12:00',
    endTime: '14:00',
    requiredAttendance: true,
    subjectTitle: 'Financial Literacy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    speakers: [
      {
        id: 1,
        name: 'Sofia Williams',
        url: '/images/sophia-williams_avatar.png',
      },
      {
        id: 2,
        name: 'Michael Gira',
        url: '/images/michael-gira_avatar.png',
      },
    ],
  },
];

export default function ContentLayout() {
  return (
    <main className="ContentLayout">
      {dataList.map((item) => {
        if (item.template === 'SubjectCreator') {
          return <SubjectCreator data={item} />;
        }
        if (item.template === 'SubjectTemplate') {
          return <SubjectTemplate data={item} />;
        }
        return 0;
      })}
    </main>
  );
}
