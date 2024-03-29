const ddn = document.getElementsByClassName('ddn')[0];
const ddnSearchWrapper = ddn.getElementsByClassName('ddn-search-wrapper')[0];
const ddnContent = document.getElementsByClassName('ddn-content')[0];
const items = ddnContent.getElementsByTagName('li');

const arrowDown = ddnSearchWrapper.getElementsByTagName('a')[0];
arrowDown.setAttribute('onclick', 'return false;');
arrowDown.addEventListener('click', ARROW_DOW_CLICK);

const values = [
  '--'
  ,'AC'
  ,'AL'
  ,'AP'
  ,'AM'
  ,'BA'
  ,'CE'
  ,'DF'
  ,'ES'
  ,'GO'
  ,'MA'
  ,'MT'
  ,'MS'
  ,'MG'
  ,'PA'
  ,'PB'
  ,'PR'
  ,'PE'
  ,'PI'
  ,'RJ'
  ,'RN'
  ,'RS'
  ,'RO'
  ,'RR'
  ,'SC'
  ,'SP'
  ,'SE'
  ,'TO'
];

fillDropDown(values);

const input = ddnSearchWrapper.getElementsByTagName('input')[0];
input.addEventListener('input', function(evt) { INPUT_TEXT(values, input) });

function ARROW_DOW_CLICK() {
  const ddnContent = document.getElementsByClassName('ddn-content')[0];
  const ddn = document.getElementsByClassName('ddn')[0];
  const ddnSearchWrapper = ddn.getElementsByClassName('ddn-search-wrapper')[0];
  const input = ddnSearchWrapper.getElementsByTagName('input')[0];

  ddnContent.style.display = ddnContent.style.display === 'block' ? 'none' : 'block';
  SELECTED_OPTION(input.value);
}

function INPUT_TEXT(values, input) {
  fillDropDown(values, input.value.toUpperCase());
}

function SELECTED_OPTION(value) {
  const container = document.getElementsByClassName('ddn-content')[0];
  const list = container.getElementsByTagName('li');

  for(let i = 0; i < list.length; i++) {
    list[i].className = '';

    if(list[i].innerText === value) {
      list[i].className = 'selected-option';
    }
  }
}

function fillDropDown(values, search) {
  const container = document.getElementsByClassName('ddn-content')[0];
  const list = container.getElementsByTagName('li');

  if(list !== undefined || list !== null) {
    while(list.length > 0) {
      container.getElementsByTagName('ul')[0].removeChild(list[list.length-1]);
    }
  }

  if(search !== undefined) {
    let newValues = [];
    for(let i = 0; i < values.length; i++) {
      for(let j = 0; j < values[i].length; j++) {
        if(values[i].indexOf(search) != -1) {
          newValues.push(values[i]);
          break;
        }
      }
    }
    fillDropDown(newValues);
    return false;
  }

  for (let i = 0; i < values.length; i++) {
    const el = document.createElement('li');
    el.innerText = values[i];
    el.addEventListener('click', function () {
      fillInputText(this.innerText);
      SELECTED_OPTION(this.innerText);
      ARROW_DOW_CLICK();
    });

    el.addEventListener('mouseenter', function () {
      for(let i = 0; i < list.length; i++) {
        list[i].className = '';
      }
    });
    container.getElementsByTagName('ul')[0].appendChild(el);
  }
}

function fillInputText(value) {
  const ddn = document.getElementsByClassName('ddn')[0];
  const ddnSearchWrapper = ddn.getElementsByClassName('ddn-search-wrapper')[0];
  const input = ddnSearchWrapper.getElementsByTagName('input')[0];
  input.value = value;

  fillSpan(input.value);
}

function fillSpan(value) {
  const span = document.getElementsByClassName('span')[0];
  const msg = ' is the State of ';

  switch(value) {
    case 'AC':
      span.innerText = value + msg + 'Acre, its capital is Rio Branco';
      break;
    case 'AL':
      span.innerText = value + msg + 'Alagoas, its capital is Maceió';
      break;
    case 'AP':
      span.innerText = value + msg + 'Amapá, its capital is Macapá';
      break;
    case 'AM':
      span.innerText = value + msg + 'Amazonas, its capital is Manaus';
      break;
    case 'BA':
      span.innerText = value + msg + 'Bahia, its capital is Salvador';
      break;
    case 'CE':
      span.innerText = value + msg + 'Ceará, its capital is Fortaleza';
      break;
    case 'DF':
      span.innerText = value + ' is called Distrito Federal that contains Brasília, Brazil\'s Capital';
      break;
    case 'ES':
      span.innerText = value + msg + 'Espírito Santo, its capital is Vitória';
      break;
    case 'GO':
      span.innerText = value + msg + 'Goiás, its capital is Goiânia';
      break;
    case 'MA':
      span.innerText = value + msg + 'Maranhão, its capital is São Luís';
      break;
    case 'MT':
      span.innerText = value + msg + 'Mato Grosso, its capital is Cuiabá';
      break;
    case 'MS':
      span.innerText = value + msg + 'Mato Grosso do Sul, its capital is Campo Grande';
      break;
    case 'MG':
      span.innerText = value + msg + 'Minas Gerais, its capital is Belo Horizonte';
      break;
    case 'PA':
      span.innerText = value + msg + 'Pará, its capital is Belém';
      break;
    case 'PB':
      span.innerText = value + msg + 'Paraíba, its capital is João Pessoa';
      break;
    case 'PR':
      span.innerText = value + msg + 'Paraná, its capital is Curitiba';
      break;
    case 'PE':
      span.innerText = value + msg + 'Pernambuco, its capital is Recife';
      break;
    case 'PI':
      span.innerText = value + msg + 'Piauí, its capital is Teresina';
      break;
    case 'RJ':
      span.innerText = value + msg + 'Rio de Janeiro, its capital is Rio de Janeiro';
      break;
    case 'RN':
      span.innerText = value + msg + 'Rio Grande do Norte, its capital is Natal';
      break;
    case 'RS':
      span.innerText = value + msg + 'Rio Grande do Sul, its capital is Porto Alegre';
      break;
    case 'RO':
      span.innerText = value + msg + 'Rondônia, its capital is Porto Velho';
      break;
    case 'RR':
      span.innerText = value + msg + 'Roraima, its capital is Boa Vista';
      break;
    case 'SC':
      span.innerText = value + msg + 'Santa Catarina, its capital is Florianópolis';
      break;
    case 'SP':
      span.innerText = value + msg + 'São Paulo, its capital is São Paulo';
      break;
    case 'SE':
      span.innerText = value + msg + 'Sergipe, its capital is Aracaju';
      break;
    case 'TO':
      span.innerText = value + msg + 'Tocantins, its capital is Palmas';
      break;
    default:
      span.innerText = '';
  }
}
