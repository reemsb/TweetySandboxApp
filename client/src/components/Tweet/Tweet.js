import React, { useEffect, useState } from 'react';

function Tweet() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [ items, setItems ] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('/api/tweets');
    const items = await data.json();
    setItems(items);
  };

  return (
    <section>
      {
        items.map(item => (
          <div key={ item.id } className="container-fluid p-3 w-50">
            <div className="card-deck">
              <div className="card">
                <div className="card-body p-1">
                  <h6 className="card-title">{ item.name }</h6>
                  <p className="card-text">{ item.msg }</p>
                  <p className="card-text"><i>by { item.username }</i></p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  );
}

export default Tweet;