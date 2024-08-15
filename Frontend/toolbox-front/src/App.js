import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFiles } from './redux/reducers/filesReducer';
import { Container, Table, Navbar, Alert } from 'react-bootstrap';

function App() {
  const { fileName } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.files);

  useEffect(() => {
    dispatch(fetchFiles(fileName));
  }, [dispatch, fileName]);

  return (
    <div className="App">
      <Navbar bg="danger" variant="light">
        <Container>
          <Navbar.Brand href="/" className="text-white">React Test App</Navbar.Brand>
        </Container>
      </Navbar>
      
      <Container className="mt-4">
        {loading && <p>Loading...</p>}
        {error && <Alert variant="danger">Error: {error}</Alert>}
        {!loading && !error && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {data.map((file, fileIndex) => (
                file && file.lines ? (
                  file.lines.map((line, lineIndex) => (
                    <tr key={`${file.file}-${lineIndex}`}>
                      <td>{file.file}</td>
                      <td>{line.text}</td>
                      <td>{line.number}</td>
                      <td>{line.hex}</td>
                    </tr>
                  ))
                ) : (
                  <tr key={`file-${fileIndex}`}>
                    <td colSpan="4" className="text-center">No data available for this file.</td>
                  </tr>
                )
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}

export default App;
