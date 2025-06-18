import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    maxWidth: 400,
    margin: 'auto',
    padding: 20,
    marginTop: 80,
    border: '1px solid #ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  button: {
    padding: 10,
    width: '100%',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  error: { color: 'red', marginBottom: 10 },
  success: { color: 'green', marginBottom: 10 },
});

export default useStyles;
