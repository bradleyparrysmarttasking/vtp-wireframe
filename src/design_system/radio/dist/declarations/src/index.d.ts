/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/radios/_radios.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
 */
import type { ComponentSizeVariant } from '@govuk-react/lib';
import * as React from 'react';
/**
 * Use the radios component when users can only select one option from a list.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/radio
 * - https://design-system.service.gov.uk/components/radios/
 */
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hint?: React.ReactNode;
    inline?: boolean;
    className?: string;
    children: React.ReactNode;
    sizeVariant?: `${ComponentSizeVariant.MEDIUM}` | `${ComponentSizeVariant.SMALL}`;
}
export default Radio;
