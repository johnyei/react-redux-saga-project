import { createStore } from "redux";

const initialState = {
  botaoClicado: false
};

// A variável reducer vai receber(ouvir) a ação e retornar o estado
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOTAO_CLICADO":
      const newState = { ...state }; // copio o estado pra variavel newState
      newState.botaoClicado = !newState.botaoClicado; // realiza um toggle = se o botao estiver true vira false e vice e versa
      return newState;

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
