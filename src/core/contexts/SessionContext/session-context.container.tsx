import * as React from 'react';
import { loadData, saveData } from 'common/utils';

interface Context {
  showMenu: boolean;
  updateMenuVisibility: (value: boolean) => void;
  facts: string[];
  addNewFact: (value: string) => void;
  clearFacts: () => void;
}

export const SessionContext = React.createContext<Context>({
  showMenu: false,
  facts: [],
  updateMenuVisibility: () => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app',
    );
  },
  addNewFact: () => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app',
    );
  },
  clearFacts: () => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app',
    );
  },
});

interface Props {
  children: any;
}

export const SessionProvider: React.FC<Props> = (props: Props) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [facts, setFacts] = React.useState<string[]>(loadData('facts') || []);

  const addNewFact = (value: string) => {
    const oldFacts = facts;
    const newFacts = [value, ...oldFacts];
    setFacts(newFacts);
  };

  const clearFacts = () => {
    const newFacts: string[] = [];
    setFacts(newFacts);
  };

  React.useEffect(() => saveData('facts', facts), [facts]);

  return (
    <SessionContext.Provider
      value={{
        showMenu,
        updateMenuVisibility: setShowMenu,
        facts,
        addNewFact,
        clearFacts,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};
