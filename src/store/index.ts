import { configureStore } from '@reduxjs/toolkit';
import updateSubjectTemplateItem from './subjectTemplateSlice';

const store = configureStore({
  reducer: {
    subjectTemplate: updateSubjectTemplateItem,
  },
});

export default store;
