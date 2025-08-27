/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BUILT_IN_ROLE_MODES,
  BuiltInRole,
  RoleMode,
} from '@google/gemini-cli-core';
import { CommandContext, SlashCommand, CommandKind } from './types.js';

function setRoleMode(context: CommandContext, roleMode: RoleMode) {
  const { config } = context.services;
  if (config) {
    config.setRoleMode(roleMode);
  }
  context.ui.addItem(
    {
      type: 'info',
      text: `Switched to ${roleMode.displayName}.`,
    },
    Date.now(),
  );
  context.ui.reloadCommands();
}

export const modeCommand: SlashCommand = {
  name: 'mode',
  description: 'Switch between different roles',
  kind: CommandKind.BUILT_IN,
  subCommands: [
    {
      name: 'agent',
      description: 'Switch to Agent Mode',
      kind: CommandKind.BUILT_IN,
      action: (context) => {
        setRoleMode(context, BUILT_IN_ROLE_MODES[BuiltInRole.AGENT]);
        return {
          type: 'message',
          messageType: 'info',
          content: '',
        };
      },
    },
    {
      name: 'plan',
      description: 'Switch to Plan Mode',
      kind: CommandKind.BUILT_IN,
      action: (context) => {
        setRoleMode(context, BUILT_IN_ROLE_MODES[BuiltInRole.PLAN]);
        return {
          type: 'message',
          messageType: 'info',
          content: '',
        };
      },
    },
  ],
};
