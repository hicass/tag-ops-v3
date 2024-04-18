import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

export default function DatePickerComponent({
  taggedDate,
  setNewTaggedDate,
}: any) {
  const date = moment(taggedDate);
  const theme = createTheme();

  const newTheme = (theme: any) =>
    createTheme({
      ...theme,
      palette: {
        mode: 'dark',
        primary: {
          main: '#787878',
        },
      },
      components: {
        MuiDateCalendar: {
          styleOverrides: {
            root: {
              border: '0.05rem solid var(--grey-2)',
              backgroundColor: 'var(--grey-2)',
              borderRadius: '0.3rem',
              borderTop: '0.05rem solid var(--grey-1)',
              color: 'var(--white)',
            },
          },
        },
        MuiPickersDay: {
          styleOverrides: {
            root: {
              color: 'white',
              ['&:hover']: {
                backgroundColor: 'var(--grey-2)',
                border: '0.05rem solid var(--grey-1)',
              },
              ['&.Mui-selected:focus']: {
                backgroundColor: 'var(--grey-15)',
              },
              ['&.Mui-selected']: {
                backgroundColor: 'var(--grey-15)',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              border: '0.05rem solid var(--grey-3)',
            },
            root: {
              color: 'var(--white)',
              backgroundColor: 'var(--grey-3)',
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                border: '0.05rem solid var(--grey-2)',
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                border: '0.05rem solid var(--grey-2)',
                borderTop: ' 0.05rem solid var(--grey-1)',
                color: 'var(--white)',
              },
            },
          },
        },
      },
    });

  return (
    <ThemeProvider theme={newTheme(theme)}>
      <DatePicker
        slotProps={{ popper: { placement: 'bottom' }}}
        value={date}
        onChange={(newDate) => setNewTaggedDate(newDate?.toDate())}
      />
    </ThemeProvider>
  );
}
