/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/date-field
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
import { InputProps as BaseInputProps } from '@govuk-react/input';
import Input from "./input.js";
declare const StyledContainer: import("styled-components").StyledComponent<"div", any, DateFieldProps, never>;
/**
 * Use the date input component to help users enter a memorable date or one they can easily look up.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/date-field
 * - https://design-system.service.gov.uk/components/date-input/
 */
export declare const DateField: DateFieldType;
export interface DateFieldType extends React.FC<DateFieldProps> {
    Input: typeof Input;
    Container: typeof StyledContainer;
}
export interface DateFieldProps extends React.HTMLAttributes<HTMLDivElement>, WithWhiteSpaceProps {
    children: React.ReactNode;
    /**
     * Optional hint text
     */
    hintText?: string;
    /**
     * Error text
     */
    errorText?: string;
    /**
     * Input name attributes
     */
    inputNames?: {
        day?: string;
        month?: string;
        year?: string;
    };
    defaultValues?: {
        day?: string;
        month?: string;
        year?: string;
    };
    /**
     * Custom props to pass down to the input fields
     */
    inputs?: {
        day?: BaseInputProps;
        month?: BaseInputProps;
        year?: BaseInputProps;
    };
    /**
     * Properties that are sent to the input, matching final form and redux form input type
     */
    input?: {
        /**
         * Called when the day, month or year changes
         */
        onChange?: (date: {
            day: string;
            month: string;
            year: string;
        }) => unknown;
        /**
         * Called when the day, month or year fields are blurred
         * (does not get called when moving between inputs in the same datefield)
         */
        onBlur?: (date: {
            day: string;
            month: string;
            year: string;
        }) => void;
        /**
         * Called when the day, month or year fields are focussed
         * (does not get called when moving between inputs in the same datefield)
         */
        onFocus?: (date: {
            day: string;
            month: string;
            year: string;
        }) => void;
        /**
         * When the form field is controlled, this sets the value of the day, month and year inputs
         */
        value?: {
            day?: string;
            month?: string;
            year?: string;
        };
    };
}
export default DateField;
