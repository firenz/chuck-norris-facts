import * as React from 'react';
import { loadData, saveData } from 'common/utils';
import { FactVm } from 'pods/chuck-norris/chuck-norris.vm';

interface Context {
  showMenu: boolean;
  updateMenuVisibility: (value: boolean) => void;
  facts: FactVm[];
  addNewFact: (value: FactVm) => void;
  clearFacts: () => void;
  selectedCategory: string;
  updateSelectedCategory: (value: string) => void;
}

export const SessionContext = React.createContext<Context>({
  showMenu: false,
  facts: [],
  selectedCategory: '',
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
  updateSelectedCategory: () => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app',
    );
  },
});

interface Props {
  children: any;
}

export const ChuckNorrisSessionProvider: React.FC<Props> = (props: Props) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [facts, setFacts] = React.useState<FactVm[]>(loadData('facts') || []);
  const [selectedCategory, setSelectedCategory] = React.useState<string>(
    loadData('selectedCategory') || '',
  );

  const addNewFact = (value: FactVm) => {
    const oldFacts = facts;
    const newFacts = [value, ...oldFacts];
    setFacts(newFacts);
  };

  const clearFacts = () => {
    const newFacts: FactVm[] = [];
    setFacts(newFacts);
  };

  React.useEffect(() => saveData('facts', facts), [facts]);
  React.useEffect(() => saveData('selectedCategory', selectedCategory), [selectedCategory]);

  return (
    <SessionContext.Provider
      value={{
        showMenu,
        updateMenuVisibility: setShowMenu,
        facts,
        addNewFact,
        clearFacts,
        selectedCategory,
        updateSelectedCategory: setSelectedCategory,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};
