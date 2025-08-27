/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export enum BuiltInRole {
  AGENT = 'agent',
  PLAN = 'plan',
}

export interface RoleMode {
  name: BuiltInRole;
  displayName: string;
  prompt: string;
  systemPrompt?: string;
  excludeTools?: string[];
}
