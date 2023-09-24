import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubjectTemplateItem {
  id: number;
  template: string;
  startTime: string;
  endTime: string;
  requiredAttendance?: boolean;
  subjectTitle?: string;
  description?: string;
  speakers?: { id: number; name: string; url: string }[];
}

type SubjectTemplateState = Array<SubjectTemplateItem>;

export type RootState = {
  // Add other slices here if you have more slices in your store
  subjectTemplate: SubjectTemplateState;
};

const initialState: SubjectTemplateState = [
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
        id: 1,
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
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

const subjectTemplateSlice = createSlice({
  name: 'subjectTemplate',
  initialState,
  reducers: {
    updateSubjectTemplateItem: (
      state,
      action: PayloadAction<SubjectTemplateItem>
    ) => {
      const updatedItem = action.payload;
      const itemIndex = state.findIndex((item) => item.id === updatedItem.id);
      if (itemIndex !== -1) {
        return {
          ...state.slice(0, itemIndex),
          updatedItem,
          ...state.slice(itemIndex + 1),
        };
      }
      return state;
    },
    updateHeader: (
      state,
      action: PayloadAction<{ id: number; subjectTitle: string }>
    ) => {
      const item = state.find((itemID) => itemID.id === action.payload.id);
      if (item) {
        item.subjectTitle = action.payload.subjectTitle;
      }
    },
  },
});

export const { updateSubjectTemplateItem, updateHeader } = subjectTemplateSlice.actions;
export default subjectTemplateSlice.reducer;
