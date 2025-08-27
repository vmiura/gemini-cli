/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { RoleMode } from '@google/gemini-cli-core';

export function getSystemReminder(roleMode: RoleMode): string {
  return `
<system-reminder>${roleMode.prompt}</system-reminder>

`;
}
