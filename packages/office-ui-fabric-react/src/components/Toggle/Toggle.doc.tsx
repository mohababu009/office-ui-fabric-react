import * as React from 'react';
import { ToggleBasicExample } from './examples/Toggle.Basic.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { ToggleStatus } from './Toggle.checklist';

const ToggleBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Toggle/examples/Toggle.Basic.Example.tsx') as string;

export const TogglePageProps: IDocPageProps = {
  title: 'Toggle',
  componentName: 'Toggle',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Toggle',
  componentStatus: ToggleStatus,
  examples: [
    {
      title: 'Default Toggles',
      code: ToggleBasicExampleCode,
      view: <ToggleBasicExample />
    }
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/Toggle/Toggle.types.ts')
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Toggle/docs/ToggleOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Toggle/docs/ToggleDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Toggle/docs/ToggleDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
  nativePropsElement: 'input'
};
