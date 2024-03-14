const dataArray = [
    {
      id: 1,
      title: 'Alice Teacher',
      text: 'Rate: 50',
      revenue: 50,
    },
    {
      id: 2,
      title: 'Ray technician',
      text: 'Rate: 30',
      revenue: 30,
    },
    {
      id: 3,
      title: 'Robert lifeguard',
      text: 'Rate: 40',
      revenue: 40,
    },
    {
      id: 4,
      title: 'Julio architect',
      text: 'Rate: 70',
      revenue: 70,
    },
    {
      id: 5,
      title: 'Keith fireman',
      text: 'Rate: 60',
      revenue: 60,
    },
  ];
  
  const titleRef = document.querySelector('.title');
  const average =
    dataArray.reduce((acc, item) => acc + item.revenue, 0) / dataArray.length;
  const titleText = document.createTextNode(`The avg rate of a freelancer is : ${average} per hour`);
  
  titleRef.appendChild(titleText);
  
  function createCard(darray) {
    const card = document.createElement('div');
    card.className = 'card';
    const header = createCardHeader(darray.title);
    const cardBody = createCardBody(darray.text);
    card.appendChild(header);
    card.appendChild(cardBody);
    const grid = document.querySelector('.content_grid');
    grid.appendChild(card);
  }
  function createCardBody(description) {
    const cardBody = document.createElement('div');
    const text = document.createTextNode(description);
    cardBody.className = 'card-body';
    cardBody.appendChild(text);
    return cardBody;
  }
  function createCardHeader(title) {
    const header = document.createElement('div');
    const h1 = document.createElement('h');
    const text = document.createTextNode(title);
    header.className = 'card-header';
    h1.append(text);
    header.appendChild(h1);
    return header;
  }
  dataArray.forEach((item) => {
    createCard(item);
  });
 