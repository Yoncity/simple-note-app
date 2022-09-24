export const getNotes = () => {
  return JSON.parse(localStorage.getItem("simple_notes_app") || "");
};

export const setNotes = (newValue: string): void => {
  localStorage.setItem("simple_notes_app", newValue);
};
