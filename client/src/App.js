import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch('/api/templates')
      .then(response => response.json())
      .then(data => setTemplates(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    setSelectedTemplate(templates[0]);
  }, [templates]);

  const handlePreviousClick = () => {
    setStartIndex(prevIndex => prevIndex - 4);
  };

  const handleNextClick = () => {
    setStartIndex(prevIndex => prevIndex + 4);
  };

  const handleThumbnailClick = template => {
    setSelectedTemplate(template);
  };

  const renderThumbnails = () => {
    const thumbnails = templates.slice(startIndex, startIndex + 4).map(item => (
      <div key={item.id}>
        <a href="#" title={item.id} className={selectedTemplate === item ? 'active' : ''}>
          <img key={item.id} alt={item.thumbnail} src={`./images/thumbnails/${item.thumbnail}`}
            onClick={() => handleThumbnailClick(item)} />
          <span >{item.id}</span></a>
      </div>

    ));

    return (
      <div className="thumbnail-aligner">
        {startIndex > 0 && (
          <a onClick={handlePreviousClick} disabled={startIndex === 0} title="Previous">
            <img src="images/previous.png" />
          </a>
        )}
        {thumbnails}
        {startIndex + 4 < templates.length && (
          <a onClick={handleNextClick} disabled={startIndex + 4 >= templates.length} title="Next">
            <img src="images/next.png" />
          </a>
        )}
      </div>
    );
  };

  return (
    <div className='body'>
      <div id="container">
        <header>
          Code Development Project
        </header>
        <div id="main" role="main">
          <div id="large">
            <div class="group">
              {selectedTemplate && (
                <div className="group">
                  <img src={`images/large/${selectedTemplate.image}`} alt={selectedTemplate.id} width="430" height="360" />
                  <div className='details'>
                    <p><strong>Title</strong> {selectedTemplate.title}</p>
                    <p><strong>Description</strong>{selectedTemplate.description}</p>
                    <p><strong>Cost</strong> {selectedTemplate.cost}</p>
                    <p><strong>ID #</strong> {selectedTemplate.id}</p>
                    <p><strong>Thumbnail File</strong> {selectedTemplate.thumbnail}</p>
                    <p><strong>Large Image File</strong>{selectedTemplate.image}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div class="thumbnails">
            <div class="group">
              {renderThumbnails()}
            </div>
          </div>
        </div>
        <footer>
          <a href="instructions.pdf">Download PDF Instructions</a>
        </footer>
      </div>
    </div>
  );
}

export default App
