import {
  COMPILER_OPTIONS,
  createPlatformFactory,
  Sanitizer
} from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { DOCUMENT } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';

import { NodeguiElementSchemaRegistry } from './schema-registry';
import { NodeguiSanitizer } from './sanitizer';

export const platformNodeguiDynamic = createPlatformFactory(
  platformCoreDynamic,
  'NodeguiDynamic',
  [
    { provide: DOCUMENT, useValue: {} },
    { provide: Sanitizer, useClass: NodeguiSanitizer, deps: [] },
    {
      provide: COMPILER_OPTIONS,
      useValue: {
        providers: [
          {
            provide: ElementSchemaRegistry,
            useClass: NodeguiElementSchemaRegistry,
            deps: []
          }
        ]
      },
      multi: true
    }
  ]
);
